import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div className="footer-links">
          <a href="https://geet2601.github.io/E--Portfolio/">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">ContactUs</a>
        </div>
        <p className="love">
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
