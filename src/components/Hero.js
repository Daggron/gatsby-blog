import React from 'react';
import Styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  width: 100%;
  + * {
    margin-top: 0;
  }
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbddffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;  
  padding: 0 calc((100vw - 550px) / 2) 2rem;

  h1 {
    text-shadow: 1px 1px  3px #eeddff66;
    font-size: 2.25rem;
    color: #eee;
  }

  p,a {
    color: #eee;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;


const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>
          Frontend Masters +  Gatsby &hearts;
        </h1>
        <p>
          Hello New Home Page
          <Link to="/about">
            &nbsp;Learn about me &rarr;
          </Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;