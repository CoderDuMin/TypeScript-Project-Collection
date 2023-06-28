import React from "react"
import { RouteObject, Navigate } from "react-router-dom"
import Discover from "@/views/discover"
import Demo from "@/views/demo"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: "/discover",
    element: <Discover />
  },
  {
    path: "/demo",
    element: <Demo />
  }
]

export default routes
