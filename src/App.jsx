import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaCircleCheck,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaShieldHeart,
  FaStar,
  FaUserGroup,
  FaXmark,
} from "react-icons/fa6";
import "./App.css";

const ageOptions = Array.from({ length: 43 }, (_, index) => 18 + index);

const steps = [
  {
    title: "Create your profile",
    description: "Add basic details, photos, family preferences, and partner expectations.",
  },
  {
    title: "Get smart matches",
    description: "See compatible profiles based on age, city, religion, education, and lifestyle.",
  },
  {
    title: "Connect safely",
    description: "Shortlist, chat, and move ahead only when both sides are comfortable.",
  },
];

const reasons = [
  {
    title: "Verified members",
    description: "Profiles are checked so families can begin conversations with more confidence.",
    icon: FaCircleCheck,
  },
  {
    title: "Privacy controls",
    description: "Choose when to reveal photos, phone number, and detailed family information.",
    icon: FaShieldHeart,
  },
  {
    title: "Family friendly",
    description: "A calm experience for parents and candidates who want serious conversations.",
    icon: FaUserGroup,
  },
];

const reviews = [
  {
    name: "Priya & Arjun",
    text: "The filters were simple and the profile details were clear. Our families connected in the first week.",
  },
  {
    name: "Neha's parents",
    text: "We liked the privacy controls. It felt respectful, serious, and easy for the whole family.",
  },
  {
    name: "Sameer",
    text: "Registration was quick and the suggested matches were relevant from day one.",
  },
];

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const openModal = (type) => {
    setToastMessage("");
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleAuthSubmit = (event, type) => {
    event.preventDefault();
    setToastMessage(
      type === "signin"
        ? "Login successful. Welcome back to MilanSaathi."
        : type === "forgot"
          ? "Password reset link sent to your registered email or mobile."
          : "Register successful. Your profile setup can start now.",
    );
  };

  return (
    <div className="app-shell">
      <Navbar onSignIn={() => openModal("signin")} onRegister={() => openModal("register")} />
      {toastMessage && (
        <div className="top-toast" role="status">
          <span className="toast-icon">
            <FaCheck />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
      <main>
        <section className="hero-section" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Trusted matrimony and matchmaking</p>
            <h1>Find a partner your family can believe in.</h1>
            <p className="hero-copy">
              Meet serious, verified matches with a calm search experience built for modern Indian families.
            </p>

            <form className="match-form" aria-label="Find a match" onSubmit={(event) => event.preventDefault()}>
              <label>
                I am looking for
                <select defaultValue="Bride">
                  <option>Bride</option>
                  <option>Groom</option>
                </select>
              </label>

              <label>
                Age from
                <select defaultValue="24">
                  {ageOptions.map((age) => (
                    <option key={age}>{age}</option>
                  ))}
                </select>
              </label>

              <label>
                Age to
                <select defaultValue="31">
                  {ageOptions.map((age) => (
                    <option key={age}>{age}</option>
                  ))}
                </select>
              </label>

              <label>
                Religion
                <select defaultValue="Any">
                  <option>Any</option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Sikh</option>
                  <option>Christian</option>
                  <option>Jain</option>
                </select>
              </label>

              <button type="submit">Find Matches</button>
            </form>
          </div>

          <div className="trust-bar">
            <span>#1 family-first experience</span>
            <span>2 lakh+ verified members</span>
            <span>80k success stories</span>
          </div>
        </section>

        <section className="section" id="how">
          <div className="section-heading">
            <p className="eyebrow">How it work</p>
            <h2>Start simple, then meet families who match your values.</h2>
          </div>

          <div className="feature-grid">
            {steps.map((step, index) => (
              <article className="feature-card step-card" key={step.title}>
                <span className="feature-icon">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted-section" id="why">
          <div className="section-heading">
            <p className="eyebrow">Why choose us</p>
            <h2>A safer, cleaner way to search for a life partner.</h2>
          </div>

          <div className="feature-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="feature-card" key={reason.title}>
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="review">
          <div className="section-heading">
            <p className="eyebrow">Review</p>
            <h2>Families trust us for serious matchmaking.</h2>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="5 star review">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p>{review.text}</p>
                <h3>{review.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section muted-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About us</p>
            <h2>Built for people who want marriage, not endless browsing.</h2>
          </div>
          <div className="about-panel">
            <p>
              MilanSaathi is a modern matrimonial platform concept for verified profiles, family-friendly
              introductions, and respectful conversations. The goal is to keep matchmaking focused,
              transparent, and comfortable for both candidates and parents.
            </p>
            <ul>
              <li>
                <FaCheck /> Human-friendly profile details
              </li>
              <li>
                <FaCheck /> Preference-based match discovery
              </li>
              <li>
                <FaCheck /> Clear steps from shortlist to conversation
              </li>
            </ul>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact us</p>
            <h2>Need help finding the right match?</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <p>
                <FaPhone /> +91 98765 43210
              </p>
              <p>
                <FaEnvelope /> support@milansaathi.com
              </p>
              <p>
                <FaLocationDot /> Mumbai, India
              </p>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <input type="text" placeholder="Your name" aria-label="Your name" />
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <textarea placeholder="How can we help?" aria-label="How can we help?" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {activeModal && (
        <div className="modal-backdrop" role="presentation" onClick={closeModal}>
          <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={closeModal} aria-label="Close">
              <FaXmark />
            </button>
            {activeModal === "signin" ? (
              <>
                <p className="eyebrow">Welcome back</p>
                <h2 id="auth-title">Login to your account</h2>
                <form className="auth-form" onSubmit={(event) => handleAuthSubmit(event, "signin")}>
                  <input type="email" placeholder="Email or mobile number" aria-label="Email or mobile number" />
                  <input type="password" placeholder="Password" aria-label="Password" />
                  <button type="submit">Login</button>
                </form>
                <button className="text-button" type="button" onClick={() => openModal("forgot")}>
                  Forgot password?
                </button>
                <p className="auth-note">You can reset it with your registered email or mobile number.</p>
              </>
            ) : activeModal === "forgot" ? (
              <>
                <p className="eyebrow">Account recovery</p>
                <h2 id="auth-title">Reset your password</h2>
                <form className="auth-form" onSubmit={(event) => handleAuthSubmit(event, "forgot")}>
                  <input type="email" placeholder="Email or mobile number" aria-label="Email or mobile number" />
                  <button type="submit">Send Reset Link</button>
                </form>
                <button className="text-button" type="button" onClick={() => openModal("signin")}>
                  Back to login
                </button>
                <p className="auth-note">We will send a secure reset link if the account exists.</p>
              </>
            ) : (
              <>
                <p className="eyebrow">Create profile</p>
                <h2 id="auth-title">Register free</h2>
                <form className="auth-form" onSubmit={(event) => handleAuthSubmit(event, "register")}>
                  <input type="text" placeholder="Full name" aria-label="Full name" />
                  <input type="email" placeholder="Email address" aria-label="Email address" />
                  <select defaultValue="" aria-label="Profile for">
                    <option value="" disabled>
                      Profile for
                    </option>
                    <option>Self</option>
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Sibling</option>
                  </select>
                  <input type="password" placeholder="Create password" aria-label="Create password" />
                  <button type="submit">Register</button>
                </form>
                <p className="auth-note">After registration, users can add photos, preferences, and family details.</p>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
