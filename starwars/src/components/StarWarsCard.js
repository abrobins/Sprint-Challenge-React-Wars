import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Button
} from "reactstrap";

const StarWarsCard = ({ person }) => {
  return (
    <div className="testClass">
      <Card>
        <CardHeader>Name: {person.name} </CardHeader>
        <CardBody>
          <CardSubtitle>Height: {person.height}</CardSubtitle>
          <CardSubtitle>Hair Color: {person.hair_color}</CardSubtitle>
          <CardSubtitle>Eye Color: {person.eye_color}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default StarWarsCard;
