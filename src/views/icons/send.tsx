import * as i from "@interfaces";

export const SendIcon: React.FC<i.icon> = ({ size = 24 }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size + "px", height: size + "px" }}
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
    />
  </svg>
);
