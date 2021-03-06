import React from "react"
import { Link } from "gatsby"

import Container from "../container"
import Grid from "../grid/grid"
import Logo from "../logo"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div
          className={styles.row}
          style={{ position: "relative", zIndex: 100 }}
        >
          <div className={styles.col}>
            <div>
              <Logo white />
            </div>
            <a className={styles.link} href="mailto:sparkmedium@gmail.com">
              sparkmedium@gmail.com
            </a>
            <a
              className={[styles.phoneNumber, styles.link].join(" ")}
              href="tel:1-222-222-2222"
            >
              202.202.202
            </a>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className={styles.link}>
                  Work
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>About Us</h2>
            <ul>
              <li>
                <Link className={styles.link} to="/about">
                  About Spark Medium
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/about">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/contact">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>Find Us</h2>
            <a
              className={styles.link}
              href={`http://maps.google.com/?q=555 W 5th St, 35th Floor, Los Angeles, CA, 980013`}
            >
              555 W 5th St, 35th Floor
              <br /> Los Angeles, CA 90013, US
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

//
// <Img
//   className={styles.bg}
//   fluid={data.placeholderImage.childImageSharp.fluid}
// />
