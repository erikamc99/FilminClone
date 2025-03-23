import React from "react";
import "./Modal.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { useModal } from "../../../context/ModalContext";
import { useVideoConfig } from "../../../hooks/useVideoConfig";

function Modal() {
    const { modalData, isModalVisible, hideModal, modalPosition } = useModal();
    const videoConfig = useVideoConfig(modalData?.videoKey || "");
    if (!isModalVisible || !modalData) return null;
  
    return (
      <article 
        className="modal" 
        onMouseLeave={hideModal} 
        style={{ 
            top: `${modalPosition.top + modalPosition.height / 2 }px`,
            left: `${modalPosition.left + modalPosition.width / 2 }px`, 
            transform: "translate(-50%, -50%)",
        }}
      >
        <div className="divImage">
        <img
          src={`https://image.tmdb.org/t/p/original${modalData.backdrop_path}`}
          alt=""
        />
        <div className="prettyerDiv"></div>
      </div>
      <div className="divVideo">
        <ReactPlayer {...videoConfig} playing
          style={{ pointerEvents: "none" }}
        />
        <div className="prettyerDiv"></div>
      </div>

      <div className="modalInfo">
        <div className="modalInfoVotes">
          <div className="containerRating">
            <p className="modalTextBold">{modalData.voteRating}</p>
          </div>
          <div className="containerVotes">
            <p className="modalTextBold">{modalData.vote_count} votos</p>
            <p>{modalData.nomRating}</p>
          </div>
        </div>

        <button className="modalInfoButton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24">
            <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
          <Link to="/construction" target="_blank">
            <p>VER</p>
          </Link>
        </button>

        <div className="modalInfoHeader">
          <p className="modalTextBold">{modalData.title}</p>
          <div className="modalData">
            <p>{modalData.time}</p>
            {modalData.certification && (
              <p className="modalCertification">{modalData.certification}</p>
            )}
          </div>
          <div className="modalGenre">
            {modalData.genres.slice(0, 3).map((genre) => (
              <p key={genre.id}>{genre.name.toUpperCase()}</p>
            ))}
          </div>
        </div>

        <div className="modalInfoContent">
          <p>{modalData.overview}</p>
        </div>
      </div>
    </article>
  );
  }
  
  export default Modal;