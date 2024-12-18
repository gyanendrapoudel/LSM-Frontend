import { Navigate } from "react-router-dom"

const AuthRoute = ({children}) => {
    const isAuth = true
  return isAuth ? children : <Navigate to="/signin" />
}
export default AuthRoute