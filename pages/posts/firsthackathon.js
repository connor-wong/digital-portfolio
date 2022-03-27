import Head from "next/head";
import { Row, Col, Figure } from "react-bootstrap";
const { motion, AnimatePresence } = require("framer-motion");

const FirstHackathon = () => {
  const FIRSTHACKATHON_1 = "../images/govtech_1.jpg";
  const FIRSTHACKATHON_2 = "../images/govtech_2.jpg";
  const FIRSTHACKATHON_3 = "../images/govtech_3.jpg";
  const FIRSTHACKATHON_4 = "../images/govtech_4.jpg";

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
          <h3 className="segment-title">First Hackathon</h3>
          <p>
            Yup! I joined my first Hackathon hosted by GovTech during the
            semester break.
          </p>

          <p>
            The hackathon lasted for 5 days with a series of boot camp, ideation
            and prototyping. My group was given the problem statement
            &quot;Improving the Kampung Spirit in Singapore&quot;. Using the
            Design Thinking process, we started off by preparing numerous
            questions on the topic and conduct interviews with the people during
            the Hackathon. My group collated the interview data and spent the
            next few days analyzing, researching and ideating. Some of the ideas
            & solution we came out were weird, funny and some were already
            implemented.
          </p>

          <p>
            We split tasks based on our strengths and worked hard to design and
            developed a prototype mobile application to solve the problem. As
            someone without any application programming background, I was amazed
            by the amount of existing technology used to create a simple
            application.
          </p>

          <p>
            Nonetheless, our pitching and idea won the hackathon and I had a
            great time learning from students of various background and skills.
          </p>

          <Row>
            <Col>
              <motion.div whileHover={{ scale: 1.5 }}>
                <Figure.Image src={FIRSTHACKATHON_1} rounded fluid />
              </motion.div>
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.5 }}>
                <Figure.Image src={FIRSTHACKATHON_2} rounded fluid />
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: "50px" }}>
            <Col>
              <motion.div whileHover={{ scale: 1.5 }}>
                <Figure.Image src={FIRSTHACKATHON_3} rounded fluid />
              </motion.div>
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.5 }}>
                <Figure.Image src={FIRSTHACKATHON_4} rounded fluid />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FirstHackathon;
