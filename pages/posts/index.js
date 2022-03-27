import Head from "next/head";
import { Row, Col, Figure } from "react-bootstrap";
import Link from "next/link";
const { motion, AnimatePresence } = require("framer-motion");

const NUS = "./images/nus.jpg";
const BROKEN = "./images/broken_title.jpg";
const HEARTRATE = "./images/heartrate.png";
const FIRSTHACKATHON = "./images/govtech_1.jpg";
const IMP = "./images/IMP.jpeg";

const posts = () => {
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
          <h3 className="segment-title">Posts</h3>
          <Row>
            <Col>
              <Link href="/posts/nus" passHref>
                <Figure>
                  <Figure.Image
                    className="hover-post"
                    src={NUS}
                    rounded
                    fluid
                  />

                  <Figure.Caption className="post-title">
                    My Internship Experience @ NUS
                  </Figure.Caption>
                </Figure>
              </Link>
            </Col>
            <Col>
              <Link href="/posts/broken" passHref>
                <Figure>
                  <Figure.Image
                    className="hover-post"
                    src={BROKEN}
                    rounded
                    fluid
                  />

                  <Figure.Caption className="post-title">
                    Creating An Interactive Story
                  </Figure.Caption>
                </Figure>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/posts/heartrate" passHref>
                <Figure>
                  <Figure.Image
                    className="hover-post"
                    src={HEARTRATE}
                    rounded
                    fluid
                  />
                  <Figure.Caption className="post-title">
                    Heart Rate Project
                  </Figure.Caption>
                </Figure>
              </Link>
            </Col>
            <Col>
              <Link href="/posts/firsthackathon" passHref>
                <Figure>
                  <Figure.Image
                    className="hover-post"
                    src={FIRSTHACKATHON}
                    rounded
                    fluid
                  />
                  <Figure.Caption className="post-title">
                    My First Hackathon
                  </Figure.Caption>
                </Figure>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/posts/imp" passHref>
                <Figure>
                  <Figure.Image
                    className="hover-post"
                    src={IMP}
                    rounded
                    fluid
                  />
                  <Figure.Caption className="post-title">
                    Innovation Made Possible
                  </Figure.Caption>
                </Figure>
              </Link>
            </Col>
            <Col></Col>
          </Row>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default posts;
