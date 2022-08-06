import style from './Header.module.css';
import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <div className={style.container}>
      <img src={Logo} alt="Logo" />
    </div>
  )
}