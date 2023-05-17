import React from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import Badge from '@atlaskit/badge';

const AppContent = ({ data, onButtonClick }) => {

    return (
        <div>
            <ButtonGroup>
                <Button
                    onClick={() => onButtonClick('good')}
                >
                    <>
                        Good
                        <Badge>{data.good}</Badge>
                    </>
                </Button>
                <Button
                    appearance="warning"
                    onClick={() => onButtonClick('idk')}
                >
                    <>
                        Idk
                        <Badge>{data.idk}</Badge>
                    </>
                </Button>
                <Button
                    appearance="danger"
                    onClick={() => onButtonClick('bad')}
                >
                    <>
                        Bad
                        <Badge>{data.bad}</Badge>
                    </>
                </Button>
            </ButtonGroup>
        </div>
    );

}

export default AppContent;
