import React from 'react'
import { useForm } from 'react-hook-form';
import { Container } from '../containers/Container.js'
import { Footer } from './Footer.js'
import Professor from '../svg/Professor'
import LoginHeader from './LoginHeader'
import { useHistory } from 'react-router-dom'
import { Button } from '../containers/Button.js';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingLottie } from '../containers/LoadingLottie.js'
import { professorRegister } from '../actions/actions.js';

export const ProfessorSignup = () => {
    const dispatch = useDispatch()
    const [isLoading, loginError] = useSelector(({professors}) => [professors.isLoading, professors.loginError])
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
        }
    });
    const history = useHistory()

    const onSubmit = data => {
        dispatch(professorRegister(data))
        reset()
    }

    if(isLoading){
        return(
            <>
                <LoginHeader />
                <Container>
                    <LoadingLottie />
                </Container>
            </>
        )
    }

    return(
        <>
            <LoginHeader/>
            <Container justify='space-around' height='85vh'>
                <Professor width={500} />
                <Container direction='column' height='80%' width='40rem'>
                    <h3 className='sign-in-heading'>Professor <br/> Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Container direction='column'>
                        <Container padding='0'>
                            <input
                            className='prof-sign-in' 
                            type="text" 
                            placeholder="First Name" 
                            name="firstName" 
                            ref={register({required: 'This field is required', maxLength: 80})}  
                            />
                            {errors.username && <p className='error'>{errors.username.message}</p>}
                            <input
                            className='prof-sign-in' 
                            type="text" 
                            placeholder="Last Name" 
                            name="lastName" 
                            ref={register({maxLength: 80})}  
                            />
                        </Container>
                        <Container padding='0'>
                            <input
                            className='prof-sign-in' 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            ref={register({required: 'This field is required', maxLength: 80})}  
                            />
                            {errors.username && <p className='error'>{errors.username.message}</p>}
                            <input
                            className='prof-sign-in' 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            ref={register({required: 'This field is required', maxLength: 80})}  
                            />
                        </Container>
                            {errors.username && <p className='error'>{errors.username.message}</p>}
                            <input 
                            className='prof-sign-in'
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            ref={register({required: 'This field is required', minLength: {value: 6, message: 'Password must be 6 characters long'}})} 
                            />
                            {errors.password && <p className='error'>{errors.password.message}</p>}
                            <Button  
                            size='2.4rem'
                            width='20rem'
                            type="submit" 
                            >
                                Submit
                            </Button>
                            <p className='error-message'>{loginError}</p>
                            <p className='sign-in-text'>
                                Have An Account | <a className='sign-in-link' href='/professor/login'>Sign in</a>
                            </p>
                            <p className='sign-in-text'>
                                Student | <a className='sign-in-link' href='/student/login'>Click Here</a>
                            </p>
                        </Container>
                    </form>
                </Container>
            </Container>
            <Footer />
        </>
    )
}