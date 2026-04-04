import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../data/portfolio.json';

const Project = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        setPortfolio(portfolioData.portfolio || []);
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        const techPreview = (port.description || '')
                            .split(',')
                            .slice(0, 3)
                            .map((item) => item.trim())
                            .filter(Boolean)

                        return (
                            <div className="image-box" key={idx}>
                                <div className={`placeholder-art theme-${(idx % 5) + 1}`}>
                                    <span className="project-label">Project</span>
                                    <h3>{port.title}</h3>
                                    <div className="tech-preview">
                                        {techPreview.map((tech) => (
                                            <span key={`${port.title}-${tech}`}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="content">
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container project-page">
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Project;
