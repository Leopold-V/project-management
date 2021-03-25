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
  z-index: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const particleParams = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: 'top',
      out_mode: 'out',
    },
  },
};
