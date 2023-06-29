import React from "react"
import { RouteObject, Navigate } from "react-router-dom"
import Discover from "@/views/discover"
import Demo from "@/views/demo"
import Mine from "@/views/mine"
import Focus from "@/views/focus"
import Download from "@/views/download"

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
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/download",
    element: <Download />
  }
]

export default routes
