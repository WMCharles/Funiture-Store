import { Link, Outlet } from "react-router-dom"

export default function NavBar({ user, setUser }) {


  function handleLogoutClick() {
    fetch("https://funiture-store-api.up.railway.app/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  
  
  return (
    <div className='header'>
      <div className='navbar-container'>
        <Link className="navbar-logo" to="/">FUNiTURES</Link> <div className='nav-menu'>
          <Link className='nav-links' to="/">Home</Link>
          <Link className='nav-links' to="/products">Products</Link>
          <Link className='nav-links' to="/cart">Cart</Link>
          {user === null  ? <Link className='nav-links' to='/auth'>Login</Link> : <Link className='nav-links' onClick={handleLogoutClick}>Logout</Link>}
        </div>
      </div>
      <Outlet />
    </div>
  )
}