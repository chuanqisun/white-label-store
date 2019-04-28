import React from 'react';
import styled from 'styled-components';
import ProductImage from '../../assets/images/Product.svg';
import { space } from '../../styles';

export function MediaAlbum() {
  return (
    <StyledDiv>
      <img className="spotlight-media" src={ProductImage} />
      <div className="thumbnail-media-group">
        <img className="thumbnail-media" src={ProductImage} />
        <img className="thumbnail-media" src={ProductImage} />
        <img className="thumbnail-media" src={ProductImage} />
        <img className="thumbnail-media" src={ProductImage} />
        <img className="thumbnail-media" src={ProductImage} />
        <img className="thumbnail-media" src={ProductImage} />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  --grid-gap: ${space.scale(4)};

  display: grid;
  grid-template-rows: auto auto;
  grid-gap: var(--grid-gap);

  .spotlight-media {
    width: 100%;
  }

  .thumbnail-media-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    grid-gap: var(--grid-gap);
  }

  .thumbnail-media {
    width: 100%;
  }
`;
