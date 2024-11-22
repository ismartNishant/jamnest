// components/NotificationDrawer.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button } from "@nextui-org/button";

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-80 h-screen bg-secondary-900 shadow-lg z-50 p-4"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <Button size="sm"  variant="ghost" color="primary" isIconOnly onClick={onClose} endContent={<IoClose className="text-2xl" />}></Button>
            </div>

            <div className="space-y-4 overflow-y-auto">
              {/* Example Notifications */}
              <div className="flex items-center space-x-3 border-b py-2">
                <FaBell className="text-primary" />
                <span className="text-sm">You have a new message.</span>
              </div>
              <div className="flex items-center space-x-3 border-b py-2">
                <FaBell className="text-primary" />
                <span className="text-sm">Your profile was updated.</span>
              </div>
              <div className="flex items-center space-x-3 border-b py-2">
                <FaBell className="text-primary" />
                <span className="text-sm">A new comment on your post.</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationDrawer;
