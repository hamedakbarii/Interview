import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
  const router = useRoutes(routes);

  return (
    <div className="flex flex-col gap-4 md:flex-row w-full mt-10 p-6">
      <Sidebar />
      {router}
    </div>
  );
}
