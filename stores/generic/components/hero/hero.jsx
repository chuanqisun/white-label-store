import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/images/Hero.svg';

export function Hero() {
  return (
    <StyledDiv>
      <img className="background-image" src={HeroImage} />
      <section className="text-content">
        <h1>Hero title</h1>
        <p>Tell the story behind this hero image.</p>
        <a href="#">Shop now</a> <a href="#">Discover more</a>
      </section>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  --min-height: 20rem;
  --max-height: calc(100vh - 10rem); /* TODO, need header height to calculate offset */

  position: relative;

  .background-image {
    width: 100%;
    min-height: var(--min-height);
    max-height: var(--max-height);
    object-fit: cover;
  }

  .text-content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
  }
`;
