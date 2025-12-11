// src/utils/verifyUserRole.js

const verifyUserRole = (user, requiredRole) => {
  if (!user || !user.role) return false;

  if (requiredRole === "admin") return user.role === "admin";
  if (requiredRole === "decorator") return user.role === "decorator";
  if (requiredRole === "user") return user.role === "user";

  return false;
};

export default verifyUserRole;
