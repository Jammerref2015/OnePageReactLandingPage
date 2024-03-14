// App.js
import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Form from './Form';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Section id="section1" bgImage="/images/section_1.jpg" />
      <Section id="section2" bgImage="/images/section_2.jpg" />
      <Section id="section3" bgImage="/images/section_3.jpg" />
      <Section id="section4" bgImage="/images/section_4.jpg">
        <Form />
      </Section>
      <Section id="section5" bgImage="/images/section_5.jpg" />
      <ScrollToTop />
    </div>
  );
}

export default App;