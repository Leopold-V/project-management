import React from 'react';
import { useSelector } from 'react-redux';
import ReactFlexyTable from 'react-flexy-table';
import 'react-flexy-table/dist/index.css';

import { projectsSelector } from '../../slices/sliceProjects';
import { useModal } from '../../hooks/useModal';
import { formatTableProject } from '../../utils/projects';

import { Button } from '../Button';
import { ContainerCard, ContainerSection } from '../Container';
import { Card } from '../Card';
import { FormAddProject } from '../Form';
import { Modal } from '../Modal';
import { TableActions } from '../Table/TableActions';

export const Dashboard = () => {
  const [show, toggle] = useModal();
  const additionalCols = [
    {
      header: 'Actions',
      td: (data) => <TableActions data={data} />,
    },
  ];

  const projects = useSelector(projectsSelector);
  const data = formatTableProject(projects);

  return (
    <ContainerSection>
      <h2>Dashboard</h2>
      <ReactFlexyTable className="table-projects" data={data} additionalCols={additionalCols} sortable />
      <ContainerCard>
        <Card>
          <h4>Create a new project</h4>
          <Button onClick={toggle}>
            <i className="fas fa-plus-circle"></i>&nbsp;Create
          </Button>
        </Card>
      </ContainerCard>
      <Modal show={show} toggle={toggle}>
        <FormAddProject />
      </Modal>
    </ContainerSection>
  );
};
