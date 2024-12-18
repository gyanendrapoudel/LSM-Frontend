import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <Stack gap={3} className='p-2'>
        <div className="mt-3">
            <h4>Welcome Page</h4>
            <p>Gyanendra Poudel</p>
        </div>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/user-list">
          All users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow">
          Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
         Profile
        </Link>
      </div>
    </Stack>
  )
}
export default SideBar
