const StudentForm = ({ addStudent }) => {
  return (
    <section id="formContainer">
      <form id="studentForm" onSubmit={(e) => {
        e.preventDefault();

        addStudent(
          e.target.name.value,
          e.target.program.value
        );

        e.target.reset();
      }}>

        <div className="input-fields">
          <label htmlFor="name">Student Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="input-fields">
          <label htmlFor="program">Program</label>
          <input type="text" name="program" id="program" />
        </div>

        <div>
          <button type="submit">Add Student</button>
        </div>

      </form>
    </section>
  );
};

export default StudentForm;