import * as React from 'react'
import image from '../../images/me-min.png';
import '../../styles.css';

const heroWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'flex-start',
  backgroundColor: 'unset',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% 100%',
  backgroundImage: 'linear-gradient(120deg, rgb(255, 255, 255), rgb(255, 255, 255) 60%, rgb(219, 225, 248) 60%, rgb(219, 225, 248))',
  width: '100%',
  height: '100vh',
};

const heroHeaderWrapperStyles = {
  padding: '150px'
};

const heroHeaderStyles = {
  fontSize: '4.4rem',
  fontWeight: '400',
  position: 'relative',
  lineHeight: '1.4',
  zIndex: '1'
};

const heroImageStyles = {
  display: 'block',
  width: '50vw',
  right: '0',
  bottom: '0',
  position: 'absolute',
  overflow: 'hidden'
};

const imageStyles = {
  width: '550px',
  height: 'auto'
};

const textImportantStyles = {
  color: 'rgb(179, 190, 232)',
  fontWeight: '800'
};

const Hero: React.FC = () => {
  return (
    <div className={'hero__wrapper'} style={heroWrapperStyles}>
      <div className={'hero__header__wrapper'} style={heroHeaderWrapperStyles}>
        <h1 className={'hero__header'} style={heroHeaderStyles}>Hello,<br/>I'm Rafał Sokulski</h1>
        <div>I'm starting work on <span style={textImportantStyles}>my personal site</span>. See You soon!</div>
      </div>
      <div className={'hero__image'} style={heroImageStyles}>
        <picture>
          <img src={image} alt={'my-photo'} style={imageStyles}/>
        </picture>
      </div>
    </div>
  );
};

export default Hero;