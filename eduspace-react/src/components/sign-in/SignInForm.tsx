import axios from "axios";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const SignIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      console.log("No credential received");
      return;
    }

    // Decode the Google token
    const decoded: any = jwtDecode(credentialResponse.credential);
    console.log("Decoded Google User:", decoded);

    // Extract relevant user data
    const userData = {
     "user_name": decoded.name,
      "email": decoded.email,
      "is_activate": true
    };
    try {
      console.log("🚀 Sending Data:", userData);
    
      const response = await axios.post(
        "https://tamraversity-backend.lamzingtech.com/api/auth/google/",  // ✅ Ensure this is correct
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    
      console.log("✅ User registered:", response.data);
      login(credentialResponse.credential);
      navigate("/", { replace: true });
    
    } catch (error: any) {
      console.error("❌ Error registering user:", error.message);
      console.error("🛑 Full error response:", error.response?.data || error);
    }
    
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh" }}>
      <div
        style={{
          marginBottom: "10vh",
          width: "50vh",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #1e3c72, #2a5298)",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.25)",
        }}
      >
        {!isAuthenticated ? (
          <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.log("Login failed")} />
        ) : (
          <button
            onClick={logout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8vh",
              padding: "12px 24px",
              color: "white",
              backgroundColor: "#d9534f",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background 0.3s ease-in-out",
            }}
            onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c9302c")}
            onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d9534f")}
          >
            <i className="fa-solid fa-arrow-left-to-bracket"></i> Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default SignIn;
