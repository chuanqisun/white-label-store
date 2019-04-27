import React from 'react';
import styled from 'styled-components';
import { pageClamp, sizeStatic } from '../../styles';
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
  position: relative;

  .background-image {
    width: 100%;
    max-height: calc(100vh - 10rem);
    object-fit: cover;
  }

  .text-content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
  }
`;
