import { FaHeart, FaUser, FaUserPlus } from "react-icons/fa6";

function Navbar({ onSignIn, onRegister }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="MilanSaathi home">
        <span className="brand-mark">
          <FaHeart />
        </span>
        <span>MilanSaathi</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#how">How it work</a>
        <a href="#why">Why</a>
        <a href="#review">Review</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact us</a>
      </nav>

      <div className="nav-actions">
        <button className="login-button secondary" type="button" onClick={onSignIn}>
          <FaUser />
          Login
        </button>
        <button className="login-button" type="button" onClick={onRegister}>
          <FaUserPlus />
          Register
        </button>
      </div>
    </header>
  );
}

export default Navbar;
