import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

export const ParticlesBackground = () => {
  return <ParticlesStyled params={particleParams} />;
};

export const ParticlesStyled = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -9999;
  background-color: #030111;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const particleParams = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: false,
      speed: 0.1,
      direction: 'bottom',
      out_mode: 'out',
    },
  },
};
