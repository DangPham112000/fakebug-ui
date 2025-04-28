"use server";

type FileDetails = {
  width: number;
  height: number;
  filePath: string;
  fileType: string;
  url: string;
  customMetadata?: { sensitive: boolean };
};

export default async (fileId: string): Promise<FileDetails> => {
  try {
    const pk = process.env.IMAGEKIT_PRIVATE_KEY as string;
    const pkBase64Encoded = btoa(pk + ":");

    const response = await fetch(
      `https://api.imagekit.io/v1/files/${fileId}/details`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${pkBase64Encoded}`,
        },
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    return data as FileDetails;
  } catch (error) {
    console.error("getFileDetails error:", error);
    throw new Error("getFileDetails request failed");
  }
};
