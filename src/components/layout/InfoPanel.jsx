import { useState } from 'react';
import Notification from '../ui/Notification';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function InfoPanel() {
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    // Handle the modal confirmation
    setShowNotification(true);
  };

  return (
    <aside className="bg-SG-bg-content p-4 h-full rounded-lg flex-col max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
      <h3 className="text-lg font-semibold text-SG-text-primary mb-3">Information Panel</h3>
      <p className="text-sm text-SG-text-muted mb-6">This is the third column, the information panel.</p>
      
      <div className="space-y-4">
        <div>
          <div className="space-y-3">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setShowModal(true)}
              className="w-full"
            >
              Open Modal
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => setShowNotification(true)}
              className="w-full"
            >
              Show Notification
            </Button>
          </div>
        </div>
      </div>

      <Notification
        show={showNotification}
        setShow={setShowNotification}
        title="Action successful!"
        message="The operation has been completed successfully."
      />

      <Modal
        open={showModal}
        setOpen={setShowModal}
        title="Confirm Action"
        message="Are you sure you want to perform this action? This cannot be undone."
        confirmText="Confirm"
        onConfirm={handleConfirm}
      />
    </aside>
  );
} 