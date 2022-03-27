import Head from "next/head";
import { Row, Col, Figure } from "react-bootstrap";
const { motion, AnimatePresence } = require("framer-motion");

const WORLDNOISEMAP = "./images/worldnoisemap.jpg";
const MICROCLIMATE = "./images/microclimate.jpg";
const RASPITAR = "./images/raspitar.jpg";
const SINGHEALTH = "./images/singhealth.jpg";
const BROKEN = "./images/broken_title.jpg";

const works = () => {
  return (
    <>
      <Head>
        <title>Wong Zheng Hui - Works </title>
        <meta name="Wong Zheng Hui" content="Wong Zheng Hui - Works" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="segment-title">Works</h3>
          <Row>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 2 }}>
                  <Figure.Image
                    className="hover-post"
                    src={WORLDNOISEMAP}
                    rounded
                    fluid
                    onClick={() =>
                      window.open("https://www.worldnoisemap.com", "_blank")
                    }
                  />
                </motion.div>
                <Figure.Caption className="post-title">
                  World Noise Map Web Application
                  <p style={{ marginTop: "10px" }}>
                    A web application that display global noise and microclimate
                    data for research, visualisation, and analysis.
                  </p>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 2 }}>
                  <Figure.Image
                    className="hover-post"
                    src={MICROCLIMATE}
                    rounded
                    fluid
                    onClick={() =>
                      window.open(
                        "https://github.com/connor-wong/Microclimate-Measurement-Device",
                        "_blank"
                      )
                    }
                  />
                </motion.div>
                <Figure.Caption className="post-title">
                  Microclimate Measurement Device
                  <p style={{ marginTop: "10px" }}>
                    A device to provide GPS information and environmental
                    measurement of temperature, humidity and radiance.
                  </p>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 2 }}>
                  <Figure.Image
                    className="hover-post"
                    src={RASPITAR}
                    rounded
                    fluid
                    onClick={() =>
                      window.open(
                        "https://github.com/connor-wong/Temperature-Monitoring-Attendance-Taking-System",
                        "_blank"
                      )
                    }
                  />
                </motion.div>
                <Figure.Caption className="post-title">
                  RaspiTAR Web Application
                  <p style={{ marginTop: "10px" }}>
                    A web application designed for teachers to access
                    student&apos;s information conveniently.
                  </p>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 2 }}>
                  <Figure.Image
                    className="hover-post"
                    src={SINGHEALTH}
                    rounded
                    fluid
                    onClick={() =>
                      window.open(
                        "https://github.com/connor-wong/singhealth-webapp",
                        "_blank"
                      )
                    }
                  />
                </motion.div>
                <Figure.Caption className="post-title">
                  SingHealth Retail Audit Web Application
                  <p style={{ marginTop: "10px" }}>
                    A web application designed to digitalize the audit
                    checklists of retail stores at hospitals in Singapore.
                  </p>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 2 }}>
                  <Figure.Image
                    className="hover-post"
                    src={BROKEN}
                    rounded
                    fluid
                    onClick={() =>
                      window.open("https://connor-w.itch.io/broken", "_blank")
                    }
                  />
                </motion.div>
                <Figure.Caption className="post-title">
                  Interactive Story: BROKEN?
                  <p style={{ marginTop: "10px" }}>
                    An online interactive story about self-acceptance and mental
                    health.
                  </p>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row style={{ marginBottom: "5rem" }}>
            <Col></Col>
          </Row>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default works;
