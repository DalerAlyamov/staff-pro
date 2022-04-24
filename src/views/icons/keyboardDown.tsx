import * as i from "@interfaces";

export const KeyboardDownIcon: React.FC<i.Icon> = ({
  size = 24,
}): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size + "px", height: size + "px" }}
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M11 3L11 17.17L7.41 13.59L6 15L12 21L18 15L16.59 13.59L13 17.17L13 3L11 3Z"
    />
  </svg>
);
