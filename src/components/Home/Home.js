import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
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




const Home = () => {
    const navigate = useNavigate();
    const gotoAdminLogin = () => {
        navigate("/adminlogin")
    }

    // window.location.pathname = '/';
    console.log(window.location.pathname);
  return (
    
    
    <div>

      <div id="home-title">
          <div className="home-container-fluid">
            <div className="row pt-5">
              <div className="col-lg-6">
                <h1 className="pb-4">Turning dreams into reality, one loan at a click.</h1>
                {/* <button type="button" className="btn btn-dark btn-lg"><i className="fa-solid fa-user-plus"></i> Sign Up</button> */}
                <Link type="button" to='/login' className="btn btn-outline-light btn-lg"><i class="fa-solid fa-user-shield"></i> Login</Link>
              </div>
              <div className="col-lg-6 pt-2">
                <img className="selfie" src={myImage} alt="loan App"/>
              </div>
            </div>
            </div>
        </div>


      <div className="home-container-fluid">
            <div id="features">
                <div className="row">
                  <div className="col-lg-4 p-5">
                    <i className="fas fa-check-circle feature-icon"></i>
                    <h3>Instant Approval</h3>
                    <p className="pl-4 pr-4">Get the Green Light Instantly!</p>
                  </div>

                  <div className="col-lg-4 p-5 ">
                   <i className="fa-solid fa-shield feature-icon"></i>
                    <h3>Highly secure</h3>
                    <p className="pl-4 pr-4">Your loan is backed by ironclad security.</p>
                  </div>

                  <div className="col-lg-4 p-5">
                    <i className="fa-solid fa-headset feature-icon"></i>
                    <h3>Customer Support</h3>
                    <p className="pl-4 pr-4">Customer support available round the clock, 24/7.</p>
                  </div>
                </div>
            </div>
          </div>


          
              <div id="testimonials-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#testimonials-carousel" data-slide-to="0" className="active"/>
                  <li data-target="#testimonials-carousel" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active" id="testimonials">
                    <h2>This app made getting a loan a breeze with its quick approval and responsive customer support.</h2>
                    <img className="testimonials-img" src={img1} alt="dog-profile"/>
                    <em>Pebbles, New York</em>
                  </div>
                  <div className="carousel-item" id="testimonials">
                    <h2 className="testimonial-text">I love how user-friendly and secure this loan management app is. It's been a reliable financial companion.</h2>
                    <img className="testimonials-img" src={img2} alt="lady-profile"/>
                    <em>Beverly, Illinois</em>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#testimonials-carousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span>

                </a>
                <a className="carousel-control-next" href="#testimonials-carousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>

          









          <div id="press">
            <img className="press-logo" src={mashable} alt="tc-logo"/>
            <img className="press-logo" src={tnw} alt="tnw-logo"/>
            <img className="press-logo" src={bizinsider} alt="biz-insider-logo"/>
            <img className="press-logo" src={TechCrunch}  alt="mashable-logo"/>

          </div>


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

    



    {/* <div class="project_section_2 layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="icon_1"><img src={icon1}/></div>
            <h3 class="accounting_text_1">1000+</h3>
            <p class="yers_text">Years of Business</p>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="icon_1"><img src={icon2}/></div>
            <h3 class="accounting_text_1">20000+</h3>
            <p class="yers_text">Projects Delivered</p>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="icon_1"><img src={icon3}/></div>
            <h3 class="accounting_text_1">10000+</h3>
            <p class="yers_text">Satisfied Customers</p>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="icon_1"><img src={icon4}/></div>
            <h3 class="accounting_text_1">1500+</h3>
            <p class="yers_text">Services</p>
          </div>
        </div>
      </div>
    </div> */}


</div>
 
            
    
    
  )
}

export default Home;