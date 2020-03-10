import React from 'react'
import { Container } from '../containers/Container.js'
import Professor from '../svg/Professor'
import LoginHeader from './LoginHeader'
import { Button } from '../containers/Button.js'
import { useHistory } from 'react-router-dom'
export const WelcomePage = () => {
    const history = useHistory()
    return(
        <>
            <LoginHeader/>
            <Container justify='space-around' height='85vh'>
                <Professor width={500} />
                <Container direction='column'>
                    <Button 
                    size='3.6rem'
                    width='40rem'
                    margin='0 0 4rem'
                    onClick={() => history.push('/professor/login')}
                    >
                        Professor
                    </Button>
                    <Button 
                    size='3.6rem'
                    width='40rem'
                    onClick={() => history.push('/student/login')}
                    >
                        Student
                    </Button>
                </Container>
            </Container>
        </>
    )
}