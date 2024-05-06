import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>

      <Row className="my-2">
        <Col sm className="px-lg-5">
          <h2 id="what-we-are" aria-label="What We Are">What We Are</h2>
          <p id="what-we-are-description">
            Mosaic Minds is a UK-wide network celebrating neurodiversity, connecting unique minds in a supportive online community. We offer a spectrum of events, from educational workshops to creative meet-ups, fostering a space where every neurodiverse individual can thrive. Our platform is a sanctuary for connection, learning, and growth, where each voice is heard and every story is valued. Together, we are redefining neurodiversity, championing understanding, acceptance, and empowerment.
          </p>
        </Col>
      </Row>

      <Row className="my-2">
        <Col sm className="px-lg-5">
          <h2>Our History</h2>
          <p>
            <b>2005:</b> Founded in London, Mosaic Minds began as a small group of individuals passionate about neurodiversity. Their mission was simple yet profound – to create a supportive community for neurodiverse individuals.
          </p>
        </Col>
      </Row>

      <Row className="my-2">
        <Col sm className="px-lg-5">
          <h2>Why We Do It</h2>
          <p>
            At Mosaic Minds, we're driven by the untapped potential within the neurodiverse community. Our mission is to illuminate and celebrate neurodiversity, creating an environment where every individual flourishes. Through shared experiences and mutual support, we're building a future where neurodiversity is recognized as a unique advantage. We're not just envisioning a more inclusive world; we're actively crafting it, one event and one connection at a time.
          </p>
        </Col>
      </Row>

      
    </Container>
  );
};

export default AboutUs;
