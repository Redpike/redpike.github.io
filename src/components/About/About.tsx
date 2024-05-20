import * as React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import MyShortInfo from './MyShortInfo';
import Technologies from './Technologies';
import '../../styles.css';

const aboutSectionStyles = {
  padding: '100px 0',
  backgroundColor: 'rgb(247, 247, 247)'
};

const myInfoStyles = {
  display: 'flex',
  flexDirection: 'row',
  padding: '0 150px',
  marginTop: '150px'
};

const About: React.FC = () => {

  return (
    <div className={'about__section'} style={aboutSectionStyles}>
      <SectionTitle title={'Who am I?'}></SectionTitle>
      <div className={'my__info'} style={myInfoStyles}>
        <MyShortInfo></MyShortInfo>
        <Technologies></Technologies>
      </div>
    </div>
  );
};

export default About;
