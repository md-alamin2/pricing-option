import React, { useState } from "react";
import Links from "../Links/Links";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const links = navigationData.map((route) => (
    <Links key={route.id} route={route}></Links>
  ))
  return (
    <nav className="flex justify-between items-center w-11/12 lg:container mx-auto mt-5">
      <span className="flex gap-2">
        <span className="flex-col">
        {open ? (
          <X onClick={handleToggle} className="lg:hidden"></X>
        ) : (
          <Menu onClick={handleToggle} className="lg:hidden"></Menu>
        )}

        <ul className={`bg-slate-800 p-2 rounded-xl absolute duration-500 ${open? "top-14": "-top-40"}`}>
            {
                open&&links
            }
        </ul>
        </span>
        <h3>My Nav</h3>
      </span>
      <ul className="lg:flex justify-center gap-10 hidden">
        {
            links
        }
      </ul>
      <button className="btn">Sing In</button>
    </nav>
  );
};

export default Navbar;
