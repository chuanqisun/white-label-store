import React from 'react';
import styled from 'styled-components';
import { Carousel } from './carousel';

export function CarouselDemo() {
  return (
    <StyledDiv>
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Carousel>
    </StyledDiv>
  );
}

export default CarouselDemo;

const StyledDiv = styled.div``;
