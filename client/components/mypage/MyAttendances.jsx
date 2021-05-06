import React from "react";

const MyAttendances = ({ attendances }) => {
  console.log(attendances);

  const setMyAttendanceColor = (status) => {
    switch (status) {
      case 0:
        return "bg-gray-200";
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-yellow-400";
      case 3:
        return "bg-red-600";
      default:
        return "bg-gray-200";
    }
  };
  return (
    <section className="w-full h-1/2 flex flex-col items-center p-2">
      <h1 className="Montserrat flex-1 mb-2">Attendances</h1>
      <div className="bg-white h-full w-full shadow-md flex flex-wrap justify-center items-center">
        {attendances.map((attendance) => (
          <div
            className={`w-6 h-6 ${setMyAttendanceColor(
              attendance.status
            )} rounded-full mx-3`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default MyAttendances;
