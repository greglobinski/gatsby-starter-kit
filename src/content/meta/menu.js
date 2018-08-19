import HomeIcon from 'react-feather/dist/icons/home';
import ListIcon from 'react-feather/dist/icons/list';
import InfoIcon from 'react-feather/dist/icons/info';

const menu = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'Menu', to: '/content', icon: ListIcon },
  { label: 'About', to: '/about', icon: InfoIcon }
];

export default menu;
