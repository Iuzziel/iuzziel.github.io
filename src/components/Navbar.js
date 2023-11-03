import './Navbar.css';

const Navbar = ({ children }) => {
  return (
    <nav class="navbar">
      {children}
    </nav>
  )
}
export default Navbar;