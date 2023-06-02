import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wedding } from "@/domain/wedding/entities/Wedding";
import { Modal, useModal } from "@/components/core/content/modal/Modal";
import { Button } from "@/components/core/buttons/Button";
import {
  WeddingCreationForm,
  WeddingCreationSubmitButton,
} from "@/components/wedding/weddings/forms/WeddingCreationForm";

interface Step {
  title: string;
  id: string;
  content: (props: {
    onNext: () => void;
    onPrevious: () => void;
    onCompleted: () => void;
  }) => React.ReactNode;
}

export function Stepper({
  steps,
  onCompleted,
}: {
  steps: Array<Step>;
  onCompleted: () => void;
}) {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);
  return (
    <AnimatePresence>
      {steps
        .filter((step) => step === currentStep)
        .map((step) => (
          <motion.div
            key={step.id}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {step.content({
              onNext: () => setCurrentStep(steps[1]),
              onPrevious: () => setCurrentStep(steps[0]),
              onCompleted,
            })}
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export function WeddingGettingStart({}: {}) {
  const steps: Array<Step> = useMemo(
    () => [
      {
        id: "start",
        title: "Start your Wedding planning journey",
        content: ({ onNext }) => {
          return (
            <div className="flex flex-col flex-1 h-full justify-between">
              <h2 className="text-xl font-bold">Ready to Tie the Knot?</h2>
              <p>
                Oops! Looks like you haven't created a wedding yet. Don't worry,
                we're here to help you kickstart the journey to your dream
                wedding in style!
              </p>
              <Button variant="primary" onClick={onNext}>
                Start
              </Button>
            </div>
          );
        },
      },
      {
        id: "details",
        title: "Details about your wedding",
        content: ({ onCompleted }) => {
          return (
            <WeddingCreationForm
              className="flex-1 h-full"
              onCompleted={onCompleted}
            >
              <WeddingCreationSubmitButton className="mt-auto" />
            </WeddingCreationForm>
          );
        },
      },
    ],
    []
  );
  return (
    <Modal visible={true} closable={false}>
      <div className="h-96 w-96 relative">
        <Stepper
          steps={steps}
          onCompleted={() => {
            location.reload();
          }}
        />
      </div>
    </Modal>
  );
}
