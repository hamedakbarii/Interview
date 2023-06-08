import React from "react";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  MessageOutlined,
  PermIdentity,
  Timeline,
  TrendingUp,
  // PermIdentityIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="p-2 bg-gray-50 w-[350px] h-[350px] shadow-lg">
      <ul className="p-2 flex flex-col justify-center items-start w-full gap-6">
        <Link to="/" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
            <LineStyle />
            Home
          </li>
        </Link>

        <Link to="/layout" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
            <AttachMoney />
            Layout
          </li>
        </Link>

        <Link to="/table" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
            <BarChart />
            Table
          </li>
        </Link>

        <Link to="/searchbar" className="w-full">
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
            <DynamicFeed />
            SearchBar
          </li>
        </Link>
      </ul>
    </section>
  );
}
