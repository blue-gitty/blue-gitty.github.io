import React from 'react';

const HomePage = () => {
  return (
    <html>
      <head>
        <title className="title">CARA Systems</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="stylesheet" href="../static/css/navbar.css" />
        <link rel="stylesheet" href="../static/css/home.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Major+Mono+Display" />
      </head>
      <body className="is-preload">
        {/* Navbar */}
        <div className="topnav">
          <a href="/home">
            <img src="../static/images/logo.png" alt="Logo" id="logo" />
          </a>
          <div>
            <a href="/home">Home</a>
            <a className="active" href="/activities">Placeholder</a>
            <a href="/improvement">Placeholder</a>
            <a href="/other">Placeholder</a>
          </div>
        </div>

        {/* Banner */}
        <section id="banner">
          <div className="inner">
            <h1> CARA SYSTEMS</h1>
            <p>[INSERT WEBSITE DESCRIPTION]</p>
          </div>
          <div className="overlay-text">
            <h2>[MORE TEXT]</h2>
            <p>[MORE TEXT]</p>
            <a href="/login"><button>Get Started</button></a>
          </div>
          <video autoPlay loop muted playsInline>
            <source src="../static/images/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Highlights */}
        <section className="wrapper">
          <div className="inner">
            <header className="special">
              {/* Content for Highlights */}
            </header>
          </div>
        </section>

        <footer>
          <div className="inner">
            <p className="footer-text">Created by Yatin Marpu</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default HomePage;
