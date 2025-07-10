import { Game } from "./components/Game.tsx"
import type { GameType } from "./interface/types.ts";
import { useState, useEffect } from "react";
import styled from "styled-components";

const WrapperStyle = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: antiquewhite;
`;

function App() {
    const [data, setData] = useState<GameType[]>([]);

    useEffect(() => {
        async function fetchData():Promise<void> {
            const response = await fetch("https://corsproxy.io/?https://www.freetogame.com/api/games?platform=pc");
            const jsonResponse = await response.json();
            setData(jsonResponse);
        }
        fetchData()
            .then(() => console.log("Data fetch successful!")) // fetchData returns void, so use an empty function that takes no inputs
            .catch((e) => console.log(`Error fetching data : ${e}`));
    }, [])

    console.log(data)

  return (
    <WrapperStyle>
        <Game games={data}/>
    </WrapperStyle>
  )
}

export default App
