import Head from "next/head";
import { Row, Col, Figure } from "react-bootstrap";
const { motion, AnimatePresence } = require("framer-motion");

const WORLDNOISEMAPMOCKUP = "../images/worldnoisemap mockup.png";
const AUDIOPROCESS = "../images/Audio Process.jpg";
const PHONECALIBRATOR = "../images/Phone Calibrator.jpg";
const MICROCLIMATE = "../images/microclimate.jpg";
const GEN2SEPARATE = "../images/gen2 separate.png";
const GEN2OVERALL = "../images/gen2 overall.png";

const Nus = () => {
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
          <h3 className="segment-title">My Internship Experience @ NUS</h3>

          <p>
            I was attached to one of the Mechanical Engineering laboratories,
            the Dynamics laboratory, as a Research Intern under A/Prof Lee Heow
            Pueh, the Deputy Head (Research) for the Department of Mechanical
            Engineering.
          </p>
          <p>
            The 22 weeks internship’s focus heavily on the development of
            acoustic related hardware and software projects to enhance the
            overall workflow and provide opportunities for further research
            possibilities. In addition, I had the opportunity to participate in
            various hardware and software acoustic tool training that are useful
            for future acoustic projects and experiments.
          </p>

          <p>Below is the list of projects developed during the internship.</p>

          <h3 className="segment-title">Projects</h3>
          <Row>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Figure.Image src={WORLDNOISEMAPMOCKUP} rounded fluid />
                </motion.div>
                <Figure.Caption className="post-title">
                  World Noise Map Web Application
                  <p style={{ marginTop: "10px" }}>
                    A web application that display global noise and microclimate
                    data for research, visualisation, and analysis.
                  </p>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">&nbsp;WEBSITE&nbsp;</span>
                      &emsp;
                      <a
                        href="https://www.worldnoisemap.com"
                        style={{ color: "#fc03b8" }}
                      >
                        https://worldnoisemap.com
                      </a>
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">
                        &nbsp;Build with&nbsp;
                      </span>
                      &emsp; React, Node.js, Express.js, Mapbox, Google API
                    </Col>
                  </Row>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Figure.Image src={AUDIOPROCESS} rounded fluid />
                </motion.div>
                <Figure.Caption className="post-title">
                  Audio Signal Processing Application
                  <p style={{ marginTop: "10px" }}>
                    A desktop application for automated processing of audio data
                    for full-spectrum, 1/3 octave and standard deviation.
                  </p>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">
                        &nbsp;Experience&nbsp;
                      </span>
                      &emsp; Reversed engineered an existing audio processing
                      software.
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">&nbsp;Outcome&nbsp;</span>
                      &emsp; Enhanced workflow to less than an hour with 90%
                      accuracy.
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">
                        &nbsp;Build with&nbsp;
                      </span>
                      &emsp; Python, PYQT5, Matplotlib, SciPy
                    </Col>
                  </Row>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Figure.Image src={PHONECALIBRATOR} rounded fluid />
                </motion.div>
                <Figure.Caption className="post-title">
                  Phone Calibrator Application
                  <p style={{ marginTop: "10px" }}>
                    A desktop application to integrate and simplify existing
                    phone microphone calibration process for noise measurements.
                  </p>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">&nbsp;Outcome&nbsp;</span>
                      &emsp; Simplfied calibration platform for NUS students.
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">
                        &nbsp;Build with&nbsp;
                      </span>
                      &emsp; Java, Python, PYQT5, Matplotlib, Subprocess
                    </Col>
                  </Row>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row style={{ marginBottom: "50px" }}>
            <Col>
              <Figure>
                <motion.div whileHover={{ scale: 1.5 }}>
                  <Figure.Image src={MICROCLIMATE} rounded fluid />
                </motion.div>
                <Row>
                  <Col>
                    <motion.div whileHover={{ scale: 2 }}>
                      <Figure.Image src={GEN2SEPARATE} rounded fluid />
                    </motion.div>
                  </Col>
                  <Col>
                    <motion.div whileHover={{ scale: 2 }}>
                      <Figure.Image src={GEN2OVERALL} rounded fluid />
                    </motion.div>
                  </Col>
                </Row>
                <Figure.Caption className="post-title">
                  Microclimate Measurement Device
                  <p style={{ marginTop: "10px" }}>
                    A device to provide GPS information and environmental
                    measurement of temperature, humidity and radiance.
                  </p>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">&nbsp;WEBSITE&nbsp;</span>
                      &emsp;
                      <a
                        href="https://github.com/connor-wong/Microclimate-Measurement-Device"
                        style={{ color: "#fc03b8" }}
                      >
                        GitHub Page
                      </a>
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">&nbsp;Outcome&nbsp;</span>
                      &emsp; Developed two generations (Proof of concept &
                      Enhanced model).
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">
                        &nbsp;Additional&nbsp;
                      </span>
                      &emsp; Data integration with the World Noise Map Web
                      Application.
                    </Col>
                  </Row>
                  <Row className="work-info">
                    <Col>
                      <span className="work-header">
                        &nbsp;Build with&nbsp;
                      </span>
                      &emsp; Arduino, 3D Design & Printing, Electronics, Product
                      Development
                    </Col>
                  </Row>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Nus;
