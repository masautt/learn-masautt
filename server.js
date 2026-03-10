import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const siteDir = path.join(__dirname, "_site");

// Site password (from env variable or default)
const SITE_PASSWORD = process.env.AUTH_PASSWORD || 'password123';

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Parse JSON bodies
app.use(express.json());

// Login page route
app.get('/login', (req, res) => {
  if (req.session.authenticated) {
    return res.redirect('/');
  }
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Login POST endpoint
app.post('/login', (req, res) => {
  const { password } = req.body;
  
  if (password === SITE_PASSWORD) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid password' });
  }
});

// Logout endpoint
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Authentication middleware
app.use((req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    res.redirect('/login');
  }
});

// Serve static site
app.use(express.static(siteDir, { extensions: ["html"] }));

app.listen(port, () => {
  console.log(`Serving _site on port ${port}`);
});
