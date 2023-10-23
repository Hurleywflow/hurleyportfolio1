/* eslint-disable react/react-in-jsx-scope */
'use client';
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
//todo: npm install react-tsparticles tsparticles-slim tsparticles

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    [],
  );
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      // options={{
      //   background: {
      //     // color: '#000' // this sets a background color for the canvas
      //   },
      //   fullScreen: {
      //     enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
      //     zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      //   },
      //   // fpsLimit: 120,
      //   interactivity: {
      //     events: {
      //       onClick: {
      //         enable: true, // enables the click event
      //         mode: 'push', // adds the particles on click
      //       },
      //       onHover: {
      //         enable: true,
      //         mode: 'repulse', // make the particles run away from the cursor
      //         parallax: {
      //           enable: true,
      //           force: 50, // enable parallax effect on hover
      //           smooth: 10,
      //         },
      //       },
      //       resize: true,
      //     },
      //     modes: {
      //       push: {
      //         quantity: 3, // number of particles to add on click
      //       },
      //       repulse: {
      //         distance: 100, // distance of the particles from the cursor
      //         duration: 1,
      //       },
      //     },
      //   },
      //   particles: {
      //     color: {
      //       value: '#ffffff',
      //     },
      //     links: {
      //       color: '#ffffff',
      //       distance: 200,
      //       enable: true,
      //       opacity: 0.01,
      //       width: 0.5,
      //     },
      //     move: {
      //       direction: 'none',
      //       enable: true,
      //       outModes: {
      //         default: 'bounce',
      //       },
      //       random: true,
      //       speed: { min: 0, max: 1 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
      //     },
      //     number: {
      //       density: {
      //         enable: true,
      //         area: 3000, // this sets the density of particles based on the container area
      //       },
      //       value: 50, // number of particles
      //     },
      //     opacity: {
      //       value: { min: 0.2, max: 0.8 }, // using a different opacity, to have some semitransparent effects
      //     },
      //     shape: {
      //       type: 'star',
      //     },
      //     size: {
      //       value: { min: 1, max: 3 }, // let's randomize the particles size a bit
      //     },
      //   },
      //   detectRetina: true,
      // }}
      options={{
        autoPlay: true,
        // background: {
        //   color: {
        //     value: '#232741',
        //   },
        //   image:
        //     "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
        //   position: '50% 50%',
        //   repeat: 'no-repeat',
        //   size: '20%',
        //   opacity: 1,
        // },
        // backgroundMask: {
        //   composite: 'destination-out',
        //   cover: {
        //     color: {
        //       value: '#fff',
        //     },
        //     opacity: 1,
        //   },
        //   enable: false,
        // },
        // defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: 'circle',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: true,
                force: 25,
                smooth: 10,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: 'ease-out-quad',
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 250,
              duration: 2,
              mix: false,
              opacity: 0,
              size: 0,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 5,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 30,
              easing: 'ease-out-quad',
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: 'ease-out-quad',
                selectors: [],
              },
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: '#ffffff',
                  },
                  stop: {
                    value: '#000000',
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: '#000000',
                },
                length: 2000,
              },
            },
          },
        },
        manualParticles: [],
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            absorb: {
              speed: 2,
            },
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            maxSpeed: 50,
            mode: 'bounce',
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            value: '#d4e5ff',
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                delay: 0,
                decay: 0,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                delay: 0,
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                delay: 0,
                decay: 0,
                sync: true,
              },
            },
          },
          groups: {},
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 600,
                y: 600,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: 'percent',
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: 'none',
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: 'out',
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
            random: true,
            size: false,
            speed: 1,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fill: {},
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            limit: 0,
            value: 20,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
              minimumValue: 0,
            },
          },
          reduceDuplicates: false,
          shadow: {
            blur: 0,
            color: {
              value: '#000',
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            close: true,
            fill: true,
            options: {},
            type: 'circle',
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              count: 0,
              enable: false,
              speed: 4,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
              minimumValue: 0.3,
            },
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
          destroy: {
            bounds: {},
            mode: 'none',
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
              particles: {},
            },
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: 'vertical',
            speed: 25,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: 'clockwise',
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              angle: 50,
              move: 10,
            },
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: 'clockwise',
            path: false,
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 1,
          },
          links: {
            blink: false,
            color: {
              value: '#ffffff',
            },
            consent: false,
            distance: 150,
            enable: false,
            frequency: 1,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: '#000',
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }}
    />
  );
};
export default ParticlesComponent;
