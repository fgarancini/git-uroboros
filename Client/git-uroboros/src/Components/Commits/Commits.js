import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./Commits.css";
const Commits = (props) => {
  return (
    <ListGroup as="ol">
      {props.item.map((commit) => {
        return (
          <ListGroup.Item
            as="li"
            className="commit d-flex justify-content-between "
            action
            variant="dark"
            key={commit.short_sha}
          >
            <div className="ms-3 me-auto">
              <div className="fw-bold">{commit.message}</div>
              {commit.author}
               <i>{`  commited ${commit.created_at}`}</i>
            </div>
            <Button title={commit.sha} href={commit.html_url} size='lg' id="btn-commits">
              {commit.short_sha} 🔗
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Commits;
