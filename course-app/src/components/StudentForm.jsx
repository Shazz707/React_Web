import { useState } from "react";

function StudentForm() {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", studentName, courseName);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student Name:
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </label>

      <label>
        Course Name:
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>

      {submitted && (
        <p>
          Thank you, {studentName}! You entered the course: {courseName}.
        </p>
      )}
    </form>
  );
}

export default StudentForm;
