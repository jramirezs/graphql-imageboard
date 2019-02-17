import React from 'react';
import ReplyForm from './ReplyForm';
import { Modal, ModalHeader, ModalBody } from '@bootstrap-styled/v4';

const ReplyModal = ({ isOpen, onClose, thread, board }) => {
  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader tag="strong" toggle={onClose}>
        Reply to Post
      </ModalHeader>
      <ModalBody>
        <ReplyForm board={board} thread={thread} onCreated={onClose} />
      </ModalBody>
    </Modal>
  );
};

export default ReplyModal;
