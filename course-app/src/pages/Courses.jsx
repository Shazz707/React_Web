import { useState } from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    name: "CS101",
    title: "Intro to Programming",
    description: "Learn programming basics with Python",
    duration: "8 weeks",
  },
  {
    id: 2,
    name: "WD201",
    title: "Web Development",
    description: "Build websites with HTML, CSS and JavaScript",
    duration: "10 weeks",
  },
  {
    id: 3,
    name: "DB301",
    title: "Databases",
    description: "Learn SQL and database design",
    duration: "6 weeks",
  },
];

function Courses() {
  // Part b: state to remember the selected course
  const [selectedCourse, setSelectedCourse] = useState(null);

  function handleSelect(course) {
    setSelectedCourse(course);
    console.log("Selected course:", course);
  }

  return (
    <div>
      <h2>Available Courses</h2>

      {/* Part c: conditional rendering */}
      {selectedCourse ? (
        <p className="message">Selected course: {selectedCourse.name}</p>
      ) : (
        <p className="message">
          Please select a course to view the course name.
        </p>
      )}

      <div className="card-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            name={course.name}
            title={course.title}
            description={course.description}
            duration={course.duration}
            onSelect={() => handleSelect(course)}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
