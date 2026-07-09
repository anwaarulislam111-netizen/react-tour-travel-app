import Maldives from "../../assets/Maldives.jpg";
import Dubai from "../../assets/Dubai.jpg";
import Switzerland from "../../assets/Switzerland.jpg";
import Turkey from "../../assets/Turkey.jpg";


import "./main.css";

const data = [
  {
    id: 1,
    title: "Maldives",
    image: Maldives,
    price: "$999",
    days: "5 Days / 4 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Enjoy crystal clear beaches and luxury resorts."
  },
  {
    id: 2,
    title: "Dubai",
    image: Dubai,
    price: "$799",
    days: "4 Days / 3 Nights",
    rating: "⭐⭐⭐⭐",
    desc: "Visit Burj Khalifa, Desert Safari and Dubai Mall."
  },
  {
    id: 3,
    title: "Switzerland",
    image: Switzerland,
    price: "$1299",
    days: "6 Days / 5 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Experience the Eiffel Tower and romantic streets."
  },
  {
    id: 4,
    title: "Turkey",
    image: Turkey,
    price: "$899",
    days: "5 Days / 4 Nights",
    rating: "⭐⭐⭐⭐⭐",
    desc: "Explore Istanbul, Cappadocia and beautiful history."
  }
];

function Main() {
  return (
<section className="main" id="packages">
  <h1 className="title">Popular Destinations</h1>

  <div className="cards">
    {data.map((item) => (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.title} />

        <div className="info">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <h4>{item.days}</h4>
          <h3>{item.price}</h3>
          <span>{item.rating}</span>

          <button>Book Now</button>
        </div>

      </div>
    ))}
  </div>
</section>
  );
}

export default Main;