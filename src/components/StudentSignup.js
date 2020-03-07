import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Container } from '../containers/Container.js'
import { Footer } from './Footer.js'
import Student from '../svg/Student'
import LoginHeader from './LoginHeader'
import { useHistory } from 'react-router-dom'
import { Button } from '../containers/Button.js';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

export const StudentSignup = () => {
    const [professors, setProfessors] = useState()
    const [students, setStudents] = useState()
    const [selected, setSelected] = useState(false)
    
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            username: '',
            password: '',
            email: '',
            id: ''
        }
    });
    const history = useHistory()

    const onSubmit = (data) => {
        // need to move to actions file
        axiosWithAuth()
            .put(`/students/${data.id}?register=true`, {
                username: data.username,
                password: data.password,
                email: data.email,
                registered: true
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const getStudents = (e) => {
        axiosWithAuth()
            .get(`users/professor/${e.target.value}/students?r=true`)
            .then(res => {
                setStudents(res.data.data.students)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        axiosWithAuth()
            .get('users/professor')
            .then(res => {
                setProfessors(res.data.data.professors)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    
    return(
        <>
            <LoginHeader/>
            <Container justify='space-around' height='85vh'>
                <Student width={700} />
                <Container direction='column' height='80%' width='40rem'>
                    <h3 className='sign-in-heading'>Student <br/> Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Container direction='column'>
                            <select 
                            className='register-select' 
                            onChange={getStudents} 
                            name="professorName" 
                            ref={register({ required: true })}
                            >
                                <option>Select A Professor</option>
                                {professors && professors.map(prof => {
                                    return(
                                        <option key={prof.id} value={prof.id}>{prof.first_name} {prof.last_name}</option>
                                    )
                                })}
                            </select>
                            <select 
                            className='register-select' 
                            onChange={() => setSelected(true)} 
                            name="id" 
                            ref={register({ required: true })}
                            >
                                <option>Select A Professor</option>
                                {students && students.map(student => {
                                    return(
                                        <option key={student.id} value={student.id}>{student.firstName} {student.lastName}</option>
                                    )
                                })}
                            </select>
                            {selected && 
                                <>
                                <input
                                className='register' 
                                type="text" 
                                placeholder="Email" 
                                name="email" 
                                ref={register({required: true, maxLength: 80})} 
                                />
                                <input
                                className='register' 
                                type="text" 
                                placeholder="Username" 
                                name="username" 
                                ref={register({required: true, maxLength: 80})} 
                                />
                                <input 
                                className='register'
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                ref={register({required: true, min: 6})} 
                                />
                                </>
                            }
                            <Button  
                            size='2.4rem'
                            width='20rem'
                            type="submit" 
                            >
                                Submit
                            </Button>
                            <p className='sign-in-text'>
                                Have An Account | <a className='sign-in-link' href='/student/login'>Sign In</a>
                            </p>
                            <p className='sign-in-text'>
                                Professor | <a className='sign-in-link' href='/professor/login'>Click Here</a>
                            </p>
                        </Container>
                    </form>
                </Container>
            </Container>
            <Footer />
        </>
    )
}