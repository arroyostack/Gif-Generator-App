import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifApp = () => {

  const [ categories, setCategories ] = useState([ 'onePunch' ]);

  const onAddCategory = (newCategory) => {
    // No case sensitive
    const lowerCategories = categories.map(item => item.toLowerCase());
    const lowerCategory = newCategory.toLowerCase();

    // Will avoid duplicates
    if(lowerCategories.includes(lowerCategory)) return;

    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      {/* {title} */ }
      <header className="d-flex justify-content-center">
        <h1 className="text-white">Gif Generator App</h1>
      </header>


      {/* Input Component */ }
      <AddCategory
        onNewCategory={ onAddCategory }
        placeHolder='Find yor gifs'
      />

      {/* Categories */ }
      { categories.map(category => (
        <GifGrid
          key={ category }
          category={ category } />
      )
      ) }
      {/* End of categories */ }

    </>

  );
};
