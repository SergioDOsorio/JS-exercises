import React from 'react';

export default function Navigation() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container-nav">
            <button onClick={() => scrollToSection('beginner-title')}>Beginner</button>
            <button onClick={() => scrollToSection('intermediate-title')}>Intermediate</button>
            <button onClick={() => scrollToSection('advanced-title')}>Advanced</button>
        </div>
    );
}
