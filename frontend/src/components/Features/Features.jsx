import { motion } from "framer-motion";
import {
  FaBrain,
  FaHeartbeat,
  FaClipboardCheck,
} from "react-icons/fa";

import "../../styles/Features.css";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Prediction",
    description:
      "Uses a trained LightGBM machine learning model to estimate diabetes risk."
  },
  {
    icon: <FaHeartbeat />,
    title: "Early Detection",
    description:
      "Identify potential diabetes risk early and encourage preventive healthcare."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Personalized Recommendations",
    description:
      "Receive practical health recommendations based on your predicted risk level."
  }
];

export default function Features() {
  return (
    <section className="features" id="features">

      <h2>Why Choose HealthGuard AI?</h2>

      <p>
        Intelligent, fast and easy-to-use healthcare risk assessment.
      </p>

      <div className="feature-grid">

        {features.map((feature, index) => (

          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .2 }}
            viewport={{ once: true }}
          >

            <div className="icon">

              {feature.icon}

            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}