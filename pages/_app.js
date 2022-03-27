import Topnav from "../components/Nav";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap"
        rel="stylesheet"
      />
      <Topnav />
      <Container
        style={{
          color: "white",
          maxWidth: "550px",
        }}
      >
        <Row>
          <Col style={{ height: "20vh" }}> </Col>
        </Row>
        <Component {...pageProps} />
      </Container>

      <span className="copyright">
        &copy; 2022 Wong Zheng Hui. All Rights Reserved.
      </span>
    </>
  );
}

export default MyApp;
