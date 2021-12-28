import { CSSProperties } from "react";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";
import "./Fireworks.css";

export default function App() {
  const { enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 5,
      acceleration: 1,
      friction: 0.96,
      gravity: 1,
      particles: 500,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      sound: {
        enabled: true,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3",
        ],
        volume: {
          min: 1,
          max: 2,
        },
      },
      mouse: {
        click: true,
        move: false,
        max: 1,
      },
    },
  });

  const style: CSSProperties = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#000",
  };

  return (
    <Fireworks style={style} enabled={enabled} options={options}>
      <span className="greetings">Happy New Year!</span>
    </Fireworks>
  );
}
