import React, { useEffect, useRef } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Animations for the Boxes
    gsap.fromTo(
      ".box",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animating the Header Background Color
    gsap.fromTo(
      headerRef.current,
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#333',
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 10%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animating Header Text (title and profession)
    gsap.fromTo(
      headerRef.current.querySelectorAll('h1, p'),
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.3, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animating Intro Section (image fade and zoom)
    gsap.fromTo(
      introRef.current.querySelector('img'),
      { opacity: 0, scale: 0.8, rotation: -15 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: introRef.current.querySelector('img'),
          start: 'top 75%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animating Text (About Me, Skills, Education History) in Intro Section
    gsap.fromTo(
      introRef.current.querySelectorAll('.box'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 75%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animating Contact Section
    gsap.fromTo(
      contactRef.current.querySelectorAll('.box'),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animating Footer
    gsap.fromTo(
      footerRef.current.querySelector('p'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'bounce.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <header ref={headerRef} className="header">
        <h1>Christvin Dylen Portfolio</h1>
        <p className="profession">Front-end Developer</p>
      </header>

      <section ref={introRef} className="intro-section">
        <div className="intro-content">
          <img
            className="profile-photo"
            src="WIN_20250325_13_05_15_Pro.jpg"
            alt="Profile"
          />
          <div className="bio">
            <div className="box">
              <h2>About Me</h2>
              <p>I am a student, currently studying at Tri Ratna.</p>
            </div>

            <div className="box">
              <h2>Skills</h2>
              <p>My skills are in HTML, React, and Git.</p>
            </div>

            <div className="box">
              <h2>Education History</h2>
              <p>
                In July 2016, I started first grade in elementary school. In July 2022, 
                I entered junior high at Permata Bunda School, and in 2024, I began attending Tri Ratna Vocational School.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact-section">
        <div className="box">
          <h2>Projects I've Worked On</h2>
          <p>If you'd like to discuss more, feel free to contact me via email:</p>
          <a href="mailto:email@example.com" className="contact-link">
            Email Me
          </a>
        </div>
      </section>

      <footer ref={footerRef} className="footer">
        <p>&copy; {new Date().getFullYear()} Christvin Dylen</p>
      </footer>
    </div>
  );
};

export default App;
