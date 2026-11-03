
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <Container>
        <p>© 2026 ShopKit. All rights reserved.</p>
        <div>
          <a href="#home">Home</a>
          {" | "}
          <a href="#features">Features</a>
          {" | "}
          <a href="#contact">Contact</a>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;