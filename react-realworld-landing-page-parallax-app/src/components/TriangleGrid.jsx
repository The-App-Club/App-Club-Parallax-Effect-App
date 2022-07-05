import {Svg} from './Svg';
import {Parallax} from 'react-scroll-parallax';
import {ReactComponent as GridPurple} from '../assets/svg/grid-purple.svg';
import {ReactComponent as GridWhite} from '../assets/svg/grid-white.svg';
import {ReactComponent as AngleTop} from '../assets/svg/angle-dark-top.svg';
import {css} from '@emotion/css';

const TriangleGrid = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3d3547;
      `}
    >
      <Svg
        className={css`
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
        `}
      >
        <AngleTop />
      </Svg>
      <div
        className={css`
          position: relative;
          max-width: 25rem;
          width: 100%;
          margin-right: 10vw;
          flex-shrink: 0;
          @media (max-width: 768px) {
            max-width: 100%;
          }
        `}
      >
        <Parallax translateY={[-25, 25]}>
          <Svg
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
            `}
          >
            <GridPurple />
          </Svg>
        </Parallax>
        <Parallax translateX={[-13, 13]} translateY={[-50, 50]}>
          <Svg>
            <GridWhite />
          </Svg>
        </Parallax>
      </div>
    </div>
  );
};

export {TriangleGrid};
