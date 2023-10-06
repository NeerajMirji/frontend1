import React from 'react';
import "./Home.css"
import myImage from './banner.png';
import img1 from './img1.png'
import img2 from './img2.png'
import  mashable from './mashable.png'
import TechCrunch from './TechCrunch.png'
import tnw from './tnw.png'
import bizinsider from './bizinsider.png'
import fb from './fb.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'


const Team = () =>
{
    return(
        <div className="team-container-fluid text-center">
           <h3 className='teamHeading '> Our Team</h3>
           <p className="mt-3 mb-4 teamTag"> A strong team, characterized by effective collaboration, open communication, and diverse skills, can achieve remarkable results and foster innovation.</p>
            <div className="row">
              <div className="teamCard col-lg-3 col-md-6">
                  <img src="https://api.multiavatar.com/mm.png" className="teamImage"/>
                  <p className="mt-1 mb-0 teamName">Vishal</p>
                  <p className="mb-0.5 teamFollow">Follow Us</p>
                  <a className="teamIcon" href="#"><img src={fb}/></a>
                  <a className="teamIcon" href="#"><img src={twitter}/></a>
                  <a className="teamIcon" href="#"><img src={linkedin}/> </a>
 
              </div>
              <div className="teamCard col-lg-3 col-md-6">
              <img src="https://api.multiavatar.com/ef7e93fdffdedc0fde.png" className="teamImage"/>
                  <p className="mt-1 mb-0  teamName">Priyanka</p>
                  <p className="teamFollow">Follow Us</p>
                  <a className="teamIcon" href="#"><img src={fb}/></a>
                  <a className="teamIcon" href="#"><img src={twitter}/></a>
                  <a className="teamIcon" href="#"><img src={linkedin}/> </a>
              </div>
              <div className="teamCard col-lg-3 col-md-6">
              <img src="https://api.multiavatar.com/0563a9996c38d8f4b7.png" className="teamImage"/>
                  <p className=" mt-1 mb-0 teamName">Utkarsh</p>
                  <p className="teamFollow">Follow Us</p>
                  <a className="teamIcon" href="#"><img src={fb}/></a>
                  <a className="teamIcon" href="#"><img src={twitter}/></a>
                  <a className="teamIcon" href="#"><img src={linkedin}/> </a>
              </div>
              <div className="teamCard col-lg-3 col-md-6">
              <img src="https://api.multiavatar.com/handsome .png" className="teamImage"/>
                  <p className=" mt-1 mb-0 teamName">Neeraj</p>
                  <p className="teamFollow">Follow Us</p>
                  <a className="teamIcon" href="#"><img src={fb}/></a>
                  <a className="teamIcon" href="#"><img src={twitter}/></a>
                  <a className="teamIcon" href="#"><img src={linkedin}/> </a>
              </div>
            </div>
          </div>
    );

}

export default Team;