// import { useState } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo1.jpg";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dispName, setDispName] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        localStorage.removeItem("toy-access");
      })
      .catch((error) => console.error(error));
  };


  return (
    <>
      {/* top logo nav  */}

      <nav className="flex items-center justify-between md:border-none border-b-[4px] border-[#1fd6e0] md:px-16 px-4 py-5">
        <div className="hidden md:block"></div>

        <div>
          <Link to="/" className="flex items-center">
            <img className="md:w-28 w-20" src={logo} alt="" />
            <h2 className="md:text-3xl text-lg text-gray-600 font-bold">
              Kid's <br /> Toy-House{" "}
            </h2>
          </Link>
        </div>

        <div className="relative w-fit flex items-center gap-1 md:block md:w-40 text-center">

          <p
            className={`${
              dispName ? "inline-block" : "hidden"
            } absolute w-full text-center right-44  px-4 py-2 font-semibold bg-[#0c777c] text-white rounded-xl`}
          >
            {user?.displayName}
          </p>

          {user ? (
            <div className="flex items-center gap-3">
              <img
                onMouseEnter={() => setDispName(true)}
                onMouseLeave={() => setDispName(false)}
                className="md:h-[3.5rem] h-[3rem] w-[3rem] md:w-[3.5rem] rounded-full border-[#00ADB5] border-4"
                src={user?.photoURL}
                alt=""
              />

              <button
                onClick={handleLogout}
                className="hidden md:inline-block py-3 px-5 shadow shadow-[#00ADB5] font-semibold rounded-xl text-black border-2 border-gray-400 hover:bg-gray-200 transition-all duration-300 "
              >
                Logout
              </button>

            </div>
          ) : (
            <Link to="/user" className="outline-btn">
              Login
            </Link>
          )}


          {toggle ? (
            <FontAwesomeIcon
              onClick={() => setToggle(!toggle)}
              className="text-[#235558] w-6 md:hidden h-6 ms-2"
              icon={faXmark}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setToggle(!toggle)}
              className="text-[#235558] w-6 md:hidden h-6 ms-2"
              icon={faBars}
            />
          )}

        </div>

      </nav>

      {/* links nav , 2nd nav */}
      <nav
        className={` md:w-full transition-all duration-500 ease-in-out w-4/6 mx-auto md:rounded-none rounded-xl py-7 absolute md:py-5 bg-[#1fd6e0] md:sticky md:top-0 top-[6.5rem] z-50 ${
          toggle ? "right-0" : "md:right-0 -right-[17rem]"
        }`}
      >

        <ul className="flex gap-6 flex-col md:flex-row justify-center items-center font-semibold">

          <li>
            <NavLink
              onClick={() => setToggle(!toggle)}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setToggle(!toggle)}
              to="/alltoys"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All Toys
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setToggle(!toggle)}
              to="/mytoys"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Toys
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setToggle(!toggle)}
              to="/addtoy"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add A Toy
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setToggle(!toggle)}
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blogs
            </NavLink>
          </li>

        </ul>

      </nav>
    </>
  );
};

export default Header;
