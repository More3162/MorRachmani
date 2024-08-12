import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function Layout({ children }) {

    return (
        <>
            <Header /> {/* מכניס לי את החלק העליון הכולל את החלק של הניווט */}
            <Main>{children}</Main> {/* מכליל את כל העמודים שנקבל תחת אותו עיצוב */}
            <Footer /> {/* החלק התחתון - הפוטר כולל הלינקים למטה */}
        </>
    );
}