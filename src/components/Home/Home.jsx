import "./home.css";
import Video from "../../assets/Video.mp4";

function Home() {
  return (
    <section className="home" id="home">

      <video autoPlay loop muted className="videoBg">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="homeContent">

        <h3>Our Packages</h3>

        <h1>Search Your Holiday</h1>

        <p>
          Travel the world with comfort and explore amazing destinations.
        </p>

        <div className="cardDiv">

          <div className="inputBox">
            <label>Search your destination</label>
            <input
              type="text"
              placeholder="Enter destination..."
            />
          </div>

          <div className="inputBox">
            <label>Select Date</label>
            <input type="date" />
          </div>

          <div className="inputBox">
            <label>Max Price</label>
            <input
              type="number"
              placeholder="$1000"
            />
          </div>

          <button className="searchBtn">
            Book Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default Home;