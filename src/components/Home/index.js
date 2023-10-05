import './index.scss';
import backgroundimage from '../../assets/images/backgrnd-image2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterclass] = useState('text-animate')
    const nameArray = ['S','r','i','n','d','h','i']

    useEffect(() => {
      const timeout = setTimeout(()=> {
        setLetterclass("text-animate-hover")
      },4000)

      return () => clearTimeout(timeout);
    }, [])  

    return (
    <>
    <div className='conatiner home-page'>
      <div className='main-log'>
      <img src={backgroundimage} alt="bkrndimage" />
      <h1 className='text-design'>I'M  <AnimatedLetters letterClass={letterClass} 
      strArray={nameArray}
      ind={15}/>
      </h1>
      <h1 className='para-design'>Developer, Innovator</h1>
      <ul>
            <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/srinidhi-r-515ba01ab/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color='white'></FontAwesomeIcon>
                  </a>
            </li>
            <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srinidhi12/"
                  >
                    <FontAwesomeIcon icon={faGithub} color='white'></FontAwesomeIcon>
                  </a>
            </li>
        </ul>
      
        </div>
    </div>
    <Loader type="pacman" />
    </>
    )
}

export default Home;