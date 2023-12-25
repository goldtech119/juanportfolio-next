import Navbar from './Navbar';
export { default as MobileMenu } from './chunk/MobileMenu';
export { default as NavItem } from './chunk/NavItem';
export { default as OpenMenuBtn } from './chunk/OpenMenuBtn';
export { default as SmNav } from './chunk/SmNav';
export { OpenContext } from './Navbar';

export default Navbar;

export const menuOptions = [
  {
    id: 101,
    text: 'Home',
    href: '#hero',
  },
  {
    id: 102,
    text: 'AboutMe',
    href: '#aboutme',
  },
  {
    id: 103,
    text: 'Portfolio',
    href: '#myportfolio',
  },
];
