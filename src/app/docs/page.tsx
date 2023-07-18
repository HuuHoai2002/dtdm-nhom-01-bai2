"use client";

import AddDocument from "@/components/add-document";
import Document from "@/components/document";
import SearchDocument from "@/components/search-document";
import { getAllDocuments } from "@/services/document";
import { Skeleton } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type DocumentPageProps = {};

const DocumentPage: React.FC<DocumentPageProps> = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["documents"],
    queryFn: getAllDocuments,
  });

  return (
    <div>
      <div className="mb-4 flex items-center justify-between w-full">
        {isSuccess && <AddDocument />}
        <div className="w-full flex items-center gap-x-4 lg:hidden">
          <SearchDocument />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data && data?.length > 0 ? (
          data?.map((item) => <Document data={item} key={item.id} />)
        ) : (
          <>
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
            <Skeleton className="w-full h-[178px] md:h-[190px] rounded-md" />
          </>
        )}
      </div>
    </div>
  );
};

export default DocumentPage;
