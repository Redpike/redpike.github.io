import React from 'react';
import '../../styles.css';

interface Props {
    imgPath: string;
}

const iconStyles = {
    width: '64px',
    height: '64px',
};

const TechnologyItem: React.FC<Props> = (props) => {

    return (
        <div className={'technology__item'}>
            <object type='image/svg+xml' data={props.imgPath} class='icon'></object>
        </div>
    );
};

export default TechnologyItem;
