import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Cursor from "../components/Cursor.js"
import ClientOnly from "../components/ClientOnly.js"
import Navigation from "../components/Navigation.js"

const IndexPage = () => {
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

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  return (
    <main>
      <div>Hello from Gatsby!</div>
      <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Yudai Suzuki - Home</title>
    <meta name="description" content="The work of Daniel Destefanis, a product design manager from Chicag currently working at Discord." />
  </>
)