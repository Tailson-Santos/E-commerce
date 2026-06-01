import logo from '../logo-removebg-preview.png'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo-img" width={80} />
    </Link>
  )
}