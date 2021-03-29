import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDeleteProject } from '../../actions/actionsProjects';

import { Button, ButtonGroup } from '../Button';
import { Form } from '../Form';
import { TitlePrimary } from '../Typography';

export const FormDeleteProject = ({ toggle, pid }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.innerText === 'Yes') {
      dispatch(fetchDeleteProject(pid));
      return toggle();
    }
    toggle();
  };

  return (
    <Form>
      <TitlePrimary>Are you sure to delete this project ?</TitlePrimary>
      <ButtonGroup>
        <Button color="danger" style={{ margin: '1rem' }} onClick={handleSubmit}>
          Yes
        </Button>
        <Button style={{ margin: '1rem' }} onClick={handleSubmit}>
          No
        </Button>
      </ButtonGroup>
    </Form>
  );
};

FormDeleteProject.propTypes = {
  toggle: PropTypes.func.isRequired,
  pid: PropTypes.string.isRequired,
};
