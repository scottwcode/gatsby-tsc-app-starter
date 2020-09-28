import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"

// // Old code that supposedly worked without interface to url
// type Props = RoutComponentProps

// export const RandomBiz: React.FC<Props> = () => {
//   return <div>hello</div>
// }

// // Code with interface to url
type Props = RouteComponentProps<{
  results: string
}>

// pulls biz json from url api w useEffect and sets state to
// that biz json
export const RandomBiz: React.FC<Props> = ({ results = 1 }) => {
  const [biz, setBiz] = useState()
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => setBiz(x))
  }, [results])

  return (
    <div>
      <pre>{JSON.stringify(biz, null, 2)}</pre>
    </div>
  )
}
