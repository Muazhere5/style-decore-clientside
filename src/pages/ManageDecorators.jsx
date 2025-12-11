import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageDecorators = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users").then(res => setUsers(res.data));
  }, []);

  const makeDecorator = async (id) => {
    await axiosSecure.patch(`/users/make-decorator/${id}`);
    setUsers(users.map(u => u._id === id ? { ...u, role: "decorator" } : u));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Decorators</h2>

      <table className="table w-full">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Role</th><th>Action</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                {u.role !== "decorator" && (
                  <button className="btn btn-sm btn-primary" onClick={() => makeDecorator(u._id)}>
                    Make Decorator
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDecorators;
