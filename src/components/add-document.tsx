"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

import { addDocument } from "@/services/document";
import { yupResolver } from "@hookform/resolvers/yup";
import { Prisma } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormGroup from "./form/form-group";
import InputControl from "./inputs/input-control";

const schema = yup.object().shape({
  title: yup.string().required("Tiêu đề không được để trống"),
  content: yup.string().required("Nội dung không được để trống"),
  description: yup.string().required("Mô tả không được để trống"),
  author: yup.string().required("Tác giả không được để trống"),
  category: yup.array().required("Danh mục không được để trống"),
});

const AddDocument: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    control,
    formState: { errors, isValid, isSubmitting },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      title: "",
      content: "",
      description: "",
      author: "",
      category: ["Văn bản", "Đoạn trích", "Tác phẩm"],
    },
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: Prisma.DocumentCreateInput) => {
      return addDocument(data);
    },
    onSuccess: async () => {
      onOpenChange();
      reset({
        title: "",
        content: "",
        description: "",
        author: "",
        category: ["Văn bản", "Đoạn trích", "Tác phẩm"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
  });

  return (
    <div>
      <Button
        className="bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-white font-medium  mr-4 md:mr-0"
        onPress={onOpen}
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        <span className="hidden md:block">Thêm văn bản</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Thêm văn bản
              </ModalHeader>
              <ModalBody>
                <div className="space-y-2">
                  <FormGroup
                    hasError={Boolean(errors.title)}
                    errorMessages={errors.title?.message}
                  >
                    <InputControl
                      control={control}
                      name="title"
                      component={<Input />}
                      placeholder="Nhập vào tiêu đề"
                      fullWidth
                    />
                  </FormGroup>
                  <FormGroup
                    hasError={Boolean(errors.description)}
                    errorMessages={errors.description?.message}
                  >
                    <InputControl
                      control={control}
                      name="description"
                      component={<Input />}
                      placeholder="Nhập vào mô tả"
                      fullWidth
                    />
                  </FormGroup>

                  <FormGroup
                    hasError={Boolean(errors.author)}
                    errorMessages={errors.author?.message}
                  >
                    <InputControl
                      control={control}
                      name="author"
                      component={<Input />}
                      placeholder="Nhập vào tác giả"
                      fullWidth
                    />
                  </FormGroup>

                  <FormGroup
                    hasError={Boolean(errors.content)}
                    errorMessages={errors.content?.message}
                  >
                    <InputControl
                      control={control}
                      name="content"
                      component={<Textarea />}
                      placeholder="Nhập vào nội dung"
                      fullWidth
                    />
                  </FormGroup>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  variant="light"
                  onClick={handleSubmit((data) => mutation.mutate(data))}
                >
                  Thêm
                </Button>
                <Button color="warning" variant="light" onPress={onClose}>
                  Đóng
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddDocument;
