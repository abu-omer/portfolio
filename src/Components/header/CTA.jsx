import React from "react";
import cv from "../../assets/mohamedcv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} className="btn">
        Downlad CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
