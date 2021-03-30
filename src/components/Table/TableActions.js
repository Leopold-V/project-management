import PropTypes from 'prop-types';
import React from 'react';

import { useModal } from '../../hooks/useModal';

import { ButtonSmall, ButtonGroup } from '../Button';
import { FormDeleteProject, FormUpdateProject } from '../Form';
import { Modal } from '../Modal';

export const TableActions = ({ data }) => {
  const [show, toggle] = useModal();

  return (
    <ButtonGroup>
      <ButtonSmall light onClick={toggle} id={data.Id} data-type="edit">
        <i className="fas fa-edit" id={data.Id} data-type="edit"></i>
      </ButtonSmall>
      <span> &nbsp; </span>
      <ButtonSmall light color="danger" onClick={toggle} id={data.Id} data-type="delete">
        <i className="fas fa-trash-alt" id={data.Id} data-type="delete"></i>
      </ButtonSmall>
      <Modal show={show} toggle={toggle} who={data.Id} type="edit">
        <FormUpdateProject pid={data.Id} />
      </Modal>
      <Modal show={show} toggle={toggle} who={data.Id} type="delete">
        <FormDeleteProject toggle={toggle} pid={data.Id} />
      </Modal>
    </ButtonGroup>
  );
};

TableActions.propTypes = {
  data: PropTypes.object.isRequired,
};
