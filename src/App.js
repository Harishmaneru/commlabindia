import React, { useState } from 'react';
import './App.css';
import aiBannerImage from './assets/training-with-ai-banner.png';
import seat from './assets/Capture.jpg';
import  background  from './assets/ai-banner2.jpg';
import logo from './assets/logos-v2.png'
import rakesh from './assets/rk-prasad-ai-webinar.jpg'
import salini from './assets/Shalini.jpg'
import rajesh from './assets/rajesh-v4.jpg'

import footer from './assets/logo.png'
function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    mobileNumber: '',
  });

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <div className="background-image-1"></div>
      <div className="background-image-2"></div>
      <div className="content">
        <div className="centered-text">
          "Some people call this artificial intelligence, but the reality is this technology will enhance us. So, instead of artificial intelligence, I think we’ll augment our intelligence” - Ginni Rometty – Former CEO & President, IBM
        </div>
        <div className="additional-content">
          <div className="ai-banner-image">
            <img src={aiBannerImage} alt="AI Banner" />
          </div>
          <div className="additional-content-text">
            <p className="small-text">The Top Trending Topic of the Year</p>
            <h2 className="big-text">Unleashing the Potential of <br /> AI in Corporate Training</h2>
            <hr className="custom-hr" />

            <div className="icon-list">
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
               Learn how AI is helping corporates upskill and reskill the workforce
              <br />
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
                Walk away with tips, tools, and resources to get started with AI-empowered training
            </div>
            <div className='rk1'>
            <p className='rk'><strong>JOIN DR RK Prasad, Shalini, Rajesh LIVE</strong></p>
            <p><strong> Tuesday, January 09, 2024</strong></p>
            <p> <strong> 11 AM Eastern | 8 AM Pacific</strong></p>
            <p> <strong> Duration: 90 Minutes</strong></p>
            <span><strong id="value-text">$997 VALUE</strong></span> <i className='value-text1'>FREE!</i>
            </div>
          </div>
          
        </div>
      </div>

      <div className="button1">
      <div className="seat">
        <img src={seat} alt="seat" className="s1" />
        <button className="secure-button" type="button" onClick={openPopup}>
        <strong  > SECURE YOUR SEAT </strong>
</button>
</div>
</div>
      {showPopup && (
 
<div className="modal">
  <div className="modal-content">
    <span className="close" onClick={closePopup}>
     
    </span>
    <h2 className="form-label">Register For The FREE Webinar</h2>
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="businessEmail" className="form-label">
          Business Email
        </label>
        <input
          type="email"
          id="businessEmail"
          name="businessEmail"
          value={formData.businessEmail}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your business email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
        />
        <span className="error-message">
          {formData.businessEmail !== "" && !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(formData.businessEmail)
            ? "Email must be formatted correctly."
            : ""}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="mobileNumber" className="form-label">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your mobile number"
          pattern="[0-9+()-.x]+"
        />
        <span className="error-message">
          {formData.mobileNumber !== "" && !/^[0-9+()-.x]+$/.test(formData.mobileNumber)
            ? "Mobile number must contain only numbers, +()-. and x."
            : ""}
        </span>
      </div>
      <button type="submit" className="form-input submit-button">
      <strong> SECURE YOUR SEAT</strong>
      </button>
    </form>
  </div>
</div>
 

     
      )}
<br/>
 
<div class="image-container">
<img
    src={background }
    alt="AI Banner 2"
    className="image-overlay"
  />
  <img
    src={logo }
    alt="Logos V2"
    className="image-overlay1"
  />
  </div>
 
  <div class="image-container2">
  <div className="icon-list1">
  <h2> <strong> YOU WILL LEARN: </strong> </h2>
  
  <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
       <strong>  Evolution of AI and Corporate Training.</strong> 
              <br />
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
           <strong>      How AI can close skills gaps with rapid upskilling and reskilling. </strong>    <br />
                <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
           <strong>     Steps to integrate AI tools in training programs.</strong> 
              <br />
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
            <strong>     Challenges and opportunities with AI implementation. </strong>    <br />
                <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
              <strong>   Roadmap to align training with business goals.</strong>     <br />
      
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
              <strong>    Live action – creating assets with Vyond Go, Synthesia, Quizbot.  </strong>   <br />
                <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                alt="Custom Icon"
                width="20"
                height="20"
              />
              <strong>     Best way Learning Architects can use AI.</strong> 
              <br />
              
            <h2 className='h2'> <strong>Unleashing the Potential of<br/>AI in Corporate Training  </strong></h2>
            <h4 className ='h4'> <strong>The Impact of AI on L&amp;D – Insights and Applications</strong></h4>
            <h2 className ='h2'><strong>Tuesday, January 09, 2024<br/>11 am Eastern | 8 am Pacific<br/>Duration: 90 Minutes</strong></h2>
            </div>   
