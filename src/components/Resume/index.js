import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './index.css'


const Resume = () => {

  return (
    <div>
      <h2>My Resume</h2>
      <a href="./MyResume.pdf" download class="download-btn">
 Download My Resume<FontAwesomeIcon icon={faArrowDown} className='icon'/>
      </a>
    </div>
  );
};

export default Resume;
