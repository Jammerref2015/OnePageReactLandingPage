// App.js
import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Form from './Form';
import ScrollToTop from './ScrollToTop';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Section id="section1" bgImage="/images/Coffee.jpg">
      <h1 className="section-title unselectable">Revolutionizing</h1>
      <h2 className="section-subtitle unselectable">tomorrow's tech landscape, one line of code at a time!</h2>

      <img src="/images/Logo.png" alt="Logo" className="navbar-logo-section1 unselectable" />
 
      </Section>
      <Section id="section2" bgImage="/images/section_2.jpg">
      <h1>Welcome to Section 2</h1>
        <p>Text</p>
      </Section>
      <Section id="section3" bgImage="/images/section_3.jpg">
      <h1>Welcome to Section 3</h1>
        <p>Text</p>
      </Section>
      <Section id="section4" bgImage="/images/section_4.jpg">
      <h1>Welcome to Section 4</h1>
        <Form />
      </Section>
      <Section id="section5" bgImage="/images/section_5.jpg">
      <h1>Welcome to Section 5</h1>
        <p>Text</p>
      </Section>
      <ScrollToTop />
    </div>
  );
}

export default App;