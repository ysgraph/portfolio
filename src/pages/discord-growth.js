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
            <h1 className="project-title">TANP</h1>
            <div className="project-description">
              <div className="project-summary">
                <p className="paragraph--large project-lede">
                  UIモデリングに基づいた構造設計
                </p>
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
            <div className="project-caption">
              <p className="paragraph--small">
                TANPは、ギフトに特化したECサービスです。
              </p>
              <p className="paragraph--small">
                TANPに参画した当初、プロダクトデザイン面では以下が求められていました。<br />
                ・基本的なECサービスとしての機能の充足<br />
                ・ビジュアル面からのユーザーの印象の底上げ
              </p>
              <p className="paragraph--small">
                私はUIデザイナーとして、新機能や施策のUIデザイン・LPデザイン・クリエイティブ制作などを担当しました。
              </p>
              <p className="paragraph--small">
                本ページで開示されている全ての画像、イラスト、写真、デザイン、データなどの知的財産権・著作権は、株式会社Gracia又はコンテンツ提供者に帰属しています。
              </p>
            </div>
          </div>
          
        </div>

        <div className="grid">
          <section className="project-main">
            
            <div className="body">
              <h3 className="h3 project-about">
                <p className="caption">
                  PROJECT 1.
                </p>
                記念日リマインダー機能のリニューアル
              </h3>
              <p className="paragraph--small">
                TANP iOSアプリの「記念日リマインダー」は、ユーザーが大切な人の記念日を登録することをきっかけとして、購入に繋げるための役割として設計された機能でした。
              </p>
              <p className="paragraph--small">
                しかし、従来のUIでは、カレンダー型のUIによる使いづらさが要因で、あまり使われていないという課題がありました。
              </p>
              <p className="paragraph--small">
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
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                  ワイヤーフレーム設計
                  <br />
                  UIデザインの補助
                </motion.h3>
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                  4時間
                </motion.h3>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">UIモデリングによるワイヤーフレーム設計</h2>
              <p className="paragraph--small">
              この施策では「記念日」と「記念日の相手」という2つの概念が混乱を生んでおり、プロダクトマネージャーはワイヤーフレーム作成に苦戦していました。
              </p>
              <p className="paragraph--small">
              そのため私は、オブジェクト指向UIのモデリング手法を用いてUI構造の整理を行うことをプロダクトマネージャーに提案し、実施しました。
              </p>
              <p className="paragraph--small">
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
              <p className="paragraph--small">
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
            <p className="paragraph--small">
                記念日というオブジェクトのプロパティとして<br />
                ・お相手<br />
                ・記念日の種類<br />
                ・日付<br />
                などの項目を設定しています。
              </p>
              <p className="paragraph--small">
                ユーザーにとって最も重要である「記念日」というオブジェクトと、記念日の次に重要である「お相手」の関係を明確に示すため、「お相手」の編集は、記念日の設定内から行うよう設計しています。
              </p>
              <p className="paragraph--small">
              また、編集・削除は「記念日」というオブジェクトに対して行えるようにすることで、オブジェクト指向UIに則った直感的な導線を設計しています。
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying Discords tutorial halfsheets in iOS"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/4-discord-growth.png"
              />
            </figure>

            <div className="body">
              <p className="paragraph--small">
                この施策においては、柔軟に手法を検討し、プロダクトマネージャーと設計について直接擦り合わせ・提案を行いました。<br />
                オブジェクト指向UIを実践するのは初めてでしたが、ステークホルダーと合意をとりながら、プロジェクトを主導することができたと考えています。
              </p>
            </div>
            
          </section>


          <section className="project-main">
            
            <div className="body">
              <h3 className="h3 project-about">
                <p className="caption">
                  PROJECT 2.
                </p>
                マイページのポイント表示リニューアル
              </h3>
              <p className="paragraph--small">
              TANPにはポイント機能が存在しており、多くの事業課題の改善が見込める機能の1つでした。<br />
              しかし、従来はただポイントを表示する役割のみであったため、ポイントの機能改善を行うこととなりました。
              </p>
              <p className="paragraph--small">
                私はこの施策において、主にUIのビジュアルデザインを担当しました。
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
                  iOS
                </motion.h3>
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                  2週間
                </motion.h3>
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                  UIのビジュアルデザイン
                </motion.h3>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">カード型UI</h2>
              <p className="paragraph--small">
                様々な実装上の制約があったものの、ランクに応じて背景色が変わるようにし、ランクが上がるごとに変化するデザインを楽しめるようにしました。
              </p>
              <p className="paragraph--small">
                次のランクまでの進捗状況はシンプルな棒グラフで表現し、あとどのくらいでランクアップするのかを一目で確認することができます。
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Discords registration screen before and after"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/3-discord-growth.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">ランクバッジ</h2>
              <p className="paragraph--small">
                この施策に伴い、6種のランクバッジをデザインしました。
              </p>
              <p className="paragraph--small">
              金・銀・銅のメダルカラーを軸に、ランクが上がるごとに特別感を感じられるようを調整しています。<br />
              ダイヤモンドバッジは多面体のため、光源を考慮した色を採用することで、自然な立体感を出しています。
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Three phones displaying Discords tutorial halfsheets in iOS"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/4-discord-growth.png"
              />
            </figure>

            <div className="body">
              <p className="paragraph--small">
                この施策においては、セマンティックカラーのルールに則り、カラーを指定しています。<br />
                systemGroupedBackground などの階層概念や、ラベルの指定などを考慮して設計しています。<br />
                今後、アクセシビリティラベル等を含めた、適切なiOS設計を理解・実践していきたいと考えています。
              </p>
              <p className="paragraph--small">
                また、一連のポイント関連施策の第一歩として、重要な既存機能の改善を行うことで、ポイントの有用性を高め、先のキャンペーン施策等にも有効な改善を行うことができました。
              </p>
            </div>
          </section>

          <section className="project-main">
            
            <div className="body">
              <h3 className="h3 project-about">
                <p className="caption">
                  PROJECT 3.
                </p>
                サービスページのリニューアル
              </h3>
              <p className="paragraph--small">
                TANPのリブランディングに伴ったサービスページのリニューアルを担当しました。
              </p>
              <p className="paragraph--small">
                新しいブランドアイデンティティに合わせたトーン&マナーの設計や、ページ内クリエイティブの制作、イラストレーターのディレクション等を行っています。
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
                フロントエンドエンジニア<br />
                デザイナー（自分）<br />
                イラストレーター
                </motion.h3>
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                ビジュアルデザイン<br />
                アートディレクション
                </motion.h3>
                <motion.div className="icon-wrapper">
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                </motion.div>
                <motion.h3 className="details-label">
                  3週間
                </motion.h3>
              </div>
            </div>

            <figure className="project-image project-image--full">
              <img
                alt="Discords registration screen before and after"
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/growth/3-discord-growth.png"
              />
            </figure>

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
