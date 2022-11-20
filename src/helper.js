import { Icon } from "leaflet";

const defaultLogo = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon.png",
  iconSize: [25, 40],
});

const truckLogo = new Icon({
  iconUrl: "https://img.icons8.com/officel/80/null/marker.png",
  iconSize: [40, 40],
});

const pushCartLogo = new Icon({
  iconUrl: "https://img.icons8.com/glyph-neue/64/null/visit.png",
  iconSize: [35, 45],
});

export const formatDate = (date) => {
  var newTime = new Date(date);
  return newTime.toISOString().substring(0, 10);
};

export const model = (data) => {
  const newData = [];

  if (data) {
    data?.map((response) => {
      newData.push({
        type: response?.facilitytype ?? "unknown",
        lat: Number(response.latitude),
        long: Number(response.longitude),
        address: response.address,
        location: response.locationdescription,
        applicant: response.applicant,
        started_date: response.approved,
        exp_date: response.expirationdate,
        block: response.block,
        food_items: response.fooditems,
      });
    });
  }

  return newData;
};

export const renderIcon = (type) => {
  if (type == "Push Cart") {
    return pushCartLogo;
  } else if (type == "Truck") {
    return truckLogo;
  } else {
    return defaultLogo;
  }
};
