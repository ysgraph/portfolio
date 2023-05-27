import * as React from 'react'
import { Link } from "gatsby"
import * as styles from './footer.module.css'
import { motion } from 'framer-motion'

function Footer(props) {
  function mouseEnter(event) {
    props.onFooterEnter();
  }

  function mouseLeave(event) {
    props.onFooterLeave();
  }

  function linkEnter(event) {
    props.onLinkEnter();
  }

  function linkLeave(event) {
    props.onLinkLeave();
  }
  return (
    <div id="contact" className="grid grid--full contact">
      <div className={styles.footer}>
        <nav className={styles.footerLinks}>
          <div className={styles.openSource}>
          © 2023️ Yudai Suzuki
          </div>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/ysgraph" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              Twitter
            </a>
            <a href="https://github.com/ysgraph" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              Github
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Footer