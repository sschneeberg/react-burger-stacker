function IngredientsList(props) {
    console.log('PROP', props.list);
    const ingredients = props.list.map((ingredient, ind) => {
        return (
            <li
                className="ingredient"
                style={{ backgroundColor: ingredient.color }}
                key={`item ${ind}`}>
                {ingredient.name}
                <button type="button" onClick={() => props.add(ind)}>
                    {'>>'}
                </button>
            </li>
        );
    });

    return (
        <div>
            <h3 className="title">Ingredients: </h3>
            <ul className="list">{ingredients}</ul>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.new(e.target[0].value, e.target[1].value);
                }}>
                <label for="new">Add Ingredients: </label>
                <input type="text" name="new" />
                <label for="color">Set Label Color: </label>
                <input type="text" name="color" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default IngredientsList;
