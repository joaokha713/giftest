import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import styles from './styles.css'

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 text-center">
            <footer className={styles.footer}>
              <p>
                <a href="//www.socialsweethearts.de/terms.html" target="_blank">Terms and conditions</a> ·
                <a href="//www.socialsweethearts.de/privacy.html" target="_blank">Privacy</a> ·
                <a href="//www.socialsweethearts.de/de_DE/imprint" target="_blank">Imprint</a> ·
                <a href="/accounts/feedback/?url=https://en.nametests.com/" target="_blank">Feedback</a> ·
                <a href="//www.socialsweethearts.de/en_US/it-career" target="_blank">Jobs</a> ·
                <a href="//docs.google.com/a/socialsweethearts.de/forms/d/1ggzWjZHk2m-KU-2leSanIcna3WeY4Wy_sieBoBsuhFA/viewform" target="_blank">Become a partner</a> ·
              </p>
              <p>
                <a href="//www.socialsweethearts.de/terms.html" target="_blank">
                  Disclaimer: All content is provided for fun and entertainment purposes only</a>
              </p>
              <p className="small-footer">
                This app uses data and contents only if they are publicly available or with the consent of the users. We kindly ask you to use the app only, if other users will not be affected adversely.
                <br />
                Thank you and have fun with our app!
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
