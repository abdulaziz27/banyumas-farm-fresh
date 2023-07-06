import React, { useEffect, useState } from "react";
import logo from "../../components/assets/images/Your paragraph text_adobe_express.svg";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

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

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/products/suggestions?search=${searchTerm}`);
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        handleSearch();
    };

    const handleSuggestionClick = (suggestion) => {
        navigate(`/sproduct/${suggestion._id}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            if (suggestions.length > 0) {
                navigate(`/sproduct/${suggestions[0]._id}`);
            }
        }
    };

    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search and hit enter..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                        <span>Search</span>
                    </div>
                </div>
            </section>

            <div className="suggestions-container">
                <div className="suggestions">
                    {suggestions.map((suggestion) => (
                        <div
                            key={suggestion._id}
                            className="suggestion-item"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;