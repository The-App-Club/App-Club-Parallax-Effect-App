import {Svg} from './Svg';
import {Parallax} from 'react-scroll-parallax';
import {ReactComponent as BoxBg} from '../assets/svg/box-bg.svg';
import {ReactComponent as BoxOutline} from '../assets/svg/box-outline.svg';
import {ReactComponent as Divider} from '../assets/svg/divider.svg';
import {css} from '@emotion/css';

const Marquee = () => {
  return (
    <>
      <Svg
        className={css`
          width: 100%;
          margin-top: 25vh;
          margin-bottom: 25vh;
        `}
      >
        <Divider />
      </Svg>
      <div
        className={css`
          position: relative;
          width: 40rem;
          margin: 0 auto;
          @media (max-width: 768px) {
            width: 50%;
          }
        `}
      >
        <Svg
          className={css`
            width: 100%;
          `}
        >
          <BoxBg />
        </Svg>
        <Parallax
          className={css`
            position: absolute;
            top: 28%;
            left: 0;
            width: 100%;
            text-align: center;
          `}
          translateY={[-70, 70]}
          translateX={[30, -30]}
        >
          <h2
            className={css`
              font-size: 4rem;
              @media (max-width: 768px) {
                font-size: 2rem;
              }
            `}
          >
            Horizontal
          </h2>
        </Parallax>
        <Parallax
          className={css`
            position: absolute;
            top: 20%;
            right: 7%;
            width: 100%;
            height: 100%;
            z-index: 1;
          `}
          translateY={[-35, 35]}
        >
          <Svg>
            <BoxOutline />
          </Svg>
        </Parallax>
      </div>
    </>
  );
};

export {Marquee};
