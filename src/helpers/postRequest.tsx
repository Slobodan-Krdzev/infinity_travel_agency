import {
  ContactDataBodyType,
  FlightContactDataType,
  NewsleterDataBodyType,
} from "@/types/types";
import Swal from "sweetalert2";

type PayloadType =
  | NewsleterDataBodyType
  | ContactDataBodyType
  | FlightContactDataType;

export const postRequest = (endpoint: string, payload: PayloadType) => {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      Swal.fire("Успешно!", "Вашите информации се успешно зачувани", "success");
      return response.json();
    })
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Упс...Нешто не е во ред!",
        text: "Ве Молиме пробајте покасно!",
      });
      console.error("Error:", error);
    });
};
