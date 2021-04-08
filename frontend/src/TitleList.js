import React, { useState, useEffect } from "react";
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
  const [titleIdsSorted, setTitleIdsSorted] = useState([]);

  /**
   * Compares title ids based on votes of their respective titles
   * @param {string} titleId1 
   * @param {string} titleId2 
   * @returns 1 if votes for title with id titleId1 < votes for title with id
   * title2, -1 if votes for title with id titleId1 > votes for title with id
   * title2, or 0 otherwise
   */
  const compareTitleIds = (titleId1, titleId2) => {
    const title1 = titles[titleId1];
    const title2 = titles[titleId2];
    if (title1.votes < title2.votes) {
      return 1;
    }
    if (title1.votes > title2.votes) {
      return -1;
    }
    return 0;
  };

  /**
   * Sorts title ids based on votes of their respective titles
   */
  const sortTitleIds = () => {
    const titleIds = Object.keys(titles);
    titleIds.sort(compareTitleIds); // Learned how to use sort at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    setTitleIdsSorted(titleIds);
  };

  useEffect(() => {
    sortTitleIds();
  }, [titles]);

  return (
    <Row>
      {
        titleIdsSorted.map(titleId => (
          <Col key={ uuid() } xs={ 6 }>
            <Title id={ titleId } title={ titles[titleId] } />
          </Col>
        ))
      }
    </Row>
  );
};

export default TitleList;