import Loader from 'react-loaders';
import './index.scss';

const contact = () => {
    

    return (
        <>
        <div className='contact-page'>
           <div className='text-contact'>
           <h1>Contact me..
           </h1>
           <div className='cinfo-tab'>
            <ul>
                <li>
                <strong>EMAIL: </strong>
                <span>
                <a href="mailto:rsrinidhi01@gmail.com">rsrinidhi01@gamil.com</a>
                </span>
                </li>
                <li>
                    <strong>LINKEDIN: </strong>
                    <span>
                        <a href="https://www.linkedin.com/in/srinidhi-r-515ba01ab/">@srinidhir</a>
                    </span>
                </li>
            </ul>
            </div>

            </div> 
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default contact;