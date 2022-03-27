import Head from "next/head";
import { useRouter } from "next/router";
import { Row, Col, Image, Figure, Button } from "react-bootstrap";
import Link from "next/link";
const { motion, AnimatePresence } = require("framer-motion");

const Profile = "/images/Profile.jpg";
const Nus = "./images/nus.jpg";
const BROKEN = "./images/broken_title.jpg";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Wong Zheng Hui - Home </title>
        <meta name="Wong Zheng Hui" content="Wong Zheng Hui - Homepage" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <Row>
            <Col
              style={{
                backgroundColor: "#30373d",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                paddingTop: "12px",
                paddingBottom: "12px",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Hello, I&quot;m a biomedical engineering student based in
              Singapore! 👨🏻‍🔧
            </Col>
          </Row>

          <Row
            style={{
              marginBottom: "24px",
            }}
          >
            <Col sm={8}>
              <h1 style={{ fontWeight: "bold" }}>Wong Zheng Hui</h1>
              <p>Engineering ( Electronics / Developer / Maker )</p>
            </Col>
            <Col sm={4} style={{ textAlign: "center" }}>
              <Image
                className="hover-zoom"
                src={Profile}
                alt="Picture of the author"
                width={100}
                height={100}
                roundedCircle
                thumbnail
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className="segment-title">Bio</h3>
              <Row>
                <Col className="year-title" xs={2}>
                  2000
                </Col>
                <Col xs={10}>
                  Born in Singapore | 新加坡 | Singapura | சிங்கப்பூர்
                </Col>
              </Row>
              <Row>
                <Col className="year-title" xs={2}>
                  2017
                </Col>
                <Col xs={10}>
                  Completed GCE N(A)-Level at New Town Secondary School
                </Col>
              </Row>
              <Row>
                <Col className="year-title" xs={2}>
                  2019
                </Col>
                <Col xs={10}>
                  Attained Higher National ITE Certificate in Electronics
                  Engineering at Institute of Technical Education
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col className="year-title" xs={2}>
                  2022
                </Col>
                <Col xs={10}>
                  Attained Diploma in Biomedical Engineering at Ngee Ann
                  Polytechnic
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "24px" }}>
            <Col>
              <h3 className="segment-title">Experience</h3>
              <Row>
                <Col className="year-title" xs={3}>
                  2017 - 2018
                </Col>
                <Col xs={9}>
                  WorldSkills Singapore Candidate (Electronics) | Institute of
                  Technical Education
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col className="year-title" xs={3}>
                  2018
                </Col>
                <Col xs={9}>
                  Electronics Engineering Intern | SICK PTE. LTD.
                </Col>
              </Row>
              <Row>
                <Col className="year-title" xs={3}>
                  2021 - 2022
                </Col>
                <Col xs={9}>
                  Research Intern | National University of Singapore
                </Col>
              </Row>
              <Row>
                <Col className="year-title" xs={3}>
                  2022 - Current
                </Col>
                <Col xs={9}>
                  Electronics R&D Assistant Engineer | SICK Sensor Intelligence
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "24px", marginBottom: "24px" }}>
            <Col>
              <h3 className="segment-title">Latest Posts</h3>
              <Row>
                <Col>
                  <Link href="/posts/nus" passHref>
                    <Figure>
                      <Figure.Image
                        className="hover-post"
                        src={Nus}
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
                  <Button
                    className="posts-button"
                    onClick={() => router.push("/posts")}
                  >
                    {"< "}View More Posts {">"}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
