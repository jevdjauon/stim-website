import React, { Component } from "react";
import ButtonForm from "../../components/Form/ButtonForm.jsx";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { forma, btn } from "../../lang.config";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Molimo Vas unesite ime.")
    .min(4, "Ime je prekratko.")
    .max(50, "Maksimalna dužina imena je 50 karaktera."),
  email: Yup.string()
    .required("Email je neophodan.")
    .email("Email je neispravan."),
  message: Yup.string()
    .required("Molimo Vas unesite poruku.")
    .max(1000, "Maksimalna dužina poruke je 1000 karaktera.")
});

class ContactForm extends Component {
  state = {
    response: null
  };
  render() {
    let { language } = this.props;

    return (
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            let response = await axios.post(
              "https://mailer.uon.rs/send",

              {
                hostname: "stim.rs",
                fullName: values.name,
                email: values.email,
                message: values.message
              },
              {
                headers: {
                  "X-Requested-With": "XMLHttpRequest"
                }
              }
            );
            this.setState({ response: response.data.message });
          } catch (err) {
            console.log(err);
          }
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting, response }) => {
          return (
            <form className="contact--form">
              <div className="form--wrapper">
                <div
                  className="form--row"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <input
                    // style={inputArea}
                    className={errors.name ? "error" : "inputArea"}
                    type="text"
                    name="name"
                    placeholder={language === "srb" ? forma.srb[0] : forma.eng[0]}
                    value={values.name}
                    onChange={handleChange}
                  />
                  {/* Error handling for name: */}
                  {/* {touched.name && errors.name ? <p>{errors.name}</p> : null} */}
                  <input
                    // style={inputArea}
                    className={errors.email ? "error" : "inputArea"}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <textarea
                    // style={msgArea}
                    className={errors.message ? "msgError" : "msgArea"}
                    name="message"
                    placeholder={language === "srb" ? forma.srb[1] : forma.eng[1]}
                    value={values.message}
                    onChange={handleChange}
                  />

                  <div className="buttons">
                    <ButtonForm
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      color="red"
                      text={language === "srb" ? btn.srb[1] : btn.eng[1]}
                    />
                  </div>
                  <div className="message" style={{ width: "100vw", margin: "50px 0 0 0", textAlign: "center" }}>
                    {this.state.response !== null ? <span className="success">{this.state.response}</span> : null}
                    {Object.keys(errors).length === 0 ? null : errors[Object.keys(errors)[0]]}
                    {/* {touched.name && errors.name ? errors.name : null} */}
                  </div>
                  {/* Error handling for email: */}
                  {/* {touched.email && errors.email ? <p>{errors.email}</p> : null} */}
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default ContactForm;
