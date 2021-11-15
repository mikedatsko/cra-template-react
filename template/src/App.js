import { Button, Col, Container, Row } from 'reactstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-light border">
          Logo
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border">
          Menu top 1
        </Col>
        <Col className="bg-light border">
          Menu top 2
        </Col>
        <Col className="bg-light border">
          Menu top 3
        </Col>
        <Col className="bg-light border">
          Menu top 4
        </Col>
      </Row>
      <Row>
        <Col
          className="bg-dark border"
          xs="3"
          sm="3"
          md="2"
          lg="2"
        >
          <Button >Menu item 1</Button>
          <Button >Menu item 2</Button>
          <Button >Menu item 3</Button>
          <Button >Menu item 4</Button>
        </Col>
        <Col
          className="bg-light border"
          xs="9"
          sm="9"
          md="10"
          lg="10"
        >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
          </Routes>
        </Col>
      </Row>
      <Row>
        <Col
          className="bg-light border"
          xs="6"
        >

          Bottom 1
        </Col>
        <Col
          className="bg-light border"
          xs="6"
        >
          Bottom 2
        </Col>
      </Row>
    </Container>
  );
}

export default App;
