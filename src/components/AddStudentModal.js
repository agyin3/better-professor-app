import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "../containers/Container";
import { Button } from "../containers/Button";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../actions/actions";

const AddStudentModal = () => {
  const dispatch = useDispatch()
  const [id] = useSelector(({ professors }) => [professors.professor.id])
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });

  const onSubmit = data => {
    dispatch(addStudent(id, data))
    reset();
    toggle()
  };

  return (
    <div>
      <Button onClick={toggle}>
        Add Student
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Add New Student</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container direction="column">
              <input
                className="student-form"
                type="text"
                placeholder="First Name"
                name="firstName"
                ref={register({
                  required: "This field is required",
                  maxLength: 80
                })}
              />
              {errors.firstName && (
                <p className="error">{errors.firstName.message}</p>
              )}
              <input
                className="student-form"
                type="text"
                placeholder="Last Name"
                name="lastName"
                ref={register({
                  required: "This field is required",
                  maxLength: 80
                })}
              />
              {errors.lastName && (
                <p className="error">{errors.lastName.message}</p>
              )}
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

export default AddStudentModal;
