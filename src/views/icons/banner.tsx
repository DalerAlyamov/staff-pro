import * as i from "@interfaces";

const BannerIcon: React.FC<i.Icon> = ({ size = 24 }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size + "px", height: size + "px" }}
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M7 19H17V4H7V19ZM2 17H6V6H2V17ZM18 6V17H22V6H18Z"
    />
  </svg>
);

export default BannerIcon;