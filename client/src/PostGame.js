import React from "react";
import axios from "axios";

function PostGame() {
    const postGames = () => {
        axios.post("https://62660d3b63e0f382567bce22.mockapi.io/addGames",
        {
            title: 'Doom Eternal',
            genre: 'Shooter'
        })
    }
    return (
        <div>
            <form>
        <label> Name:
          <input type="text" name="name" />
        </label>

        <label> Genre:
          <input type="text" name= "genre" />
        </label>
      </form>
            
            <button onClick={postGames}>
                POST new game
            </button>
        </div>
    )
}

export default PostGame;