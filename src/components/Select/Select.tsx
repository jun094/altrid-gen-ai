import { useState } from 'react';
import cn from 'classnames';

import Dropdown from 'components/Dropdown';
import { ReactComponent as ArrowIcon } from 'styles/assets/arrow.svg';

import styles from './Select.module.scss';

type SelectProps = {
  className?: string;
  label: string;
  list: string[];
};

const Select = ({ className, label, list }: SelectProps) => {
  const [selected, setSelected] = useState<string>(list[0]);

  return (
    <div className={cn(styles.container, className)}>
      <p className={styles.label}>{label}</p>
      <Dropdown posY={45}>
        <Dropdown.Button className={styles.dropdownButton}>
          <p className={styles.item}>{selected}</p>
          <ArrowIcon />
        </Dropdown.Button>
        <Dropdown.Menu className={styles.dropdownMenu}>
          {list.map(item => (
            <li key={item} className={cn(styles.item, styles.menuList)} onClick={() => setSelected(item)}>
              {item}
            </li>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Select;
