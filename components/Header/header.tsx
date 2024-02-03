import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link
            href="/"
            className="btn btn-ghost text-lg bg-gray-400 text-black"
          >
            E-commerce
          </Link>
          <ul className="flex">
            <li>
              <Link
                className="btn btn-ghost rounded-btn bg-slate-600 text-white"
                href="/cart"
              >
                Cart
              </Link>
            </li>

            <li>
              <Link
                className="btn btn-ghost rounded-btn bg-slate-600 text-white"
                href="/signin"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
