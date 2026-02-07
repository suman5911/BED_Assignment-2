import express, { Express } from "express";
import morgan from "morgan";
import healthRoutes from "./api/v1/routes/healthRoutes";

const app: Express = express();

// Use Morgan for HTTP request logging
app.use(morgan("combined"));

// Parse JSON bodies
app.use(express.json());
app.use("/api/v1", healthRoutes);

// Export the app
export default app;