import './index.scss';
import Card from './Projectcard.js';
import React, {useState}from 'react';
import Loader from 'react-loaders';

const Projecttab = () =>{
   
    return (
        <>
        <div className='projects-section'>
        <div className='card-row'>
        <Card 
        title="E-Cart Management"
        date="March 2023 - April 2023"
        tools= "Backend Development: C#, Database Management: SQL"
        description= 'Designed and created API for an E-cart system with features such as product display,cart management,order modification. Designed a SQL database for the E-Cart Management system.'
        imageUrl="https://enapps.com/wp-content/uploads/2022/10/A71929EE-06C8-4D3C-ADA9-A6ACC41B6FC0.png"
        
        />
        <Card
        title='Employee Management System(CRUD Operations) In MVC'
        date='September 2022 - December 2022'
        tools='ASP.NET MVC,C#,SQL'
        description='Implemented a comprehensive Employee Management System using the Model-View-Controller (MVC) architectural pattern in C#. Integrated a SQL database to store and retrieve employee details.'
        imageUrl='https://www.pockethrms.com/wp-content/uploads/2022/01/Happy-Workforce.jpg'
        
        />
        <Card
        title='Earthquake Prediction Using Machine Learning'
        date='January 2023 - April 2023'
        tools= 'Machine Learning Framework: CatBoost Flask'
        description= 'Developed a web application that predicts earthquake risk based on location using the machine learning model CatBoost algorithm.Integrated the Twilio API to enable automated SMS notifications of earthquake predictions.'
        imageUrl= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVcqFjm7bEe58FreZf22d3Omx5BP_xSc_NQ&usqp=CAU'
        
        />
        </div>
        <div className='card-row'>
        <Card
         title= 'A Deep Learning Approach For Twitter Bot Detection'
         date= 'Mar 2022 - Nov 2022'
         tools= 'Machine Learning Framework: BERT Flask'
         description= 'Twitter, a social networking platform allows users to convey their ideas. on a wide range of topics,including politics, sports, the stock market, and entertainment. It has a big influence on how people think. A bot on Twitter sends spam messages.An application that detects bots in twitter using BERT model.'
         imageUrl= 'https://spectrum.ieee.org/media-library/illustration-of-an-ai-bot-abstractly-connected-to-a-phone.jpg?id=25592006&width=1200&height=600&coordinates=0%2C31%2C0%2C32'
         
         />
         <Card
         title= 'Blood Bank Management System'
         date='Jun 2021 - Jun 2021'
         tools='Database: MS SQl, Visual Basic'
         description= 'A blood bank system that can assist the information of amount of blood available and the donor list. Used Visual studio 16.10, community edition as IDE Visual basic for frontend Microsoft SQL server, express edition as backend Github for version control'
         imageUrl= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ebgkw3IL8sifOGL2mJSPe9BT9aHC1cE43Q&usqp=CAU'
         
         />
         </div>
         
     





        </div>
        <Loader type="pacman" />
        </>
    )

} 

export default Projecttab;