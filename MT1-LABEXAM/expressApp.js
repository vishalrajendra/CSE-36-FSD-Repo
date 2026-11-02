import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

const students = [
  { id: 1, name: "Rahul Sharma", rollNumber: "2026001", branch: "CSE" },
  { id: 2, name: "Priya Verma", rollNumber: "2026002", branch: "IT" },
  { id: 3, name: "Aman Gupta", rollNumber: "2026003", branch: "ECE" }
];

function validateStudent(student) {
  return student &&
    student.id !== undefined &&
    typeof student.name === "string" && student.name.trim() !== "" &&
    typeof student.rollNumber === "string" && student.rollNumber.trim() !== "" &&
    typeof student.branch === "string" && student.branch.trim() !== "";
}


app.get("/students", (req, res) => { //! GET all students
  res.status(200).json(students);
});


app.get("/students/:id", (req, res) => { // !GET one student by ID
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found." });
  }
  return res.status(200).json(student);
});


app.post("/students", (req, res) => {  //? CREATE a student
  const newStudent = req.body;

  if (!validateStudent(newStudent)) {
    return res.status(400).json({
      error: "Valid id, name, rollNumber and branch are required."
    });
  }

  if (students.some((item) => item.id === Number(newStudent.id))) {
    return res.status(409).json({ error: "Student ID already exists." });
  }

  const student = {

    id: Number(newStudent.id),
    name: newStudent.name.trim(),
    rollNumber: newStudent.rollNumber.trim(),
    branch: newStudent.branch.trim()
  };

  students.push(student);
  return res.status(201).json({
    message: "Student added successfully",
    student
  });
});


app.put("/students/:id", (req, res) => { //! update a student
  const id = Number(req.params.id);
  const index = students.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found." });
  }

  const { name, rollNumber, branch } = req.body ?? {};
  if (
    (name !== undefined && (typeof name !== "string" || !name.trim())) ||
    (rollNumber !== undefined && (typeof rollNumber !== "string" || !rollNumber.trim())) ||
    (branch !== undefined && (typeof branch !== "string" || !branch.trim()))
  ) {
    return res.status(400).json({ error: "Provided student fields must be non-empty strings." });
  }

  students[index] = {
    ...students[index],
    ...(name !== undefined && { name: name.trim() }),
    ...(rollNumber !== undefined && { rollNumber: rollNumber.trim() }),
    ...(branch !== undefined && { branch: branch.trim() })
  };

  return res.status(200).json({
    message: "Student updated successfully",
    student: students[index]
  });
});

// DELETE a student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found." });
  }

  const deletedStudent = students.splice(index, 1)[0];
  return res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});


app.use((err, req, res, next) => {  //!Handle malformed JSON and other Express errors
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON request body." });
  }
  console.error(err);
  return res.status(500).json({ error: "Internal server error." });
});


app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});
