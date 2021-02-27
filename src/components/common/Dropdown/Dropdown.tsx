import React, { useRef } from 'react';
import classNames from 'classnames';

import useOnClickOutside from '../../../hooks/onClickOutside';
import VisibleComponent from '../VisibleComponent/VisibleComponent';

import styles from './Dropdown.module.scss';

export type DropdownProps = {
  renderHeader: () => React.ReactNode;
  renderToggler?: () => React.ReactNode;
  open: boolean;
  xPos?: number;
  yPos?: number;
  className?: string;
  onToggle: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  renderHeader,
  renderToggler,
  open,
  xPos,
  yPos,
  className,
  onToggle,
  children,
}) => {
  const ref = useRef(null);

  const handleOutsideClick = () => {
    open && onToggle();
  };

  const handleTogglerClick = () => {
    onToggle();
  };

  const styleSheet =
    xPos && yPos
      ? {
          transform: `translate(${xPos}px, ${yPos}px)`,
        }
      : {};

  const dropdownClassNames = classNames(styles.wrapper, className);

  useOnClickOutside(ref, handleOutsideClick);

  return (
    <div className={dropdownClassNames} style={styleSheet}>
      <VisibleComponent visible={open}>
        {renderToggler && (
          <div onClick={handleTogglerClick}>{renderToggler()}</div>
        )}
        <div ref={ref} className={styles.dropdown}>
          <div className={styles.header}>{renderHeader()}</div>
          <div className={styles.body}>{children}</div>
        </div>
      </VisibleComponent>
    </div>
  );
};

export default Dropdown;
