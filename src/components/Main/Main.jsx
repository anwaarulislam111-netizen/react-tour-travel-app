import "./Main.css";

const data = [
  {
    id: 1,
    title: "Maldives",
    price: "$999",
    days: "5 Days / 4 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Enjoy crystal clear water, luxury resorts and unforgettable beach experience."
  },
  {
    id: 2,
    title: "Dubai",
    price: "$799",
    days: "4 Days / 3 Nights",
    rating: "⭐⭐⭐⭐",
    desc: "Visit Burj Khalifa, Desert Safari, Dubai Mall and enjoy luxury lifestyle."
  },
  {
    id: 3,
    title: "Turkey",
    price: "$899",
    days: "6 Days / 5 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Explore Istanbul, Cappadocia and enjoy rich culture with delicious food."
  },
  {
    id: 4,
    title: "Switzerland",
    price: "$1499",
    days: "7 Days / 6 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Beautiful mountains, lakes and breathtaking natural scenery."
  },
  {
    id: 5,
    title: "Bali",
    price: "$699",
    days: "5 Days / 4 Nights",
    rating: "⭐⭐⭐⭐",
    desc: "Relax on tropical beaches and experience peaceful island life."
  },
  {
    id: 6,
    title: "Paris",
    price: "$1299",
    days: "6 Days / 5 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Visit the Eiffel Tower and enjoy the city of love with amazing attractions."
  }
];

function Main() {
  return (
    <section className="main">

      <section id="packages">

        <div className="title">
          <h1>Our Tour Packages</h1>

          <p>
            We provide affordable travel packages including hotels,
            transport, food and professional tour guides to make
            your journey memorable.
          </p>
        </div>

      </section>

      <section id="destinations">

        <div className="title">
          <h1>Popular Destinations</h1>

          <p>
            Discover the world's most beautiful destinations with
            our premium travel services.
          </p>
        </div>

        <div className="cards">

          {data.map((item) => (
            <div className="card" key={item.id}>

              <h2>{item.title}</h2>

              <p>{item.desc}</p>

              <h4>Duration : {item.days}</h4>

              <h3>Price : {item.price}</h3>

              <span>{item.rating}</span>

              <button>Book Now</button>

            </div>
          ))}

        </div>

      </section>

    </section>
  );
}

export default Main;