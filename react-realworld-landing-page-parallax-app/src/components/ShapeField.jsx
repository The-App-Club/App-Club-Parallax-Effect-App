import {css} from '@emotion/css';
import {Parallax} from 'react-scroll-parallax';
import {Svg} from './Svg';

import {ReactComponent as Cluster01HemiLeft} from '../assets/svg/cluster-01-hemi-left.svg';
import {ReactComponent as Cluster01HemiRight} from '../assets/svg/cluster-01-hemi-right.svg';
import {ReactComponent as Cluster01Rect} from '../assets/svg/cluster-01-rect.svg';

import {ReactComponent as Cluster02Hemi} from '../assets/svg/cluster-02-hemi.svg';
import {ReactComponent as Cluster02TriangleBig} from '../assets/svg/cluster-02-triangle-big.svg';
import {ReactComponent as Cluster02TriangleSmall} from '../assets/svg/cluster-02-triangle-small.svg';

import {ReactComponent as Cluster03TriangleTop} from '../assets/svg/cluster-03-triangle-top.svg';
import {ReactComponent as Cluster03TriangleBottom} from '../assets/svg/cluster-03-triangle-bottom.svg';
import {ReactComponent as Cluster03TriangleBig} from '../assets/svg/cluster-03-triangle-big.svg';

import {ReactComponent as Cluster04Triangle} from '../assets/svg/cluster-04-triangle.svg';
import {ReactComponent as Cluster04Square} from '../assets/svg/cluster-04-square.svg';
import {ReactComponent as Cluster04HemiRight} from '../assets/svg/cluster-04-hemi-right.svg';

const ShapeField = () => {
  return (
    <>
      <div
        className={css`
          position: absolute;
          top: 0%;
          left: 40%;
          width: 8rem;
        `}
      >
        <Parallax
          translateY={[100, -100]}
          className={css`
            position: absolute;
            right: 0;
            top: 0;
            width: 50%;
          `}
          slowerscrollrate="true"
        >
          <Svg>
            <Cluster01HemiLeft />
          </Svg>
        </Parallax>
        <Svg>
          <Cluster01Rect />
        </Svg>
        <Parallax
          translateY={[-100, 100]}
          className={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50%;
          `}
        >
          <Svg>
            <Cluster01HemiRight />
          </Svg>
        </Parallax>
      </div>

      <div
        className={css`
          position: absolute;
          left: 5%;
          top: 25%;
          width: 18rem;
          height: 30rem;
          @media (max-width: 768px) {
            width: 30%;
          }
        `}
      >
        <Svg
          className={css`
            position: absolute;
            right: 0;
            bottom: 30%;
            width: 40%;
          `}
        >
          <Cluster02Hemi />
        </Svg>
        <Parallax
          translateY={[-30, 30]}
          className={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: 80%;
          `}
        >
          <Svg>
            <Cluster02TriangleBig />
          </Svg>
        </Parallax>
        <Parallax
          translateY={[30, -30]}
          className={css`
            position: absolute;
            right: 0;
            top: 0;
            width: 60%;
          `}
        >
          <Svg>
            <Cluster02TriangleSmall />
          </Svg>
        </Parallax>
      </div>

      <div
        className={css`
          position: absolute;
          top: 90%;
          left: 45%;
          width: 18rem;
          height: 30rem;
          @media (max-width: 768px) {
            top: 50%;
            width: 30%;
          }
        `}
      >
        <Parallax
          translateY={[60, -20]}
          className={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
          `}
        >
          <Svg>
            <Cluster03TriangleTop />
          </Svg>
        </Parallax>

        <Svg
          className={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
          `}
        >
          <Cluster03TriangleBottom />
        </Svg>
        <Parallax
          translateY={[-60, 60]}
          className={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: 80%;
          `}
        >
          <Svg>
            <Cluster03TriangleBig />
          </Svg>
        </Parallax>
      </div>

      <div
        className={css`
          position: absolute;
          top: 25%;
          right: 5%;
          width: 16rem;
          @media (max-width: 768px) {
            top: 45%;
            width: 30%;
          }
        `}
      >
        <Svg
          className={css`
            position: absolute;
            width: 66.666%;
            right: 0;
            top: 0;
          `}
        >
          <Cluster04Square />
        </Svg>
        <Parallax
          translateY={[-60, 60]}
          className={css`
            position: absolute;
            width: 66.666%;
            top: 0;
            left: 0;
          `}
        >
          <Svg>
            <Cluster04Triangle />
          </Svg>
        </Parallax>
        <Parallax
          translateY={[-30, 30]}
          className={css`
            position: absolute;
            width: 33.333%;
            right: 0;
            top: 0;
          `}
        >
          <Svg>
            <Cluster04HemiRight />
          </Svg>
        </Parallax>
      </div>
    </>
  );
};

export {ShapeField};
