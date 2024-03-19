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
      <img src="/images/Revolutionizing_Large_Text.png" alt="Logo" className="RevolutionizingText unselectable" />
      <h2 className="section-subtitle  manropeSettings unselectable">tomorrow's tech landscape, one line of code at a time!</h2>

      <img src="/images/Logo.png" alt="Logo" className="navbar-logo-section1 unselectable" />
 
      </Section>
      <Section id="section2" bgImage="/images/Low-ModernOffice_Overall_Plan.jpg">
      <div class="section2-blurb">
        <p>Work</p>
        <p>with</p>
        <p>the</p>
        <p>best.</p>
      </div>       
      <div className="image-container">
            <img src="/images/Woman_Profile.jpg" alt="Business Woman Profile" className="S2_Woman_Profile unselectable" />
            <img src="/images/Man_Profile.jpg" alt="Business Man Profile" className="S2_Man_Profile unselectable" />
            <img src="/images/Woman_Working_At_Desk.jpg" alt="Woman working at desk" className="S2_Woman_Working_At_Desk unselectable" />
      </div>
      </Section>
      <Section id="section3" bgImage="/images/section_3.jpg">
      <div className='section3-image-container'>
        <img src="/images/Office_Shot.jpg" alt="Office" className="S3_Office_Shot unselectable" />
      </div>
      <div className='section3-text'>
        <p>Join our innovative software company, </p>
        <p>where creativity thrives, </p>
        <p>challenges are embraced,</p>
        <p> and every idea has the power to shape tomorrow.</p>
      </div>
      </Section>
      <Section id="section4" bgImage="/images/section_4.jpg">
        <Form className="glass-effect" />
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