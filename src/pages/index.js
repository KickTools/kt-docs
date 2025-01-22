import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Welcome to KickTools Documentation"
      description="Get started with KickTools, the best tools for Kick streamers!"
    >
      <main>
      <div className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">Welcome to KickTools Documentation</h1>
            <p className="hero__subtitle">Your ultimate guide to KickTools for streamers</p>
            <div className="hero__buttons">
              <a className="button button--secondary button--lg" href="/docs/">
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Section with two image placeholders */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '8rem' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/img/book.png"
                alt="Docs Thumbnail"
                style={{ height: '150px', marginBottom: '1rem' }}
              />
              <h3>Documentation</h3>
              <p>Explore the comprehensive guides to get started with KickTools.</p>
              <a
                style={{
                  backgroundColor: '#f7f7f7',
                  color: '#0070f3',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
                href="/docs/"
              >
                View Documentation
              </a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src="/img/change.png"
                alt="Changelog Thumbnail"
                style={{ height: '150px', marginBottom: '1rem' }}
              />
              <h3>Changelog</h3>
              <p>Stay up to date with the latest features and updates to KickTools.</p>
              <a
                style={{
                  backgroundColor: '#f7f7f7',
                  color: '#0070f3',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
                href="/changelog"
              >
                View Changelog
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
