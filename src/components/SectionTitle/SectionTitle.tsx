import React from 'react';
import '../../styles.css';

interface Props {
  title: string;
  color?: string
  backgroundColor?: string;
}

const titleWrapperStyles = {
  padding: '0 150px'
};

const titleStyles = (color?: string) => {
  if (color) {
    return {
      position: 'relative',
      zIndex: '1',
      fontSize: '3rem',
      fontWeight: '400',
      width: '300px',
      lineHeight: '1',
      color: color
    };
  } else {
    return {
      position: 'relative',
      zIndex: '1',
      fontSize: '3rem',
      fontWeight: '400',
      width: '300px',
      lineHeight: '1',
    };
  }
};

const SectionTitle: React.FC<Props> = (props) => {

  return (
    <div className={'section__title__wrapper'} style={titleWrapperStyles}>
      <h2 className={'section__title'} style={titleStyles(props.color)}>{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
