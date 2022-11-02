import React from "react"
import Spiner from "../../img/spiner.gif"
const Spinner = () => {
  return (
    <img
      src={Spiner}
      alt="loading"
      style={{
        display: "block",
        width: "200px",
        margin: "auto",
      }}
    />
  )
}
export default Spinner
