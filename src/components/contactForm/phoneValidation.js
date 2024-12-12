import * as yup from "yup";
import { isPossibleNumber } from "libphonenumber-js";

const phoneValidationSchema = yup
  .string()
  .required("Phone number is required")
  .test("is-too-short", "Phone number is too short.", (value) => {
    if (!value) return false; // Required field, so reject empty values
    const edittedValue = value.replace(/-/g, "").split(" ").join("");
    try {
      // Check if the phone number is valid
      return !(edittedValue.length < 10);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "TOO_SHORT") {
          return false;
        }
      }
      return true;
    }
  })
  .test("is-too-long", "Phone number is too long.", (value) => {
    if (!value) return false; // Required field, so reject empty values
    const edittedValue = value.replace(/-/g, "").split(" ").join("");
    try {
      // Check if the phone number is valid
      return !(edittedValue.length > 10);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "TOO_LONG") {
          return false;
        }
      }
      return true;
    }
  })
  .test("is-valid-phone", "Enter a valid phone number.", (value) => {
    if (!value) return false; // Required field, so reject empty values
    const edittedValue = value.replace(/-/g, "").split(" ").join("");
    try {
      // Check if the phone number is valid
      return isPossibleNumber(edittedValue, "US");
    } catch (error) {
      return false; // Invalid number, return false for the test
    }
  });

export default phoneValidationSchema;
