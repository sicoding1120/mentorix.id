import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function BlogForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button key={"md"} onPress={() => handleOpen(size)}>
          Open
        </Button>
      </div>
      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Blog Formulir
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold capitalize">
                      title blog
                    </p>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold capitalize">
                      badge name
                    </p>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-lg font-semibold capitalize">title blog</p>
                  <textarea
                    placeholder="Type here"
                    className="input input-bordered w-full py-2 h-[50vh]"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-lg font-semibold capitalize">title blog</p>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full py-2 "
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
