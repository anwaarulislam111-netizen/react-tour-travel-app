import "./main.css";

const data = [
  {
    id: 1,
    title: "Maldives",
    price: "$999",
    days: "5 Days / 4 Nights",
    rating: "⭐⭐⭐⭐⭐",
    description: "Enjoy crystal clear water and luxury resorts."
  },
  {
    id: 2,
    title: "Dubai",
    price: "$799",
    days: "4 Days / 3 Nights",
    rating: "⭐⭐⭐⭐",
    description: "Experience modern city life and desert safari."
  },
  {
    id: 3,
    title: "Turkey",
    price: "$899",
    days: "6 Days / 5 Nights",
    rating: "⭐⭐⭐⭐⭐",
    description: "Visit Istanbul, Cappadocia and beautiful beaches."
  },
  {
    id: 4,
    title: "Switzerland",
    price: "$1299",
    days: "7 Days / 6 Nights",
    rating: "⭐⭐⭐⭐⭐",
    description: "Snow mountains and amazing natural beauty."
  }
];

function Main() {
  return (
    <section className="main" id="packages">
      <h1 className="title">Popular Destinations</h1>

      <div className="cardContainer">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h4>{item.days}</h4>
            <h3>{item.price}</h3>
            <p>{item.rating}</p>
            <button className="bookBtn">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;