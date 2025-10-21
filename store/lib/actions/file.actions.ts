"use server";

import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "@/lib/appwrite/config";
import { ID, Models, Query } from "node-appwrite";
// import { constructFileUrl, getFileType, parseStringify } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/actions/user.actions";

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};
// export const uploadFile = async ({
//   file,
//   ownerId,
//   accountId,
//   path,
// }: UploadFileProps) => {
//     const {storage,databases}=createAdminClient();
//     try{}catch(error){
//         handleError(error,"Failed to upload file")
//     }
// }