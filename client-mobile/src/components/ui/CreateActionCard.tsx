import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    StyleProp,
    ViewStyle,
    Modal,
    TextInput,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
    // Card content
    title: string;
    description: string;
    eyebrow?: string;
    helperText?: string;
    image?: ImageSourcePropType;
    iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];

    // Modal content
    modalTitle?: string;
    titleLabel?: string;
    titlePlaceholder?: string;
    descriptionLabel?: string;
    descriptionPlaceholder?: string;
    titleMaxLength?: number;
    descriptionMaxLength?: number;
    submitText?: string;

    // Theming
    accentColor?: string;
    buttonText?: string;

    // Callbacks
    onCreate?: (title: string, description: string) => void | Promise<void>;

    // Layout
    style?: StyleProp<ViewStyle>;
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreateActionCard({
    title,
    description,
    eyebrow = "Quick Action",
    helperText = "Reusable shortcut",
    image,
    iconName = "shape-plus-outline",

    modalTitle,
    titleLabel = "Title",
    titlePlaceholder = "Enter a title",
    descriptionLabel = "Description",
    descriptionPlaceholder = "Add a short description",
    titleMaxLength = 40,
    descriptionMaxLength = 120,
    submitText = "Create",

    accentColor = "#C8FF4D",
    buttonText = "Create",

    onCreate,
    style,
}: Props) {
    const [showModal, setShowModal] = useState(false);
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [loading, setLoading] = useState(false);

    // ── Helpers ───────────────────────────────────────────────────────────────

    const resetForm = () => {
        setTitleValue("");
        setDescriptionValue("");
    };

    const closeModal = () => {
        if (loading) return;
        resetForm();
        setShowModal(false);
    };

    const handleCreate = async () => {
        if (!titleValue.trim()) {
            Alert.alert("Required", `Please enter a ${titleLabel.toLowerCase()}.`);
            return;
        }

        try {
            setLoading(true);
            await onCreate?.(titleValue.trim(), descriptionValue.trim());
            resetForm();
            setShowModal(false);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.";
            Alert.alert("Error", message);
        } finally {
            setLoading(false);
        }
    };

    // ── Render ────────────────────────────────────────────────────────────────

    return (
        <>
            {/* ── Card ── */}
            <View style={[styles.card, style]}>
                <View style={styles.topRow}>
                    <View style={[styles.graphicWrap, { backgroundColor: accentColor }]}>
                        {image ? (
                            <Image source={image} style={styles.image} resizeMode="contain" />
                        ) : (
                            <MaterialCommunityIcons name={iconName} size={30} color="#051008" />
                        )}
                    </View>

                    <View style={styles.copyWrap}>
                        <Text style={styles.eyebrow}>{eyebrow}</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.helperChip}>
                        <Ionicons name="flash" size={14} color={accentColor} />
                        <Text style={[styles.helperText, { color: accentColor }]}>
                            {helperText}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: accentColor }]}
                        onPress={() => setShowModal(true)}
                        activeOpacity={0.75}
                    >
                        <Ionicons name="add" size={18} color="#041007" />
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ── Modal ── */}
            <Modal
                visible={showModal}
                transparent
                animationType="fade"
                onRequestClose={closeModal}
                statusBarTranslucent
            >
                <KeyboardAvoidingView
                    style={modalStyles.keyboardAvoid}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TouchableOpacity
                        style={modalStyles.overlay}
                        activeOpacity={1}
                        onPress={closeModal}
                    >
                        <TouchableOpacity
                            activeOpacity={1}
                            style={modalStyles.container}
                            onPress={(e) => e.stopPropagation()}
                        >
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                bounces={false}
                                keyboardShouldPersistTaps="handled"
                            >
                                {/* Header */}
                                <View style={modalStyles.header}>
                                    <View style={[modalStyles.headerIcon, { backgroundColor: accentColor }]}>
                                        <MaterialCommunityIcons name={iconName} size={20} color="#051008" />
                                    </View>
                                    <Text style={modalStyles.headerTitle}>
                                        {modalTitle ?? `Create ${title}`}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={closeModal}
                                        disabled={loading}
                                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                        style={modalStyles.closeBtn}
                                    >
                                        <Ionicons name="close" size={22} color="#8EA0BF" />
                                    </TouchableOpacity>
                                </View>

                                <View style={modalStyles.divider} />

                                {/* Form */}
                                <View style={modalStyles.form}>
                                    {/* Title field */}
                                    <View style={modalStyles.formGroup}>
                                        <View style={modalStyles.labelRow}>
                                            <Text style={modalStyles.label}>{titleLabel}</Text>
                                            <Text style={modalStyles.charCount}>
                                                {titleValue.length}/{titleMaxLength}
                                            </Text>
                                        </View>
                                        <TextInput
                                            style={modalStyles.input}
                                            placeholder={titlePlaceholder}
                                            placeholderTextColor="#4A5568"
                                            value={titleValue}
                                            onChangeText={setTitleValue}
                                            editable={!loading}
                                            maxLength={titleMaxLength}
                                            returnKeyType="next"
                                            autoFocus
                                        />
                                    </View>

                                    {/* Description field */}
                                    <View style={modalStyles.formGroup}>
                                        <View style={modalStyles.labelRow}>
                                            <Text style={modalStyles.label}>{descriptionLabel}</Text>
                                            <Text style={modalStyles.charCount}>
                                                {descriptionValue.length}/{descriptionMaxLength}
                                            </Text>
                                        </View>
                                        <TextInput
                                            style={[modalStyles.input, modalStyles.descriptionInput]}
                                            placeholder={descriptionPlaceholder}
                                            placeholderTextColor="#4A5568"
                                            value={descriptionValue}
                                            onChangeText={setDescriptionValue}
                                            editable={!loading}
                                            maxLength={descriptionMaxLength}
                                            multiline
                                            textAlignVertical="top"
                                            returnKeyType="done"
                                            blurOnSubmit
                                        />
                                    </View>
                                </View>

                                {/* Actions */}
                                <View style={modalStyles.buttonGroup}>
                                    <TouchableOpacity
                                        style={modalStyles.cancelBtn}
                                        onPress={closeModal}
                                        disabled={loading}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={modalStyles.cancelText}>Cancel</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[modalStyles.submitBtn, { backgroundColor: accentColor }]}
                                        onPress={handleCreate}
                                        disabled={loading}
                                        activeOpacity={0.8}
                                    >
                                        {loading ? (
                                            <ActivityIndicator color="#051008" size="small" />
                                        ) : (
                                            <Text style={modalStyles.submitText}>{submitText}</Text>
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
}

// ─── Card Styles ──────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#081324",
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "#1A2C49",
        marginBottom: 18,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        marginBottom: 18,
    },
    graphicWrap: {
        width: 68,
        height: 68,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 42,
        height: 42,
    },
    copyWrap: {
        flex: 1,
    },
    eyebrow: {
        color: "#8EA0BF",
        fontSize: 11,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 0.8,
        marginBottom: 4,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "900",
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: "#A4AFC5",
        lineHeight: 19,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
    },
    helperChip: {
        flex: 1,
        minHeight: 42,
        borderRadius: 14,
        backgroundColor: "#101C31",
        borderWidth: 1,
        borderColor: "#1A2C49",
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    helperText: {
        marginLeft: 6,
        fontSize: 11,
        fontWeight: "700",
    },
    button: {
        height: 48,
        minWidth: 100,
        paddingHorizontal: 16,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    },
    buttonText: {
        marginLeft: 6,
        fontSize: 14,
        color: "#061008",
        fontWeight: "800",
    },
});

