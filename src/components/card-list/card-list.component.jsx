import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
export const CardList = (props) =>
(
<div className="card-list">
{
  props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)
}
</div>
);




// {  // console.log(props);
    
//     return <div className="card-list">
//         {
//           props.monsters.map(monster => <h1 key = {monster.id}>{monster.name }</h1>)
//         }
//         </div>;

// };
