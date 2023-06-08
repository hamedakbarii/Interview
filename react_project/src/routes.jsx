import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Searchbar from "./Pages/Searchbar";
import Table from "./Pages/Table";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/layout", element: <Layout /> },
  { path: "/table", element: <Table /> },
  { path: "/searchbar", element: <Searchbar /> },
];

export default routes;
