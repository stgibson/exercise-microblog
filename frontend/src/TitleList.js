import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { v4 as uuid } from "uuid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./Title";

/**
 * Component for displaying list of posts
 * @returns JSX code for rendering post list
 */
const TitleList = () => {
  const titles = useSelector(store => store.titles, shallowEqual);

  return (
    <Row>
      {
        Object.keys(titles).map(titleId => (
          <Col key={ uuid() } xs={ 6 }>
            <Title id={ titleId } title={ titles[titleId] } />
          </Col>
        ))
      }
    </Row>
  );
};

export default TitleList;