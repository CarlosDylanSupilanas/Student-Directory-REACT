const StudentList = ({ students }) => {
  return (
    <section id="studentList">

      {students.map((student, index) => (
        <article className="list-item" key={index}>
          <h2>{student.name}</h2>
          <p>{student.program}</p>
        </article>
      ))}

    </section>
  );
};

export default StudentList;