import React from 'react'

const RecipeeItem = (props) => {
    const {label,image,ingredientLines}=props;
    return (
        <div className="card py-2 text-center">
            <div className="card-body">
            <img src={image} className="img-fluid w-50 mx-auto rounded-circle" alt=""/>
             <h5>{label}</h5>
            </div>
            <ul className="list-group group-flush">
                {ingredientLines.map(ing=><li className="list-group-item">
                     {ing}
                </li>)}
            </ul>
        </div>

    )
}

export default RecipeeItem
