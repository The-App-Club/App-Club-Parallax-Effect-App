import {Svg} from './Svg';
import {Parallax} from 'react-scroll-parallax';
import {ReactComponent as Circle} from '../assets/svg/circle.svg';
import {ReactComponent as CircleRings} from '../assets/svg/circle-rings.svg';
import {css} from '@emotion/css';

const Overlap = () => {
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
          max-width: 30rem;
          width: 100%;
          @media (max-width: 768px) {
            max-width: 40%;
          }
        `}
      >
        <Parallax translateY={[-50, 50]} translateX={[-40, 20]}>
          <Svg>
            <Circle />
          </Svg>
        </Parallax>
        <Parallax
          translateY={[-50, 50]}
          translateX={[40, -20]}
          className={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          `}
        >
          <Svg>
            <CircleRings />
          </Svg>
        </Parallax>
      </div>
    </div>
  );
};

export default Overlap;
