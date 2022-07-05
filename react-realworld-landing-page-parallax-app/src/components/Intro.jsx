import {Parallax} from 'react-scroll-parallax';
import {ReactComponent as Ring} from '../assets/svg/ring-of-dots.svg';
import {ReactComponent as Hemispheres} from '../assets/svg/hemispheres.svg';
import {cx, css} from '@emotion/css';
import {Svg} from './Svg';

const Intro = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          position: relative;
          max-width: 25rem;
        `}
      >
        <Parallax
          translateY={[100, -100]}
          className={css`
            position: relative;
            z-index: 2;
          `}
        >
          <Svg>
            <Ring />
          </Svg>
        </Parallax>
        <Parallax
          translateY={[50, -50]}
          className={css`
            position: absolute;
            top: 15%;
            left: 15%;
            width: 70%;
            height: 70%;
            z-index: 1;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 3px solid #3d3547;
              border-radius: 50%;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 3px solid #3d3547;
                border-radius: 50%;
              `}
            />
          </div>
        </Parallax>
        <Svg
          className={css`
            position: absolute;
            top: 25%;
            left: 25%;
            width: 50%;
          `}
        >
          <Hemispheres />
        </Svg>
      </div>
      <p
        className={css`
          position: absolute;
          bottom: 5rem;
          left: 50%;
          transform: translateX(-50%);
          color: #3d3547;
          font-weight: 500;
          font-size: 2rem;
        `}
      >
        Scroll
      </p>
    </div>
  );
};

export {Intro};
