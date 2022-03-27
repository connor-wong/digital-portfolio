import Head from "next/head";
import { Figure } from "react-bootstrap";
const { motion, AnimatePresence } = require("framer-motion");

const HEARTRATE = "../images/heartrate.png";
const CIRCUIT = "../images/heartrate_circuit.jpg";
const DIAGRAMONE = "../images/heartrate_1.JPG";
const DIAGRAMTWO = "../images/heartrate_2.JPG";

const Heartrate = () => {
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
          <h3 className="segment-title">Heart Rate Project</h3>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Figure.Image src={CIRCUIT} rounded fluid />
          </motion.div>
          <p>
            As part of the Medical Instrumentation module project, my class was
            tasked to develop a simple heart rate measurement device. Due to the
            Covid-19 restriction, the whole process of prototyping and testing
            was limited to only 2 lab sessions.
          </p>
          <h3 className="segment-title">Problem</h3>
          <p>
            During the first session, my circuit was not providing the desired
            output of the heart rate. Troubleshooting the circuit shows that the
            IR sensor and the voltage follower circuit were working but the
            signal conditioning circuit was providing a constant saturated
            output signal. Due to time constraints, I did not manage to fully
            troubleshoot the heart rate circuit at the end of the 1st lab
            session.
          </p>
          <h3 className="segment-title">Solution</h3>
          <p>
            I invested some time before the 2nd lab session researching online
            for possible theoretical solutions. The research eventually narrowed
            down to one possible theoretical solution. The signal conditioning
            circuit was not receiving enough voltage from the power supply.
            During the 1st lab session, I recalled that the power supply was not
            providing a constant output voltage. It was flicking between 4.6V –
            4.9V. Reading the datasheet of the TL072C Opamp also revealed that
            the minimum operating voltage is 5V. Hence, I concluded that the
            signal conditioning circuit did not receive enough voltage.
          </p>

          <p>
            With the research conclusion I had in mind, I went on to test my
            theoretical solution during the 2nd lab session. I increased the
            voltage of the power supply to 5.3V due to the flickering issue
            between 5V – 5.3V. My heart rate circuit eventually works and
            provide the desired output signals, proving that my theoretical
            solution was correct.
          </p>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Figure.Image src={HEARTRATE} rounded fluid />
          </motion.div>
          <h3 className="segment-title">Reflection</h3>
          <p>
            This project has provided me with the freedom to design and
            prototype my heart rate circui by applying basic knowledge of
            Operational Amplifier and Signal Conditioning gained from the
            module. Throughout the designing stage, I have come out with 2
            circuit designs
          </p>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Figure.Image src={DIAGRAMONE} rounded fluid />
          </motion.div>
          <p>
            The first design taught me that designing requires numerous
            considerations in mind. For example, the amount of current provided
            by the IR sensor will affect the overall output signal, especially
            when the power supply is not stable. Also, the pressure variation
            between the finger and the IR sensor will lead to inconsistence
            output signals. Hence, the quality of the hardware (power supply, IR
            sensors etc) and calculations of current consumption, cut-off
            frequencies and gain are key considerations to design a good quality
            heart rate circuit.
          </p>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Figure.Image src={DIAGRAMTWO} rounded fluid />
          </motion.div>
          <p style={{ marginBottom: "50px" }}>
            The second design, on the other hand, taught me to simplify the
            circuit further without compromising the key considerations. By
            reducing the number of components used and performing some
            calculations, I was able to design the new circuit that was easy to
            understand and troubleshoot.
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Heartrate;
