import React, { Component } from "react";
// import ShowTodos from "./components/ShowTodos";
import ShowItems from './components/ShowItems'
// import AddTodo from "./components/AddTodo";
import AddItem from "./components/AddItem";
import axios from "axios";

class CoinApp extends Component {
    state = {
        item: {},
        name: "",
        year: "",
        country: "",
        denomination: "",
        items: []
    };

    componentDidMount() {
        this.refresh();
        console.log("Mounted")
    }

    // clearInput = () => {
    //     this.setState({ todo: "" });
    // };

    refresh = async () => {
        try {
            // 1. Get /todos to get all too-Dos
            const response = await axios.get("/items");
            /* if you use the await and async keywords any code below will
            not run untill the line above runs */
            const items = response.data.data;
            this.setState({ items });
            console.log("Response", response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    addItem = async () => {
        try {
            // const nextItems = Array.from(this.state.items);
            // nextItems.push(this.state.item);
            // this.setState({ items: nextItems });
            this.setState({
                items: this.state.items.concat([this.state.item])
            });
            console.log("Item", this.state.item);
            console.log("Items", this.state.items);
            await axios.post("/items", {
                item: this.state.item
            });
            this.refresh();
        } catch (e) {
            console.log(e);
        }
        // this.clearInput();
    };

    // removeTodo = async index => {
    //     // const nextTodos = Array.from(this.state.todos);
    //     // nextTodos.splice(index, 1);
    //     // this.setState({ todos: nextTodos });
    //     try {
    //         axios.delete(`/todos/${index}`);
    //         this.refresh();
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    handleChange = (field, value) => {
        this.setState({
            item: {
                ...this.state.item,
                [field]: value
            }
        })
        // this.setState({
        //     item: {
        //         year: e.target.value,
        //         name: e.target.value,
        //         country: e.target.value,
        //         denomination: e.target.value,
        //     }
        // });
        console.log(this.state.item, this.state.name, this.state.year, this.state.country, this.state.denomination)
    };

    render() {
        return (
            <div>
                {/* <AddTodo
                    handleChange={this.handleChange}
                    addTodo={this.addTodo}
                    todo={this.state.todo}
                />
                <ShowTodos todos={this.state.todos} removeTodo={this.removeTodo} /> */}
                <AddItem
                    handleChange={this.handleChange}
                    addItem={this.addItem}
                    item={this.state.item}
                />
                <ShowItems
                    items={this.state.items}
                    name={this.state.name}
                    year={this.state.year}
                    country={this.state.country}
                    denomination={this.state.denomination}
                />
            </div>
        );
    }
}

export default CoinApp;
