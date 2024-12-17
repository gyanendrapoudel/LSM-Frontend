import { Route, Routes } from "react-router-dom"
import { Home, SignIn, SignUp, Users, ForgetPassword, Dashboard} from "../pages"
import DefaultLayout from "../components/layout/DefaultLayout"
import UserLayout from "../components/layout/UserLayout"


const AppRoutes = () => {
  return (
    <Routes>
      {/* public routing  */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      {/* Private routing */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Dashboard/>} />
      </Route>
    </Routes>
  )
}
export default AppRoutes