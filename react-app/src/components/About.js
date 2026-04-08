import React from 'react';

const creators = [
    {
        name: 'Trinabha Dixit',
        email: 'trinabha@example.com',
        github: 'https://github.com/ItsTrinabha',
        linkedin: 'https://www.linkedin.com/in/trinabha-dixit-0bb170334/',
        image: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Trinabha%20Dixit'
    },
    {
        name: 'Shikhar Sahay',
        email: 'shikhar@example.com',
        github: 'https://github.com/shikhar-sahay',
        linkedin: 'https://www.linkedin.com/in/shikharsahay/',
        image: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Shikhar%20Sahay'
    },
    {
        name: 'Bhargav Mahanta',
        email: 'bhargavmahanta30@gmail.com',
        github: 'https://github.com/bhargavmahanta',
        linkedin: 'https://www.linkedin.com/in/bhargav-mahanta-44583a243',
        image: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Bhargav%20Mahanta'
    }
];

function About() {
    return (
        <section className="about-section animate-bounce-in">
            <div className="about-card">
                <h2 className="section-title">About The Creators</h2>
                <p className="section-text" style={{ textAlign: 'center' }}>
                    Meet the creators behind Mindra. Connect with them via LinkedIn, email, and GitHub.
                </p>

                <div className="creator-grid">
                    {creators.map((creator) => (
                        <article key={creator.name} className="creator-item">
                            <img src={creator.image} alt={`${creator.name} profile`} className="creator-photo" />
                            <h3>{creator.name}</h3>

                            <div className="creator-links">
                                <a href={`mailto:${creator.email}`} className="creator-link" aria-label={`Email ${creator.name}`}>
                                    <span className="icon">✉</span>
                                    <span>Email</span>
                                </a>
                                <a href={creator.github} className="creator-link" target="_blank" rel="noreferrer" aria-label={`${creator.name} GitHub`}>
                                    <span className="icon">GH</span>
                                    <span>GitHub</span>
                                </a>
                                <a href={creator.linkedin} className="creator-link" target="_blank" rel="noreferrer" aria-label={`${creator.name} LinkedIn`}>
                                    <span className="icon">in</span>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
