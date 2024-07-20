import { NavLink } from "react-router-dom";
import { FaBars, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
const Navbar = () => {
  //nav items

  const navItems = [
    {  path: "/", link: "Home" },
    {  path: "/services", link: "Services" },
    {  path: "/about", link: "About" },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contact",
      link: "Contact",
    },
  ];
  return (
    <header className="bg-black fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          KBrand <span className="text-orange-500">KB</span>
        </a>
        {/* navitems */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-white">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}

        <div className="text-white lg:flex gap-4 items-center hidden">
          <a  href="/" ><FaTwitter className="hover:text-orange-500"/></a>
          <a  href="/" ><FaLinkedinIn className="hover:text-orange-500"/></a> 
          <a  href="/" ><FaGithub className="hover:text-orange-500"/></a> 
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200">Login</button>
        </div>
{/* mobile menu icon */}
<div className="md:hidden">
   <button className="cursor-pointer"> <FaBars className="text-white hover:text-orange-500 w-5 h-5"/> </button> 
</div >
      </nav>
    </header>
  );
};

export default Navbar;
