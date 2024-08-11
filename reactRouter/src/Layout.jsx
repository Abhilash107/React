import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
//* OutLet:
// used to render nested route components within a parent route's layout.
// allows you to define nested routes within a layout

//helps in maintaining a consistent layout (like headers, footers, or sidebars) across different pages while rendering different content for each route.

//facilitates the composition of routes and layouts by separating the layout from the content,

function Layout(){

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout