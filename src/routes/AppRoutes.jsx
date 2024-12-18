import { Route, Routes } from "react-router-dom"
import {
  Home,
  SignIn,
  SignUp,
  Users,
  Borrow,
  Profile,
  ForgetPassword,
  Dashboard,
  Books,
  PageNotFound,
} from '../pages'
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
      <Route path="/user" element={<UserLayout/>}>
        <Route index element={<Dashboard/>} />
        <Route path="books" element={<Books/>} />
        <Route path="user-list" element={<Users/>} />
        <Route path='borrow' element={<Borrow/>} />
        <Route path = "profile" element={<Profile/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}
export default AppRoutes