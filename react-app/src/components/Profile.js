import React, { useState } from 'react';

function Profile() {
    const [profile, setProfile] = useState({
        name: 'Student Name',
        email: 'student@example.com',
        goal: 'Crack internship interviews in 6 months',
        focusHours: 3,
        image: '/favicon.png'
    });
    const [imageError, setImageError] = useState(false);

    const updateField = (field, value) => {
        setProfile((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <section className="profile-section animate-bounce-in">
            <div className="profile-card">
                <h2 className="section-title">User Profile</h2>

                <div className="profile-top">
                    <div className="profile-avatar-wrap">
                        <img
                            src={imageError ? '/favicon.png' : profile.image}
                            alt="Profile"
                            className="profile-avatar"
                            onError={() => setImageError(true)}
                        />
                    </div>
                    <div className="profile-top-text">
                        <h3>{profile.name}</h3>
                        <p>{profile.email}</p>
                    </div>
                </div>

                <div className="profile-grid">
                    <label className="profile-label">
                        Profile Image URL
                        <input
                            className="profile-input"
                            value={profile.image}
                            onChange={(event) => {
                                setImageError(false);
                                updateField('image', event.target.value);
                            }}
                            placeholder="https://example.com/photo.jpg"
                        />
                    </label>

                    <label className="profile-label">
                        Name
                        <input
                            className="profile-input"
                            value={profile.name}
                            onChange={(event) => updateField('name', event.target.value)}
                        />
                    </label>

                    <label className="profile-label">
                        Email
                        <input
                            className="profile-input"
                            value={profile.email}
                            onChange={(event) => updateField('email', event.target.value)}
                        />
                    </label>

                    <label className="profile-label">
                        Primary Goal
                        <input
                            className="profile-input"
                            value={profile.goal}
                            onChange={(event) => updateField('goal', event.target.value)}
                        />
                    </label>

                    <label className="profile-label">
                        Daily Focus Hours
                        <input
                            className="profile-input"
                            type="number"
                            min="1"
                            max="12"
                            value={profile.focusHours}
                            onChange={(event) => updateField('focusHours', event.target.value)}
                        />
                    </label>
                </div>

                <div className="profile-summary">
                    <h3>Profile Preview</h3>
                    <p><strong>{profile.name}</strong> ({profile.email})</p>
                    <p>Goal: {profile.goal}</p>
                    <p>Study target: {profile.focusHours} hours/day</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;
