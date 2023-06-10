import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import RouterBar from "./components/RouterBar/RouterBar";

export default function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <RouterBar />
      {router}
    </div>
  );
}
