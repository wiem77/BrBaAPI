import React, { useState } from "react"

const Searchh = ({ getQuery }) => {
  const [text, setText] = useState("")
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section>
      <form>
        <input
          type="text"
          className="input"
          placeholder="search.."
          value={text}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </form>
    </section>
  )
}
export default Searchh
