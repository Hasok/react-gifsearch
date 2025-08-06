import { useState, type ChangeEvent } from "react";

interface AddCategoryProps {
  initialPlaceholder?: string;
  onNewCategory: (category: string) => void;
}
export const AddCategory = ({
  initialPlaceholder = "Buscar....",
  onNewCategory,
}: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const filteredValue = target.value.replace(
      /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s]/g,
      ""
    );
    setInputValue(filteredValue);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (inputValue.trim().length <= 0) return;    
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim())
    setInputValue('');

  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={initialPlaceholder}
        value={inputValue}
        maxLength={100}
        onChange={onInputChange}
      />
    </form>
  );
};
