import React, { PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import VisibleComponent from '../VisibleComponent/VisibleComponent';
import CloseButton from '../CloseButton/CloseButton';
import BaseButton from '../BaseButton/BaseButton';

import styles from './Modal.module.scss';
import withLoading from '../LoadingComponent/LoadingComponent';

const doc = document.documentElement;
const modalRoot = document.getElementById('modal')!;

const ModalSubmit = withLoading<{ text: string }>()(({ text }) => <>{text}</>);

const ModalBodyContent = withLoading()(({ children }) => <>{children}</>);

export type ModalProps = {
  open: boolean;
  heading: string;
  headerAlign?: 'left' | 'center';
  size?: 'small' | 'large';
  submitVariant?: 'primary' | 'danger';
  submitText?: string;
  preloading?: boolean;
  onToggle: () => void;
  onCancel?: () => void;
  onSubmit: () => Promise<any>;
};

const Modal: React.FC<ModalProps> = ({
  open,
  heading,
  headerAlign = 'center',
  size = 'large',
  submitVariant = 'primary',
  submitText = 'Save',
  preloading,
  onToggle,
  onCancel,
  onSubmit,
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const disabled = loading || preloading;

  useEffect(() => {
    if (open) {
      doc.classList.add('modal-open');
    } else {
      doc.classList.remove('modal-open');
    }
  }, [open]);

  const handleCloseClick = () => {
    onToggle();
  };

  const handleCancelClick = () => {
    handleCloseClick();
    onCancel && onCancel();
  };

  const handleSubmitClick = async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };

  const modalClassNames = classNames(styles.modal, {
    [styles.headerLeft]: headerAlign === 'left',
    [styles.modalLarge]: size === 'large',
    [styles.modalSmall]: size === 'small',
  });

  return (
    <VisibleComponent visible={open} fadeDuration={200}>
      <div className={styles.wrapper}>
        <div className={styles.backdrop} onClick={handleCloseClick}></div>
        <div className={modalClassNames}>
          <div className={styles.header}>
            <span>{heading}</span>
            <CloseButton
              className={styles.btnClose}
              onClick={handleCloseClick}
            />
          </div>
          <div className={styles.body}>
            <ModalBodyContent loading={!!preloading}>
              {children}
            </ModalBodyContent>
          </div>
          <div className={styles.footer}>
            <BaseButton
              variant="secondary"
              disabled={disabled}
              onClick={handleCancelClick}
            >
              Cancel
            </BaseButton>
            <BaseButton
              variant={submitVariant}
              disabled={disabled}
              onClick={handleSubmitClick}
            >
              <ModalSubmit
                loading={loading}
                spinnerSize="small"
                text={submitText}
              />
            </BaseButton>
          </div>
        </div>
      </div>
    </VisibleComponent>
  );
};

class ModalContainer extends React.Component<PropsWithChildren<ModalProps>> {
  private _el: HTMLDivElement;

  constructor(props: PropsWithChildren<ModalProps>) {
    super(props);
    this._el = document.createElement('div');
  }

  public componentDidMount() {
    modalRoot.appendChild(this._el);
  }

  public componentWillUnmount() {
    modalRoot.removeChild(this._el);
  }

  public render() {
    const { children, ...props } = this.props;

    return ReactDOM.createPortal(
      <Modal {...props}>{children}</Modal>,
      this._el
    );
  }
}

export default ModalContainer;
