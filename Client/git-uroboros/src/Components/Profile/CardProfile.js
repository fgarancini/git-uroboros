import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CardProfile.css";

const CardProfile = (props) => {
  return (
      <Card className="text-center card-profile" style={{width:'18rem'}}>
        <Card.Img variant="top" src={props.item.avatar_url} />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href={props.item.html_url} >
            My full profile!
          </Button>
        </Card.Body>
      </Card>
  );
};

export default CardProfile;
