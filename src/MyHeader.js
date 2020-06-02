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
          <Link to='/'>優衣褲</Link>
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

            {/* <NavItem>
              <NavLink><Link to='/list/men'>男裝</Link></NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
                Options
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>

                <DropdownItem>
                  Option 2
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>
          </Nav>

          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MyHeader
