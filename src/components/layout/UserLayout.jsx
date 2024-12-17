import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UserLayout = () => {
  return (
    <>
      {/* Headear*/}
      <Header />
      <Container fluid className="">
        <Row>
          <Col className="bg-dark text-light">side bar</Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
export default UserLayout