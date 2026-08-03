import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImage from "../../assets/images/hero-image.png";

import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-text"
        initial={{ opacity:0,x:-50 }}
        animate={{ opacity:1,x:0 }}
        transition={{ duration:.8 }}
      >

        <span className="badge">
          AI-Powered Preventive Healthcare
        </span>

        <h1>

          Predict Diabetes Risk

          <span>Before It Becomes A Problem.</span>

        </h1>

        <p>

          HealthGuard AI uses Machine Learning to assess diabetes risk,
          helping individuals take preventive actions through
          personalized health recommendations.

        </p>

        <div className="hero-buttons">

          <Link
            className="primary-btn"
            to="/assessment"
          >
            Start Assessment
          </Link>

          <a
            href="#features"
            className="secondary-btn"
          >
            Learn More
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity:0,x:50 }}
        animate={{ opacity:1,x:0 }}
        transition={{ duration:.8 }}
      >

        <img
          src={heroImage}
          alt="HealthGuard AI"
        />

      </motion.div>

    </section>
  );
}