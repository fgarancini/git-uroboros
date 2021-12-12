import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CardRepo.css";

const CardRepo = (props) => {
  return (
      <Card className="card-repo">
        <Card.Body>
          <label className="label-repo">{props.repo.full_name}</label>
          <Button className="btn-repo" href={props.repo.html_url}>
            Repo 🚀
          </Button>
        </Card.Body>
      </Card>
  );
};

export default CardRepo;
