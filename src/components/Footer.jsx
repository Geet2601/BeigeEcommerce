import "./Footer.css";

function Footer() {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <footer>
      
        <div className="footer-links">
          <button type="button" onClick={() => openLinkInNewTab('https://geet2601.github.io/E--Portfolio/')}>ABOUT</button>
          <button type="button" onClick={() => window.location.href = '#'}>
          Store locator
        </button>
        <button type="button" onClick={() => window.location.href = '#'}>
          FAQs
        </button>
        <button type="button" onClick={() => window.location.href = '#'}>
          News
        </button>
        <button type="button" onClick={() => window.location.href = '#'}>
          Careers
        </button>
        <button type="button" onClick={() => window.location.href = '#'}>
          Contact Us
        </button>
      </div>
      <p className="love">
        &nbsp;
        {/* <button
          type="button"
          onClick={() => {
            // Handle click action for the love button
          }}
          style={{ color: "beige" }}
        >
          &nbsp;
        </button> */}
      </p>
    </footer>
  </>
);
}

export default Footer;