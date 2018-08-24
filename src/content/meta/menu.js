import HomeIcon from 'react-feather/dist/icons/home';
import FolderIcon from 'react-feather/dist/icons/folder';
import InfoIcon from 'react-feather/dist/icons/info';
import BlogIcon from 'react-feather/dist/icons/book';

const menu = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'Blog', to: '/blog', icon: BlogIcon },
  { label: 'Catalog', to: '/catalog', icon: FolderIcon },
  { label: 'About', to: '/about', icon: InfoIcon }
];

export default menu;
