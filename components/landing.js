// components/HeroSection.jsx
import React from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroContainer}>
            {/* Background Gradient */}
            <div className={styles.gradientOverlay}></div>

            {/* Decorative SVGs */}
            <svg
                className={`${styles.decorativeSvg} ${styles.topRight}`}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#FF6F91"
                    d="M47.3,-61.5C61.5,-50.7,73.2,-35.5,76.9,-18.4C80.6,-1.3,76.3,17.6,67.5,34.6C58.7,51.6,45.4,66.7,29.1,72.5C12.8,78.3,-6.5,74.8,-22.5,66.2C-38.5,57.6,-51.2,43.9,-60.4,28.1C-69.6,12.3,-75.3,-5.6,-71.9,-21.5C-68.5,-37.4,-56,-51.3,-41.4,-61.5C-26.8,-71.7,-13.4,-78.2,0.4,-78.8C14.2,-79.4,28.4,-74.2,47.3,-61.5Z"
                    transform="translate(100 100)"
                />
            </svg>

            <svg
                className={`${styles.decorativeSvg} ${styles.bottomLeft}`}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#FF6F91"
                    d="M44.7,-61.5C58.3,-53.2,69.9,-39.8,74.8,-24.2C79.7,-8.6,77.9,9.2,70.9,25.1C63.9,41,51.7,55,38.1,65.2C24.5,75.4,9.3,81.8,-5.5,82.7C-20.3,83.6,-40.6,79,-55.9,67.4C-71.2,55.8,-81.5,37.2,-83.5,18.5C-85.5,-0.2,-79.2,-19,-68.5,-34.5C-57.8,-50,-42.7,-62.2,-26.9,-67.5C-11.1,-72.8,5.5,-71.2,20.1,-65.1C34.7,-59,47.1,-48.4,44.7,-61.5Z"
                    transform="translate(100 100)"
                />
            </svg>

            {/* Main Text */}
            <h1 className={styles.heroTitle}>
                FREE
                <br />
                LOADER <br /> AGENCY
            </h1>
        </section>
    );
};

export default HeroSection;
