import { gsap } from "gsap";
import { ScrollTrigger } from "gsap";
import { ScrollSmoother } from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {

  // Scroll Smoother
  ScrollSmoother.create({
    smooth: 1,   // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,  // much shorter smoothing time on touch devices (default: 0.1)
  });

  // GSAP Animations (example)
  gsap.from("header", { opacity: 0, duration: 1, y: -50 });
  gsap.from("#hero h1, #hero p, .cta-button", { opacity: 0, duration: 1, delay: 0.5, y: 50 });

  // Add new animations
  gsap.from(".portrait-container", { 
    scrollTrigger: ".about-content",
    duration: 1,
    scale: 0.8,
    opacity: 0
  });

  gsap.from(".timeline-item", {
    scrollTrigger: "#resume",
    stagger: 0.3,
    opacity: 0,
    y: 50
  });

  gsap.from(".testimonial-card", {
    scrollTrigger: "#testimonials",
    stagger: 0.2,
    scale: 0.9,
    opacity: 0
  });

  // Project data (replace with your actual projects)
  const projects = [
    {
      title: "Sales Forecasting Model",
      description: "Developed machine learning model to predict quarterly sales with 95% accuracy for retail chain",
      link: "#"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Cluster analysis of 50k+ customers using Python and Scikit-learn to identify high-value segments",
      link: "#"
    },
    {
      title: "Supply Chain Optimization",
      description: "Network optimization analysis reducing logistics costs by 18% through route optimization",
      link: "#"
    },
    {
      title: "A/B Testing Framework",
      description: "Created automated testing platform for marketing campaigns with real-time dashboard in Tableau",
      link: "#"
    },
    {
      title: "Churn Prediction System",
      description: "Predictive model identifying at-risk customers with 85% recall rate using XGBoost",
      link: "#"
    }
  ];

  // Function to dynamically create project elements
  function createProjectElements() {
    const projectsGrid = document.querySelector(".projects-grid");

    projects.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-item");

      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsGrid.appendChild(projectDiv);
    });
  }

  // Call the function to create project elements
  createProjectElements();

  // Contact Form Submission (example)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission
      alert("Form submitted! (This is just a placeholder)");
    });
  }
});