import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

import GameCard from "./GameCard";

export default function GameRowSection({ title, endpoint, searchLink }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        const items = res.data.data?.data;
        setGames(items.slice(0, 9));
      })
      .catch((err) => console.error(err));
  }, [endpoint]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          swipe: false,
          draggable: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          swipe: false,
          draggable: false,
        },
      },
    ],
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container my-5 overflow-visible">
      <div
        className="border border-2 border-dark rounded-4 p-3 px-5 shadow"
        style={{ backgroundColor: "#283044" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">{title}</h3>
        </div>

        <Slider {...settings}>
          {games.map((game) => (
            <div key={game.id} className="p-2">
              <GameCard game={game} />
            </div>
          ))}

          <div className="p-2">
            <Link
              to={searchLink}
              onClick={handleClick}
              className="text-decoration-none"
            >
              <div
                className="position-relative w-100 rounded shadow d-flex flex-column justify-content-center align-items-center text-white"
                style={{
                  aspectRatio: "3 / 4",
                  backgroundColor: "#202634",
                }}
              >
                <div className="text-center px-2">
                  <h5 className="mb-">Vedi tutti</h5>
                  <p className="small text-white-50 mb-0">
                    Mostra tutti i giochi di questa categoria
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}
