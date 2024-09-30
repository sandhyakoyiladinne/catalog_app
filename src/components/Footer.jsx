import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>For better experience, download the Movie Catalog app now</p>
        <div className="footer-apps">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </a>
          <a href="#">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img
            src="https://img.icons8.com/fluency/200/totem-video-player.png"
            alt="Movie app Logo"
            className="footer-logo"
          />
          <p>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Ride with us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>We deliver to:</h4>
          <ul>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Gurgaon</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Pune</a></li>
            <li>
              <select>
                <option value="589 cities">589 cities</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;