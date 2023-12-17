import "./Footer.css";

function Footer() {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <footer >
      
        <div className="footer-links">
          <button className="justfooter" type="button" onClick={() => openLinkInNewTab('https://geet2601.github.io/E--Portfolio/')}>ABOUT</button>
          <button className="justfooter" type="button" onClick={() => window.location.href = '#'}>
          Store locator
        </button>
        <button className="justfooter" type="button" onClick={() => window.location.href = '#'}>
          FAQs
        </button>
        <button className="justfooter" type="button" onClick={() => window.location.href = '#'}>
          News
        </button>
        <button className="justfooter" type="button" onClick={() => window.location.href = '#'}>
          Careers
        </button>
        <button className="justfooter" type="button" onClick={() => openLinkInNewTab('https://github.com/Geet2601')}>
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