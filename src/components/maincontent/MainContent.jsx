import React, { Component } from 'react';
import './maincontent.css'
import { Icon, Rating,Button} from 'semantic-ui-react'

class MainContent extends Component {

    render() {
        return (    
    <div className= "wrapper_layer">
        <article className="recipe">
          <div className="line_recipe">
          <h3 className = "left_recipe">RECIPE</h3>
        </div>
  
        </article>
        <article className="second"> 
          <div className="chicken_wrapper">
          <h2 className="fresh_chicken"> <span >Mix Fresh Chicken </span></h2>
           <h2 className="fresh_chicken"> <span> With Rice</span></h2>
             </div>
             <div className = 'stars_content'>
               <Rating size = 'large' icon = 'ui star rating' rating={4} maxRating= {5}/>
               <p><span> 4.2  </span>  (127 reviews)</p>
             </div>
          
          <p>Gimara cara buatnya,ayao gimana coba tebak kalo bisa caranya aku buat jajan smarpon terus donlot tontik biar kaya anak anak jaman now gada kerjaan lan bocah napa yauk</p>

           <ul className = 'ava_lists'>
              <li><img className = 'avatar' src = "/src/images/avatar.png"/></li>
              <li><img className = 'avatar' src = "/src/images/avatar.png"/></li>
              <li><img className = 'avatar' src = "/src/images/avatar.png"/></li>

           </ul>
           <span className = 'ava_describe'>28 peoples have tried to cook this menu</span>
           <div className = 'button_wrapper'>
             <Button primary>Cook this menu</Button>
          </div>
        </article>
  
        <div className="right_block">
        <ul className = "social_media">
                <li><Icon name="google plus g"/></li> 
                 <li><Icon name="instagram"/></li>
                <li><Icon name="facebook square"/></li>
                <li> <Icon name="twitter"/></li>
             </ul>
            <div className="dinner_menu">
              <div className = "left_menu"><span>03</span></div>
              <div className = "right_menu"><span>Dinner Menu</span></div>
            </div>      
                 <img src="/src/images/food.jpeg" className="cover_image"/>
            </div>   
      </div>
       );
    }
}

export default MainContent;