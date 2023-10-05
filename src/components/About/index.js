import './index.scss';
import Navbar from '../Navbar';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterclass] = useState('text-animate')
    useEffect(() => {
        const timeout = setTimeout(()=> {
          setLetterclass("text-animate-hover")
        },4000)
  
        return () => clearTimeout(timeout);
      }, []) 
    return (
        <>
        <div className="container about-page">
            <Navbar />
            <div className="about-text">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e','.','.']}
                    ind={15}
                    />
                </h1>

                <p className='para-text'>
                An optimistic and meticulous person with a keen interest in developing and learning new 
                stuffs while gaining experiences.
                </p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className='info-tab'>
            <ul>
                <li>
                    <strong>NAME: </strong>
                    <span>Srinidhi R</span>
                </li>
                <li>
                    <strong>LINKEDIN: </strong>
                    <span>
                        <a href="https://www.linkedin.com/in/srinidhi-r-515ba01ab/">@srinidhir</a>
                    </span>
                </li>
                <li>
                    <strong>UNIVERSITY:  </strong>
                    <span>Sri Sairam Engineering College,2023 Batch</span>
                </li>
                <li>
                    <strong>EMAIL:  </strong>
                    <span>rsrinidhi01@gmail.com</span>
                </li>
            </ul>

            </div>
        </div>
        <Loader type="pacman" />     
         </>

        
    )
}

export default About;