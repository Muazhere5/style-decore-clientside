import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RevenueAnalytics = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/analytics/revenue").then(res => setData(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Revenue Analytics</h2>

      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month"/>
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#2563eb" />
      </BarChart>
    </div>
  );
};

export default RevenueAnalytics;
