import express, { Application } from "express";
import 'dotenv/config';
import http from 'http';
import cors from 'cors';
import { setupSocketIO } from "./controller/socket";

class App {
    public app: Application;
    public server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;

    constructor() {
        this.app = express()
        this.server = http.createServer(this.app);
        this.applyMiddleware()
        setupSocketIO(this.server)
    }

    private applyMiddleware(): void {
        this.app.use(cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        }));
    }

    public startServer(port: number): void {
        this.server.listen(port, () => {
            console.log(`Notification-Service started on ${port}`);
        })
    }
}

export default App