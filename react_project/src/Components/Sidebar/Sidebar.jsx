import React, { useState } from "react";
import {
  AttachMoney,
  BarChart,
  DynamicFeed,
  LineStyle,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="p-2 bg-gray-50 w-full md:w-[350px] h-[350px] shadow-lg">
      <ul className="p-2 flex flex-col justify-center items-center md:items-start w-full gap-6">
        <NavLink activeClassName="active" to="/" className={`w-full`}>
          <li className="flex justify-start items-center gap-2 p-2  transition-all">
            <LineStyle />
            Home
          </li>
        </NavLink>

        <NavLink to="/layout" activeClassName="active" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2  transition-all">
            <AttachMoney />
            Layout
          </li>
        </NavLink>

        <NavLink to="/table" activeClassName="active" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2  transition-all">
            <BarChart />
            Table
          </li>
        </NavLink>

        <NavLink to="/searchbar" activeClassName="active" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2  transition-all">
            <DynamicFeed />
            SearchBar
          </li>
        </NavLink>
      </ul>
    </section>
  );
}
