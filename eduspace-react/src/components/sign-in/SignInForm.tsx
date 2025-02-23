import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth"; // Import useAuth


const SignIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth(); // Use global auth state

  return (
   <>
  <div>
      {!isAuthenticated ? (
        <GoogleLogin
          onSuccess={(credentialResponse: CredentialResponse) => {
            if (credentialResponse.credential) {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log("Decoded:", decoded);

              login(credentialResponse.credential); // Update global state
              navigate("/", { replace: true }); // Redirect immediately
            } else {
              console.log("No credential received");
            }
          }}
          onError={() => console.log("Login failed")}
        />
      ) : (
        <button onClick={logout} className="theme-btn style-2">
          <i className="far fa-sign-out"></i> Logout
        </button>
      )}
    </div>
   </>
  
  );
};

export default SignIn;
