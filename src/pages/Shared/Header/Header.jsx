import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>
          <b>
            {moment().format("dddd,")}
            <span className="text-secondary">
              {moment().format(" MMMM D, YYYY, h:mm:ss a")}
            </span>
          </b>
        </p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text...... I can be a React component, multiple React components, or
          just some text....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
