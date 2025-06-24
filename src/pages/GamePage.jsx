import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { useGlobalContext } from "../context/GlobalContext";

import GameInfo from "../components/GameInfo";

export default function GamePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, setLoading } = useGlobalContext();

  const [game, setGame] = useState(null);
  const [images, setImages] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setLoading(true);

        const gameRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/games/slug/${slug}`
        );
        const gameData = gameRes.data.data;

        const [imagesRes, sectionsRes] = await Promise.all([
          axios.get(
            `${import.meta.env.VITE_API_URL}/games/${gameData.id}/images`
          ),
          axios.get(
            `${import.meta.env.VITE_API_URL}/games/${gameData.id}/sections`
          ),
        ]);

        setGame(gameData);
        setImages(imagesRes.data.data);
        setSections(sectionsRes.data.data);
      } catch (err) {
        console.error("Errore nel recupero dei dati del gioco:", err);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, [slug, navigate]);

  return (
    <div className="container my-5">
      {!loading && game && <GameInfo game={game} />}
    </div>
  );
}
