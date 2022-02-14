import React, { Component } from "react";

const Header = () => {
    return (
        <figure className="text-center">
           <h1 className="display-2">Score Your Travelling Point</h1>
           <p className="lead">
  Select Which Places You've Visited & Make Score.
</p>
<h2>Minimum Traveller Point: <small className="text-muted">100</small></h2>
        </figure>
    );
};

export default Header;
