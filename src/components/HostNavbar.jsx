import { NavLink } from "react-router-dom"


function HostNavbar() {

  return (
    <nav className="mx-3 lg:mx-20">
        <ul className="flex justify-between">
            <NavLink to="." className={({isActive}) => (isActive ? 'active-nav-link' : '')} end> Dashboard </NavLink>
            <NavLink to="income" className={({isActive}) => (isActive ? 'active-nav-link' : '')}> Income </NavLink>
            <NavLink to="vans" className={({isActive}) => (isActive ? 'active-nav-link' : '')}> Vans </NavLink>
            <NavLink to="reviews" className={({isActive}) => (isActive ? 'active-nav-link' : '')}> Reviews </NavLink>
        </ul>
    </nav>
  )
}

export default HostNavbar