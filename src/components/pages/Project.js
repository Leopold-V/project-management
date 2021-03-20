import React from 'react';

import { Container } from '../Container';

export const Project = (props) => {

    const id = props.match.params.id;

    return (
        <Container>
            Project page {id}
        </Container>
    )
}
