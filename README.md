# OptionList

OptionList est un composant React qui affiche une liste d'options dans un menu déroulant (select). Il permet à l'utilisateur de sélectionner une option et déclenche une fonction de rappel lorsqu'une option est sélectionnée afin de recupéré le resultat dans le composant parent.

## Installation

Pour installer le composant OptionList, vous pouvez utiliser npm. Exécutez la commande suivante :

```shell
npm i optionlist_shiffff
```

## Utilisation

Voici un exemple d'utilisation du composant OptionList dans votre application :

```jsx
import React, { useState } from "react";
import OptionList from "option-list";

const App = () => {
  const states = [
    "Alabama",
    "Alaska",
    // Ajoutez d'autres options ici
  ];

  const inputOptionsChange = (event) => {
    console.log(event.target.value);
    // Effectuez d'autres actions en fonction de la sélection
  };

  return (
    <div className="App">
      <OptionList data={states} name={"Test"} onSelect={inputOptionsChange} />
    </div>
  );
};

export default App;
```

## Props

- `data` (array)(obligatoire) : Un tableau contenant les options à afficher dans le menu déroulant.
- `name` (string)(obligatoire) : Le nom du composant qui sera utilisé comme attribut id et htmlFor.
- `onSelect` (function)(obligatoire) : Une fonction de rappel qui sera appelée lorsque l'utilisateur sélectionne une option.
- `defaultValue` (string) : La valeur par défaut de l'option sélectionnée. Utilisez null si aucune valeur par défaut n'est nécessaire.

## Exemples

```jsx
<InputOptions
  data={states}
  name={"State"}
  defaultValue={formData.State}
  onSelect={inputOptionsChange}
/>
```

## ScreenShot

![Exemple d'image](./exemple.png)
