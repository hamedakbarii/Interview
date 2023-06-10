import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Searchbar from "./pages/Searchbar";
import Table from "./pages/TableComp";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/layout", element: <Layout /> },
  { path: "/table", element: <Table /> },
  { path: "/searchbar", element: <Searchbar /> },
];

export default routes;
