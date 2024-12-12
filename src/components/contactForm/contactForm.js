/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import * as Yup from "yup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import phoneValidationSchema from "./phoneValidation";

import "./contactForm.css";

const ContactForm = (props) => {
  const { submitted } = props;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      company: "",
      email: "",
      phone: "",
      companySize: "",
      productInterest: "",
      country: "",
      region: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Enter first name."),
      lastName: Yup.string().required("Enter last name."),
      jobTitle: Yup.string().required("Enter title."),
      companySize: Yup.string().required("Select company size."),
      productInterest: Yup.string().required("Select a product interest."),
      country: Yup.string().required("Select a country."),
      region: Yup.string().required("Select a state/province."),
      company: Yup.string().required("Enter company name."),
      email: Yup.string().email().required("Please enter work email."),
      phone: phoneValidationSchema,
    }),
    onSubmit: () => {
      submitted();
    },
  });

  return (
    <div className="modal-step4">
      <form onSubmit={formik.handleSubmit} className="modal-forum">
        {/** First name*/}
        <div className="modal-input">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
            className={
              formik.touched.firstName && formik.errors.firstName
                ? "error-input"
                : ""
            }
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <span className="error-text">{formik.errors.firstName}</span>
          ) : null}
        </div>

        {/** Last name*/}
        <div className="modal-input">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
            className={
              formik.touched.lastName && formik.errors.lastName
                ? "error-input"
                : ""
            }
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <span className="error-text">{formik.errors.lastName}</span>
          ) : null}
        </div>

        {/** Job title*/}
        <div className="modal-input">
          <label htmlFor="jobTitle">Job title</label>
          <input
            type="text"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="jobTitle"
            className={
              formik.touched.jobTitle && formik.errors.jobTitle
                ? "error-input"
                : ""
            }
          />
          {formik.touched.jobTitle && formik.errors.jobTitle ? (
            <span className="error-text">{formik.errors.jobTitle}</span>
          ) : null}
        </div>

        {/** Company*/}
        <div className="modal-input">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="company"
            className={
              formik.touched.company && formik.errors.company
                ? "error-input"
                : ""
            }
          />
          {formik.touched.company && formik.errors.company ? (
            <span className="error-text">{formik.errors.company}</span>
          ) : null}
        </div>

        {/** Company size*/}
        <div className="modal-input">
          <label htmlFor="companySize">Company size</label>
          <select
            name="companySize"
            value={formik.values.companySize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ color: formik.values.companySize ? "#000" : "#747474" }}
            className={
              formik.touched.companySize && formik.errors.companySize
                ? "error-input"
                : ""
            }
          >
            <option disabled value="">
              Select a company size
            </option>
            <option value="1-20">1-20 employees</option>
            <option value="21-100">21-100 employees</option>
            <option value="101-500">101-500 employees</option>
            <option value="501-3500">501-3500 employees</option>
            <option value="3501+">3501+ employees</option>
          </select>
          {formik.touched.companySize && formik.errors.companySize ? (
            <span className="error-text">{formik.errors.companySize}</span>
          ) : null}
        </div>

        {/** Product Interest*/}
        <div className="modal-input">
          <label htmlFor="productInterest">Product Interest</label>
          <select
            name="productInterest"
            value={formik.values.productInterest}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              color: formik.values.productInterest ? "#000" : "#747474",
            }}
            className={
              formik.touched.productInterest && formik.errors.productInterest
                ? "error-input"
                : ""
            }
          >
            <option disabled value="">
              Select a product interest
            </option>
            <option value="Agentforce">Agentforce</option>
            <option value="Agentforce + AI App Development">
              Agentforce + AI App Development
            </option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Commerce">Commerce</option>
            <option value="Customer Success">Customer Success</option>
            <option value="Data Cloud">Data Cloud</option>
            <option value="Heroku">Heroku</option>
            <option value="Marketing">Marketing</option>
            <option value="Mulesoft">Mulesoft</option>
            <option value="Net Zero">Net Zero</option>
            <option value="Sales">Sales</option>
            <option value="Salesforce Platform">Salesforce Platform</option>
            <option value="Service">Service</option>
            <option value="Slack">Slack</option>
            <option value="Tableau">Tableau</option>
          </select>
          {formik.touched.productInterest && formik.errors.productInterest ? (
            <span className="error-text">{formik.errors.productInterest}</span>
          ) : null}
        </div>

        {/** Country*/}
        <div className="modal-input">
          <label htmlFor="country">Country</label>
          <CountryDropdown
            name="country"
            value={formik.values.country}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
            whitelist={["GB", "US", "CA"]}
            style={{
              color: formik.values.country ? "#000" : "#747474",
            }}
            className={
              formik.touched.country && formik.errors.country
                ? "error-input"
                : ""
            }
          />
          {formik.touched.country && formik.errors.country ? (
            <span className="error-text">{formik.errors.country}</span>
          ) : null}
        </div>

        {/** Region*/}
        <div className="modal-input">
          <label htmlFor="region">State/Province</label>
          <RegionDropdown
            name="region"
            country={formik.values.country}
            value={formik.values.region}
            onChange={(_, e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
            style={{
              color: formik.values.region ? "#000" : "#747474",
            }}
            className={
              formik.touched.region && formik.errors.region ? "error-input" : ""
            }
          />
          {formik.touched.region && formik.errors.region ? (
            <span className="error-text">{formik.errors.region}</span>
          ) : null}
        </div>

        {/** Email*/}
        <div className="modal-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            className={
              formik.touched.email && formik.errors.email ? "error-input" : ""
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error-text">{formik.errors.email}</span>
          ) : null}
        </div>

        {/** Phone*/}
        <div className="modal-input phoneInput">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="phone"
            placeholder="000 000 0000"
            className={
              formik.touched.phone && formik.errors.phone ? "error-input" : ""
            }
          />
          <select>
            <option>🇺🇸 +1</option>
            <option>🇨🇦 +1</option>
            <option>🏴󠁧󠁢󠁥󠁮󠁧󠁿 +44</option>
          </select>
          <span className="phone-line"></span>
          {formik.touched.phone && formik.errors.phone ? (
            <span className="error-text">{formik.errors.phone}</span>
          ) : null}
        </div>

        <div
          className="modal-subtext"
          style={{ flex: "1 0 100%", textAlign: "left" }}
        >
          <p>
            By registering, you agree to the processing of your personal data by
            Salesforce as described in the <a>Privacy Statement.</a>
          </p>
        </div>
        <div className="modal-button" style={{ flex: "1 0 100%" }}>
          <button className="pbc-button" data-variant="primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
