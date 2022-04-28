import React, { useState } from "react";
import axios from "axios";

function PostGame() {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const postGames = () => {
        axios.post("https://62660d3b63e0f382567bce22.mockapi.io/addGames",
            {
                title: name,
                genre: genre
            })
    }
    
    return (
        <div>
            <form>
                <label> Nombre:
                    <input type="text"
                        placeholder="Introduzca el nombre del juego"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </label>

                <label> G&eacutenero:
                    <input type="text"
                        placeholder="Introduzca el género del juego"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)} />
                </label>
            </form>

            <button 
            type="sumbmit"
            onClick={postGames}>
                POST new game
            </button>
        </div>
    )
}

export default PostGame;