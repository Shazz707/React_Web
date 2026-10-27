function CourseCard({ name, title, description, duration, onSelect }) {
  return (
    <div className="card">
      {/* Part a: data comes in through props */}
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <p><b>Duration:</b> {duration}</p>

      {/* Part b: Select Course button */}
      <button onClick={onSelect}>Select Course</button>
    </div>
  );
}

export default CourseCard;
