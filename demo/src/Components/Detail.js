import React, { useContext } from "react";
import "./detail.css";
import Tilt from "react-parallax-tilt";
import { BsFillStarFill } from "react-icons/bs";
import { Context } from "../App";

function Detail() {
  const [context, setContext] = useContext(Context);

  return (
    <>
      <div className="products-page-container">
        <Tilt
          tiltEnable={true}
          scale={1.05}
          transitionSpeed={1000}
          className="product-details-image"
        >
          {" "}
          <img src={context.detail?.img} alt="shoe" />
        </Tilt>
        <div className="product-details-description">
          <h1 className="product-name">{context.detail?.name}</h1>

          <div className="ratings-reviews">
            <span></span>
            <span>{context.detail?.rating}</span>{" "}
            <BsFillStarFill color={"orange"} />
            <span>
              <span className="review">
                ({context.detail?.reviews}) reviews{" "}
              </span>
            </span>
          </div>

          <div className="product-price-container">
            <span className="product-original-price">
              ₹{context.detail?.original_price}{" "}
            </span>
            <span className="product-discount-price">
              {" "}
              ₹{context.detail?.discounted_price}
            </span>
          </div>

          <p className="description-container">
            <span>Description</span>: {context.detail?.description}
          </p>

          <span className="gender-container">
            <span>Gender</span>: {context.detail?.category_name}
          </span>
          <p className="size-container">
            <span>Size</span>: {context.detail?.size}
          </p>

          <div className="tags">
            {!context.detail?.is_stock && (
              <span className="out-of-stock">
                {context.detail?.is_stock ? "In Stock" : "Out of stock"}
              </span>
            )}
            {context.detail?.trending && (
              <span className="trending">
                {context.detail?.trending ? "Trending" : ""}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Detail);
