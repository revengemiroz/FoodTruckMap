import React from "react";

import { Container, Main } from "./style";

function Index(props) {
  // const defaultLogo = new Icon({
  //     iconUrl: "https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon.png",
  //     iconSize: [25, 40],
  //   });

  //   const truckLogo = new Icon({
  //     iconUrl: "https://img.icons8.com/officel/80/null/marker.png",
  //     iconSize: [40, 40],
  //   });

  //   const pushCartLogo = new Icon({
  //     iconUrl: "https://img.icons8.com/glyph-neue/64/null/visit.png",
  //     iconSize: [35, 45],
  //   });

  const images = [
    {
      img: "https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon.png",
      name: "Location",
    },
    {
      img: "https://i.ibb.co/y4tbSCc/placeholder.png",
      name: "Push Cart",
    },
    {
      img: "https://img.icons8.com/officel/80/null/marker.png",
      name: "Truck",
    },
  ];

  return (
    <Container>
      <span className="title">Legend</span>
      {images?.map((legend) => (
        <Main key={legend.name}>
          <img src={legend.img} alt={legend.name} />
          <span>{legend.name}</span>
        </Main>
      ))}
    </Container>
  );
}

export default Index;
