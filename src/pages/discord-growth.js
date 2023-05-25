import * as React from "react";
import { useState, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { Link } from "gatsby";

import ClientOnly from "../components/ClientOnly.js";
import Cursor from "../components/Cursor.js";
import Navigation from "../components/Navigation.js";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";

import clockIcon from "../images/clock.svg";
import calendarIcon from "../images/calendar.svg";

import "../components/global.css";
import "../components/project.css";

const DiscordGrowth = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef();
  const { scrollYProgress } = useViewportScroll();

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

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        delay: 0.35,
        duration: 0.8,
        damping: 10,
        stiffness: 80,
        bounce: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.35,
        duration: 0.8,
        damping: 10,
        stiffness: 80,
        bounce: 0.2,
      },
    },
  };

  return (
    <div>
      <div>
        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>

        <motion.div className="project-hero-wrapper" ref={ref}>
          <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
          <div className="project-hero">
            <ClientOnly>
              <motion.figure
                className="project-hero-image"
                initial="initial"
                animate="visible"
                variants={imageVariants}
              >
                <motion.img
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/Work+Card/0-discord-growth-hero.png"
                  alt="Two phones displaying the app Discord"
                />
              </motion.figure>
            </ClientOnly>
          </div>
          <div className="project-hero-background blue"></div>
        </motion.div>

        <div class="grid">
          <div className="project-intro">
            <h1 className="project-title">Discord Growth (TANP)</h1>
            <div className="project-description">
              <p className="paragraph--large project-lede">
                UIモデリングに基づいた構造設計と
                <br />
                iOSのUIデザインの理解・実践
              </p>
            </div>
            <ClientOnly>
              <div className="detail first-detail">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", delay: 0.4, damping: 15 }}
                  className="icon-wrapper"
                >
                  <img
                    src={clockIcon}
                    alt="Clock Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3
                  className="details-label"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", delay: 0.65, damping: 15 }}
                >
                  8ヶ月
                </motion.h3>
              </div>
              <div className="detail second-detail">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", delay: 0.8, damping: 15 }}
                  className="icon-wrapper"
                >
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", delay: 1, damping: 15 }}
                  className="details-label"
                >
                  2020.08 - 2021.03
                </motion.h3>
              </div>
            </ClientOnly>
          </div>
        </div>

        <div className="grid">
          <section className="project-main">
            
            <div className="body">
              <h3 className="h3 project-about">
                記念日リマインダー機能のリニューアル
              </h3>
              <p className="paragraph">
                TANP iOSアプリの「記念日リマインダー」は、ユーザーが大切な人の記念日を登録することをきっかけとして、購入に繋げるための役割として設計された機能でした。
              </p>
              <p className="paragraph">
                しかし、従来のUIでは、カレンダー型のUIによる使いづらさが要因で、あまり使われていないという課題がありました。
              </p>
              <p className="paragraph">
                そのため、記念日を簡単に登録・確認できるようにするために、機能のリニューアルが行われました。
              </p>
              <div className="detail second-detail">
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                  プロダクトマネージャー
                  <br />
                  デザインマネージャー
                  <br />
                  UIデザイナー (自分)
                  <br />
                  UIデザイナー
                </motion.h3>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">UIモデリングによるワイヤーフレーム設計</h2>
              <p className="paragraph">
              この施策では「記念日」と「記念日の相手」という2つの概念が混乱を生んでおり、プロダクトマネージャーはワイヤーフレーム作成に苦戦していました。
              </p>
              <p className="paragraph">
              そのため私は、オブジェクト指向UIのモデリング手法を用いてUI構造の整理を行うことをプロダクトマネージャーに提案し、実施しました。
              </p>
              <p className="paragraph">
              ユーザーがタスクを遂行する上では、記念日が最も重要なオブジェクトであるため、
              </p>
              <ul className="case-list">
                <li>
                  記念日が並ぶコレクションビュー
                </li>
                <li>
                  記念日の詳細を閲覧できるシングルビュー
                </li>
              </ul>
              <p className="paragraph">
                という形でビューを設計しています。
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Discords registration screen before and after"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/3-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Establishing a new visual baseline</h2>
              <p className="paragraph">
                User testing taught us that our current buttons and inputs
                didn’t seem interactable. Our app’s splash page didn’t tell
                users anything about the product, and steps of registration
                looked inconsistent from being updated piece by piece.
              </p>
              <p className="paragraph">
                I started design by updating the visual design of the steps we
                knew we needed for registration and login. That way we could
                build from a baseline we knew was working and our future
                iterations would be consistent.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying Discords tutorial halfsheets in iOS"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/4-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Onboarding help</h2>
              <p className="paragraph">
                During user testing we heard common phrases like “What is a
                channel?”, “Are voice channels like a phone call?”. Channels are
                how users organize their server by topic, so a new user not
                understanding one of the core primitives of the product was a
                big contributor to why they felt confused.
              </p>
              <p className="paragraph">
                Our solution was to improve the empty states of the most
                commonly visited parts of the app along with tutorial messages
                to introduce these concepts.
              </p>
              <p className="paragraph">
                We tested this approach with interactive prototypes and users
                first. After seeing success with our user tests we released this
                project as an experiment and shortly after to production in
                early 2020.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying Discords server template screens"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/5-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Server templates</h2>
              <p className="paragraph">
                San Chung and I co-designed this project into production across
                Desktop, Android, and iOS. Discord Servers are hard to
                understand for new users. They’re a primitive that can be used
                for communities of 800k people, an private book club for 10 of
                your fellow hobbyists, or for a classroom of 100.
              </p>
              <p className="paragraph">
                By providing a list of templates to build from, we could teach
                users what Discord could be used for and guide them through the
                process resulting in a less confusing user experience.
              </p>
              <p className="paragraph">
                Server templates were designed around our most common uses cases
                “a place for friends”, “study group”, “an art community”. This
                screen did double duty of education about the product and
                helping them onboard.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Illustrations by Kevin Dam at Discord"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/00-discord-growth-illustrations.png"
              />
            </figure>
            <figure className="project-image project-image--full">
              <img
                alt="All of our prototypes in Figma we used for testing at Discord"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/7-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Phone Registration</h2>
              <p className="paragraph">
                Next we built phone registration to make signing up for Discord
                easier. This feature had two benefits, less friction to register
                and it allowed us to work on social graph features as our next
                project.
              </p>
              <p className="paragraph">
                This project spanned across all three platforms we
                support(Desktop, Android and iOS). Phone registration is a good
                example of a project that seems simple in practice, but requires
                a considerable amount of design for all of it’s various states
                (update, remove, add phone number etc).
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying the screens for registering with a phone on discord"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/8-discord-growth.png"
              />
            </figure>

            <figure className="project-image project-image--full">
              <img
                alt="Desktop version of Discord showing UI for entering a 6 digit number for password reset"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/9-discord-growth.png"
              />
            </figure>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying the flow of clearing a phone number on a users account"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/10-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Finding your friends</h2>
              <p className="paragraph">
                To make finding people you know on Discord easier, we built
                “Find Your Friends” which let users upload their contacts to
                find existing Discord users.
              </p>
              <p className="paragraph">
                One of the challenge of this project was staying privacy
                focused. We let users decide whether or not other people could
                find them. We had to balance this messaging and make it simple
                to dig further into your privacy preferences. We used user
                research to help us message this feature since it’s uncommon
                with other modern social media networks.
              </p>
              <p className="paragraph">
                Another problem we had to solve was how to surface this feature
                for new users vs existing users. We decided to promote the
                feature before launch to help educated our existing users on how
                it would work.
                <em>Selina Her</em>, the designer I mentioned earlier worked
                side by side on this feature. She owned how it would fit within
                Discord's onboarding while I had started on how the feature a
                few months prior for existing users.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Floating phone with the Find Your Friends feature of Discord displayed"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/11-discord-growth.png"
              />
            </figure>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying the splash screens of Find Your Friends on Discord"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/12-discord-growth.png"
              />
            </figure>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying various steps of the Find your Friends feature of Discord"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/13-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Measuring and validating designs</h2>
              <p className="paragraph">
                All of these features were tested with various experiments. On
                our growth team, forming a hypothesis, testing variations of a
                design, and measuring it’s impact are critical to learning.
              </p>
              <p className="paragraph">
                Quantitative feedback was used for us to measure the true impact
                and success of these projects during experimentation and post
                launch.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Two phones displaying two variations of the Discord welcome splash screen on iOS"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/14-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">The Result</h2>
              <p className="paragraph">
                All of these features, except for designs showing variations we
                tested, shipped in 2020 or early 2021.
              </p>
              <p className="paragraph">
                To date, the Discord growth team has shipped dozens of features,
                tested even more ideas using experimentation, and is continuing
                to work on improving our product for our next 100+ million
                users.
              </p>
              <p className="paragraph">
                While there's still a considerable amount of work left to be
                done, I'm proud of the work my team and I did for the features
                showcased above.
              </p>
            </div>
          </section>
        </div>

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
              title="Server Video"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
              imageAlt="UI of Design Tooling Plugins in Figma"
              link="/design-tooling"
              color="green"
              title="Design Tooling"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>

        <Footer
          onFooterEnter={contactEnter}
          onFooterLeave={cursorLeave}
          onLinkEnter={linkEnter}
          onLinkLeave={cursorLeave}
        />
      </div>
    </div>
  );
};

export default DiscordGrowth;
