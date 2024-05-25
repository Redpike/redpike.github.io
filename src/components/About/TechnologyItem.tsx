import React from 'react';

interface Props {
    imgPath: string;
}

const TechnologyItem: React.FC<Props> = (props) => {

    return (
        <div className={'technology__item'}>
            <div className={'icon'}></div>
        </div>
    );
};

export default TechnologyItem;
