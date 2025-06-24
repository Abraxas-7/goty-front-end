import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import GameCard from "../components/GameCard";

import { useGlobalContext } from "../context/GlobalContext";

export default function SearchPage() {
  const { loading, setLoading } = useGlobalContext();
  const navigate = useNavigate();
  const { search: queryString } = useLocation();

  const getParamsFromURL = () => {
    const params = new URLSearchParams(queryString);
    return {
      search: params.get("search") || "",
      sort: params.get("sort") || "",
      console: params.get("console") || "",
      genre: params.get("genre") || "",
      developer: params.get("developer") || "",
      page: parseInt(params.get("page") || "1", 10),
    };
  };

  const [formFilters, setFormFilters] = useState(getParamsFromURL());
  const [filters, setFilters] = useState(getParamsFromURL());
  const [games, setGames] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [genres, setGenres] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [meta, setMeta] = useState(null);

  const handleChange = (e) => {
    setFormFilters({
      ...formFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      ...formFilters,
      page: 1,
    });

    navigate(`?${queryParams.toString()}`);
    setFilters({
      ...formFilters,
      page: 1,
    });
  };

  const changePage = (page) => {
    const newFilters = { ...filters, page };
    const queryParams = new URLSearchParams(newFilters);
    navigate(`?${queryParams.toString()}`);
    setFilters(newFilters);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchStaticData = async () => {
      try {
        const [consolesRes, genresRes, devsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/consoles`),
          axios.get(`${import.meta.env.VITE_API_URL}/genres`),
          axios.get(`${import.meta.env.VITE_API_URL}/developers`),
        ]);

        setConsoles(consolesRes.data.data || []);
        setGenres(genresRes.data.data || []);
        setDevelopers(devsRes.data.data || []);
      } catch (error) {
        console.error("Errore nel caricamento dei filtri:", error);
      }
    };

    fetchStaticData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setGames([]);

        const query = new URLSearchParams(filters).toString();
        const gamesRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/games?${query}`
        );

        setGames(gamesRes.data.data.data || []);
        setMeta({
          current_page: gamesRes.data.data.current_page,
          last_page: gamesRes.data.data.last_page,
        });
      } catch (error) {
        console.error("Errore nel caricamento dei giochi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <div className="container mt-4">
      <form
        onSubmit={handleSubmit}
        className="p-3 border-2 border-dark rounded shadow mt-4"
        style={{ backgroundColor: "#283044" }}
      >
        <div className="row g-2">
          <div className="col-md-9">
            <input
              type="text"
              name="search"
              value={formFilters.search}
              onChange={handleChange}
              className="form-control border-dark"
              style={{
                color: "white",
                backgroundColor: "#202634",
              }}
              placeholder="Cerca..."
            />
          </div>

          <div className="col-md-3">
            <select
              name="sort"
              value={formFilters.sort}
              onChange={handleChange}
              className="form-select border-dark"
              style={{
                color: "white",
                backgroundColor: "#202634",
              }}
            >
              <option value="">Ordina per</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
              <option value="recent">Più recenti (creazione)</option>
              <option value="oldest">Meno recenti (creazione)</option>
              <option value="updated_recent">
                Più recenti (aggiornamento)
              </option>
              <option value="updated_oldest">
                Meno recenti (aggiornamento)
              </option>
              <option value="rating_desc">Voto più alto</option>
              <option value="rating_asc">Voto più basso</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              name="console"
              value={formFilters.console}
              onChange={handleChange}
              className="form-select border-dark"
              style={{
                color: "white",
                backgroundColor: "#202634",
              }}
            >
              <option value="">Console</option>
              {consoles.map((console) => (
                <option key={console.id} value={console.id}>
                  {console.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select
              name="genre"
              value={formFilters.genre}
              onChange={handleChange}
              className="form-select border-dark"
              style={{
                color: "white",
                backgroundColor: "#202634",
              }}
            >
              <option value="">Genere</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <select
              name="developer"
              value={formFilters.developer}
              onChange={handleChange}
              className="form-select border-dark"
              style={{
                color: "white",
                backgroundColor: "#202634",
              }}
            >
              <option value="">Developer</option>
              {developers.map((developer) => (
                <option key={developer.id} value={developer.id}>
                  {developer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 mt-3">
            <div className="row justify-content-evenly">
              <div className="col-md-4">
                <button
                  type="button"
                  className="btn btn-outline-light w-100"
                  onClick={() => {
                    const emptyFilters = {
                      search: "",
                      sort: "",
                      console: "",
                      genre: "",
                      developer: "",
                      page: 1,
                    };

                    setFormFilters(emptyFilters);
                    setFilters(emptyFilters);
                  }}
                >
                  Azzera filtri
                </button>
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-danger w-100">
                  Cerca
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="d-flex flex-wrap justify-content-center row mt-5">
        {games.length > 0 &&
          games.map((game) => (
            <div key={game.id} className="col-6 col-sm-4 col-md-2 mb-4">
              <GameCard game={game} />
            </div>
          ))}

        {!loading && games.length === 0 && (
          <div className="text-white text-center py-5">
            Nessun gioco trovato con i filtri selezionati.
          </div>
        )}
      </div>

      {!loading && meta && games.length > 0 && meta.last_page > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li
              className={`page-item ${
                meta.current_page === 1 ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                style={{
                  backgroundColor: "#202634",
                  color: "white",
                  borderColor: "#343a40",
                }}
                onClick={() => changePage(meta.current_page - 1)}
              >
                &laquo;
              </button>
            </li>

            {Array.from({ length: meta.last_page }, (_, i) => (
              <li
                key={i}
                className={`page-item ${
                  meta.current_page === i + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  style={{
                    backgroundColor:
                      meta.current_page === i + 1 ? "#3a455c" : "#202634",
                    color: "white",
                    borderColor: "#343a40",
                  }}
                  onClick={() => changePage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                meta.current_page === meta.last_page ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                style={{
                  backgroundColor: "#202634",
                  color: "white",
                  borderColor: "#343a40",
                }}
                onClick={() => changePage(meta.current_page + 1)}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