</div>         


<div className="button2">
            <div className="seat1">
        <img src={seat} alt="seat" className="s2" />
        <button className="secure-button" type="button" onClick={openPopup}>
  SECURE YOUR SEAT <br/><span><strong id="value-text1">$997 VALUE</strong></span> <i className='value-text2' >FREE!</i>
</button>
</div>      
</div>
 
<div className= "main" >
<br />
<br />
<br />
<br />
<div className="img-container3"  >
        <div className="image-item">
          <img src={rakesh} alt="Description1" className="rkimg"   />
          <h3 className='rkh'>      RK Prasad       </h3>
          <h6 className='rkh'>   CEO & Co-Founder   </h6>
          <span className='rk'  >RK has nurtured CommLab India from concept to commercial success, and is responsible for formulating the business strategy. He is also responsible for nurturing customer relationships. 
<br/>
<br />
 
An entrepreneur at heart, RK has 35 years of experience in Sales, Corporate training, University teaching, and eLearning. He regularly conducts seminars and webinars for customers across the world on various topics of technology-enhanced learning.
<br/>
<br />
 
RK holds a PhD in Mobile Learning from Lancaster University, UK, and an MBA.
<br/>
<br />
 
A good teacher and engaging trainer, RK helps people learn and bloom. His priorities are his employees, his customers, and his community.</span>
        </div>

        <div className="image-item">
          <img src={salini} alt="Description2" className="shimg"   />
          <h3 className='rkh' > Shalini Merugu</h3>
          <h6 className='rkh'>Director - Learning Solutions</h6>
          <span className='shalini'   >Shalini is a versatile learning design professional with 16+ years of experience in instructional design (ILT, VILT, and eLearning).
<br/>
<br />
Her experience in designing eLearning solutions along with designing and delivering instructor-led training helps her leverage the strengths of each medium to consistently create impactful training solutions, ensuring that nothing is lost when converting from one format to another.
<br/>
<br />
Apart from improving the quality of learning solutions, she also conducts customer education workshops at customer sites globally and presents webinars on learning design.</span>
        </div>

        <div className="image-item">
          <img src={rajesh} alt="Description3" className="raimg"  />
          <h3 className='rkh'>Rajesh Venkata</h3>
          <h6 className='rkh'>Director – Innovation</h6>
          <span className='rajesh'  >Rajesh started his career as a Quality Executive in 2008, and gained expertise in eLearning, digital content delivery, and project management, over these 15+ years.
<br/>
<br />
Rajesh has an excellent track record of team management and operational planning, along with good knowledge of eLearning authoring tools such as Storyline, Captivate, and Lectora.
<br/>
<br />
Well-experienced in managing multiple projects for global clients, Rajesh has a keen eye for trends in the tech-enabled learning space. This made him the natural choice for the current role, where he researches the latest tools and tech, and guides the CommLab India team in leveraging them to address training needs faster, better, and er.</span>
        </div>
      </div>
 
<br />
      </div>
      <div className='foot'>
      <h2 className='h2'> <strong>Unleashing the Potential of AI in Corporate Training  </strong></h2>
            <h4 className ='h4'> <strong>The Impact of AI on L&amp;D – Insights and Applications</strong></h4>
            <h2 className ='h2'><strong>Tuesday, January 09, 2024<br/>11 am Eastern | 8 am Pacific<br/>Duration: 90 Minutes</strong></h2>


</div>
<div className="parent-container">
            <div className="seat2">
        <img src={seat} alt="seat" className="s2" />
        <button className="secure-button" type="button" onClick={openPopup}>
  SECURE YOUR SEAT <br/><span><strong id="value-text1">$997 VALUE</strong></span> <i className='value-text2' >FREE!</i>
</button>
</div>       
</div> 
<br />
<br />
<div className='mainfooter'>
 <div className='footer'>
 <br />
<br />
 <  img
src={footer}
 alt="Icon"
width="250"
height="70" className='foot-icon'
/> 
<span className='ft'> &nbsp; &nbsp; &nbsp;  Copyright © 2023, CommLab India. </span>
<span className='ft1'>    Privacy Policy | Site Map &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
<br />
<br />
</div>   
</div>
</div>   
  );
}

export default App;