# MT1-LABEXAM — Student Management Application

A student management application demonstrating the Node.js HTTP module, FS module,
routing, HTTP methods and Express REST APIs.

## Project structure

```text
MT1-LABEXAM/
├── package.json
├── package-lock.json
├── httpServer.js
├── expressApp.js
├── public/
│   └── static.html
└── screenshots/
```

## Requirements

Install Node.js (LTS), then open this folder in VS Code.

## Installation

```bash
npm install
```

## Run Part A — built-in HTTP + FS

```bash
node httpServer.js
```

Open:
- http://localhost:3000/
- http://localhost:3000/students
- http://localhost:3000/about
- http://localhost:3000/static

POST `http://localhost:3000/add-student` with JSON:

```json
{
  "id": 4,
  "name": "Amit Kumar",
  "rollNumber": "2026004",
  "branch": "CSE"
}
```

## Run Part B — Express REST API

Open a second terminal:

```bash
node expressApp.js
```

The API listens on port 4000.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/1` | Get student with ID 1 |
| POST | `/students` | Create a student |
| PUT | `/students/1` | Update student with ID 1 |
| DELETE | `/students/1` | Delete student with ID 1 |

For POST, choose Body → raw → JSON in Postman:

```json
{
  "id": 4,
  "name": "Amit Kumar",
  "rollNumber": "2026004",
  "branch": "CSE"
}
```

For PUT, send the fields to update, for example:

```json
{
  "name": "Rahul Updated",
  "branch": "CSE"
}
```

Records are stored in in-memory arrays. Restarting either server resets its data.
The two applications run independently.

## GitHub submission

Create a GitHub repository named `MT1-LABEXAM`. From this project folder:

```bash
git init
git add .
git commit -m "Initial commit: set up student management project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/MT1-LABEXAM.git
git push -u origin main
```

After completing and testing each part, commit your changes with meaningful messages, e.g.:

```bash
git add .
git commit -m "Add Node HTTP routes and FS static file serving"
git push

git add .
git commit -m "Implement Express student CRUD REST API"
git push

git add screenshots/
git commit -m "Add application and Postman demonstration screenshots"
git push
```

Replace `YOUR-USERNAME` with your GitHub username. Do not commit `node_modules/`.

## Screenshots to capture

Save your own screenshots inside `screenshots/`:
1. HTTP server terminal showing port 3000.
2. Browser showing `/`, `/students`, `/about`.
3. Browser showing `/static` (FS static-file demonstration).
4. Express server terminal showing port 4000.
5. Postman GET all and GET by ID.
6. Postman POST, PUT and DELETE responses.
7. GitHub repository showing the project and commit history.
