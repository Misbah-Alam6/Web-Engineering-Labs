import { Container, Row, Col, Card } from "react-bootstrap";
function Features() {
  return (
    <section id="features" className="features-section">
      <Container>
        <h2 className="text-center mb-4">
          Why Choose ShopKit?
        </h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Quality Products</Card.Title>
                <Card.Text>
                  Discover carefully selected products
                  made to meet your needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  Get your favorite products delivered
                  conveniently to your doorstep.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Customer Support</Card.Title>
                <Card.Text>
                  Our friendly support team is here
                  to help whenever you need us.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Features;