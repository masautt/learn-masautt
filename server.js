import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const siteDir = path.join(__dirname, "_site");

app.use(express.static(siteDir, { extensions: ["html"] }));

app.listen(port, () => {
  console.log(`Serving _site on port ${port}`);
});
