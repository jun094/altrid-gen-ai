import { useState } from 'react';
import cn from 'classnames';

import Dropdown from 'components/Dropdown';
import { ReactComponent as ArrowIcon } from 'styles/assets/arrow.svg';

import styles from './Select.module.scss';

type SelectProps = {
  value: string;
  label: string;
  list: string[];
  className?: string;
  innserClassName?: string;
  onClick: any;
};

const Select = ({ value, className, innserClassName, label, list, onClick }: SelectProps) => {
  const selected = value || list[0];

  return (
    <div className={cn(styles.container, className)}>
      <p className={styles.label}>{label}</p>
      <Dropdown posY={45}>
        <Dropdown.Button className={cn(styles.dropdownButton, innserClassName)}>
          <p className={styles.item}>{selected}</p>
          <ArrowIcon className={styles.arrowIcon} />
        </Dropdown.Button>
        <Dropdown.Menu className={cn(styles.dropdownMenu, innserClassName)}>
          {list.map(item => (
            <li
              data-label={label}
              data-id={item}
              key={item}
              className={cn(styles.item, styles.menuList)}
              onClick={onClick}
            >
              {item}
            </li>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Select;
