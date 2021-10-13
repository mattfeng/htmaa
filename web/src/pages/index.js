import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/layout.module.scss"

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <h1>hello, my name is matt</h1>
    <p>let's build some cool stuff</p>
    <p><Link to="/about">learn more about me i am fun</Link></p>

    <ul>
      <li>
        <Link to="/final">final project: liquid handling system</Link>
      </li>
      <li>
        <Link to="/wk0">week 0: computer-aided design</Link>
      </li>
      <li>
        <Link to="/wk1">week 1: computer-controlled cutting, git</Link>
      </li>
      <li>
        <Link to="/wk2">week 2: electronics production</Link>
      </li>
      <li>
        <Link to="/wk3">week 3: 3d printing and scanning</Link>
      </li>
      <li>
        <Link to="/wk4">week 4: electronics design</Link>
      </li>
      <li>
        <Link to="/todo">todo: things i want to try</Link>
      </li>
      <li>
        <Link to="/commands">useful commands</Link>
      </li>
      <li>
        <Link to="/graphics">learning graphics</Link>
      </li>
    </ul>

    <h2>lecture notes</h2>
    <ul>
      <li>
        <Link to="/lec4">lecture 4: electronics design</Link>
      </li>
    </ul>

    <h2>how to make</h2>
    <ul>
      <li>
        <Link to="/building">how to make (almost) anything</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
