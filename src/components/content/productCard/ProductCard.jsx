import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { getModalData } from "../../../services/TmbServicesModal";
import { useModal } from "../../../context/ModalContext";
import "./ProductCard.css";

function ProductCard({ id, type }) {
    const [product, setProduct] = useState(null);
    const { showModal } = useModal();
    const cardRef = useRef(null);
  
    useEffect(() => {
      async function fetchProduct() {
        try {
          const data = await getModalData(type, id);
          setProduct(data);
        } catch (error) {
          console.error("Error getProductById:", error);
        }
      }
      fetchProduct();
    }, [id, type]);
  
    const handleMouseEnter = () => {
      if (!product || !cardRef.current) return;
  
      const rect = cardRef.current.getBoundingClientRect();
      showModal(product, rect);
    };
  
    if (!product) return null;
  
    return (
      <div ref={cardRef} className="verticalCard" onMouseEnter={handleMouseEnter}>
        <img src={`https://image.tmdb.org/t/p/original${product.poster_path}`} alt="" />
        {type === "tv" && <p className="isSerie">SERIE</p>}
      </div>
    );
  }
  
  ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  };
  
  export default ProductCard;