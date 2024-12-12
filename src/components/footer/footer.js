/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./footer.css";

import logo from "../../images/salesforce-with-type-logo.svg";
import imgSrc from "../../images/icon-cpra.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__topContainer">
          <div className="footer__col1">
            <img className="footer__logo" src={logo} />
            <div className="footer__socials">
              <a
                href="https://www.facebook.com/salesforce/"
                target="_blank"
                title="Facebook"
                data-tracking-type="social"
              >
                <svg
                  className="salesforce-social-icon icon-facebook"
                  alt="Facebook"
                ></svg>
              </a>
              <a
                href="https://x.com/salesforce"
                target="_blank"
                title="Twitter"
                data-tracking-type="social"
              >
                <svg
                  className="salesforce-social-icon icon-twitter"
                  alt="Twitter"
                ></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/salesforce/"
                target="_blank"
                title="LinkedIn"
                data-tracking-type="social"
              >
                <svg
                  className="salesforce-social-icon icon-linkedin"
                  alt="LinkedIn"
                ></svg>
              </a>
              <a
                href="https://instagram.com/salesforce/"
                target="_blank"
                title="Instagram"
                data-tracking-type="social"
              >
                <svg
                  className="salesforce-social-icon icon-instagram"
                  alt="Instagram"
                ></svg>
              </a>
              <a
                href="https://www.youtube.com/Salesforce/"
                target="_blank"
                title="Youtube"
                data-tracking-type="social"
              >
                <svg
                  className="salesforce-social-icon icon-youtube"
                  alt="Youtube"
                ></svg>
              </a>
              <a
                href="https://www.tiktok.com/@salesforce"
                target="_blank"
                title="TikTok"
                data-tracking-type="social"
              >
                <svg
                  className="salesforce-social-icon icon-tiktok"
                  alt="TikTok"
                ></svg>
              </a>
            </div>

            <div className="footer__phone">
              <p>Call us at 1-800-664-9073</p>
            </div>
          </div>
          <div className="footer__col2">
            <h3>
              <span className="footer__colHead">New to Salesforce?</span>
            </h3>
            <ul className="generic-links">
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/crm/what-is-crm/"
                    data-tracking-type="vertical_list"
                  >
                    What is CRM?
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/products/what-is-salesforce/?d=70130000000i7zF"
                    data-tracking-type="vertical_list"
                  >
                    What is Salesforce?
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/products/service-cloud/help-desk-software/?d=70130000000i80h"
                    data-tracking-type="vertical_list"
                  >
                    Help Desk Software
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/marketing/b2b-automation/?d=7010M000001yBiM"
                    data-tracking-type="vertical_list"
                  >
                    Marketing Automation Software
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/products/?d=70130000000i7zU"
                    data-tracking-type="vertical_list"
                  >
                    Explore All Products
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/products/platform/best-practices/cloud-computing/?d=70130000000i88b"
                    data-tracking-type="vertical_list"
                  >
                    What is Cloud Computing?
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/customer-stories/?d=70130000000i7zZ"
                    data-tracking-type="vertical_list"
                  >
                    Customer Success
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/editions-pricing/overview/?d=70130000000i7ze"
                    data-tracking-type="vertical_list"
                  >
                    Product Pricing
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/privacy/overview/"
                    data-tracking-type="vertical_list"
                  >
                    Privacy for Salesforce Products
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__col3">
            <h3>
              <span className="footer__colHead">About Salesforce</span>
            </h3>
            <ul className="generic-links">
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/company/our-story/?d=70130000000i80N"
                    data-tracking-type="vertical_list"
                  >
                    Our Story
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/news/?d=70130000000i80X"
                    data-tracking-type="vertical_list"
                  >
                    Newsroom
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/blog/?d=70130000000i80c"
                    data-tracking-type="vertical_list"
                  >
                    Blog
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://careers.salesforce.com/en/?d=70130000000i80S"
                    data-tracking-type="vertical_list"
                  >
                    Careers
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://trust.salesforce.com/en/?d=cta-glob-footer-5"
                    target="_blank"
                    data-tracking-type="vertical_list"
                  >
                    Trust
                    <span
                      role="img"
                      className="salesforce-icon icon-sfdc-icon-offsite"
                      aria-label="(opens in a new window)"
                    ></span>
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.org/"
                    target="_blank"
                    data-tracking-type="vertical_list"
                  >
                    Salesforce.org
                    <span
                      role="img"
                      className="salesforce-icon icon-sfdc-icon-offsite"
                      aria-label="(opens in a new window)"
                    ></span>
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/company/sustainability/?d=70130000000i80J"
                    data-tracking-type="vertical_list"
                  >
                    Sustainability
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://investor.salesforce.com/overview/default.aspx?d=cta-glob-footer-7"
                    data-tracking-type="vertical_list"
                  >
                    Investors
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/company/feedback/?d=cta-glob-footer-9"
                    data-tracking-type="vertical_list"
                  >
                    Give us your Feedback
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__col4">
            <h3>
              <span className="footer__colHead">Popular Links</span>
            </h3>
            <ul className="generic-links">
              <li>
                <span className="li-wrap">
                  <a
                    href="http://login.salesforce.com/lightning/n/standard-OnlineSalesHome"
                    data-tracking-type="vertical_list"
                  >
                    Manage Your Account
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/products/innovation/summer-24-release/"
                    data-tracking-type="vertical_list"
                  >
                    New Release Features
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/partners/"
                    data-tracking-type="vertical_list"
                  >
                    Find or Become a Partner
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/crm/?d=70130000000i80D"
                    data-tracking-type="vertical_list"
                  >
                    CRM Software
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/video/?d=70130000000i80I"
                    data-tracking-type="vertical_list"
                  >
                    Salesforce LIVE
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/dreamforce/?d=70130000000i808"
                    target="_blank"
                  >
                    Dreamforce
                    <span
                      role="img"
                      className="salesforce-icon icon-sfdc-icon-offsite"
                      aria-label="(opens in a new window)"
                    ></span>
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/solutions/mobile/overview/?d=70130000000i7zy"
                    data-tracking-type="vertical_list"
                  >
                    Salesforce Mobile
                  </a>
                </span>
              </li>
              <li>
                <span className="li-wrap">
                  <a
                    href="https://www.salesforce.com/form/other/role-based-newsletter/?d=cta-glob-footer-12"
                    data-tracking-type="vertical_list"
                  >
                    Newsletter Sign-Up
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottomContainer">
          <div className="footer__selecter">Worldwide</div>
          <div className="footer__content">
            <div className="footer__links">
              <ul>
                <li>
                  <a href="https://www.salesforce.com/company/legal/">Legal</a>
                </li>
                <li>
                  <a href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="https://www.salesforce.com/company/privacy/">
                    Privacy Information
                  </a>
                </li>
                <li>
                  <a href="https://www.salesforce.com/company/disclosure/">
                    Responsible Disclosure
                  </a>
                </li>
                <li>
                  <a href="https://trust.salesforce.com/en/">Trust</a>
                </li>
                <li>
                  <a href="https://www.salesforce.com/company/contact-us/?d=cta-glob-footer-11">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="https://www.salesforce.com/form/other/privacy-request/?d=cta-footer-1">
                    <img className="footer__privacyPill" src={imgSrc} />
                    Your Privacy Choices
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__legal">
              <p>
                © Copyright 2024 Salesforce, Inc.
                <a href="/#" adhocenable="false">
                  All rights reserved
                </a>
                . Various trademarks held by their respective owners.
                Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd
                Floor, San Francisco, CA 94105, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
