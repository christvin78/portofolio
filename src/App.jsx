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
    // Animasi Header
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
          trigger: headerRef.current, // Element to trigger the animation
          start: 'top 80%', // Start animation when the top of the header is 80% from the top of the viewport
          end: 'top 50%', // End animation when the top of the header reaches the 50% mark of the viewport
          toggleActions: 'play none none reverse', // Play animation on entering and reverse on leaving
        }
      }
    );

    // Animasi Intro Section
    gsap.fromTo(
      introRef.current.querySelectorAll('img, h2, p'),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 75%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Animasi Contact Section
    gsap.fromTo(
      contactRef.current.querySelectorAll('h2, p, a'),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
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

    // Animasi Footer
    gsap.fromTo(
      footerRef.current.querySelector('p'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
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
        <h1>Christvin Dylen Portofolio</h1>
        <p className="profession">front-end developer</p>
      </header>

      <section ref={introRef} className="intro-section">
        <div className="intro-content">
          <img
            className="profile-photo"
            src="WIN_20250325_13_05_15_Pro.jpg"
            alt="Foto Profil"
          />
          <div className="bio">
            <h2>About Mel</h2>
            <p>
              I am a student, I study at Tri Ratna
              <h2>Skill</h2>
              <p>My skills are in Html, React and Git</p>
            </p>

            <h2>History of education</h2>
            <p>
              2016 July I was in 1st grade of elementary school and 2022 July I first entered junior high school at Permata Bunda school and 2024 I just entered vocational school at Tri Ratna school
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact-section">
        <h2>These are the projects I have worked on so far</h2>
        <p>Jika Anda ingin berbicara lebih lanjut, Anda bisa menghubungi saya melalui email:</p>
        <a href="mailto:email@example.com" className="contact-link">
          Email
        </a>
      </section>

      <footer ref={footerRef} className="footer">
        <p>&copy; {new Date().getFullYear()} Christvin Dylen</p>
      </footer>
    </div>
  );
};

export default App;
