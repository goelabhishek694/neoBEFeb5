import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../api/movies";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { message, Input, Divider, Row, Col } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
import { getAllTheatresByMovie } from "../api/shows";
function SingleMovie() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [theatres, setTheatre] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDate = () => {};
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getMovieById({ movieId: params.id });
      console.log("movie by id", response);
      if (response.success) {
        setMovie(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const getAllShowsAndTheatresByMovie = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllTheatresByMovie({ movie: params.id, date });
      console.log("ahow and theatres by movie", response);
      if (response.success) {
        setTheatre(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getAllShowsAndTheatresByMovie();
  }, [date]);

  return (
    <>
      <div className="inner-container">
        {movie && (
          <div className="d-flex single-movie-div">
            <div className="flex-Shrink-0 me-3 single-movie-img">
              <img src={movie.poster} width={150} alt="Movie Poster" />
            </div>
            <div className="w-100">
              <h1 className="mt-0">{movie.name}</h1>
              <p className="movie-data">
                Language: <span>{movie.language}</span>
              </p>
              <p className="movie-data">
                Genre: <span>{movie.genre}</span>
              </p>
              <p className="movie-data">
                Release Date:{" "}
                <span>{moment(movie.date).format("MMM Do YYYY")}</span>
              </p>
              <p className="movie-data">
                Duration: <span>{movie.duration} Minutes</span>
              </p>
              <hr />
              <div className="d-flex flex-column-mob align-items-center mt-3">
                <label className="me-3 flex-shrink-0">Choose the date:</label>
                <Input
                  onChange={handleDate}
                  type="date"
                  min={moment().format("YYYY-MM-DD")}
                  className="max-width-300 mt-8px-mob"
                  value={date}
                  placeholder="default size"
                  prefix={<CalendarOutlined />}
                />
              </div>
            </div>
          </div>
        )}
        {theatres.length === 0 && (
          <div className="pt-3">
            <h2 className="blue-clr">
              Currently, no theatres available for this movie!
            </h2>
          </div>
        )}
        {theatres.length > 0 && (
          <div className="theatre-wrapper mt-3 pt-3">
            <h2>Theatres</h2>
            {theatres.map((theatre) => {
              return (
                <div key={theatre._id}>
                  <Row gutter={24} key={theatre._id}>
                    <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                      <h3>{theatre.name}</h3>
                      <p>{theatre.address}</p>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                      <ul className="show-ul">
                        {theatre.shows
                          .sort(
                            (a, b) =>
                              moment(a.time, "HH:mm") - moment(b.time, "HH:mm")
                          )
                          .map((singleShow) => {
                            return (
                              <li
                                key={singleShow._id}
                                onClick={() =>
                                  navigate(`/book-show/${singleShow._id}`)
                                }
                              >
                                {moment(singleShow.time, "HH:mm").format(
                                  "hh:mm A"
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    </Col>
                  </Row>
                  <Divider />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SingleMovie;
