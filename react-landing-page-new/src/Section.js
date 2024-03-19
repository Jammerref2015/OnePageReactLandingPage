// Section.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const SectionStyled = styled.section`
  animation: 2s ${fadeIn} ease-in;
`;

function Section({ id, bgImage, children }) {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <SectionStyled>

    <section id={id} style={sectionStyle}>
      {children}
    </section>
    </SectionStyled>
  );
}

export default Section;