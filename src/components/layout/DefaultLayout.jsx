import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const DefaultLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="main">
        <Outlet/>
      </div>
      {/* main body */}
      {/* Footer */}
      <Footer />
    </div>
  )
}
export default DefaultLayout