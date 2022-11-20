import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import {
  PopupContainer,
  Applicant,
  Location,
  DateContainer,
  FoodType,
} from "./style";

import logo from "./logo.svg";
import "./App.css";

import { formatDate, model, renderIcon } from "./helper";

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

  if (!foodData) return <p>loading</p>;

  // const foodTruck = foodData ? foodData.slice(0, 200) : [];

  console.log({ foodData });

  const firstPosition = foodData ? [foodData[0]?.lat, foodData[0]?.long] : [];

  return (
    <div>
      <MapContainer center={firstPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {foodData?.map((truck, key) => (
          <Marker
            key={key}
            position={[truck?.lat, truck?.long]}
            icon={renderIcon(truck?.type)}
          >
            <Popup>
              <PopupContainer>
                <Applicant>{truck?.applicant}</Applicant>
                <Location>{truck?.address}</Location>
                {truck?.exp_date && (
                  <DateContainer>
                    <strong>Expires on:</strong> {formatDate(truck?.exp_date)}
                  </DateContainer>
                )}
                <FoodType>{truck?.food_items} </FoodType>
              </PopupContainer>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
