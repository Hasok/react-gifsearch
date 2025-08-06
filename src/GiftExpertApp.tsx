import { useState } from "react";
import Swal from "sweetalert2";

import { AddCategory, GiftGrid } from "./components/index.js";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Black Clover"]);

  const onAddCategorie = (newCategory: string): void => {
    if (categories.includes(newCategory)) {
      Swal.fire({
        title: "Error!",
        text: `Ya existe ${newCategory} en la busqueda`,
        icon: "error",
        confirmButtonText: "Ok",
      });

      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de GIFs</h1>
      <AddCategory
        initialPlaceholder="Buscar por tema..."
        onNewCategory={(value: string) => onAddCategorie(value)}
      />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
