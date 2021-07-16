import React from "react";
import './Footer.css';

const Footer = () => {
  return (
<footer>
    <table id="Table"  width="1000"  >

    <tr>
  
      <td id = "service">
        <h4> Nos services</h4>
        <ul> 
            <li> Espace client</li>
            <li> Devis en ligne</li>
            <li> Tous nos conseils </li>
        </ul>
      </td> 
  <br/> <br/>   
                
      <td id="contact">
          <h4> Adresse et Tel  </h4>
      <ul> 
            <li> tel : 25 046 935 </li>
            <li> Fix: 73 869 351 </li>
            <li> Monastir  </li>
        </ul>
       </td>
     
    <td >

    </td>

       <td id="contact">
          <h4> Nos contacts </h4>
      <ul> 
            <li> <a href="https://github.com/yosra2000">  github</a> 
             </li>
            <li> <a href ="https://mail.google.com/mail/u/0/?hl=fr#inbox"> email</a> </li>
            <li> <a href ="https://www.facebook.com/photo.php?fbid=571994023796821&set=a.136640603998834&type=3&notif_id=1626353703639816&notif_t=feedback_reaction_generic&ref=notif"> Facebook</a></li>
        </ul>
       </td>
     
       <td id="contact">
          
          yosra mahjoub <br/>
          © 2021 moonbooks.org, All rights reserved
         

       </td> 
      




    </tr>
  
   







    
  
  </table>
     
</footer>


  );
  }
export default Footer;
