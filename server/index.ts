import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io'; 
import { v4 as uuidv4 } from 'uuid';

const app = express();  