import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://www.instagram.com/emilio_biasi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram fontSize={25} className="opacity-50 hover:opacity-80" />
        </a>
        <a
          href="https://www.github.com/emiliobiasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub fontSize={25} className="opacity-50 hover:opacity-80" />
        </a>
        <a
          href="https://www.linkedin.com/in/emiliobiasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize={25} className="opacity-50 hover:opacity-80" />
        </a>
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-slate-700">
        &copy;emiliobiasi. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
