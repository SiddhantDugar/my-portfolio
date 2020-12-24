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
            className="inline-flex items-center py-1 px-3 my-5 lg:text-3xl md:text-2xl text-l rounded text-red-200 hover:text-green-100"
          >
            SIDDHANT DUGAR
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-1 px-3 my-5 rounded text-red-200 hover:text-green-100"
            activeClassName="text-red-100 "
          >
            BLOG POSTS
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-1 px-3 my-5 rounded text-red-200 hover:text-green-100"
            activeClassName="text-red-100"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-1 px-2 my-5 rounded text-red-200 hover:text-green-100"
            activeClassName="text-red-100 "
          >
            ABOUT ME!
          </NavLink>
        </nav>
        <div className="inline-flex py-1 px-3 my-5">
          <SocialIcon
            url="https://twitter.com/SiddhantDugar"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://github.com/SiddhantDugar"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://linkedin.com/in/siddhantdug%E2%80%A6"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://medium.com/@siddhantdugar1"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
