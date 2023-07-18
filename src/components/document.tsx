"use client";

import { deleteDocument } from "@/services/document";
import { faEdit, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Document } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import Category from "./category";

interface DocumentProps {
  data: Document;
}

const Document: React.FC<DocumentProps> = ({ data }) => {
  const {
    author,
    category,
    description,
    keywords,
    status,
    title,
    type,
    content,
  } = data || {};
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteDocument(data.id),
    onSuccess: async () => {
      Swal.fire({
        title: "Xóa thành công",
        icon: "success",
        timer: 1000,
      });

      await queryClient.invalidateQueries({
        queryKey: ["documents"],
      });
    },
  });

  return (
    <div className="p-3 md:p-4 rounded-lg bg-white shadow-sm border border-gray-200 transition-all  duration-150 cursor-pointer select-none hover:bg-gray-50 hover:bg-opacity-50">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-sm lg:text-lg text-blue-500">
            {title}
          </h2>
          <div className="px-2 py-1 rounded-md bg-green-100 text-green-500 text-xs md:text-sm">
            {type}
          </div>
        </div>
        <span className="text-xs">
          <p>{description?.split(" ").slice(0, 20).join(" ") + "..."}</p>
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-x-2 text-sm text-gray-700">
          <h2 className="font-medium">Trạng thái:</h2>
          <span className="text-purple-500">{status}</span>
        </div>
        <div className="flex items-center gap-x-2 text-sm text-gray-700">
          <h2 className="font-medium">Tác giả:</h2>
          <span className="text-rose-500">{author}</span>
        </div>

        <div className="flex items-center gap-x-2 text-sm text-gray-700">
          <h2 className="font-medium">Danh mục:</h2>
          <div className="flex items-center gap-x-2">
            {category.map((item, index) => (
              <Category key={index}>
                <span>{item}</span>
              </Category>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-2 text-sm text-gray-700">
          <h2 className="font-medium">Hành động:</h2>
          <div className="flex items-center gap-x-2">
            <Tooltip content="Chi tiết">
              <Button
                isIconOnly
                size="sm"
                className="bg-purple-100 text-purple-500"
                onPress={onOpen}
              >
                <FontAwesomeIcon icon={faEye} />
              </Button>
            </Tooltip>
            <Tooltip content="Chỉnh sửa">
              <Button
                isIconOnly
                size="sm"
                className="bg-purple-100 text-purple-500"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </Tooltip>
            <Tooltip content="Xóa">
              <Button
                isIconOnly
                size="sm"
                className="bg-purple-100 text-purple-500"
                onPress={() => {
                  Swal.fire({
                    title: "Bạn có chắc chắn muốn xóa?",
                    icon: "warning",
                    cancelButtonText: "Hủy",
                    confirmButtonText: "Xóa",
                    showCancelButton: true,
                    showConfirmButton: true,
                  }).then((r) => {
                    if (r.isConfirmed) {
                      mutation.mutate();
                    }
                  });
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{content}</ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
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

export default Document;
