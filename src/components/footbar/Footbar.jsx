import React, { Component } from 'react';
import './footbar.css'
import { Image, List,Rating } from 'semantic-ui-react'

class Footbar extends Component {

    render() {
        return ( <div class="footbar">
        <div className = 'food_lists'><List horizontal>
    <List.Item>
      <Image avatar size = 'tiny' src='/src/images/icon_food.png' />
      <List.Content>
        <List.Header>Bakwan White Rise</List.Header>
        <br/>
            <Rating size = 'large' icon = 'ui star rating' rating={5} maxRating= {5}/>
             <br/>
        4.7 (128 Reviews)
      </List.Content>
    </List.Item>

    <List.Item>
      <Image  size = 'tiny' avatar src='/src/images/icon_food.png' />
      <List.Content>
        <List.Header>Twin Brown Bread</List.Header>
        <br/>
           <Rating size = 'large' icon = 'ui star rating' rating={4} maxRating= {5}/>
                <br/>
         4.1 (362 Reviews)
      </List.Content>
    </List.Item>

    <List.Item > 
      <Image avatar size = 'tiny'  src='/src/images/icon_food.png' />
      
      <List.Content>
        <List.Header>Mie Ayam Babeah</List.Header>
        <br/>
          <Rating size = 'large' icon = 'ui star rating' rating={4} maxRating= {5}/>
                <br/>
        4.1 (127 Reviews)
      </List.Content>
    </List.Item>
  </List>

        </div>
        <div className = 'video_content'> 
        <div className = 'video_information'>  <h4>Whatch  Video How  To Make It</h4>  
        <p>Ayao lihat bagaimana cara masanya...</p></div>

        <video  className = 'just_video'  width="45%" height = "100%" controls>
            <source src="mov_bbb.mp4" type="video/mp4"/>
            <source src="mov_bbb.ogg" type="video/ogg"/>
      </video>
    </div>
    </div>
       );
    }
}

export default Footbar;