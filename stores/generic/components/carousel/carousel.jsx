import React, { useState } from 'react';
import styled from 'styled-components';

export function Carousel(props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function goToNext() {
    setCurrentSlideIndex((currentSlideIndex + 1) % props.children.length);
  }

  function goToPrevious() {
    setCurrentSlideIndex((currentSlideIndex + props.children.length - 1) % props.children.length);
  }

  function goToIndex(i) {
    setCurrentSlideIndex(i);
  }

  return (
    <StyledDiv>
      <div className="slides">
        {props.children.map((child, index) => (
          <div key={index} className={`slide${index === currentSlideIndex ? ' slide--selected' : ''}`}>
            {child}
          </div>
        ))}
      </div>
      <button onClick={goToPrevious}>Prev</button>
      <button onClick={goToNext}>Next</button>
      <div className="indicators">
        {props.children.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="currentSlide"
            checked={index === currentSlideIndex}
            className={`indicator${index === currentSlideIndex ? ' indicator--selected' : ''}`}
            onChange={() => goToIndex(index)}
          />
        ))}
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .slide--selected {
    border: 1px solid black;
  }

  .indicator--selected {
    color: white;
    background-color: black;
  }
`;
