import React, { useEffect } from "react";
import logo from "../../components/assets/images/Your paragraph text_adobe_express.svg";

const Search = () => {
    useEffect(() => {
        const handleScroll = () => {
            const search = document.querySelector(".search");
            if (search) {
                search.classList.toggle("active", window.scrollY > 100);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <img src={logo} alt="" />
                    </div>

                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search and hit enter..."
                        />
                        <span>Search</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Search;
