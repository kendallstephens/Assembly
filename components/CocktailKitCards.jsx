import cocktailKits from '../pages/api/cocktail_kit_data.js'
import React, {Component} from 'react'
import {Card, Button} from 'semantic-ui-react'

console.log(cocktailKits)


class CocktailKitCards extends Component{

    state = {
        cocktailKit: []
    }

       render(){
        
           return(
               <div> 
                    {cocktailKits.map(function(cocktail, idx){
            return (
            <div>
                 <Card.Group itemsPerRow={1}>
                    <h3 key={idx}>{cocktail.name}</h3>
                    <p key={idx}>{cocktail.ingredients}</p>
                    <p key={idx}>{cocktail.description}</p>
                    <img src = {cocktail.image} alt='cocktail image'/>
                    <h3>${cocktail.price}</h3>
                    <Button>Add to Cart</Button>
                </Card.Group>
            </div>
            )
                        
       })}
        
               </div>
           )
       }

}

export default CocktailKitCards