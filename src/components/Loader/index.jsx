import React from "react";
import Lottie from "react-lottie";

import animation from "./anim.json";

import { LoadingContainer } from "./style";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Index(props) {
  return (
    <LoadingContainer>
      <Lottie height={200} width={200} options={defaultOptions} />;
    </LoadingContainer>
  );
}

export default Index;
