import './card.scss';

import { ReactChild } from 'react';

interface cardProps {
  children: ReactChild;
}

const Card: React.FC<cardProps> = ({ children }) => {
  return <div className='cardWrapper'>{children}</div>;
};

export default Card;
