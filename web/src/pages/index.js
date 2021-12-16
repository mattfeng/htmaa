import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/layout.module.scss"

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <h1>hello, my name is matt</h1>
    <p>let's build some cool stuff</p>
    <p>
      <Link to="/about">learn more about me i am fun</Link>
    </p>

    <ul>
      <li>
        <Link to="/final">final project: diy centrifuge</Link>
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
        <Link to="/wk5">week 5: computer-controlled machining</Link>
      </li>
      <li>
        <Link to="/wk6">week 6: embedded programming</Link>
      </li>
      <li>
        <Link to="/wk7">week 7: molding and casting</Link>
      </li>
      <li>
        <Link to="/wk8">week 8: input devices</Link>
      </li>
      <li>
        <Link to="/wk9">week 9: output devices</Link>
      </li>
      <li>
        <Link to="/wk10">week 10: networking and communcation</Link>
      </li>
      <li>
        <Link to="/wk11">week 11: interface and application programming</Link>
      </li>
    </ul>

    <h2>other links</h2>
    <ul>
      <li>
        <Link to="/todo">todo: things i want to try</Link>
      </li>
      <li>
        <Link to="/commands">useful commands</Link>
      </li>
      <li>
        <Link to="/graphics">learning graphics</Link>
      </li>
      <li>
        <Link to="/questions">questions and things to look at right away</Link>
      </li>
    </ul>

    {/* <h2>lecture notes</h2>
    <ul>
      <li>
        <Link to="/lec4">lec 4: electronics design</Link>
      </li>
      <li>
        <Link to="/lec5">lec 5: computer-controlled milling</Link>
      </li>
      <li>
        <Link to="/lec6">lec 6: embedded programming</Link>
      </li>
      <li>
        <Link to="/lec7">lec 7: molding and casting</Link>
      </li>
      <li>
        <Link to="/lec8">lec 8: input devices</Link>
      </li>
      <li>
        <Link to="/lec9">lec 9: output devices</Link>
      </li>
      <li>
        <Link to="/lec10">lec 10: interface and application programming</Link>
      </li>
      <li>
        <Link to="/lec11">lec 11: networking and communications</Link>
      </li>
      <li>
        <Link to="/lec12">lec 12: mechanical machine design</Link>
      </li>
    </ul> */}

    <h2>how to make</h2>
    <ul>
      <li>
        <Link to="/building">small wiki on various building topics</Link>
      </li>
      <li>
        <Link to="/building/glossary">glossary of terms and acronyms</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
