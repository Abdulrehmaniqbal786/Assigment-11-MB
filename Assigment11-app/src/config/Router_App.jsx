import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from '../pages/Home';
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Layout } from "../components/Layout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About />} />
<Route path="blog" element={<Blog/>} />

    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};