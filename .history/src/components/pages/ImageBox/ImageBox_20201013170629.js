import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import {GraphPage} from '../Graph'
const StyledCard = styled(Card)`
  width: 100%;
  /* height: 27.5vh; */
  display: flex;
  flex-direction:column;
  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  const props = selectedBridge.selectedBridge.properties
  const images = []
 
  return (
    <StyledCard>
      {!selectedBridge ? 
        <p>select Map</p>
        :
        <p>{props.district || props.district_name} hello</p>
      }
      <GraphPage tit />

    </StyledCard>
  );
};

export default ImageBox;
