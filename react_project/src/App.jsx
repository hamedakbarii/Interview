import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Routerbar from "./Components/RouterBar/Routerbar";

export default function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <Routerbar />
      {router}
    </div>
  );
}
