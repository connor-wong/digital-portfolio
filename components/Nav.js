import { Container, Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

const Topnav = () => {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container style={{ fontWeight: "bold" }}>
        <Navbar.Brand>&nbsp;Wong Zheng Hui</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginBottom: "10px" }}
        />

        <Navbar.Collapse className="justify-content-center">
          <Nav variant="pills" defaultActiveKey="/">
            <Link href="/" passHref>
              <Nav.Link active={router.asPath === "/"}>
                &nbsp;Home&nbsp;
              </Nav.Link>
            </Link>
            <Link href="/works" passHref>
              <Nav.Link active={router.asPath === "/works"}>
                &nbsp;Works&nbsp;
              </Nav.Link>
            </Link>

            <Link href="/posts" passHref>
              <Nav.Link active={router.asPath === "/posts"}>
                &nbsp;Posts&nbsp;
              </Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.linkedin.com/in/wong-zheng-hui/"
              target="_blank"
            >
              &nbsp;
              <BsLinkedin style={{ paddingBottom: "2px" }} />
              Connect with me &nbsp;
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/connor-wong/" target="_blank">
              &nbsp;
              <BsGithub style={{ paddingBottom: "2px" }} />
              GitHub &nbsp;
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
