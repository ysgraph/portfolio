import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import useInView from "react-cool-inview";
import Card from '../components/Card'
import FeaturedCard from './FeaturedCard'

function WorkGrid(props) {
  // const [visibleState, setVisibleState] = useState("initial");

  // Scroll Reveal
  // https://github.com/wellyshen/react-cool-inview
  // const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView({
  //     threshold: 0.0, // Default is 0
  //     unobserveOnEnter: true,
  //     onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
  //       setVisibleState("visible");
  //     },
  //     onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
  //       setVisibleState("initial");
  //     }
  //   }
  // );

  const gridVariants = {
    initial: {
      opacity: 0.25,
      scale: 0.98,
      y: 60,
      transition: {
        type: "spring",
        duration: 0.8
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  function projectEnter(event) {
    props.onProjectEnter();
  }

  function projectLeave(event) {
    props.onProjectLeave();
  }

  return (
    <div className="grid">
      <div className="work-grid">
          {/* <FeaturedCard 
            // image="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-image.png"
            image="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/featured-tile.png"
            imageAlt=""
            link="/server-video"
            color="pink"
            title="DMM Pointclub"
            key="DMM Pointclub"
            size="featured"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          /> */}
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
            link="/discord-growth"
            imageAlt=""
            color="blue"
            title="TANP"
            size="normal"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
            link="/design-tooling"
            imageAlt=""
            color="green"
            title="digmee"
            size="normal"
            alignment="bottom"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/destiny-medals-image.png"
            link="/destiny-medals"
            imageAlt=""
            title="Kalta"
            color="purple"
            size="normal"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/steelseries-image.png"
            link="/steelseries"
            imageAlt=""
            title="Personal Works"
            color="yellow"
            size="normal"
            alignment="bottom"
            onProjectEnter={projectEnter}
            onProjectLeave={projectLeave}
          />
      </div>
    </div>
  )
}

export default WorkGrid