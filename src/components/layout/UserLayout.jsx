import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideBar from "./SideBar"


const UserLayout = () => {
  return (
    <>
      {/* Headear*/}
      <Header />
      <Container fluid className="main" >
        <Row >
          <Col className="bg-dark text-light main ">
            <SideBar/>
          </Col>
          <Col className="main p-3">
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
export default UserLayout