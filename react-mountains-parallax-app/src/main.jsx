import {createRoot} from 'react-dom/client';
import {useState} from 'react';
import {css} from '@emotion/css';
import {ParallaxProvider} from 'react-scroll-parallax';
import {ParallaxExample} from './components/ParallaxExample';
import '@fontsource/inter';
import './styles/index.scss';

const App = () => {
  return (
    <div>
      <header>Hello</header>
      <main>
        <ParallaxExample />
      </main>
      <footer>Bye</footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
