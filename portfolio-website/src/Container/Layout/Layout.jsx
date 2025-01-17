import React from "react";
import NavigationBar from "@/Components/NavigationBar/NavigationBar";

export default function Layout({ children }) {
    return (
        <>
            <NavigationBar />
            <div className="container-fluid p-0">{children}</div>
        </>
    );
}