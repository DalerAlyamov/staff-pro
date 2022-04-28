import * as i from "@interfaces";

const CheckBoxIcon: React.FC<i.Icon> = ({ size = 24 }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size + "px", height: size + "px" }}
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M17.59 3H6.5C4.5 3 3 4.5 3 6.5V17.5C3 19.5 4.5 21 6.5 21H17.59C19.5 21 21 19.5 21 17.5V6.5C21 4.5 19.5 3 17.59 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
    />
  </svg>
);

export default CheckBoxIcon;