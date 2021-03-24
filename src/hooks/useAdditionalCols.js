import { ButtonSmall, WrapperButton } from "../components/Button"
import { FormDeleteProject } from "../components/Form"
import { Modal } from "../components/Modal"
import { useModal } from './useModal';

export const useAdditionalCols = () => {
    const [show, toggle] = useModal();

  return (
    [
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
  )
};

