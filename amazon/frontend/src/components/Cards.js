import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

let imgs = [
  "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2310&q=80",
  "https://images.unsplash.com/photo-1616046619793-7e4badf3fe1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2525&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://www.nme.com/wp-content/uploads/2021/09/Star-Wars-Squadrons-696x442.jpg",
  "https://images.unsplash.com/photo-1587559070757-f72a388edbba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  "https://media.istockphoto.com/photos/vigilantly-monitoring-his-patients-vitals-picture-id592647720?k=20&m=592647720&s=612x612&w=0&h=7w74WizjriwUAX_yf9utV6m-ZVsmip8Cd5f9HVsu7xA=",
];

function Cards() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <Card style={{ width: "25%vw" }}>
              <Card.Img variant="top" src={imgs[0]} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to="/Fitness" className="category-item">
                    {" "}
                    Fitness{" "}
                  </Link>{" "}
                </Card.Title>
                <Card.Text>
                  Start your day right and explore what we have to offer in
                  exercise & fitness equipment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "25%vw" }}>
              <Card.Img variant="top" src={imgs[1]} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to="/Lifestyle" className="category-item">
                    {" "}
                    Lifestyle{" "}
                  </Link>{" "}
                </Card.Title>
                <Card.Text>
                  Explore products that make you live your life your way.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "25%vw" }}>
              <Card.Img variant="top" src={imgs[2]} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to="/Entertainment" className="category-item">
                    {" "}
                    Entertainment{" "}
                  </Link>{" "}
                </Card.Title>
                <Card.Text>
                  Discover best selling games, movies, and books.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "25%vw" }}>
              <Card.Img variant="top" src={imgs[3]} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to="/Gaming" className="category-item">
                    {" "}
                    Gaming{" "}
                  </Link>{" "}
                </Card.Title>
                <Card.Text>
                  Discover what's new in the world of gaming.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "25%vw" }}>
              <Card.Img variant="top" src={imgs[4]} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to="/Pets_and_Animals" className="category-item">
                    {" "}
                    Pets and Animals{" "}
                  </Link>{" "}
                </Card.Title>
                <Card.Text>
                  Looking to spoil your pet? Explore best-selling pet
                  accessories and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "25%vw" }}>
              <Card.Img variant="top" src={imgs[5]} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to="/Medical" className="category-item">
                    {" "}
                    Medical{" "}
                  </Link>{" "}
                </Card.Title>
                <Card.Text>
                  Health in mind? Discover products that will improve your
                  well-being and help you live a healthy life.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
