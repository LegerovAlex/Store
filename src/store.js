export async function getDate() {
  try {
    const responce = await fetch(
      "https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS"
    );
    if (!responce.ok) {
      throw new Error("WhoOps");
    }

    const data = await responce.json();
    return data;
  } catch (error) {
    console.log("Something wrong", error);
  }
}
