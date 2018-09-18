import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';

export const categories = [
  { name: 'general', label: 'Get started', icon: SettingsIcon },
  { name: 'first', label: 'First issues', icon: GitBranchIcon },
  { name: 'second', label: 'Second issues', icon: ImageIcon },
  { name: 'last', label: 'Everything else', icon: FolderPlusIcon }
];

export default categories;
