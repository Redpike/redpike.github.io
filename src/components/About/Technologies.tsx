import React from 'react';
import TechnologyItem from './TechnologyItem';
import IconJava from '../../images/icon-java.svg';
import IconAngular from '../../images/icon-angular.svg';
import IconDocker from '../../images/icon-docker.svg';

const techStackWrapperStyles = {
  width: '50%'
};

const Technologies = () => {

  return (
    <div className={'tech__stack__wrapper'} style={techStackWrapperStyles}>
      <div className={'group strong__skills'}>
        <h4>Strong</h4>
        <div className={'tech__stack__items'}>
          <TechnologyItem imgPath={IconJava}></TechnologyItem>
          <TechnologyItem imgPath={IconAngular}></TechnologyItem>
          <TechnologyItem imgPath={IconDocker}></TechnologyItem>
        </div>
      </div>
      <div className={'group average__skills'}>
        <h4>Average</h4>
        <div className={'tech__stack__items'}></div>
      </div>
      <div className={'group low__skills'}>
        <h4>To improve</h4>
        <div className={'tech__stack__items'}></div>
      </div>
    </div>
  );
};

export default Technologies;
