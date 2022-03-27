import Head from "next/head";
import { Row, Col, Figure } from "react-bootstrap";
const { motion, AnimatePresence } = require("framer-motion");

const IMP = () => {
  const IMP = "../images/IMP.jpeg";

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
          <h3 className="segment-title">Inovation Made Possible</h3>
          <p>
            Glad that I have gone through modules like Innovation Made Possible.
            It has taught me that there are no such things as a bad idea but
            rather, a combination of ideas or improving it is what makes people
            innovative.
          </p>

          <p>
            Innovation Made Possible is a module that encourages students to
            think out of the box and come out with innovative ideas to solve
            problems that are found around the campus. Students are required to
            produce a physical prototype of the finalized idea and promote the
            idea to various judges or students.
          </p>

          <p>
            Surprisingly, my group was nominated for the Innovation Made
            Possible Award 2019, where the top 10 projects would be presented in
            front of the judges on stage. Though my group did not win the top 3
            projects category, it&apos;s already a great achievement for my
            group to have been chosen for the top 10 projects out of 300+
            projects. It was quite an experience and I&apos;m grateful to have
            met and work with a group of wonderful students for this module.
          </p>

          <p>
            With that, here&apos;s the promotional video and picture of the
            project that my group has done.
          </p>
          <Row className="work-info">
            <Col>
              <span className="work-header">&nbsp;VIDEO&nbsp;</span>
              &emsp;
              <a
                href="https://drive.google.com/file/d/1B4k4zksRyQRi-icUmuo0sEqh_dtg1qBf/view?usp=sharing"
                style={{ color: "#fc03b8" }}
              >
                Link
              </a>
            </Col>
          </Row>
          <motion.div
            whileHover={{ scale: 1.5 }}
            style={{ marginTop: "10px", marginBottom: "50px" }}
          >
            <Figure.Image src={IMP} rounded fluid />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default IMP;
