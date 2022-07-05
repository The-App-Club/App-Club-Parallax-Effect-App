import {Parallax} from 'react-scroll-parallax';
import {css} from '@emotion/css';

const copy = 'Parallax'.split('');

const IntroCopy = () => (
  <div
    className={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      className={css`
        margin-left: 0.8rem;
        width: 20rem;
        height: 5rem;
        border-top: 0.45rem solid #a179af;
        border-bottom: 0.45rem solid #a179af;
        transform: skew(-10deg);
      `}
    />
    <div
      className={css`
        margin: 0.2rem 0;
        display: flex;
        font-size: 4rem;
        @media (max-width: 768px) {
          font-size: 2rem;
        }
      `}
    >
      {copy.map((letter, index) => {
        return (
          <Parallax
            key={index}
            translateX={[0, 100 * (index - 3)]}
            className={css`
              display: inline-block;
              padding: 0.1rem;
            `}
          >
            {letter}
          </Parallax>
        );
      })}
    </div>
    <div
      className={css`
        width: 20rem;
        height: 5rem;
        border-top: 0.45rem solid #a179af;
        border-bottom: 0.45rem solid #a179af;
        transform: skew(-10deg);
        margin-left: 0;
        margin-right: 0.8rem;
      `}
    />
  </div>
);

export {IntroCopy};
