import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardTitle } from 'reactstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { Button } from '../containers/Button.js'
import { deleteStudent } from "../actions/actions.js";

const StudentCard = ({student}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [profId] = useSelector(({ professors}) => [professors.professor.id])
    const removeStudent = (id) => {
        dispatch(deleteStudent(id, profId))
    }
  return (
    <Card body>
      <CardTitle
        onClick={() => history.push(`/professor/students/${student.id}`)}
      >
        {student.firstName} {student.lastName}
      </CardTitle>
      <Button
        background="#7f2212"
        hover="#dab1a9"
        onClick={() => removeStudent(student.id)}
      >
        <FaTrashAlt />
      </Button>
    </Card>
  );
};

export default StudentCard
