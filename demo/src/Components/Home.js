import React, { useContext } from "react";
import { Context } from "../App";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { BsFillStarFill } from "react-icons/bs";
import axios from "axios";
import { single } from "../utils";

function Home() {
  const [context, setContext] = useContext(Context);
  const navigate = useNavigate();

  const setDetail = (id) => {
    let url = `${single}${id}`;
    let data = context.details.filter((res) => res.id == id);
    console.log(context.details);
    if (data.length === 0) {
      axios
        .get(url)
        .then((res) => {
          context.details.push(res.data.details[0]);
          context.detail = res.data.details[0];
          setContext({ ...context });
          navigate(`/product-details/${id}`);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      context.detail = context.details.filter((res) => res.id == id)[0];
      navigate(`/product-details/${id}`);
    }
  };
  return (
    <div className="product-card-container">
      {context.data?.map((product) => {
        const {
          id,
          name,
          original_price,
          discounted_price,
          category_name,
          is_stock,
          rating,
          reviews,
          trending,
          img,
        } = product;

        return (
          <Tilt
            key={product.id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={false}
            transitionSpeed={2000}
            scale={1.02}
          >
            <div className="product-card" key={id}>
              <div
                className="product-card-image"
                onClick={() => {
                  setDetail(id);
                }}
              >
                <Tilt
                  transitionSpeed={2000}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.18}
                >
                  <img src={img} />
                </Tilt>
              </div>

              <div className="product-card-details">
                <h4>{name}</h4>
                <p className="ratings">
                  {rating}
                  <BsFillStarFill color="orange" /> ({reviews} reviews){" "}
                </p>
                <div className="price-container">
                  <p className="original-price">₹{original_price}</p>
                  <p className="discount-price">₹{discounted_price}</p>
                </div>

                <p>Category: {category_name}</p>
                <div className="info">
                  {!is_stock && <p className="out-of-stock">Out of stock</p>}
                  {trending && <p className="trending">Trending</p>}
                </div>
              </div>

              <div className="product-card-buttons"></div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
}

export default Home;
