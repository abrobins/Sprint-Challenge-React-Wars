import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Collapse,
  CardHeader,
  Button
} from "reactstrap";

const StarWarsCard = ({ person }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="testClass">
      <p></p>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        {person.name}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <CardSubtitle>Height: {person.height}</CardSubtitle>
            <CardSubtitle>Hair Color: {person.hair_color}</CardSubtitle>
            <CardSubtitle>Eye Color: {person.eye_color}</CardSubtitle>
          </CardBody>
        </Card>
      </Collapse>

      {/* <Card>
        <CardHeader>Name: {person.name} </CardHeader>
        <CardBody>
          <CardSubtitle>Height: {person.height}</CardSubtitle>
          <CardSubtitle>Hair Color: {person.hair_color}</CardSubtitle>
          <CardSubtitle>Eye Color: {person.eye_color}</CardSubtitle>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default StarWarsCard;
