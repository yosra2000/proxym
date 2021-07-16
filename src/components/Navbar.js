import React from "react";
import './Navbar.css';
function Navbar()
{
    return (
        <nav  id="navbar">
            
                 <table  width="2200" height="40" >

                     <tr>
                        <td> <a Link to="/Accueil">Accueil</a></td>
                        <td>  <a  Link to="/about">A propos</a></td>
                        <td class="cont"> <a href="/contact">Contacter nous</a></td>

                     </tr>
                 </table>
                
                </nav>

               
    
    );
}

export default Navbar