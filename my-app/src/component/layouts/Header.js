import React from 'react'
import logo from '../../assets/img/Logo.png'
import Icon from '@mdi/react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';





function Header() {
    return (
        <>
            <header>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt="logo"
                                src={require('../../assets/img/Logo.png')}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />{' '}
                            React Bootstrap
                        </Navbar.Brand>
                    </Container>
                </Navbar>


            </header>

        </>
    )
}

export default Header