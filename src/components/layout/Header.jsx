import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { IoIosLogIn } from 'react-icons/io'
import { FaArrowCircleUp } from 'react-icons/fa'
import logo from '@/assets/lms-logo.png'
import { AiFillBank } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const  Header = () => {
  const {user} = useSelector((state)=>state.userInfo)
  return (
    <Navbar expand="lg" className="bg-dark text-light" variant="dark">
      <Container fluid className="mx-5">
        <Link className="nav-link me-5" to="/">
          <img src={logo} alt="logo" width="100px" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav className=" ">
            <Link className="nav-link text-light " to="/">
              <IoHome /> Home
            </Link>
            <Link className="nav-link" to="/">
              Link
            </Link>
          </Nav>
          {user?._id ? (
            <Nav className="d-flex user-container  gap-3">
              <Link className="nav-link" to="/user">
                <AiFillBank /> Dashboard
              </Link>
              <Link className="nav-link" to="/">
                <FaArrowCircleUp /> Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="d-flex user-container  gap-3">
              <Link className="nav-link" to="/signin">
                <IoIosLogIn /> SignIn
              </Link>
              <Link className="nav-link" to="/signup">
                <FaArrowCircleUp /> SignUp
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
