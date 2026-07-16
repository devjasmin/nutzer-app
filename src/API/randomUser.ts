export type Gender = "male" | "female";

export const getImagesByGender = async (gender: Gender): Promise<string> => {
  const response = await fetch(`https://randomuser.me/api/?gender=${gender}`);

  if (!response.ok) {
    throw new Error("Bild konnte nicht geladen werden");
  }

  const data = await response.json();

  return data.results[0].picture.large;
};
