import * as i from "@interfaces";

const ArrowDropTopIcon: React.FC<i.Icon> = ({
  size = 24,
}): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size + "px", height: size + "px" }}
    fill="currentColor"
  >
    <path fill="currentColor" d="M17 14L12 9L7 14L17 14Z" />
  </svg>
);

export default ArrowDropTopIcon;