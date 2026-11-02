import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const students = [
  { id: 1, name: "Rahul Sharma", rollNumber: "2026001", branch: "CSE" },
  { id: 2, name: "Priya Verma", rollNumber: "2026002", branch: "IT" },
  { id: 3, name: "Aman Gupta", rollNumber: "2026003", branch: "ECE" }
];

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data, null, 2));
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(message);
}

async function readRequestBody(req) {
  let body = "";
  for await (const chunk of req) body += chunk;
  return JSON.parse(body);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname } = url;

  try {
    if (req.method === "GET" && pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Management</title></head>
<body>
  <h1>Welcome to the Student Management Application</h1>
  <p>Node.js HTTP server is running successfully on port 3000.</p>
  <p>Visit <a href="/students">/students</a>, <a href="/about">/about</a> or <a href="/static">/static</a>.</p>
</body></html>`);
      return;
    }

    if (req.method === "GET" && pathname === "/students") {
      sendJson(res, 200, students);
      return;
    }

    if (req.method === "POST" && pathname === "/add-student") {
      let student;
      try {
        student = await readRequestBody(req);
      } catch {
        sendJson(res, 400, { error: "Invalid JSON request body." });
        return;
      }

      const { id, name, rollNumber, branch } = student ?? {};
      if (id === undefined || !name || !rollNumber || !branch) {
        sendJson(res, 400, {
          error: "Required fields: id, name, rollNumber and branch."
        });
        return;
      }
      if (students.some((item) => item.id === id)) {
        sendJson(res, 409, { error: "A student with this ID already exists." });
        return;
      }

      const newStudent = { id, name, rollNumber, branch };
      students.push(newStudent);
      sendJson(res, 201, {
        message: "Student added successfully",
        student: newStudent
      });
      return;
    }

    if (req.method === "GET" && pathname === "/about") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>About</h1><p>This application demonstrates Node.js HTTP routing, JSON requests and the FS module.</p>");
      return;
    }

    
    if (req.method === "GET" && pathname === "/static") { //!Demonstrates serving a real static HTML file with the built-in FS module.
      try {
        const html = await readFile(path.join(__dirname, "public", "static.html"), "utf8");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(html);
      } catch (error) {
        console.error("Static file error:", error);
        sendText(res, 500, "Unable to load the static file.");
      }
      return;
    }

    sendJson(res, 404, { error: "Route not found." });
  } catch (error) {
    console.error("Request error:", error);
    sendJson(res, 500, { error: "Internal server error." });
  }
});

server.listen(PORT, () => {
  console.log(`HTTP Server running at http://localhost:${PORT}`);
});
