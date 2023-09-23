import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const ContactUs = ()=> {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted pt-1' style={{backgroundColor : "#F5F5F5"}}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                LoanSwift
              </h6>
              <p>
                Your Trusted Loan Management App. Easily track, manage, and optimize your loans with our user-friendly platform. Stay on top of payments, compare loan options, and achieve financial peace of mind.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Loans Offered</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Personal Loans
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Mortgage Loans
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                Business Loans
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Auto Loans
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Login
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Divyasree Orion, Hyderabad - 500089, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                loanswift@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9960855675
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 9960855675
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/'>
          LoanSwift.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default ContactUs;