import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="https://geet2601.github.io/E--Portfolio/">About</a>
          <a href="https://geet2601.github.io/E--Portfolio/">Store locator</a>
          <a href="https://geet2601.github.io/E--Portfolio/">FAQs</a>
          {/* <a href="https://geet2601.github.io/E--Portfolio/">News</a> */}
          <a href="https://geet2601.github.io/E--Portfolio/">Careers</a>
          <a href="https://geet2601.github.io/E--Portfolio/">Contact Us</a>
        </div>
        <p className="love">
          &nbsp;{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
         >
            &nbsp;
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
