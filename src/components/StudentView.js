import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DashboardHeader from './DashboardHeader'
import { useParams } from 'react-router-dom'
import { Container } from '../containers/Container'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Button } from '../containers/Button'
import AddStudentProjectModal from './AddStudentProjectModal'
import { CardColumns, CardDeck } from 'reactstrap'
import ProjectCard from './ProjectCard'
import LoginHeader from './LoginHeader'
import { LoadingLottie } from '../containers/LoadingLottie'
import { SET_LOADING, END_LOADING } from '../actions/types'

const StudentView = () => {
    const dispatch = useDispatch()
    const [isLoading] = useSelector(({professors}) => [professors.isLoading])
    const [student, setStudent] = useState({})
    const { id } = useParams()
    console.log(student)
    const getStudentInfo = () => {
        dispatch({type: SET_LOADING})
        axiosWithAuth()
        .get(`/students/${id}/projects`)
        .then(res => {
            setStudent(res.data.data)
            dispatch({type: END_LOADING})
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect( () => {
        getStudentInfo()
    }, [])

    if(isLoading){
        return(
            <>
                <LoginHeader />
                <Container height='85vh'>
                    <LoadingLottie />
                </Container>
            </>
        )
    }
    
    return(
        <>
            <DashboardHeader />
            <Container height='85vh' direction='column' justify='flex-start'>
                <h2 className='professor-heading'>
                    {student.student && student.student.first_name} {student.student && student.student.last_name}
                </h2>
                <AddStudentProjectModal getInfo={getStudentInfo} />
                <Container>
                    <CardDeck>
                        <CardColumns>
                            {student.projects && student.projects.map(project => {
                                return(
                                    <ProjectCard key={project.id} project={project}/>
                                )
                            })}
                        </CardColumns>
                    </CardDeck>
                </Container>
            </Container>
        </>
    )
}

export default StudentView