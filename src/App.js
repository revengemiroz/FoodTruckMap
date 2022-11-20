import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Loader from "./components/Loader";

import { formatDate, model, renderIcon } from "./helper";

import Legend from "./components/Legend";

import {
  PopupContainer,
  Applicant,
  Location,
  DateContainer,
  FoodType,
} from "./style";

function App() {
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((res) => res.json())
      .then((data) => model(data))
      .then((formatData) => setFoodData(formatData));
  };

  if (!foodData) return <Loader />;

  const firstPosition = foodData ? [foodData[0]?.lat, foodData[0]?.long] : [];

  return (
    <>
      <Legend />
      <MapContainer center={firstPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {foodData?.map((mapData, key) => (
          <Marker
            key={key}
            position={[mapData?.lat, mapData?.long]}
            icon={renderIcon(mapData?.type)}
          >
            <Popup>
              <PopupContainer>
                <Applicant>{mapData?.applicant}</Applicant>
                <Location>{mapData?.address}</Location>
                {mapData?.exp_date && (
                  <DateContainer>
                    <strong>Expires on:</strong> {formatDate(mapData?.exp_date)}
                  </DateContainer>
                )}
                {mapData?.food_items && (
                  <FoodType>{mapData?.food_items} </FoodType>
                )}
              </PopupContainer>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default App;
