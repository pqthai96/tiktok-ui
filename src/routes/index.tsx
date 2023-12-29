import {RouteObject} from 'react-router-dom';
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import {HeaderOnly} from "../layouts";
import {ReactElement, ReactNode} from "react";
import Upload from "../pages/Upload";
import config from '../config';
import Live from "../pages/Live";

interface AppRouteLayout {
  layout?: ReactElement<{ children: ReactNode }>
}

type AppRoute = RouteObject & AppRouteLayout;

const publicRoutes: AppRoute[] = [
  {
    path: config.routes.home,
    element: <Home/>,
  },
  {
    path: config.routes.following,
    element: <Following/>
  },
  {
    path: config.routes.profile,
    layout: <HeaderOnly><Profile/></HeaderOnly>
  },
  {
    path: config.routes.upload,
    layout: <HeaderOnly><Upload/></HeaderOnly>
  },
  {
    path: config.routes.live,
    element: <Live/>
  }
]

const privateRoutes: AppRoute[] = []

export {publicRoutes, privateRoutes}