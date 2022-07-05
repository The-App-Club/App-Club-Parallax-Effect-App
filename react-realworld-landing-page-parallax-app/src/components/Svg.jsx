import {css, cx} from '@emotion/css';
const Svg = ({children, className = css``}) => {
  return (
    <div
      className={cx(
        css`
          svg {
            display: block;
            width: 100%;
            height: auto;
            fill: currentcolor;
          }
        `,
        className,
        `svg-container`
      )}
    >
      {children}
    </div>
  );
};

export {Svg};
