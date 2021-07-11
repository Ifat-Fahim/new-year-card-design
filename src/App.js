import React, { Component } from "react";
import "./App.css";
import Animation from "./components/Animation";
import EarthTexture from "./img/earth.jpg";
import SpaceTexture from "./img/space.jpg";
import NormalEarthTexture from "./img/earth_normal_map.png";

let images = {
    EarthTexture: EarthTexture,
    SpaceTexture: SpaceTexture,
    NormalEarthTexture: NormalEarthTexture,
};

export default class App extends Component {
    render() {
        return (
            <>
                <Animation images={images} />
            </>
        );
    }
}
