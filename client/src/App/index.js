import React, { Component } from "react";
import {
  BackgroundRenderer,
  TransitionType,
  EffectType,
  Easings,
  WipeDirection,
  SlideDirection,
} from "midori-bg";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Document, Page, pdfjs } from "react-pdf";
import ReactPlayer from "react-player";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
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
      default:
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

class App extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      step: 0,
      title: "HELLO WORLD",
      index: 0,
      textOneIndex: 0,
      transition: TransitionType.Glitch,
      numPages: 0,
      pageNumber: 1,
      effects: [
        EffectType.Bloom,
        EffectType.MotionBlur,
        EffectType.Vignette,
        EffectType.VignetteBlur,
      ],
      modal: false,
    };
    this.textOne = [
      "Um script é uma seqüência de instruções, em uma linguagem interpretável pelo sistema,para controle dos objetos e suas respectivas propriedades de animação, textura e comportamento",
      "A animação procedural utiliza o modelo de linguagem de programação por procedimentos, incluindo a orientação por objetos e não possui uma relação direta com um determinado sistema. As linguagens procedurais são aquelas em que os operadores são executados em uma certa ordem, para atender a uma solicitação ou atualização de dados. A animação procedural consiste basicamente em modelos matemáticos implementados em linguagens de programação para simulação de forças físicas. ",
      "A animação comportamental ou por comportamento é aquela em que o animador descreve um conjunto de regras para a maneira como um ou mais objetos da cena reagirão com o ambiente. Um exemplo desse tipo é o sistema de partículas quando usado para multidões, bandos ou grupos de animais.",
    ];

    this.onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages: numPages });
    };
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  setBackground(texture, transitionType) {
    const delay = 0;
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
    const currentStep = this.state.step;
    let steps;
    if (currentStep === 0) {
      steps = (
        <div className="body center bordered fade-in-top">
          <h1 className="content-header">Animações com Blender</h1>
          <p className="content-text">
            Este trabalho aborda os principais conceitos de animação em
            Computação Gráfica, tanto as formas de animação quanto animações de
            personagens em 3D e a parte prática com um passo a passo envolvendo
            animação com esqueletos em 3D.
          </p>
          <div className="center center-row">
            <button
              onClick={() => {
                this.setState({ textOneIndex: 0 });
              }}
              className={
                "btn bordered " +
                (this.state.textOneIndex === 0 ? "active" : "")
              }
            >
              Animação por Script
            </button>

            <button
              onClick={() => {
                this.setState({ textOneIndex: 1 });
              }}
              className={
                "btn bordered " +
                (this.state.textOneIndex === 1 ? "active" : "")
              }
            >
              Animação Procedural
            </button>

            <button
              onClick={() => {
                this.setState({ textOneIndex: 2 });
              }}
              className={
                "btn bordered " +
                (this.state.textOneIndex === 2 ? "active" : "")
              }
            >
              Animação Comportamental
            </button>
          </div>
          <p className="content-text">
            {this.textOne[this.state.textOneIndex]}
          </p>
        </div>
      );
    } else if (currentStep === 1) {
      steps = (
        <div className="center">
          <Document
            file="//cg-projeto.herokuapp.com/slides.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
            className="maxPdf fade-in-top"
          >
            <Page pageNumber={this.state.pageNumber} width={700} />
          </Document>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button
              onClick={() => {
                this.setState({
                  pageNumber: Math.max(1, this.state.pageNumber - 1),
                });
              }}
            >
              Anterior
            </Button>
            <Button>Download</Button>
            <Button
              onClick={() => {
                this.setState({
                  pageNumber: Math.min(
                    this.state.numPages,
                    this.state.pageNumber + 1
                  ),
                });
              }}
            >
              Proximo
            </Button>
          </ButtonGroup>
        </div>
      );
    } else if (currentStep === 2) {
      steps = (
        <div className="videoPlayer center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dHaVKtLGNiE"
            width={"775px"}
            height={"550px"}
            controls={true}
          />
        </div>
      );
    } else if (currentStep === 3) {
      steps = (
        <div className="center">
          <h2>Instalando o Blender (2.92.0)</h2>
          <p>
            A seguir estão os requisitos do sistema para instalar o Blender:
            <ol>
              <li>
                O programa requer um mínimo de CPU dual-core de 32 bits que seja
                2 GHz com suporte SSE2, e uma CPU quad-core de 64 bits é
                recomendada principalmente
              </li>
              <li>O software requer pelo menos 2 GB de RAM.</li>
              <li>É aconselhável usar uma RAM de cerca de 8 GB.</li>
              <li>
                Uma tela de 1280 x 768 pixels é o requisito mínimo com um
                processo de cores de 24 bits.
              </li>
              <li>
                Um pacote redistribuível do Visual C ++ 2013 também é necessário
                para instalar o Blender.big
              </li>
            </ol>
          </p>
          <p>
            Agora basta acessar o link{" "}
            <a href="https://www.blender.org/download/" target="_blank">do site oficial</a> para
            selecionar o sistema operacional de destino realizar o download de acordo com seu gerenciador de pacote.
          </p>
        </div>
      );
    }

    return (
      <div className="view">
        <canvas ref={this.canvas} className="canvas"></canvas>
        <div className="view center">
          {steps}
          <div className="group center center-row fade-in-top">
            <Button
              onClick={() => {
                const { images } = this.props;
                this.setState({ index: 0, step: 0 });
                const { index, transition } = this.state;
                this.setBackground(images[index].image, transition);
              }}
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Projeto
            </Button>

            <Button
              onClick={() => {
                const { images } = this.props;
                this.setState({ index: 1, step: 1 });
                const { index, transition } = this.state;
                this.setBackground(images[index].image, transition);
              }}
              variant="outlined"
              color="secondary"
            >
              Apresentação
            </Button>

            <Button
              onClick={() => {
                const { images } = this.props;
                this.setState({ index: 2, step: 2 });
                const { index, transition } = this.state;
                this.setBackground(images[index].image, transition);
              }}
              variant="outlined"
              color="secondary"
            >
              Tutorial
            </Button>

            <Button
              onClick={() => {
                const { images } = this.props;
                this.setState({ index: 1, step: 3 });
                const { index, transition } = this.state;
                this.setBackground(images[index].image, transition);
              }}
              variant="outlined"
              color="secondary"
            >
              Instalação
            </Button>
          </div>
          <AvatarGroup max={4}>
            <Tooltip title="Joao Victor dos Santos Clementino" arrow>
              <Avatar
                alt="Joao Victor dos Santos Clementino"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQH0iBZX2V-8kQ/profile-displayphoto-shrink_200_200/0/1605877659388?e=1626912000&v=beta&t=6kz7okbp-Pfsr6kEXOgiH8PP2SPE6fZBYbesVnKr6D4"
              />
            </Tooltip>

            <Tooltip title="Tainara Patrícia de Oliveira" arrow>
              <Avatar
                alt="Tainara Patrícia de Oliveira"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQE49eDRR-KkzA/profile-displayphoto-shrink_800_800/0/1565230681285?e=1626912000&v=beta&t=sMvgLziEXL9CtyKnCprBVZUtRCT6VmkBSN1ihBFdq8I"
              />
            </Tooltip>

            <Tooltip title="Thúlio Xavier Milhomens" arrow>
              <Avatar
                alt="Thúlio Xavier Milhomens"
                src="https://scontent.frvd5-1.fna.fbcdn.net/v/t1.6435-9/117299930_348398036321540_5395459781018031327_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHbT6TwmW39dJ5LLDe9otmU5HaPhSUvbh_kdo-FJS9uH4RBmJbW9HZX5vqdeTwW7X62grELHU4JIoLJC9P1o_7b&_nc_ohc=ObnqbUEsaMsAX-u1NuM&_nc_ht=scontent.frvd5-1.fna&oh=f06f99e70cc98b509d6ef1e8dbce34bf&oe=60C928A5"
              />
            </Tooltip>

            <Tooltip title="Laffaiety Melo de Deus" arrow>
              <Avatar
                alt="Laffaiety Melo de Deus"
                src="https://yt3.ggpht.com/ytc/AAUvwnjY31gaWdDpSyskb97i_Iqpah8olOa-Wl0-UZr8=s88-c-k-c0x00ffffff-no-rj"
              />
            </Tooltip>
          </AvatarGroup>
        </div>
      </div>
    );
  }
}

export default App;
