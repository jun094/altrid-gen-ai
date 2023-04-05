import { useState, useContext, createContext } from 'react';
import cn from 'classnames';

import styles from './Dropdown.module.scss';

type DropdownMenuProps = {
  className?: string;
  children: React.ReactNode;
};
type DropdownButtonProps = {
  className?: string;
  children: React.ReactNode;
};
type DropdownProps = {
  className?: string;
  posY?: number;
  children: React.ReactNode;
};

const DropdownContext = createContext<any | null>(null);

const DropdownMenu = ({ className, children }: DropdownMenuProps) => {
  const { open, toggle, posY } = useContext(DropdownContext);
  return (
    open && (
      <>
        <div className={styles.dim} onClick={() => toggle(!open)} />
        <ul style={{ top: posY }} className={cn(styles.dropdownMenu, className)} onClick={() => toggle(!open)}>
          {children}
        </ul>
      </>
    )
  );
};

const DropdownButton = ({ className, children }: DropdownButtonProps) => {
  const { open, toggle } = useContext(DropdownContext);

  return (
    <button className={cn(styles.dropdownButton, className)} onClick={() => toggle(!open)}>
      {children}
    </button>
  );
};

const Dropdown = ({ className, children, posY = 30 }: DropdownProps) => {
  const [open, toggle] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, toggle, posY }}>
      <div className={cn(styles.dropdown, className)}>{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Menu = DropdownMenu;
Dropdown.Button = DropdownButton;

export default Dropdown;
