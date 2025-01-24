import Swal from "sweetalert2";

export function obtenerRadio() {
  const radioButtons = document.getElementsByName(
    "solucion"
  ) as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].value;
    }
  }

  return null; // Devuelve null si ningún radio está selecciona
}

export const getUrl = (query: string) =>
  "https://cloudserver.parquearse.com:4000/" + query;

type iconType = {
  success: "success";
  error: "error";
  info: "info";
  question: "question";
  warning: "warning";
};


export const alertEdit = ({
  title = "",
  text = "",
  icon = "success" as keyof iconType,
}: {
  title?: string;
  text?: string;
  icon?: keyof iconType;
}) => {
  return Swal.fire({
    title,
    text,
    confirmButtonText: "Ok",
    icon,
    confirmButtonColor: "#314c53",
  });
};
