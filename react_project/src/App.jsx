import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
  const router = useRoutes(routes);

  return (
    <div className="grid grid-cols-3 m-2">
      <Sidebar />

      {router}
    </div>
  );
}
