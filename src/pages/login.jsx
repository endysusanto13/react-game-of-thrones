import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth, LoginForm, LogoutButton, useUsername } from "domains/auth";
import { NAVBAR_LOGO } from "const";

export const LoginPage = () => {
  const { status } = useAuth();
  const { data : user } = useUsername();
  
  switch (status) {
    case "anonymous":
      return(
        <div className="flex flex-col h-screen bg-gray-200">
          <div className="h-1/6"></div>
          <div><LoginForm /></div>  
        </div>
      )
    case "authenticated":
        return (
          <div className="flex flex-col h-screen bg-gray-200">
            <div className="h-1/6"></div>
              <div className="mx-auto m-6 bg-gray-700 shadow-xl rounded-3xl">
                {user &&
                  <div className="flex flex-col p-16 text-center text-2xl leading-loose text-gray-100">
                    <span>Welcome <span className="font-bold text-yellow-400">{user.username}</span>, you have logged in successfully!</span>
                    <span>Click <Link to={'/'}><span className="text-yellow-500 font-bold">HERE</span></Link> to start browsing!</span>
                    <img src={NAVBAR_LOGO} alt="" className="pt-6"/>
                    <span className="pt-4 pb-2 text-sm text-right text-gray-100 italic">Wrong account?</span>
                    <div className="flex flex-row-reverse items-end w-full">
                      <LogoutButton>
                        Sign Out
                      </LogoutButton>
                    </div>
                  </div>
                }
            </div>
         </div>
      )
    default:
  };
};