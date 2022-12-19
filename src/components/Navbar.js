import React from "react";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

function Navbar(props) {
  const auth = useAuth();

  return (
    <header className="py-5 px-4 bg-gray-100">
      <div className="container flex flex-col flex-wrap items-center mx-auto md:flex-row">
        <Link to="/" className="mb-3 md:mb-0">
          Logo
        </Link>
        <nav className="flex flex-wrap items-center md:ml-auto">
          <Link to="/about" className="ml-5">
            About
          </Link>

          {(!auth.user || !auth.user.stripeSubscriptionId) && (
            <Link to="/pricing" className="ml-5">
              Pricing
            </Link>
          )}

          {auth.user && (
            <>
              <Link to="/dashboard" className="ml-5">
                Dashboard
              </Link>
              <Link to="/settings/general" className="ml-5">
                Settings
              </Link>
              <Link
                to="/auth/signout"
                className="ml-5"
                onClick={(e) => {
                  e.preventDefault();
                  auth.signout();
                }}
              >
                Sign out
              </Link>
            </>
          )}

          {!auth.user && (
            <Link to="/auth/signin" className="ml-5">
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
