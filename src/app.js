import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import postsRoutes from './routes/postsRoute.js';
import projectRoutes from './routes/projects.js';
import commentsRoutes from './routes/comments.js';
import employeeRoutes from './routes/employeeRoute.js';
import uploadRoutes from './routes/uploadRoutes.js';

const app = express();

app.use(
  cors({
    origin: [
      "https://ai-incident-frontend.vercel.app",
      "http://localhost:3000",
    ],
   
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", postsRoutes);
app.use("/api", projectRoutes);
app.use("/api", commentsRoutes);
app.use("/api", employeeRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default app;