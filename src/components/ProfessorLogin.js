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
import { userLogin } from '../actions/actions.js';

export const ProfessorLogin = () => {
    const dispatch = useDispatch()
    const [isLoading, loginError] = useSelector(({professors}) => [professors.isLoading, professors.loginError])
    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const history = useHistory()

    const onSubmit = data => {
        dispatch(userLogin('professor', data))
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
                    <h3 className='sign-in-heading'>Professor <br/> Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Container direction='column'>
                            <input
                            className='sign-in' 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            ref={register({required: 'This field is required', maxLength: 80})}  
                            />
                            {errors.username && <p className='error'>{errors.username.message}</p>}
                            <input 
                            className='sign-in'
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
                                Need An Account | <a className='sign-in-link' href='/professor/signup'>Sign Up</a>
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