import React from "react"
import { RandomPerson } from "../modules/RandomPerson"
import { BizListingTable } from "../modules/BizListingTable"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  const sample = ""
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:?results" />
      <BizListingTable path="/app/biz-listing-table" />
    </MyRouter>
  )
}

export default Router
