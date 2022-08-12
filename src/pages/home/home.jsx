import React from 'react';
import Slider from "../../components/slider";
import "../../styles/home.scss"
import Tshirt from "../../images/t-shirt.jpg"
import stylishperson from "../../images/stylishperson.jpg"
import copolo from "../../images/copolo.jpg"
function home() {
  return (
    <div className="Home">
      <Slider />
      <div className="aem-Grid aem-Grid--12 products">
            <div className="aem-GridColumn aem-GridColumn--default--3 productbox">
                <img src={Tshirt} alt=" " />
              <div className="productboxheading">
                <h3 className="producttitle">Shop Women</h3>
                <p className="prod">Lorem Ipsum dolro sit</p>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 productbox">
              <img src={Tshirt} alt=" " />
              <div className="productboxheading">
                <h3 className="producttitle">Shp Men</h3>
                <p className="prod">Lorem Ipsum dolro sit</p>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 productbox">
              <img src={Tshirt} alt=" " />
              <div className="productboxheading">
                <h3 className="producttitle">Jewellery</h3>
                <p className="prod">Lorem Ipsum dolro sit</p>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 productbox">
            <img src={Tshirt} alt=" " />
              <div className="productboxheading">
                <h3 className="producttitle">Electronics</h3>
                <p className="prod">Lorem Ipsum dolro sit</p>
              </div>
            </div>
        </div>

        <div class="aem-Grid aem-Grid--12 singature">
        <div class="aem-GridColumn aem-GridColumn--default--6"> 
            <h3 className="midhead">
            Take off in the new Signature Legging
            </h3>
            <h4 className="midsubhead">Lorem Ipsum Dolor Tempor</h4>
            <p className="midp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
            <div class="signbtn"> 
                <button className="button1">SHOP COLLECTION</button>
                <button className="button2">SHOP NOW</button>
              </div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--6">
            <img src={stylishperson} alt="" />
        </div>
    </div>

      <div class="aem-Grid aem-Grid--12 adventure">
              <div class="aem-GridColumn aem-GridColumn--default--7">
                <img src={copolo} alt="" />
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--5 adventurebox">
                  <h3>Conquer your next adventure</h3>
                  <p>Lorem Ipsum Dolor Tempor</p>
                  <button className="shopdevice">Shop Device</button>
              </div>
      </div>

    
    </div>
  )
}

export default home;
