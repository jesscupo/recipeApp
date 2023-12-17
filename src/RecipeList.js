import React , { useState } from "react";

/*component for indiv recipe row */
function Recipe({ name, cuisine, photo, ingredients, preparation }) {
  const [active, setActive] = useState(true);
  const handleDelete = () => {
    setActive(false);
  };
  if (active) {
    return ( <>
        <td>{name}</td>
         <td>{cuisine}</td>
         <td> <img class="scale-down" src={photo}></img></td>
         <td className="content_td"><p>{ingredients}</p></td>
         <td className="content_td"><p>{preparation}</p></td>
        <td><button type="submit" name="delete" onClick={handleDelete}>
          Delete
        </button></td>
        </>
    );
  } else {
    return null
  }
}

/*component for list of recipe rows */
function RecipeList({ recipes}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => {
          return <tr key={index}><Recipe name={recipe.name} 
                                  cuisine={recipe.cuisine} photo={recipe.photo} 
                                  ingredients={recipe.ingredients} preparation={recipe.preparation}/></tr>;
        })}
        </tbody>
      </table>
      </div>
  );
}

export default RecipeList;
