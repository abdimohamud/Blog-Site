import React from "react";

const Footer = () => {
  return (
    <footer id="colophon" class="site-footer outer">
      <div class="inner">
        <div class="site-footer-inside">
          <div class="site-info" />
          <div class="social-links">
          <a
              href="https://abdimohamud.codes"
              class="button-icon"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon fab fa-react" aria-hidden="true" />
              <span class="screen-reader-text">Website</span>
            </a>
            <a
              href="https://twitter.com/nopocketchange"
              class="button-icon"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon fab fa-twitter" aria-hidden="true" />
              <span class="screen-reader-text">Twitter</span>
            </a>
            <a
              href="https://github.com/abdimohamud"
              class="button-icon"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon fab fa-github" aria-hidden="true" />
              <span class="screen-reader-text">Dribbble</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdinajib-mohamud/"
              class="button-icon"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon fab fa-linkedin" aria-hidden="true" />
              <span class="screen-reader-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
