import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadImage } from "midori-bg";
import img0 from "./assets/0.jpg";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";

Promise.all([
  loadImage(img0).then((image) => ({
    image,
    title: "夜を歩いて",
    artist: "みふる",
    source: "https://www.pixiv.net/en/artworks/71306825",
  })),
  loadImage(img1).then((image) => ({
    image,
    title: "「何考えてるんです？」",
    artist: "ちた",
    source: "https://www.pixiv.net/en/artworks/78237071",
  })),
  loadImage(img2).then((image) => ({
    image,
    title: "Midnight Stroll",
    artist: "Wenqing Yan",
    source: "https://www.yuumeiart.com/#/midnight-stroll/",
  })),
])
  .then((images) =>
    ReactDOM.render(<App images={images} />, document.getElementById("root"))
  )
  .catch((e) => console.error(`Failed to load assets: ${e}`));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
