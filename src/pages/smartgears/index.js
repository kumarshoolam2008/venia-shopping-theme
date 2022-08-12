import React from "react";
import shopping from "../../images/shopping.webp";
import { AiOutlineHeart } from "react-icons/ai";

export default function Womenproduct() {
  return (
    <div>
      <div class="aem-Grid aem-Grid--12 categorybanner">
        <div class="aem-GridColumn aem-GridColumn--default--3 categoryname">
          <h3>Smart Gears</h3>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--9">
          <img
            src="https://i1.wp.com/carsandcoffeefolsom.com/wp-content/uploads/2018/06/TwMedia-Banner-1000x200-1-2.png?fit=1000%2C200"
            alt=""
          />
        </div>
      </div>

      <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--1">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--1 aem-GridColumn--phone--1">
          <div class="breadcrumbs">
            <ul>
              <li class="bclink">
                <a href="/">
                  <span>Clothing /</span>
                </a>
              </li>
              <li class="bclink">
                <a href="/">
                  <span>Women's /</span>
                </a>
              </li>
              <li class="bclink">
                <a href="/women">
                  <span>Outwear</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="productfilter">
            <h4>Filters</h4>
            <hr />
            <h4>Categories</h4>
            <ul>
              <li>
                <input type="checkbox" /> Men's Clothing
              </li>
              <li>
                <input type="checkbox" /> Women's Clothing
              </li>
              <li>
                <input type="checkbox" /> Jewellery
              </li>
              <li>
                <input type="checkbox" /> Electronics
              </li>
            </ul>
          </div>
        </div>

        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--1 aem-GridColumn--phone--1">
          <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 resultdrop">
            <span className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--3 aem-GridColumn--phone--7">
              4 results
            </span>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--7">
              <select>
                <option>Sort By Price</option>
                <option>Sort By Name</option>
              </select>
            </div>
          </div>

          <div className="aem-Grid aem-Grid--default--9 aem-Grid--tablet--9 aem-Grid--phone--12 catproduct">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--6 productcard">
              <img src={shopping} alt=" " className="productimg" />
              <h4>Women Party Dress</h4>
              <p className="p">$100</p>
              <AiOutlineHeart />
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--6 productcard">
              <img src={shopping} alt=" " className="productimg" />
              <h4>Women Party Dress</h4>
              <p className="p">$110</p>
              <AiOutlineHeart />
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--6 productcard">
              <img src={shopping} alt=" " className="productimg" />
              <h4>Women Party Dress</h4>
              <p className="p">$150</p>
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
