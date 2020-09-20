import React, { useState } from "react"
import FadeIn from "react-fade-in"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import Spinner from "react-spinner-material"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import { Button } from "../components/UI/Buttons"
import Section from "../components/UI/section"

import styles from "./contact.module.css"
import Sent from "../images/sent.svg"

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { handleSubmit, register, errors, reset } = useForm()
  const onSubmit = values => {
    setLoading(true)
    axios
      .post("https://formspree.io/xnqoqnqy", {
        name: values.name,
        message: values.message,
        email: values.email,
        company: values.company,
      })
      .then(res => {
        setSubmitted(true)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
    console.log(values)
  }
  return (
    <Layout hideBanner>
      <SEO title="contact" />
      <Section background="linear-gradient(49deg, #ebf2f5, #e6f2fa)">
        <FadeIn>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h1 className={styles.h1}>Get In Touch</h1>
              <p className={styles.p}>
                {`We're here for you, and we're wearing our thinking caps. Have a question about our services? Or just want to send us a message?
              Feel free to use the contact form, or email us at
              `}
                <a href="#">mail@mediumspark.com</a>
              </p>
              <div className={styles.contactForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.group}>
                    <div className={styles.labelRow}>
                      <label for="name" className={styles.label}>
                        Name
                      </label>
                      <span className={styles.error}>
                        {errors.name && errors.name.message}
                      </span>
                    </div>
                    <input
                      id="name"
                      className={styles.input}
                      type="text"
                      name="name"
                      ref={register({
                        required: "Required",
                        minLength: 6,
                        maxLength: 50,
                      })}
                      style={{
                        borderColor: errors.name ? "#bf1515" : "#e1e2eb",
                      }}
                      placeholder="John Doe"
                      value="John Doe"
                    />
                  </div>
                  <div className={styles.group}>
                    <div className={styles.labelRow}>
                      <label className={styles.label} for="company">
                        Company
                      </label>
                      <span className={styles.error}>
                        {errors.company && errors.company.message}
                      </span>
                    </div>
                    <input
                      id="company"
                      className={styles.input}
                      type="text"
                      name="company"
                      ref={register({
                        required: "Required",
                        minLength: 3,
                        maxLength: 50,
                      })}
                      value="Widgets Inc"
                      style={{
                        borderColor: errors.company ? "#bf1515" : "#e1e2eb",
                      }}
                      placeholder="Widgets Inc"
                    />
                  </div>
                  <div className={styles.group}>
                    <div className={styles.labelRow}>
                      <label className={styles.label}>Email</label>
                      <span className={styles.error}>
                        {errors.email && errors.email.message}
                      </span>
                    </div>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      style={{
                        borderColor: errors.email ? "#bf1515" : "#e1e2eb",
                      }}
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="johndoe@gmail.com"
                      value="cam@gmail.com"
                    />
                  </div>
                  <div className={styles.group}>
                    <div className={styles.labelRow}>
                      <label className={styles.label}>Message</label>
                      <span className={styles.error}>
                        {errors.message && errors.message.message}
                      </span>
                    </div>
                    <textarea
                      className={styles.textarea}
                      type="text"
                      name="message"
                      ref={register({
                        required: "Required",
                        minLength: 3,
                      })}
                      style={{
                        borderColor: errors.message ? "#bf1515" : "#e1e2eb",
                      }}
                      defaultValue="Message txt"
                      placeholder="Write us a message"
                    />
                  </div>
                  <Button
                    type="submit"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {loading ? (
                      <Spinner
                        radius={20}
                        color={"#fff"}
                        stroke={2}
                        visible={true}
                      />
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <div
                    className={[
                      styles.blur,
                      submitted ? styles.active : "",
                    ].join(" ")}
                  >
                    <div className={styles.blurBG}></div>
                    <div className={styles.sentSvgContainer}>
                      <Sent />
                    </div>
                    <p className={styles.blurThanks}>Thanks!</p>
                    <p
                      className={styles.blurP}
                    >{`We'll be in touch soon. In the meantime, why not take a look at some of our recent work.`}</p>
                    <Link to="/work" className={styles.blurBtn}>
                      Recent Work
                    </Link>
                  </div>
                </form>

                <h4 className={styles.contactInfo}>Contact Information</h4>
                <div className={styles.blurb}>
                  <p className={styles.address}>
                    555 W 5th St, 35th Floor
                    <br /> Los Angeles, CA 90013, US
                  </p>
                </div>
                <div className={styles.blurb}>
                  <a className={styles.contactLink} href="#">
                    222 222 222
                  </a>
                </div>
                <div className={styles.blurb}>
                  <a className={styles.contactLink} href="#">
                    sparkmedium@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </Layout>
  )
}

export default ContactPage

// style={{
//               background:
//                 "url(https://www.invisionapp.com/assets/img/team/contact_bg.png?1576862309) center 200px no-repeat",
//             }}
