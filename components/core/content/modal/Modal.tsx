import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/core/buttons/Button";
import { Backdrop } from "@/components/core/content/modal/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
} & (
  | {
      closable?: false;
    }
  | {
      closable: true;
      onClose: () => void;
    }
);

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export function useModal() {
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  return { visible, open, close };
}

export function Modal({
  children,
  visible,
  title,
  closable,
  size,
  className,
  onClose,
}: ModalProps) {
  if (!visible) return null;
  return createPortal(
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          className,
          "bg-white p-8 rounded-md shadow-md flex flex-col justify-between relative",
          {
            "w-1/2": size === "sm",
            "w-3/4": size === "md",
            "w-4/5": size === "lg",
          }
        )}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
        {children}
        {closable && (
          <Button
            onClick={onClose}
            rounded
            className="absolute -top-4 -right-4 h-8 w-8 p-1 rounded-full border border-grey-400 text-black bg-white"
          >
            <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />
          </Button>
        )}
      </motion.div>
    </Backdrop>,
    document.getElementById("modal-root") as HTMLElement
  );
}
