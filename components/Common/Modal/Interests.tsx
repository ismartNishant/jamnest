'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
import { FaPlusMinus } from "react-icons/fa6";
import { Chip } from "@nextui-org/chip";

const Interests = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // List of all interests
  const interestsList = [
    "Cooking",
    "Crafts",
    "Cycling",
    "Dance",
    "Fashion",
    "Fishing",
    "Fitness",
    "Gaming",
    "Gardening",
    "Hiking",
    "Movies",
    "Music",
    "Painting",
    "Photography",
    "Reading",
    "Sports",
    "Technology",
    "Traveling",
    "Writing",
    "Yoga",
  ];

  // State for selected interests
  const [interests, setInterests] = React.useState<string[]>([]);

  // Add an interest to the selected list
  const handleAdd = (interestToAdd: string) => {
    if (!interests.includes(interestToAdd)) {
      setInterests([...interests, interestToAdd]);
    }
  };

  // Remove an interest from the selected list
  const handleRemove = (interestToRemove: string) => {
    setInterests(interests.filter((interest) => interest !== interestToRemove));
  };

  return (
    <div className="p-2 lg:p-5 rounded-lg bg-secondary/10">
      {/* Interests Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex flex-wrap gap-2">
          {interests.length === 0 ? (
            <div className="text-lg lg:text-xl  ">
              No Interests Added
            </div>
          ) : (
            interests.map((interest, index) => (
              <Chip
                key={index}
                size='lg'
                variant="shadow"
                 color="secondary"
                
                className="cursor-default"
              >
                {interest}
              </Chip>
            ))
          )}
        </div>

        {/* Add and Remove Interests Button */}
        <Button
          onClick={onOpen}
          variant="ghost"
          color="primary"
          className="font-semibold uppercase lg:text-base"
          startContent={<FaPlusMinus />}
        >
          Interests
        </Button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="bg-secondary-900 border-2 border-white/10"
        classNames={{
          closeButton: 'hover:bg-primary/50 text-white bg-primary',
        }}
        isDismissable={false}
        placement="center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Add / Remove Interests
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap gap-2">
                  {interestsList.map((interest, index) => {
                    const isSelected = interests.includes(interest);
                    return (
                      <Chip
                        size="lg"
                        className="cursor-pointer"
                        key={index}
                        variant="bordered"
                        color={isSelected ? "success" : "primary"}
                        onClick={
                          isSelected
                            ? () => handleRemove(interest) // Remove if already added
                            : () => handleAdd(interest) // Add if not added
                        }
                        onClose={
                          isSelected
                            ? () => handleRemove(interest) // Allow close only if selected
                            : undefined // Disable close if not selected
                        }
                       
                      >
                        {interest}
                      </Chip>
                    );
                  })}
                </div>
                <div className="mt-4 text-lg text-gray-2">
                  Number of Selected Interests: {interests.length} /{" "}
                  {interestsList.length}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Interests;
