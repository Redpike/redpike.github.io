import * as React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';

const aboutSectionStyles = {
  padding: '100px 0',
  backgroundColor: 'rgb(247, 247, 247)'
};

const About: React.FC = () => {

  return (
    <div className={'about__section'} style={aboutSectionStyles}>
      <SectionTitle title={'Who am I?'}></SectionTitle>
    </div>
  );
};

export default About;
