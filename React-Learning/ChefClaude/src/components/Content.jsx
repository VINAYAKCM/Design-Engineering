export default function Content() {
    return (
        <main>
            <form className ="ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    className="input-box" 
                    placeholder="eg. oregano" />
                
                <button className="add-button">Add Ingredient</button>
            </form>
        </main>
    )
}