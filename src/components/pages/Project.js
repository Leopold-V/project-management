import React from 'react';

import { ContainerSection, ContainerCard } from '../Container';
import { CardTask } from '../Card';

export const Project = (props) => {

    const id = props.match.params.id;

    return (
        <ContainerSection>
            <h2>Project page {id}</h2>
            <ContainerCard> {/*Bind data */}
                <CardTask>
                    Todo
                </CardTask>
                <CardTask>
                    In progress
                </CardTask>
                <CardTask>
                    Completed
                </CardTask>
            </ContainerCard>
        </ContainerSection>
    )
}
