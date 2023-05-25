import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Card from "../components/Card.js"
import * as styles from '../components/AboutGrid.module.css'

import "../components/reset.css"
import "../components/global.css"

// markup
const AboutPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function cursorLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function photoEnter(event) {
    setCursorText("❤️");
    setCursorVariant("contact");
  }

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  return (
      <div>
        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
        <Hero text="I 💜 Web Service." details={false} />
  
        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>

        <motion.section className="grid">
          <div className={styles.aboutGrid}>
            <motion.div className={`${styles.video} ${styles.first}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4" className={styles.video} autoPlay muted loop />
            </motion.div>
            <motion.div className={styles.wrapper}>
              <div className={styles.smallVideo}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/wave.mp4" className={styles.video} autoPlay muted loop />
              </div>
              <div className={`${styles.smallVideo} ${styles.second}`}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/franklin.mp4" className={styles.video} autoPlay muted loop onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
              </div>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.third}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/mondo.mp4" className={styles.video} autoPlay muted loop  onMouseEnter={photoEnter} onMouseLeave={cursorLeave}/>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.fourth}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/irma.mp4" className={styles.video} autoPlay muted loop onMouseEnter={photoEnter} onMouseLeave={cursorLeave} />
            </motion.div>
          </div>
        </motion.section>
        <motion.section className="grid about">
          <div className="bio">
            {/* <h2 className="h2">I’m currently helping to lead, mentor, and grow the team at Discord as a design manager.</h2> */}
          </div>
          <div className="bio-body">
            <p className="paragraph paragraph--large">
            1996年生まれ。関西学院大学法学部卒業。<br/>
            ⼤学3年次にDTP・グラフィックを1年半経験後、Micoworks株式会社、株式会社Graciaなどで、計2年ほどtoCサービスのWebサービス改善に従事。<br/>
            新卒で入社した合同会社DMM.comでは、DMMポイントクラブにて施策設計・UI設計・ビジュアルデザイン・コーディング等を担当。
            </p>
            <p className="paragraph paragraph--large">
                Webサービス・創作活動・ツーリング・洋服・Vtuber・ガジェットなど、さまざまなオタクをしています。
            </p>
          </div>
        </motion.section>

        <motion.section className="grid about">
          <div className="experience">
            <h2 className="h2">Experience</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                    2021 - Current
                </h6>
                <h4 className="h4">
                合同会社DMM.com
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                    2021
                </h6>
                <h4 className="h4">
                株式会社Enju
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - 2021
                </h6>
                <h4 className="h4">
                株式会社Gracia
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                2019 - 2020
                </h6>
                <h4 className="h4">
                Micoworks株式会社
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                2017 - 2019
                </h6>
                <h4 className="h4">
                株式会社NPCコーポレーション
                </h4>
              </li>
            </ul>
          </div>
          <div className="previous-work">
            <h2 className="h2">Writing</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                2022 - DMM Inside
                </h6>
                <h4 className="h4">
                  <a href="https://inside.dmm.com/articles/generic-skills/">デザイナーの「基礎体力」について</a>
                </h4>
              </li>
            </ul>
            {/* <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  SteelSeries.com and Engine Software
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  P.W. LaRue Co. Webshop
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - Engineering and Design
                </h6>
                <h4 className="h4">
                  Foreign Affairs News
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - UX
                </h6>
                <h4 className="h4">
                  Yale Art Gallery
                </h4>
              </li>
              <li className="list-item">
                <h4 className="h4">
                  View LinkedIn ->
                </h4>
              </li>
            </ul> */}
          </div>
        </motion.section>

        <motion.section className="container next-project">
          <div className="grid">
            <h2 className="h2 grid-title">Next Project</h2>
          </div>
          <div className="grid work-grid">
            <Card
              image="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/server-video-tile-imagee.png"
              imageAlt="Mockup of Discord's video chat feature with a person using it"
              link="/server-video"
              color="pink"
              title="TANP"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
              imageAlt="Image of Discord's Onboarding Screen"
              link="/discord-growth"
              color="blue"
              title="digmee"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>

      </div>
  )
}

export default AboutPage

export const Head = () => (
    <>
      <meta charSet="utf-8" />
      <title>Yudai Suzuki - About Me</title>
      <meta name="description" content="The work of Daniel Destefanis, a product design manager from Chicag currently working at Discord." />
    </>
  )