import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from "./SideBar"
import AuthRoute from "../auth/AuthRoute"


const UserLayout = () => {
  return (
    <AuthRoute>
      {/* Headear*/}
      <Header />
      <Container fluid className="main" >
        <Row >
          <Col className="bg-dark text-light main " md={3} xs={5}  >
            <SideBar/>
          </Col>
          <Col className="main p-3" >
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </AuthRoute>
  )
}
export default UserLayout