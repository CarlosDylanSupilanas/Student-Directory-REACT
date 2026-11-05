import { useState } from "react";

import HeaderContainer from "./components/HeaderContainer.jsx";
import StudentForm from "./components/StudentForm.jsx";
import StudentList from "./components/StudentList.jsx";

import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const addStudent = (name, program) => {
    setStudents([...students, { name, program }]);
  };

  return (
    <div>
      <HeaderContainer />

      <StudentForm addStudent={addStudent} />

      <StudentList students={students} />
    </div>
  );
}

export default App;