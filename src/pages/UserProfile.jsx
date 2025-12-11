import useAuth from "../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-semibold mb-4">My Profile</h1>

      <div className="space-y-3">
        <p><strong>Name:</strong> {user?.displayName}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
