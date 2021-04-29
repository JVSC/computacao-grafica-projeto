import React, { Component } from "react";
import {
  BackgroundRenderer,
  TransitionType,
  EffectType,
  Easings,
  WipeDirection,
  SlideDirection,
} from "midori-bg";
//import ReactDOM from "react-dom";
import "./style.scss";

function getTransitionConfig(type) {
  switch (type) {
    case TransitionType.Blend:
      return {
        duration: 1.5,
        easing: Easings.Quartic.InOut,
      };
    case TransitionType.Wipe:
      return {
        duration: 1.5,
        easing: Easings.Quartic.InOut,
        gradient: 0.5,
        angle: 15,
        direction:
          WipeDirection[
            Object.keys(WipeDirection)[
              Math.floor(Math.random() * Object.keys(WipeDirection).length)
            ]
          ],
      };
    case TransitionType.Blur:
      return {
        duration: 1,
        easing: Easings.Quintic.InOut,
        intensity: 1.5,
      };
    case TransitionType.Slide:
      return {
        duration: 1.5,
        easing: Easings.Quintic.InOut,
        slides: 2,
        intensity: 5,
        direction:
          SlideDirection[
            Object.keys(SlideDirection)[
              Math.floor(Math.random() * Object.keys(SlideDirection).length)
            ]
          ],
      };
    case TransitionType.Glitch:
      return {
        seed: Math.random(),
        duration: 1.5,
        easing: Easings.Cubic.InOut,
      };
    default:
      return {};
  }
}

function setEffects(background, effects) {
  const { effects: backgroundEffects } = background;
  backgroundEffects.removeAll();
  for (const effect of effects) {
    switch (effect) {
      case EffectType.Blur:
        backgroundEffects.set(EffectType.Blur, { radius: 1.5, passes: 1 });
        break;
      case EffectType.MotionBlur:
        backgroundEffects.set(EffectType.MotionBlur, {
          intensity: 1,
          samples: 10,
        });
        break;
      case EffectType.Bloom:
        backgroundEffects.set(EffectType.Bloom, { radius: 1, passes: 1 });
        break;
      case EffectType.RgbShift:
        backgroundEffects.set(EffectType.RgbShift, {
          amount: 0.005,
          angle: 135,
        });
        break;
      case EffectType.Vignette:
        backgroundEffects.set(EffectType.Vignette, { darkness: 1, offset: 1 });
        break;
      case EffectType.VignetteBlur:
        backgroundEffects.set(EffectType.VignetteBlur, {
          size: 3,
          radius: 1.5,
          passes: 1,
        });
        break;
    }
  }
}

function setParticles(background) {
  const { particles } = background;
  particles.generate([
    {
      name: "small",
      amount: 50,
      maxSize: 5,
      maxOpacity: 0.8,
      minGradient: 0.75,
      maxGradient: 1.0,
    },
    {
      name: "medium",
      amount: 20,
      maxSize: 12,
      maxOpacity: 0.8,
      minGradient: 0.75,
      maxGradient: 1.0,
      smoothing: 0.8,
    },
    {
      name: "large",
      amount: 10,
      minSize: 100,
      maxSize: 125,
      maxOpacity: 0.04,
      minGradient: 1.0,
      maxGradient: 1.0,
      smoothing: 0.65,
    },
  ]);
  particles.move(
    "small",
    { distance: 0.5, angle: 25 },
    { duration: 5, loop: true }
  );
  particles.move(
    "medium",
    { distance: 0.3, angle: 45 },
    { duration: 5, loop: true }
  );
  particles.move(
    "large",
    { distance: 0.4, angle: 35 },
    { duration: 5, loop: true }
  );
  particles.sway(
    "small",
    { x: 0.025, y: 0.025 },
    { duration: 1.5, easing: Easings.Sinusoidal.InOut, loop: true }
  );
  particles.sway(
    "medium",
    { x: 0.025, y: 0.025 },
    { duration: 1.5, easing: Easings.Sinusoidal.InOut, loop: true }
  );
  particles.sway(
    "large",
    { x: 0.025, y: 0.025 },
    { duration: 1.5, easing: Easings.Sinusoidal.InOut, loop: true }
  );
}

function getEffectTypeString(effectType) {
  switch (effectType) {
    case EffectType.RgbShift:
      return "RGB Shift";
    case EffectType.MotionBlur:
      return "Motion Blur";
    case EffectType.VignetteBlur:
      return "Vignette Blur";
    default:
      return effectType;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      title: "HELLO WORLD",
      index: 2,
      transition: TransitionType.Glitch,
      effects: [
        EffectType.Bloom,
        EffectType.MotionBlur,
        EffectType.Vignette,
        EffectType.VignetteBlur,
      ],
    };
  }

  setBackground(texture, transitionType) {
    const delay = 1.25;
    this.renderer.setBackground(texture, {
      type: transitionType,
      config: {
        ...getTransitionConfig(transitionType),
        delay,
        onInit: (prevBackground, nextBackground) => {
          prevBackground.camera.move(
            {
              x: Math.random(),
              y: Math.random(),
              z: 0.3 + Math.random() * 0.7,
            },
            {
              duration: 2.5,
              easing: Easings.Quartic.In,
            }
          );
          prevBackground.camera.rotate(-5 + Math.random() * 10, {
            duration: 2.5,
            easing: Easings.Quartic.In,
          });
          nextBackground.camera.move(
            {
              x: Math.random(),
              y: Math.random(),
              z: 0.7 + Math.random() * 0.3,
            },
            {
              duration: 2,
              delay,
              easing: Easings.Quartic.Out,
            }
          );
          nextBackground.camera.sway(
            { x: 0.1, y: 0.05, z: 0.02, zr: 1 },
            {
              duration: 3,
              easing: Easings.Quadratic.InOut,
              loop: true,
            }
          );
          nextBackground.camera.rotate(-5 + Math.random() * 10, {
            duration: 2,
            delay,
            easing: Easings.Quartic.Out,
          });
        },
      },
    });

    const { background } = this.renderer;
    const { effects } = this.state;
    setEffects(background, effects);
    setParticles(background);
  }

  componentDidMount() {
    const { images } = this.props;
    const { index, transition } = this.state;
    this.renderer = new BackgroundRenderer(this.canvas.current);
    this.setBackground(images[index].image, transition);
  }

  render() {
    return (
      <div className="view">
        <canvas ref={this.canvas} className="canvas"></canvas>
        <div className="view center">
          <h1 className='content-header'>Animações com Blender</h1>
          <p className="content-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quo, laborum ipsa, reiciendis iusto iure magni illo cum, dolor
            reprehenderit inventore itaque totam delectus unde voluptatum
            suscipit tempora aliquam ex. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className="content-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quo, laborum ipsa, reiciendis iusto iure magni illo cum, dolor
            reprehenderit inventore itaque totam delectus unde voluptatum
            suscipit tempora aliquam ex. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quo, laborum ipsa, reiciendis iusto iure magni illo cum, dolor
            reprehenderit inventore itaque totam delectus unde voluptatum
            suscipit tempora aliquam ex. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div>
            <button className='btn'>btn 1</button>

            <button className='btn'>btn 2</button>

            <button className='btn'>btn 3</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
