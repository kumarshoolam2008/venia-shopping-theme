import React from 'react'
import "../../styles/footer.scss"

function Footer() {
  return (
    <div className="aem-Grid aem-Grid--12 footer">
      
    <div className="aem-GridColumn aem-GridColumn--default--3">
      <h5>Account</h5>
      <ul>
        <li>Sing In</li>
        <li>Register</li>
        <li>Order Status</li>
      </ul>
    </div>
    <div className="aem-GridColumn aem-GridColumn--default--3">
    <h5>About Us</h5>
      <ul>
        <li>Our Story</li>
        <li>Careers</li>
      </ul>
    </div>
    <div className="aem-GridColumn aem-GridColumn--default--3">
    <h5>Help</h5>
      <ul>
        <li>Contact Us</li>
        <li>Orders</li>
        <li>Returns</li>
      </ul>
    </div>
    <div className="aem-GridColumn aem-GridColumn--default--3">
    <h5>Follows</h5>
    <p>Give feedback, ask questions, or start a discussion in the comments.</p>
    <div>
    <div id="menu-btn" className="fas fa-instagram"></div>
    <div id="menu-btn" className="fas fa-facebook"></div>
    <div id="menu-btn" className="fas fa-twitter"></div>
    </div>
    </div>


    
</div>
  )
}


export default Footer;