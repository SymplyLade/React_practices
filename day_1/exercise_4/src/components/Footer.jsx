import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Contact Me:</p>
      <div className="socials">
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://github.com" target="_blank">GitHub</a>
      </div>
      <p>© {new Date().getFullYear()} Gbemisola</p>
    </footer>
  );
}

export default Footer;
