import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Commits.css";
const Commits = (props) => {
  return (
    <ListGroup as="ol" numbered>
      {props.item.map((commit) => {
        return (
          <ListGroup.Item
            as="li"
            className="commit d-flex justify-content-between "
            action
            variant="dark"
          >
            <div className="ms-3 me-auto">
              <div className="fw-bold">{commit.message}</div>
              {commit.author}
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Commits;
