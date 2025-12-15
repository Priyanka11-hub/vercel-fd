import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="form-box fade-in">
        <h2>🎨 Welcome to Sketching Events</h2>
        <p className="subtitle">
          Unleash creativity • Participate • Get recognized ✏️🌿
        </p>

        <div style={{ marginTop: "20px" }}>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
