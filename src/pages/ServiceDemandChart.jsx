import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ServiceDemandChart = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/analytics/demand").then(res => setData(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Service Demand</h2>

      <PieChart width={500} height={400}>
        <Pie data={data} dataKey="count" nameKey="service" outerRadius={120} fill="#9333ea" />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ServiceDemandChart;
