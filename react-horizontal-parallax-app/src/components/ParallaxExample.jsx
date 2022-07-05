import React, {useRef} from 'react';
import {useParallax} from 'react-scroll-parallax';
import imageBg from '../assets/image/parallax-demon-woods-bg.png';
import imageClose from '../assets/image/parallax-demon-woods-close-trees.png';
import imageMid from '../assets/image/parallax-demon-woods-mid-trees.png';
import imageFar from '../assets/image/parallax-demon-woods-far-trees.png';

import {css} from '@emotion/css';

const ParallaxExample = () => {
  const target = useRef(null);

  const mid = useParallax({
    speed: 50,
    targetElement: target.current,
  });
  const close = useParallax({
    speed: 100,
    targetElement: target.current,
  });

  const midExtend = 50 * 5 * -1;
  const closeExtend = 100 * 5 * -1;

  return (
    <div>
      <div
        className={css`
          position: relative;
          background-color: black;
          width: 300vw;
        `}
        ref={target}
      >
        <div
          style={{backgroundImage: `url(${imageBg})`, left: 0, right: 0}}
          className={css`
            position: absolute;
            top: 0;
            bottom: 0;
            background-size: auto 100%;
            background-repeat: repeat-x;
            height: 100vh;
          `}
        />
        <div
          style={{
            backgroundImage: `url(${imageFar})`,
            left: 0,
            right: 0,
          }}
          className={css`
            position: absolute;
            top: 0;
            bottom: 0;
            background-size: auto 100%;
            background-repeat: repeat-x;
            height: 100vh;
          `}
        />
        <div
          style={{
            backgroundImage: `url(${imageMid})`,
            left: midExtend,
            right: midExtend,
          }}
          className={css`
            position: absolute;
            top: 0;
            bottom: 0;
            background-size: auto 100%;
            background-repeat: repeat-x;
            height: 100vh;
          `}
          ref={mid.ref}
        />
        <div
          style={{
            backgroundImage: `url(${imageClose})`,
            left: closeExtend,
            right: closeExtend,
          }}
          className={css`
            position: absolute;
            top: 0;
            bottom: 0;
            background-size: auto 100%;
            background-repeat: repeat-x;
            height: 100vh;
          `}
          ref={close.ref}
        />
      </div>
    </div>
  );
};

export {ParallaxExample};
