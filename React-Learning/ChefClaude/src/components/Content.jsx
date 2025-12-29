import React from "react"

export default function Content() {

    const [ingredients, setIngredients] = React.useState([])

    const showIngredients = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const ingredient = formData.get("ingredient")

        setIngredients(prevIngredients => [
            ...prevIngredients, ingredient])
    }

    
    return (
        <main>
            <form onSubmit={handleSubmit} className ="ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    className="input-box" 
                    placeholder="eg. oregano" 
                    name="ingredient"
                    />
                
                <button className="add-button">Add Ingredient</button>
            </form>

            <ul className="ingredient-list">
                {showIngredients}
            </ul>

        </main>
    )
}

