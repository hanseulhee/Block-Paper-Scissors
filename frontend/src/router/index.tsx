import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import Game from "../Game";
import GameLobby from "../GameLobby";
import GameResult from "../GameResult";
import NotFound from "../NotFound";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <App /> },
        { path: "/game", element: <Game /> },
        { path: "/gameLobby", element: <GameLobby /> },
        { path: "/gameResult", element: <GameResult /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
