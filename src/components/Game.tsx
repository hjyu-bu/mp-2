import type { GameType } from "../interface/types.ts";
import styled from "styled-components";

const GameStyle = styled.div`
    width: 33%;
    font-size: calc(2px + 1vw + 0.5vh);
    text-align: center;
    
    h3 {
        text-align: center;
        color: midnightblue;
        margin-bottom: 2vh;
    }
    
    p {
        text-align: left;
        margin-left: 2%;
        color: black;
        margin-bottom: 1.5vh;
    }
    
    img {
        max-width: 90%;
        margin-bottom: 2vh;
    }
`;

const FrameStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    row-gap: 6vh;
`

export function Game(props: {games:GameType[]}) {
    // Get a variable named props, which has "games" as attribute which is an array of GameTypes.
    return (
        <FrameStyle>
            {
                props.games.map((game:GameType) =>
                    <GameStyle key={game.id}>
                        <h3>{game.title}</h3>
                        <img src={game.thumbnail} alt={game.title}/>
                        <p>{game.short_description}</p>
                        <p>Genre : {game.genre}</p>
                        <p>Developed by : {game.developer}</p>
                    </GameStyle>
                )
            }
        </FrameStyle>
    )
}