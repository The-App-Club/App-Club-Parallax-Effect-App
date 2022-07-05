import {createRoot} from 'react-dom/client';
import {useState} from 'react';
import {css} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {SectionList} from './components/SectionList';
import {Intro} from './components/Intro';
import {IntroCopy} from './components/IntroCopy';
import {ParallaxProvider} from 'react-scroll-parallax';

import {ReactComponent as NoisePattern} from './assets/svg/noise-pattern.svg';
import {ReactComponent as DotPattern} from './assets/svg/dot-pattern.svg';

import {Svg} from './components/Svg';
import {ShapeField} from './components/ShapeField';
import {Marquee} from './components/Marquee';
import Overlap from './components/Overlap';
import {TriangleGrid} from './components/TriangleGrid';

const App = () => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      {/** Shared SVG patterns */}
      <div
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        `}
      >
        <Svg>
          <NoisePattern />
        </Svg>
        <Svg>
          <DotPattern />
        </Svg>
      </div>
      <header>Hello</header>
      <ParallaxProvider>
        <main>
          <article>
            <SectionList>
              <Intro />
              <IntroCopy />
              <ShapeField />
              <Marquee />
              <Overlap />
              <TriangleGrid />
            </SectionList>
          </article>
        </main>
      </ParallaxProvider>
      <footer>Bye</footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
