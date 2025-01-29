import { Navigate, useLocation } from "react-router-dom"

const AuthRoute = ({children}) => {
    const location = useLocation()
    const isAuth = location.state?.payload
  return isAuth ? children : <Navigate to="/signin" />
}
export default AuthRoute