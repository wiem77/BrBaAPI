import React from "react"
import Spinner from "../UI/Spinner"
import CaracterIteam from "./CaracterIteam"
const CaracterGrid = ({ items, isloading }) => {
  return !isloading ? (
    <Spinner />
  ) : (
    <section className="Card">
      {items.map((item) => (
        <CaracterIteam key={item.char_id} item={item}></CaracterIteam>
      ))}
    </section>
  )
}
export default CaracterGrid
