import React from 'react';
import {
  MDBFooter,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
      <MDBFooter className='text-center' color='white' style={{
        backgroundColor: '#0F0F0F',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        fontFamily: '\'Manrope-SemiBold\', sans-serif'
      }}>
        <MDBContainer className='p-4'>
          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-4'>
                <h5>Home</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/#categories' className='text-white'>
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href='/#devices' className='text-white'>
                      Devices
                    </a>
                  </li>
                  <li>
                    <a href='/#pricing' className='text-white'>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href='/#faq' className='text-white'>
                      FAQ
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>Movies</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/movies/#genres' className='text-white'>
                      Genres
                    </a>
                  </li>
                  <li>
                    <a href='/movies/#trending' className='text-white'>
                      Trending
                    </a>
                  </li>
                  <li>
                    <a href='/movies/#new' className='text-white'>
                      New Release
                    </a>
                  </li>
                  <li>
                    <a href='/movies/#popular' className='text-white'>
                      Popular
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>Shows</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/shows/#genres' className='text-white'>
                      Genres
                    </a>
                  </li>
                  <li>
                    <a href='/shows/#trending' className='text-white'>
                      Trending
                    </a>
                  </li>
                  <li>
                    <a href='/shows/#new' className='text-white'>
                      New Release
                    </a>
                  </li>
                  <li>
                    <a href='/shows/#popular' className='text-white'>
                      Popular
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>Support</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='/support/#contact' className='text-white'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      </MDBFooter>
  );
}
export default Footer;