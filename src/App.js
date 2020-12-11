import IngredientsList from './Components/IngredientsList';
import BurgerPane from './Components/BurgerPane';
import starterData from './Data/starterData';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IngredientsList: starterData,
            chosenIngredients: [],
            history: []
        };
    }

    addIngredient(name, color) {
        const data = this.state.IngredientsList.slice();
        this.setState({
            IngredientsList: data.concat([{ name: name, color: color }])
        });
    }

    selectIngredient = (i) => {
        const chosen = this.state.IngredientsList[i];
        this.setState({
            chosenIngredients: this.state.chosenIngredients.concat(chosen),
            history: this.state.chosenIngredients
        });
    };

    undo() {
        const length = this.state.history.length;
        const stepBack = this.state.history.slice(0, length - 1);
        this.setState({
            chosenIngredients: this.state.history,
            history: stepBack
        });
    }

    render() {
        return (
            <div className="App">
                <IngredientsList
                    list={this.state.IngredientsList}
                    add={(i) => this.selectIngredient(i)}
                    new={(input, color) => this.addIngredient(input, color)}
                />
                <BurgerPane
                    ingredients={this.state.chosenIngredients}
                    clear={() => {
                        this.setState({ chosenIngredients: [] });
                    }}
                    undo={() => this.undo()}
                />
            </div>
        );
    }
}

export default App;
