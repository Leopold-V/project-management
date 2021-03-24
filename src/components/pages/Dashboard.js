import React from 'react';
import { useSelector } from 'react-redux';
import ReactFlexyTable from 'react-flexy-table';
import 'react-flexy-table/dist/index.css'

import { projectsSelector } from '../../slices/projects';
import { useModal } from '../../hooks/useModal';

import { ButtonSmall, Button, WrapperButton } from '../Button';
import { ContainerCard, ContainerSection } from '../Container';
import { Card } from '../Card';
import { FormAddProject, FormDeleteProject } from '../Form';
import { Modal } from '../Modal';

export const Dashboard = () => {

    const [show, toggle] = useModal();

    const projects = useSelector(projectsSelector);
    const data = projects.map((project) => ({
        Id: project.id,
        Name: project.name,
        Tech: project.tech,
        Resume: project.resume
    }));

    const additionalCols = [
        {
          header: 'Actions',
          td: (data) => {
            return (
              <WrapperButton>
                <ButtonSmall onClick={toggle} id={data.Id} data-type='edit'>
                    <i className="fas fa-edit" id={data.Id} data-type='edit'></i>
                </ButtonSmall>
                <span> &nbsp; </span>
                <ButtonSmall onClick={toggle} id={data.Id} data-type='delete'>
                    <i className="fas fa-trash-alt" id={data.Id} data-type='delete'></i>
                </ButtonSmall>

                <Modal show={show} toggle={toggle} who={data.Id} type='edit'>
                    <h2>modal edit of {data.Id}</h2>
                </Modal>
                <Modal show={show} toggle={toggle} who={data.Id} type='delete'>
                    <h2>Are you sure to delete the project {data.name} ?</h2>
                    <FormDeleteProject toggle={toggle} pid={data.Id}/>
                </Modal>
              </WrapperButton>
            )
          }
        }
    ]

    return (
        <ContainerSection>
            <h2>Dashboard</h2>
            <ReactFlexyTable className="table-projects" data={data} additionalCols={additionalCols} filterable sortable/>
            <ContainerCard>
                <Card>
                    <h4>Create a new project</h4>
                    <Button onClick={toggle}>
                        <i className="fas fa-plus-circle"></i>&nbsp;Create
                    </Button>
                </Card>
            </ContainerCard>
            <Modal show={show} toggle={toggle}>
                <h2>Add a new project :</h2>
                <FormAddProject />
            </Modal>
        </ContainerSection>
    )
}
