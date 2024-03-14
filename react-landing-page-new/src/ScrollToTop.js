// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${props => props.show ? 'block' : 'none'};
`;

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!show && window.pageYOffset > 400) {
        setShow(true);
      } else if (show && window.pageYOffset <= 400) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [show]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <Button show={show} onClick={handleClick}>
      Back to Top
    </Button>
  );
}

export default ScrollToTop;