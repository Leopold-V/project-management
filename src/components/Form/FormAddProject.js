import React from 'react'

import { ButtonSmall } from '../Button';
import { Input, InputGroup, TextArea, Icon, Form } from '../Form';

export const FormAddProject = () => {
    return (
        <Form>
          <InputGroup>
            <Icon className="fas fa-signature"></Icon>
            <Input type="text" placeholder="Project name" />
          </InputGroup>
          <InputGroup>
            <Icon className="fas fa-cogs"></Icon>
            <Input type="text" placeholder="Tech name" />
          </InputGroup>
          <InputGroup>
            <Icon className="fas fa-file-alt"></Icon>
            <TextArea rows="5" cols="33" placeholder="Describe your project" />
          </InputGroup>
          <ButtonSmall style={{margin: '0 auto'}}><i className="fas fa-plus-circle fa-2x"></i></ButtonSmall>
        </Form>
    )
}
