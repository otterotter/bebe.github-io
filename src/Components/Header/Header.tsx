import './header.scss';
import Logo from '../../Elements/Logo/Logo';
import React from 'react';

interface HeaderProps {
  color: string;
}
const Header: React.FC<HeaderProps> = ({ color }) => {
  return (
    <header className='header' style={{ backgroundColor: color }}>
      <Logo colorScheme='light'></Logo>
    </header>
  );
};

export default React.memo(Header);
