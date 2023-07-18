import { Document, Prisma } from "@prisma/client";

const addDocument = async (data: Prisma.DocumentCreateInput) => {
  return (await (
    await fetch("/api/add-document", {
      method: "POST",
      body: JSON.stringify({ data }),
      cache: "no-store",
    })
  ).json()) as Document;
};

const updateDocument = async (id: string, data: Prisma.DocumentUpdateInput) => {
  return (await (
    await fetch("/api/update-document", {
      method: "POST",
      body: JSON.stringify({ id, data }),
    })
  ).json()) as Document;
};

const deleteDocument = async (id: string) => {
  return (await (
    await fetch("/api/delete-document", {
      method: "POST",
      body: JSON.stringify({ id }),
    })
  ).json()) as Document;
};

const getAllDocuments = async () => {
  return (await (await fetch("/api/get-all-documents")).json()) as Document[];
};

export { addDocument, deleteDocument, getAllDocuments, updateDocument };
