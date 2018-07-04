import React, { Component } from 'react';
import './header.css'
import { List,Image,Icon} from 'semantic-ui-react'

class Header extends Component {
 
    render() {
        return (    <div className="navbar">
        <div className="header_content">
          <nav>
            <ul className="nav_container">
            
                <li><List selection verticalAlign='middle'>
               <List.Item>
                 <Icon  size = 'big' name='smile outline'/>
               <List.Content>
               <List.Header>edek Ayam</List.Header>
              </List.Content>
               </List.Item>
            </List>
        </li>

        <li><form >  <Icon  size = 'large' name='search'/>
         <input className="searcher" placeholder="Search Something Here"/></form></li>
               <li><a >Home</a></li>
               <li><a >Recipe</a></li>
               <li><a >Trending</a></li>
               <li><a>#Foodforlife</a></li>
               <li> <div class="ui compact menu">
 
             <a className="item" >
                <img className = 'avatar' src = "/src/images/avatar.png"/>
                <div className="floating ui teal label">22</div>
            </a>
              </div>
               <p>Roy Cidori</p>
          </li>
          <li>  <div id="nav-icon1">
               <span></span>
                <span></span>
                 <span></span>
          </div>
         </li>
        </ul>  
      </nav>
    </div>
</div>

       );
    }
}

export default Header;