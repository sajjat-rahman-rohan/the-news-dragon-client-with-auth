import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import moment from "moment";
import { Card, Col, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-secondary text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <Row xs={1} md={2} lg={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text className="mb-2">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className="d-flex gap-4">
                <p>Sports</p>
                <p className="text-secondary">
                  <FaCalendar></FaCalendar>
                  <small> Jan 2, 2022 </small>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text className="mb-2">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className="d-flex gap-4">
                <p>Sports</p>
                <p className="text-secondary">
                  <FaCalendar></FaCalendar>
                  <small>Jan 21, 2022</small>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text className="mb-2">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div className="d-flex gap-4">
                <p>Sports</p>
                <p className="text-secondary">
                  <FaCalendar></FaCalendar>
                  <small>Jan 13, 2022</small>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LeftNav;
