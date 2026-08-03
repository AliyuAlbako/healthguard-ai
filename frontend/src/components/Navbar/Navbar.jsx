import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import "../../styles/Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <FaHeartbeat className="logo-icon" />
        <div>
          <h2>HealthGuard AI</h2>
          <span>Prevent. Predict. Protect.</span>
        </div>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/assessment">Assessment</Link>
      </nav>

      <Link to="/assessment" className="cta-btn">
        Start Assessment
      </Link>
    </header>
  );
}