"use server";

export const shareAction = async (formData: FormData) => {
  const fileName = formData.get("fileName") as string;
  const desc = formData.get("desc") as string;
  console.log({ fileName, desc });

};
