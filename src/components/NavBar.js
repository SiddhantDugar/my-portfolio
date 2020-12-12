import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="customnav">
      <div className="container mx-auto flex justify-between">
        <nav className="flex ">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-100 text-4xl font-bold cursive tracking-widest"
          >
            SIDDHANT DUGAR
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100"
            activeClassName="text-red-100 "
          >
            BLOG POSTS
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100"
            activeClassName="text-red-100"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100"
            activeClassName="text-red-100 "
          >
            ABOUT ME!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/SiddhantDugar"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="http://github.com/SiddhantDugar"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="http://linkedin.com/in/siddhantdug%E2%80%A6"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://medium.com/@siddhantdugar1"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 45, width: 45 }}
          />r
        </div>
      </div>
    </header>
  );
}
