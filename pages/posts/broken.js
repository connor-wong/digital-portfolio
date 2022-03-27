import Head from "next/head";
import { Row, Col, Figure } from "react-bootstrap";
const { motion, AnimatePresence } = require("framer-motion");

const BROKENONE = "../images/broken_1.JPG";
const BROKENTWO = "../images/broken_2.JPG";
const BROKENTHREE = "../images/broken_3.JPG";

const Broken = () => {
  return (
    <>
      <Head>
        <title>Wong Zheng Hui - Posts </title>
        <meta name="Wong Zheng Hui" content="Wong Zheng Hui - Works" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="segment-title">Creating An Interactive Story</h3>
          <p>
            The Interactive Story: BROKEN? was a project initiated by the NPYA
            Pacers club for the Student Wellness Day event in collaboration with
            NP Peer Helpers. Due to the Covid-19 restriction, the event has to
            be held online and that was how this interactive story idea came
            about.
          </p>
          <p>
            BROKEN? is an interactive story played from the protagonist
            perspective. You play as Shaun, a young man who’s going through his
            journey of acceptance. However, he faced uncertainties along the way
            and you will guide him through this journey.
          </p>
          <p>
            The interactive story was developed with Twine, an open-source tool
            for making interactive fiction in the form of web pages. Everything
            was created from scratch, the base story content, the hand-drawn
            illustrations to the AI-generated music by Evoke Music.
          </p>
          <p>
            This project has given me the opportunity to learn and apply basic
            HTML, CSS and Javascript. It was challenging and there were times
            where my team wanted to give up during development. But I&apos;m
            glad that we persevered through and made a working prototype at the
            end of the day.
          </p>
          <Figure.Caption className="post-title">
            <Row className="work-info">
              <Col>
                <span className="work-header">&nbsp;WEBSITE&nbsp;</span>
                &emsp;
                <a
                  href="https://connor-w.itch.io/broken"
                  style={{ color: "#fc03b8" }}
                >
                  Try It Out
                </a>
              </Col>
            </Row>
            <Row className="work-info">
              <Col>
                <span className="work-header">&nbsp;Build with&nbsp;</span>
                &emsp; Twine, Javascript, HTML, CSS
              </Col>
            </Row>
          </Figure.Caption>
          <h3 className="segment-title">Screenshots</h3>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Figure.Image src={BROKENONE} rounded fluid />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Figure.Image src={BROKENTWO} rounded fluid />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            style={{ marginBottom: "50px" }}
          >
            <Figure.Image src={BROKENTHREE} rounded fluid />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Broken;
