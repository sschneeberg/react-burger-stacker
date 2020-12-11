function BurgerPane(props) {
    const ingredients = props.ingredients.map((ingredient, ind) => {
        return (
            <li
                className="ingredient"
                style={{ backgroundColor: ingredient.color }}
                key={`item ${ind}`}>
                {ingredient.name}
            </li>
        );
    });
    return (
        <div>
            <h3 className="title">Burger: </h3>
            <ul className="list" id="burger">
                {ingredients}
            </ul>
            <div className="buttons">
                <button
                    type="button"
                    onClick={() => {
                        props.clear();
                    }}>
                    Clear
                </button>
                <button
                    type="button"
                    onClick={() => {
                        props.undo();
                    }}>
                    Undo
                </button>
            </div>
        </div>
    );
}

export default BurgerPane;
