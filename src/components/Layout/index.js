import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {

  const a = '{';
  const b='}';
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">public static void main(String args[]) {a} </span>

        <Outlet />
        <span className="tags bottom-tags">
        {b}
        </span>
      </div>
    </div>
  )
}

export default Layout
