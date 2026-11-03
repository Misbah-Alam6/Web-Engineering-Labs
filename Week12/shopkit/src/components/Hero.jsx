import { Container, Button } from "react-bootstrap";
function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <h1>Discover Products You'll Love</h1>
        <p>
          Explore quality products, enjoy amazing deals,
          and experience convenient online shopping.
        </p>
        <Button variant="primary" size="lg" href="#features">
          Explore Now
        </Button>
      </Container>
    </section>
  );
}
export default Hero;