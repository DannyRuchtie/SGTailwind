import { useState } from 'react';
import Notification from '../ui/Notification';
import Modal from '../ui/Modal';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function InfoPanel() {
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    // Handle the modal confirmation
    setShowNotification(true);
  };

  return (
    <aside className="bg-white p-4 h-full rounded-lg flex-col max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Panel</h3>
      <p className="text-sm text-SG-text-muted mb-6">This is the third column, the information panel.</p>
      
      <div className="space-y-4">
      
        <div>
          <div className="space-y-3">
            <button
              onClick={() => setShowModal(true)}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-SG-stroke text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-SG-buttons-cta-primary"
            >
              Open Modal
            </button>
            <button
              onClick={() => setShowNotification(true)}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-SG-stroke text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-SG-buttons-cta-primary"
            >
              Show Notification
            </button>
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