import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 pb-8 flex items-center justify-between text-xs text-slate-400">
      <p>© 2024 HairBay International. CMS Version 2.4.1</p>
      <div className="flex gap-4">
        <a className="hover:text-primary transition-colors" href="#">Documentation</a>
        <a className="hover:text-primary transition-colors" href="#">API Keys</a>
        <a className="hover:text-primary transition-colors" href="#">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
