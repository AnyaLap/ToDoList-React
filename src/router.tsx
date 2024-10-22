import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { ViewList } from "./pages/ViewList"
import {ViewListItem } from "./pages/ViewListItem"
import { ToDoListPage } from "./pages/ToDoListPage"
import { NotFound } from "./pages/404/404"

export const router = createBrowserRouter([
  
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {path: '/', element: <ToDoListPage /> },
        {path: '/list', element: <ViewList /> },
        {path: '/list/:id', element: <ViewListItem /> }
      ]
    },
    {
      path: '*',
      element: <NotFound />,
    }
] ,{basename: '/todo' } )