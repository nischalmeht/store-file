"use server";

import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Query, ID } from "node-appwrite";
// import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";
import { avatarPlaceholderUrl } from "@/constants";
import { redirect } from "next/navigation";
import { parseStringify } from "../utils";
const sdk = require('node-appwrite');

// const getUserByEmail = async (email: string) => {
//   const { databases } = await createAdminClient();

//   try {
//     // Appwrite Users API provides search functionality
//     const result = await users.list([`search("${email}")`]);

//     return result.total > 0 ? result.users[0] : null;
//   } catch (error) {
//     console.error("Error fetching user by email:", error);
//     throw error;
//   }
// };
// const getUserByEmail = async (email: string) => {
//   const { account,} = await createAdminClient();

//   const users = new Users(account.client); // reuse client from Account
//   try {
//     const result = await users.list([`search("${email}")`]);
//     return result.total > 0 ? result.users[0] : null;
//   } catch (error) {
//     console.error("Error fetching user by email:", error);
//     throw error;
//   }
// };

import { Users } from "node-appwrite";

export const getUserByEmail = async (email: string) => {
  try {
    const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    'user',
    [Query.equal("email", [email])],
  );
  console.log(result.total,"result.totalresult.total")
    return  result.total > 0 ? result.documents[0] : null;
  } catch (err) {
    console.error("Error fetching user by email:", err);
    return null;
  }
};


const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};


export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};
export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

//   const accountId = await sendEmailOTP({ email });
//   if (!accountId) throw new Error("Failed to send an OTP");

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      'user',
      ID.unique(),
      {
        fullName,
        email,
        avatar: avatarPlaceholderUrl,
        accountId,
      },
    );
  }

  return parseStringify({ accountId });
};

