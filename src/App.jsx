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
            <h2>About Me & skill</h2>
            <p>
            I am a student, I study at Tri Ratna and my skills are in HTML, React and Git.
            </p>
          </div>
        </div>
      </section>

      {/* Section Kontak */}
      <section className="contact-section">
        <h2>Hubungi Saya</h2>
        <p>Jika Anda ingin berbicara lebih lanjut, Anda bisa menghubungi saya melalui email:</p>
        <a href="mailto:email@example.com" className="contact-link">
         s
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
     <p>&copy; 2025 [Nama Anda]. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
};

export default App;
