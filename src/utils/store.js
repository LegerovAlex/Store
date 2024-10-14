import { preloader } from "../components/preloader";
import { updateCartNotification } from "../components/сartItems";

export async function getDate() {
  preloader.classList.add("preloader--active");
  try {
    const responce = await fetch(
      "https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS"
    );
    if (!responce.ok) {
      throw new Error("WhoOps");
    }

    const data = await responce.json();
    preloader.classList.remove("preloader--active");
    updateCartNotification();
    return data;
  } catch (error) {
    console.log("Something wrong", error);
  }
}
