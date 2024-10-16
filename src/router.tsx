import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { ViewList } from "./pages/ViewList"
import {ViewListItem } from "./pages/ViewListItem"
import { NotFound } from "./pages/NotFound"
import { ToDoListPage } from "./pages/ToDoListPage"

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
])
//   ] ,{basename: '/app/' } )