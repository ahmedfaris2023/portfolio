import React from 'react';

export default function HeroSection() {
  // وظيفة لتنزيل ملف السيرة الذاتية
  const handleDownload = () => {
    // استبدال 'cv_file_name.pdf' بالمسار الصحيح لملف السيرة الذاتية الخاص بك
    const cvFile = './cv2.pdf';
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = cvFile; // اسم الملف الذي سيتم تنزيله
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <div className="animated-text">
          Hey👋,I'm <span></span>
         </div>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            UI/UX designer and front-end and back-end web developer
          </p>
          <button className="btn btn-primary" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
