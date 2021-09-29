import * as React from "react"

import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <h1>hello, my name is matt</h1>
    <p>let's build some cool stuff</p>

    <ul>
      <li>
        <Link to="/wk1">week 1: computer-controlled cutting, git</Link>
      </li>
      <li>
        <Link to="/wk2">week 2: electronics production</Link>
      </li>
      <li>
        <Link to="/todo">todo: things i want to try</Link>
      </li>
    </ul>
  </>
)

export default IndexPage
