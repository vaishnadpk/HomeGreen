import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import imageLogo from "../static/logo.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Become a member of our customer club
        </p>
        <p className="footer-subscription-text">
          Get a 2% bonus on all your purchases.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button buttonStyle="btn--outline">Sign in</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="/">How it works</a>
            <a href="/">Testimonials</a>
            <a href="/">Careers</a>
            <a href="/">Investors</a>
            <a href="/">Terms of Service</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a>
            <a href="/">Support</a>
            <a href="/">Destinations</a>
            <a href="/">Sponsorships</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a>
            <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
            <a href="/">Influencer</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              <img src={imageLogo} id="logo-image" alt="Logo" />
              H/G
            </a>
          </div>
          <small className="website-rights">VDPK © 2023</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              className="social-icon-link instagram"
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              className="social-icon-link youtube"
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <YouTubeIcon />
            </a>
            <a
              className="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              className="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
