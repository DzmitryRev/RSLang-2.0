import React from 'react';

type HeaderProps = {
  type: 'default' | 'minify'
};

function Header({ type }: HeaderProps) {
  return (
    <div>
      {type === 'default' ? 'Default Header' : 'Minify Header'}
    </div>
  );
}

export default Header;
