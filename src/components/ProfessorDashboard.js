import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardHeader from './DashboardHeader.js'
import { Container } from '../containers/Container'
import AddStudentModal from './AddStudentModal'
import { fetchStudents } from '../actions/actions'
import { Card, CardTitle, CardColumns } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { Button } from '../containers/Button.js'


const ProfessorDashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [professor, students, addError] = useSelector(({ professors }) => [professors.professor, professors.students, professors.errors.add])

    useEffect(() => {
        dispatch(fetchStudents(professor.id))
    }, [professor.id])

    return(
        <>
            <DashboardHeader />
            <Container height='85vh' direction='column' justify='flex-start'>
                <Container direction='column' padding='0'>
                    <h2 className='professor-heading'>Welcome {professor.first_name}</h2>
                    <AddStudentModal />
                    <p className='error-message'>{addError}</p>
                </Container>
                <Container>
                    <CardColumns>
                    {students && students.map(student => {
                        return(
                                <Card body >
                                    <CardTitle onClick={() => history.push(`/professor/students/${student.id}`)}>
                                        {student.firstName} {student.lastName}
                                    </CardTitle>
                                    <Button background='#7f2212' hover='#dab1a9'>
                                        <FaTrashAlt />
                                    </Button>
                                </Card>
                        )
                    })}
                    </CardColumns>
                </Container>
            </Container>
        </>
    )
}

export default ProfessorDashboard