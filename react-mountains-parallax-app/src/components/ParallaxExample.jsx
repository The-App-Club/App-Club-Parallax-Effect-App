import {ParallaxProvider, ParallaxBanner} from 'react-scroll-parallax';

import {css} from '@emotion/css';

import bg1 from '../assets/image/bg-1.jpg';
import bg2 from '../assets/image/bg-2.png';
import bg3 from '../assets/image/bg-3.png';
import bg4 from '../assets/image/bg-4.png';
import bg5 from '../assets/image/bg-5.png';

const ParallaxExample = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className={css`
          height: 100vh;
          background: #bbe8f6;
        `}
        layers={[
          {
            image: bg1,
            translateY: [0, 50],
            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: bg2,
            translateY: [5, 45],

            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: bg3,
            translateY: [10, 30],

            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: bg4,
            translateY: [15, 25],

            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
          {
            image: bg5,
            translateY: [20, 20],

            shouldAlwaysCompleteAnimation: true,
            expanded: false,
          },
        ]}
      />
    </ParallaxProvider>
  );
};

export {ParallaxExample};
