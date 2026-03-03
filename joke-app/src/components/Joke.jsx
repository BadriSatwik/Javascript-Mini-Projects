import React from "react";
import Button from "./Button";

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = async () => {
        const data = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            const result = await data.json()
            setJoke(result.joke)
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;