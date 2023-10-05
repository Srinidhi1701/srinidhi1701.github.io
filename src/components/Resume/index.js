import './index.scss'
import React, { useRef }from 'react';
import timelineElements from './worktimeline.js';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import Loader from 'react-loaders';


const Resume = () => {

    let workiconstyle = {background: "#f9c74f"};
    let schoolicon = {background: "#03bb85"};
    
    return(
        <>
        <div className='resume-section'>
           
            <VerticalTimeline>
                {timelineElements.map((element) => {
                let isWorkicon = element.icon === "work";
                let isskillicon = element.icon ==="skills";
                    return(
                        <VerticalTimelineElement
                          key={element.key}
                          date={element.date}
                          dateClassName='date-element'
                          iconStyle={isWorkicon ? workiconstyle : schoolicon}
                         
                        >
                        <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                        <h5 className='vertical-timeline-element-location'>{element.location}</h5>
                        <p id="description">{element.description}</p>
                       
                        </VerticalTimelineElement>
                    );

                })
            }
            </VerticalTimeline>
      </div>
      <Loader type="pacman" />
      </>

    );

};

export default Resume;