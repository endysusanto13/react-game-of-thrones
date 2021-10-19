import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FireIcon, UserCircleIcon, LoginIcon } from "@heroicons/react/outline"
import { LogoutButton, useAuth, useUsername } from "domains/auth";
import { NAVBAR_LOGO } from "const";

export const NavBar = (props) => {
  const { status } = useAuth();
  const { data : user } = useUsername();

  return(
    <div className="fixed grid grid-cols-3 justify-items-stretch h-12 w-full bg-gray-900 z-50">
      <div className="flex flex-row items-center justify-start">
          <FireIcon className="w-14 h-8 text-white pl-4 pr-2"/> 
        <Link to={"/"} className="pb-0.5">
          <img src={NAVBAR_LOGO} alt="" className="h-6"/>
        </Link>
      </div>
        {props.children}
      <div className="col-start-3 flex flex-row items-center justify-end">
        <span className="text-white font-sans text-lg font-semibold tracking-wider pr-2">
          {status === "authenticated" ? (
            <div className="flex flex-row items-center justify-end">
              <UserCircleIcon className="w-12 h-6 text-white pl-4" />
                <span className="pr-2">
                  {user && user.username}
                </span>
                <LogoutButton>
                  Sign Out
                </LogoutButton>
            </div>
          ) : (
            <Link to={`/login`}>
              <div className="flex flex-row items-center justify-end space-x-4 pr-2">
                <LoginIcon className="w-9 h-9 text-white pr-2"/>
                Sign In
              </div>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};