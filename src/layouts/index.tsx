import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="">
        <Header />
        {children}
        <Footer /> 
    </div>;
};

export default Layout;