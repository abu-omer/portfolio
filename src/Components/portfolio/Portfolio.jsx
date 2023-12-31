import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    ti1tle: "crypto currency dashboard & finantial visualization",
    github: "http://github.com",
    demoo:
      "https://dribbble.com/shots/18106135-feNFT-NFT-Marketplace-Landing-Page",
  },
  {
    id: 2,
    image: IMG2,
    ti1tle: "crypto currency dashboard & finantial visualization",
    github: "http://github.com",
    demoo:
      "https://dribbble.com/shots/18106135-feNFT-NFT-Marketplace-Landing-Page",
  },
  {
    id: 3,
    image: IMG3,
    ti1tle: "crypto currency dashboard & finantial visualization",
    github: "http://github.com",
    demoo:
      "https://dribbble.com/shots/18106135-feNFT-NFT-Marketplace-Landing-Page",
  },
  {
    id: 4,
    image: IMG4,
    ti1tle: "crypto currency dashboard & finantial visualization",
    github: "http://github.com",
    demoo:
      "https://dribbble.com/shots/18106135-feNFT-NFT-Marketplace-Landing-Page",
  },
  {
    id: 5,
    image: IMG5,
    ti1tle: "crypto currency dashboard & finantial visualization",
    github: "http://github.com",
    demoo:
      "https://dribbble.com/shots/18106135-feNFT-NFT-Marketplace-Landing-Page",
  },
  {
    id: 6,
    image: IMG6,
    ti1tle: "crypto currency dashboard & finantial visualization",
    github: "http://github.com",
    demoo:
      "https://dribbble.com/shots/18106135-feNFT-NFT-Marketplace-Landing-Page",
  },
];

const Portfolio = () => {
  return (
    <section className="prto">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demoo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demoo} className="btn btn-primary">
                  Live Demo{" "}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
