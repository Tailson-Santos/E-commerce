import { Link } from "react-router-dom";

import logo from "../../assets/logo-removebg-preview.png";

export function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo-img" width={80} />
    </Link>
  );
}
