import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "../containers/Container";
import { Button } from "../containers/Button";
import { useDispatch } from "react-redux";
import { addStudent } from "../actions/actions";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddStudentProjectModal = ({ getInfo }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: "",
      notes: "",
      dueDate: Date.now()
    }
  });

  const onSubmit = data => {
    console.log('data', {
        ...data,
        dueDate: new Date(data.dueDate).getTime()
    })
    axiosWithAuth()
        .post(`/students/${id}/projects`, {
            ...data,
            dueDate: new Date(data.dueDate).getTime()
        })
        .then(() => {
            getInfo()
        })
        .catch(err => {
            console.log(err)
        })
    reset();
    toggle()
  };

  return (
    <div>
      <Button onClick={toggle}>
        Add Project
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Add New Project</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container direction="column">
              <input
                className="student-form"
                type="text"
                placeholder="Name"
                name="name"
                ref={register({
                  required: "This field is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <p className="error">{errors.name.message}</p>
              )}
              <input 
              className="student-form"
              type="datetime-local" 
              placeholder="Due Date" 
              name="dueDate" 
              ref={register({required: "This field is required"})} 
              />
              {errors.dueDate && (
                <p className="error">{errors.dueDate.message}</p>
              )}
              <textarea
                className="student-form"
                placeholder="Notes"
                name="notes"
                ref={register({maxLength: 80})}
              />
              <Button type="submit">
                Submit
              </Button>
            </Container>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddStudentProjectModal;
