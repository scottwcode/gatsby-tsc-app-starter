import React from "react"
import { RandomPerson } from "../modules/RandomPerson"
import { RandomBiz } from "../modules/RandomBiz"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  const sample = ""
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:?results" />
      <RandomBiz path="/app/random-biz/:?results" />
    </MyRouter>
  )
}

export default Router
