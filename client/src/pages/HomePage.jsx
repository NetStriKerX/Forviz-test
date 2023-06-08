import { Link } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  const items = [
    { name: "01 - CSS Test" },
    { name: "02 - Venue Booking System (Javascript Test)" },
    { name: "03 - (Optional) Venue Booking System (Front-end Test)" },
  ];
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      {items.map((item, index) => {
        return (
          <Link to={"/" + (index + 1)} key={index}>
            <Button name={item.name} />
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
