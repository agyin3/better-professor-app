import React from 'react'
import { useForm } from 'react-hook-form';
import { Container } from '../containers/Container.js'
import { Footer } from './Footer.js'
import Student from '../svg/Student'
import LoginHeader from './LoginHeader'
import { useHistory } from 'react-router-dom'
import { Button } from '../containers/Button.js';

export const StudentLogin = () => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const history = useHistory()

    const onSubmit = data => console.log(data);
    return(
        <>
            <LoginHeader/>
            <Container justify='space-around' height='85vh'>
                <Student width={700} />
                <Container direction='column' height='80%' width='40rem'>
                    <h3 className='sign-in-heading'>Student <br/> Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Container direction='column'>
                            <input
                            className='sign-in' 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            ref={register({required: true, maxLength: 80})} 
                            />
                            <input 
                            className='sign-in'
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            ref={register({required: true, min: 6})} 
                            />
                            <Button  
                            size='2.4rem'
                            width='20rem'
                            type="submit" 
                            >
                                Submit
                            </Button>
                            <p className='sign-in-text'>
                                Need An Account | <a className='sign-in-link' href='/student/signup'>Sign Up</a>
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