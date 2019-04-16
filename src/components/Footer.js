import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import telegram from '../img/social/telegram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter is-paddingless">
        <div className="container is-flex">
          <div className="social">
            <a title="facebook" href="https://facebook.com">
              <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="instagram" href="https://instagram.com">
              <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="telegram" href="https://telegram.com">
              <img
                  src={telegram}
                  alt="Telegram"
                  style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
