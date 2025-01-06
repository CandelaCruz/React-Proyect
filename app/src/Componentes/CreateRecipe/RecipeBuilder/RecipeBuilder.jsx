import React from 'react';
import './RecipeBuilder.css';



const RecipeBuilder = ({ selectedIngredients, onUpdateQuantity, onRemoveIngredient }) => {
  return (
    <div>
      <h3>Selected Ingredients</h3>
      <div className='ingredients-box'>
      <ul  >
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name} ({ingredient.category}) - 
            <input
              type="number"
              min="1"
              value={ingredient.quantity}
              onChange={(e) => onUpdateQuantity(ingredient.id, parseInt(e.target.value, 10))}
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
            gramos
            <button
              onClick={() => onRemoveIngredient(ingredient.id)}
              style={{
                marginLeft: '10px',
                backgroundColor: '#CA3F3F',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                padding: '5px 10px',
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default RecipeBuilder;

