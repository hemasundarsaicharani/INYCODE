import React from "react";
import logoIc from "../../assets/logo_ic.png";
import "./BrandLogo.css";

const BrandLogo = ({ variant = "sidebar", showTagline = false }) => {
  return (
    <div className={`brand-logo-container ${variant}`}>
      <div className="brand-logo-img-wrap">
        <img src={logoIc} alt="IC" className="brand-logo-img" />
      </div>
      <div className="brand-logo-text-wrap">
        <span className="brand-logo-title">INFYCODE</span>
        {showTagline && (
          <span className="brand-logo-tagline">INFINITE LEARNING SOLUTIONS</span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
