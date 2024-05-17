import * as React from 'react'
import type {HeadFC, PageProps} from 'gatsby'
import Hero from '../components/Hero/Hero';
import './../styles.css';
import About from '../components/About/About';

const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={"content"} style={pageStyles}>
      <Hero></Hero>
      <About></About>
    </main>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rafał Sokulski</title>
