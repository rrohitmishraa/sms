import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import Attendance from "./components/Attendance";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigation = (active: string): any => {
    setCurrentPage(active);
    return active;
  };

  return (
    <div className="bg-thebg min-h-screen w-full p-[18px] pl-0 flex">
      <div className="w-3/12 py-7 px-7">
        <div className="flex justify-start items-center">
          <img src="./images/student.png" className="h-10 mr-3" alt="" />
          <Link
            to="/"
            className="text-5xl font-bold"
            onClick={() => handleNavigation("dashboard")}
          >
            SMS
          </Link>
        </div>

        <nav className="mt-10 flex flex-col w-full">
          <Link
            to="/dashboard"
            className={`link group ${
              currentPage === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleNavigation("dashboard")}
          >
            <img
              src="./images/dashboard.png"
              className={`h-6 mr-3 group-hover:invert ${
                currentPage === "dashboard" ? "invert" : ""
              }`}
              alt=""
            />
            <span className="group-hover:text-white">Dashboard</span>
          </Link>

          <Link
            className={`link group ${
              currentPage === "attendance" ? "active" : ""
            }`}
            to="attendance"
            onClick={() => handleNavigation("attendance")}
          >
            <img
              src="./images/attendance.png"
              className={`h-6 mr-3 group-hover:invert ${
                currentPage === "attendance" ? "invert" : ""
              }`}
              alt=""
            />
            <span className="group-hover:text-white">Attendance</span>
          </Link>

          <Link
            className={`link group ${
              currentPage === "addstudent" ? "active" : ""
            }`}
            to="addstudent"
            onClick={() => handleNavigation("addstudent")}
          >
            <img
              src="./images/addstudent.png"
              className={`h-6 mr-3 group-hover:invert ${
                currentPage === "addstudent" ? "invert" : ""
              }`}
              alt=""
            />
            <span className="group-hover:text-white">Add Student</span>
          </Link>
        </nav>
      </div>

      <div className="w-9/12 bg-white rounded-2xl p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
