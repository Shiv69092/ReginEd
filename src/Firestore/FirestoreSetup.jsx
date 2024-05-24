import { firestore } from "./firebase.js";
import jsonData from "../data/regined.json";

jsonData.forEach((item) => {
  firestore
    .collection("websites")
    .doc("website")
    .collection("regined")
    .set(item)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
});
