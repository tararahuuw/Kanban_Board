import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import LogoProsa from "./Component/prosa.png"
import "./Component/navbarcomp.css"

const NavbarComp = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
        <Navbar.Brand href="#home">
            <div className='title-nav-kanban'>
                <img
                alt=""
                src= {LogoProsa}
                width="70"
                height="70"
                className="d-inline-block align-top"
                />
                <p style={{marginLeft:"1rem", marginTop:"1rem"}}>KANBAN BOARD</p>
            </div>
        </Navbar.Brand>
    </Container>
</Navbar>
  )
}

export default NavbarComp