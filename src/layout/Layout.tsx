import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { GlobalStyle } from "../styles/GlobalStyle"

export const Layout = () => {

    const theme = useSelector((state: RootState) => state.themeList.theme);
    
    return (
          <HelmetProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <ThemeProvider theme={theme} >
                <GlobalStyle theme={theme} />
                <Header />
                <Outlet />
            </ThemeProvider>
        </HelmetProvider>
    )
}