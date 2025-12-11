import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const TodaySchedule = () => {
  const axiosSecure = useAxiosSecure();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axiosSecure.get("/decorator/today").then(res => setSchedule(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>

      {schedule.length === 0 ? (
        <p>No tasks today</p>
      ) : (
        schedule.map(s => (
          <div key={s._id} className="bg-base-200 p-4 rounded-lg mb-3">
            <p><strong>Client:</strong> {s.user}</p>
            <p><strong>Task:</strong> {s.serviceName}</p>
            <p><strong>Time:</strong> {s.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TodaySchedule;
