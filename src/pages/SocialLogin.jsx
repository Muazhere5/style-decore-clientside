import React from "react";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  return (
    <button className="btn btn-outline w-full mt-3" onClick={googleSignIn}>
      Continue with Google
    </button>
  );
};

export default SocialLogin;
