import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputOptions from "./index";

describe("InputOptions component", () => {
  const data = ["Option 1", "Option 2", "Option 3"];
  const name = "input-options";
  const onSelect = jest.fn();
  const defaultValue = null;

  it("renders the component with options", () => {
    const { getByLabelText, getByText } = render(
      <InputOptions
        data={data}
        name={name}
        onSelect={onSelect}
        defaultValue={defaultValue}
      />
    );

    // Vérifie que le label est présent
    expect(getByLabelText(name)).toBeInTheDocument();

    // Vérifie que les options sont présentes
    data.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it("calls the onSelect function when an option is selected", () => {
    const { getByLabelText, getByText } = render(
      <InputOptions
        data={data}
        name={name}
        onSelect={onSelect}
        defaultValue={defaultValue}
      />
    );

    // Sélectionne la deuxième option
    fireEvent.change(getByLabelText(name), { target: { value: "Option 2" } });

    // Vérifie que la fonction onSelect a été appelée avec la bonne valeur
    expect(onSelect).toHaveBeenCalledWith(expect.any(Object));
    expect(onSelect.mock.calls[0][0].target.value).toBe("Option 2");
  });

  it("renders the component with a default value", () => {
    const defaultValue = "Option 1";
    const { getByLabelText } = render(
      <InputOptions
        data={data}
        name={name}
        onSelect={onSelect}
        defaultValue={defaultValue}
      />
    );

    // Vérifie que la valeur par défaut est sélectionnée
    expect(getByLabelText(name)).toHaveValue(defaultValue);
  });
});
