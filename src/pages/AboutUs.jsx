import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <main className="about-container">
      <section className="about-hero">
        <div className="hero-inner">
          <h1 className="hero-title">About Job Finder</h1>
          <p className="hero-sub">
            Connecting talented people with meaningful opportunities since 2023.
          </p>
          <p className="hero-lead">
            We make job search simple, transparent, and human—so you can focus
            on finding work that matters.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At Job Finder, our mission is to empower job seekers and employers
            by providing an intuitive marketplace for opportunities. We focus on
            high-quality listings, clear communication tools, and features that
            streamline the hiring process for everyone.
          </p>
        </div>
        <div className="mission-stats">
          <div className="stat">
            <div className="stat-value">10k+</div>
            <div className="stat-label">Jobs Posted</div>
          </div>
          <div className="stat">
            <div className="stat-value">8k+</div>
            <div className="stat-label">Successful Hires</div>
          </div>
          <div className="stat">
            <div className="stat-value">95%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>People First</h3>
            <p>
              We design products that respect job seekers and employers equally.
            </p>
          </div>
          <div className="value-card">
            <h3>Transparency</h3>
            <p>Clear listings, honest feedback, and data you can trust.</p>
          </div>
          <div className="value-card">
            <h3>Reliability</h3>
            <p>Dependable service and tools that work when you need them.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="avatar" aria-hidden="true">
              SA
            </div>
            <div className="member-info">
              <strong>Sparsh Arya</strong>
              <div className="member-role">Co-founder & CEO</div>
              <p>
                Sparsh leads product strategy and ensures Job Finder stays
                focused on user needs.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="avatar" aria-hidden="true">
              SM
            </div>
            <div className="member-info">
              <strong>Sana Malik</strong>
              <div className="member-role">Head of Engineering</div>
              <p>
                Sana builds reliable systems and leads our developer community
                initiatives.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="avatar" aria-hidden="true">
              JS
            </div>
            <div className="member-info">
              <strong>Jon Smith</strong>
              <div className="member-role">Community & Partnerships</div>
              <p>
                Jon connects Job Finder with employers, educators, and community
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <h2>Our Journey</h2>
        <ul>
          <li>
            <strong>2023:</strong> Launched MVP with core search features.
          </li>
          <li>
            <strong>2024:</strong> Expanded employer tools and added candidate
            profiles.
          </li>
          <li>
            <strong>2025:</strong> Grew to 10,000 listings and improved matching
            accuracy.
          </li>
        </ul>
      </section>

      <section className="about-cta">
        <h2>Get In Touch</h2>
        <p>
          If you'd like to partner with us, list jobs, or give feedback, we'd
          love to hear from you.
        </p>
        <a className="cta-button" href="mailto:hello@jobfinder.com">
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default AboutUs;
