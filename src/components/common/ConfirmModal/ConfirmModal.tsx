import React from 'react';

import Modal from '../Modal/Modal';

import styles from './ConfirmModal.module.scss';

export type ConfirmModalProps = {
  open: boolean;
  text: string;
  onToggle: () => void;
  onSubmit: () => Promise<void>;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  text,
  onToggle,
  onSubmit,
}) => {
  const handleSubmit = async () => {
    await onSubmit();
    onToggle();
  };

  return (
    <Modal
      open={open}
      size="small"
      heading="Confirm an action"
      submitText="Confirm"
      submitVariant="danger"
      onToggle={onToggle}
      onSubmit={handleSubmit}
    >
      <div className={styles.text}>
        <div>{text}</div>
        <div>The following action cannot be undone</div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
