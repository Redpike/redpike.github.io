import * as React from 'react'
import type {HeadFC, PageProps} from 'gatsby'
import Hero from '../components/Hero/Hero';
import './../styles.css';

const pageStyles = {
  color: '#232129',
  // padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero></Hero>
      <main style={pageStyles}>

      </main>
    </>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rafał Sokulski</title>