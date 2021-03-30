import React from 'react';
import { useSelector } from 'react-redux';
import ReactFlexyTable from 'react-flexy-table';
import 'react-flexy-table/dist/index.css';

import { projectsSelector } from '../../slices/sliceProjects';
import { useModal } from '../../hooks/useModal';
import { formatTableProject } from '../../utils/projects';

import { Button } from '../Button';
import { ContainerCard, ContainerSection } from '../Container';
import { Card, CardProjectDashboard } from '../Card';
import { FormAddProject } from '../Form';
import { Modal } from '../Modal';
import { TableActions } from '../Table/TableActions';
import { WrapperTransition } from '../Container/WrapperTransition';
import { TitleSecondary } from '../Typography';

export const Dashboard = () => {
  const [show, toggle] = useModal();

  const projects = useSelector(projectsSelector);

  const additionalCols = [
    {
      header: 'Actions',
      td: (data) => <TableActions data={data} />,
    },
  ];

  const data = formatTableProject(projects);

  return (
    <WrapperTransition>
    <ContainerSection>
      <ContainerCard>
        {projects.map((ele) => {
          return <CardProjectDashboard key={ele.id} id={ele.id} name={ele.name} resume={ele.resume} tech={ele.tech} />;
        })}
        <div>
          <Card>
            <TitleSecondary>Create a new project</TitleSecondary>
            <Button light onClick={toggle}>
              <i className="fas fa-plus-circle"></i>&nbsp;Create
            </Button>
          </Card>
        </div>
      </ContainerCard>
      <ReactFlexyTable className="table-projects" data={data} additionalCols={additionalCols} sortable />
      <ContainerCard>

      </ContainerCard>
      <Modal show={show} toggle={toggle}>
        <FormAddProject />
      </Modal>
    </ContainerSection>
    </WrapperTransition>
  );
};
