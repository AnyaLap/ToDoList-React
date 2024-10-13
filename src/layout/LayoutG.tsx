import { HelmetProvider } from "react-helmet-async";
import { NotFound } from "../pages/NotFound";
import { ToDoListPage } from "../pages/ToDoListPage";

export const LayoutG = () => {
  return (
    <HelmetProvider>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
    
        <NotFound />
        <ToDoListPage />
      </>
    </HelmetProvider>
  );
};