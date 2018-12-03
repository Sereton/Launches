import React from 'react';
import styled from 'styled-components';


const Colophon = styled.footer`
margin-top: auto;
padding: 1rem;
background: #fadb42;
color: #222;
text-align: center;

a {
    color: #0;
  }
small {
    display: block;
    margin: 0 auto;
    max-width: 75%;
    font-size: 65%;
    line-height: 1.375;
}

`
;
 const Footer = () => (
    <Colophon>
      <small>
        SpaceX logo, images and information is property of the company, this is just a tribute site. All images released under{' '}
        <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">
          Creative Commons CC0
        </a>
        .
      </small>
    </Colophon>
  );

export default Footer;
