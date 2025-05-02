import {simpsons} from "../data/SimpsonsList.ts";
import CharacterComponent from "./CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index)=>(
                    <CharacterComponent simpson={simpson} key={index}>{simpson.info}</CharacterComponent>
                ))
            }
        </div>
    );
};

export default FamilyComponent;