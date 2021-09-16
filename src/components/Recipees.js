import React from 'react'
import RecipeeItem from './RecipeeItem';

const Recipees = (props) => {
    const {recipees}=props;
    return (
        <div className="card-columns">
           {
               recipees.map(recipee=>(
                 <RecipeeItem
                 key={Math.random()*100}
                 label={recipee.recipe.label}
                 image={recipee.recipe.image}
                 ingredientLines={recipee.recipe.ingredientLines}
                />
               ))
           }
        </div>
    )
}

export default Recipees
