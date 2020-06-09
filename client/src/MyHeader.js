import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const MyHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag='span'>
          <Link to='/'>Life Wear</Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink tag='span'>
                <Link to='/list/women'>女裝</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag='span'>
                <Link to='/list/men'>男裝</Link>
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink tag='span'>
                <Link to='#'>登入</Link>
              </NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  )
}

export default MyHeader
