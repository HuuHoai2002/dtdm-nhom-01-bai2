"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import Input from "./inputs/input";

interface SearchDocumentProps {}

const SearchDocument: React.FC<SearchDocumentProps> = () => {
  return (
    <>
      <Input ring fullWidth placeholder="Nhập vào văn bản mà bạn muốn tìm..." />
      <Button className="rounded-md h-[42px] md:h-[50px] bg-gray-200">
        Tìm Kiếm
      </Button>
    </>
  );
};

export default SearchDocument;
