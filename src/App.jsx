import React from 'react';
import './App.css'; // Import styling CSS

const App = () => {
  return (
    <div className="App">
      {/* Header / Judul */}
      <header className="header">
        <h1>Christvin Dylen Portofolio</h1>
        <p className="profession">front-end developer</p>
      </header>

      {/* Section Perkenalan */}
      <section className="intro-section">
        <div className="intro-content">
          <img
            className="profile-photo"
            src="WIN_20250325_13_05_15_Pro.jpg" // Ganti dengan foto Anda
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
            <p>2016 July I was in 1st grade of elementary school
and 2022 July I first entered junior high school at Permata Bunda school
and 2024 I just entered vocational school at Tri Ratna school</p>
          </div>
        </div>
      </section>

      {/* Section Kontak */}
      <section className="contact-section">
        <h2>These are the projects I have worked on so far</h2>
        <p>Jika Anda ingin berbicara lebih lanjut, Anda bisa menghubungi saya melalui email:</p>
        <a href="mailto:email@example.com" className="contact-link">
          Email
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Christvin Dylen</p>
      </footer>
    </div>
  );
};

export default App;