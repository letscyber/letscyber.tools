# IRP Form Submission Handler (Wix)

This code provides a front-end solution for handling form submissions in a Wix website, interacting with a backend service to process the data and provide a download link or redirect to an error page.

## Features

* **Robust Data Collection:** Gathers data from all fields in the Wix form, warning in the console if any fields are left empty.
* **Backend Integration:**  Calls a backend function `handleFormSubmission` to process the form data.
* **Loading State:** Displays a loading animation while the submission is being processed.
* **Success/Error Handling:**
    * Redirects to a success page with the download link if the submission is successful.
    * Redirects to a failure page if an error occurs during submission. 
    * Logs errors to the console for debugging.
* **Clean UI Interactions:** Shows/hides relevant elements (submission button, loading message) to provide feedback to the user.

## Dependencies

* **wix-location:**  A Wix library for managing URL navigation.
* **backend/main:** This module (assumed to be custom code) likely contains the `handleFormSubmission` function for server-side processing.

## How It Works

1. **Form Submission:** The `onWixFormSubmit` event triggers when the user submits the form.
2. **Data Collection:** The code iterates through all form fields, storing the values in an object (`userData`).
3. **Loading State:** The loading animation is displayed, and the submit button is hidden.
4. **Backend Call:**  The `handleFormSubmission` function is called with the `userData` object.
5. **Result Handling:**
   * **Success:**  
      * The user is redirected to the URL provided in `result.downloadLink`.
      * A success message is displayed (the implementation of this is not shown in the code, but likely involves revealing a success message element).
   * **Error:**
      * The error is logged to the console.
      * The user is redirected to `/failure-page`.
6. **Cleanup:** The loading animation is hidden.

## Setup & Configuration

1. **Backend Setup:** Ensure the `backend/main` module (or equivalent) is correctly set up and accessible to handle form submissions.
2. **Error Page:** Create a `/failure-page` (or adjust the URL) to display an appropriate error message to the user.
3. **Success Handling:** If you're not using Wix's built-in success mechanisms, implement logic to display a success message to the user (e.g., by showing a success message element).
4. **Wix Integration:** Add this code to your Wix page's code behind file and make sure the form element has the ID `irpForm`.

## Important Notes

* The code assumes that the `handleFormSubmission` function returns an object with the following properties:
   * `success` (boolean): Indicates whether the submission was successful.
   * `downloadLink` (string, optional): The URL to the download if successful.
   * `errorMessage` (string, optional): An error message if not successful.
* Consider adding more error handling (e.g., validation before submission) for a more robust solution.
* Customize the loading animation and success/error messages to match your website's design.

