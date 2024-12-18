const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a className="social-icon cursor-pointer" target="_blank" href="https://github.com/Jushiro012623">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon cursor-pointer" target="_blank" href="https://www.twitter.com/Jushiro012623">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon cursor-pointer" target="_blank" href="https://www.instagram.com/sternritter_ivan/">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon cursor-pointer" target="_blank" href="https://www.facebook.com/ivanallen.macabontoc">
          <img src="/assets/fb.svg" alt="facebook" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 IvanDev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
