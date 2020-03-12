import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardHeader from './DashboardHeader.js'
import { Container } from '../containers/Container'
import AddStudentModal from './AddStudentModal'
import { fetchStudents } from '../actions/actions'
import { CardColumns, CardDeck } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import StudentCard from './StudentCard.js'


const ProfessorDashboard = () => {
    const dispatch = useDispatch()
    const [professor, students, addError, deleteError] = useSelector(({ professors }) => (
        [professors.professor, professors.students, professors.errors.add, professors.errors.delete]
        ))

    useEffect(() => {
        dispatch(fetchStudents(professor.id))
    }, [professor.id, dispatch])
    return(
        <>
            <DashboardHeader />
            <Container height='85vh' direction='column' justify='flex-start'>
                <Container direction='column' padding='0'>
                    <h2 className='professor-heading'>Welcome {professor.first_name}</h2>
                    <AddStudentModal />
                    <p className='error-message'>{addError || deleteError}</p>
                </Container>
                <Container>
                    <CardDeck>
                        <CardColumns>
                        {students && students.map(student => {
                            return(
                                    <StudentCard key={student.id} student={student} />
                            )
                        })}
                        </CardColumns>
                    </CardDeck>
                </Container>
            </Container>
        </>
    )
}

export default ProfessorDashboard