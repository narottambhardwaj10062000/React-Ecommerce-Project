import React from 'react'
import styled from "styled-components";
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
        <section>
            <div className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready To Get Started ?</h3>
                        <h3>Talk To Us Today</h3>
                    </div>
                    <div>
                        <Button>
                            <NavLink to="/about">Get Started</NavLink>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Footer Section */}

        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>Gada Electronics</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="footer-subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <form action='#'>
                        <input 
                           type="email"
                           placeholder='your e-mail'
                        />
                        <input
                           type='submit'
                           value="subscribe"
                        />
                    </form>
                </div>
                <div className='footer-social'>
                    <h3>follow us</h3>
                    <div className='footer-social--icons'>
                        <div>
                            <FaDiscord className="icons" />
                        </div>
                        <div>
                            <FaInstagram className="icons" />
                        </div>
                        <div>
                            <FaYoutube className="icons" />
                        </div>
                    </div>
                </div>
                <div className='footer-contact'>
                    <h3>Call Us</h3>
                    <h3>+91 6205291850</h3>
                </div>
            </div>

            {/* Bottom Footer*/}
            <div className='footer-bottom--section'>
                <hr />
                <div className='container grid grid-two-column'>
                    <p>@2023 GadaElectronics. All Rights Reserved</p>

                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </footer> 
    </Wrapper>
  )
}

const Wrapper = styled.section`
     .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

`

export default Footer