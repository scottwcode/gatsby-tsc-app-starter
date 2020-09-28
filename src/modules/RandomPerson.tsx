import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"

// // Old code that supposedly worked without interface to url
// type Props = RoutComponentProps

// export const RandomPerson: React.FC<Props> = () => {
//   return <div>hello</div>
// }

// Code with interface to url
type Props = RouteComponentProps<{
  results: string
}>

export const RandomPerson: React.FC<Props> = ({ results = 1 }) => {
  const [person, setPerson] = useState()
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => setPerson(x))
  }, [results])

  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}