// ─── Modal Styles ─────────────────────────────────────────────────────────────

const modalStyles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.75)",
        justifyContent: "flex-end",
    },
    container: {
        backgroundColor: "#081324",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderWidth: 1,
        borderColor: "#1A2C49",
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 40,
        maxHeight: "90%",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 20,
    },
    headerIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: "800",
        color: "#fff",
    },
    closeBtn: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#101C31",
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        height: 1,
        backgroundColor: "#1A2C49",
        marginBottom: 24,
    },
    form: {
        gap: 20,
        marginBottom: 28,
    },
    formGroup: {
        gap: 8,
    },
    labelRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        fontSize: 13,
        fontWeight: "600",
        color: "#8EA0BF",
        textTransform: "uppercase",
        letterSpacing: 0.6,
    },
    charCount: {
        fontSize: 12,
        color: "#4A5568",
    },
    input: {
        backgroundColor: "#0D1B2E",
        borderWidth: 1.5,
        borderColor: "#1A2C49",
        borderRadius: 14,
        height: 50,
        paddingHorizontal: 16,
        color: "#E8EDF3",
        fontSize: 15,
    },
    descriptionInput: {
        height: undefined,
        minHeight: 100,
        paddingTop: 14,
        paddingBottom: 14,
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 12,
    },
    cancelBtn: {
        flex: 1,
        height: 50,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#1A2C49",
        backgroundColor: "transparent",
    },
    submitBtn: {
        flex: 1,
        height: 50,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#8EA0BF",
    },
    submitText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#051008",
    },
});