import React from 'react';

function Footer() {
  const names = 'Made by Trinabha Dixit  •  Shikhar Sahay  •  Bhargav Mahanta  •  Mindra Team';

  return (
    <footer className="footer-main" aria-label="Creators marquee footer">
      <div className="marquee-shell">
        <div className="marquee-track">
          <span className="marquee-content">{names}</span>
          <span className="marquee-content" aria-hidden="true">{names}</span>
          <span className="marquee-content" aria-hidden="true">{names}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
