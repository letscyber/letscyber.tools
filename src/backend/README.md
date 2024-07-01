# Incident Response Plan (IRP) Generator for Wix

This backend code automates the creation of customized Incident Response Plans (IRPs) for the **preparation** phase. It leverages OpenAI's language model (GPT-3.5-turbo) for content generation and PDF.co for professional PDF output. The project is designed to be integrated into Wix websites.

## Features

* **User-Specific Plans:**  Tailors the IRP to your organization's details.
* **Preparation Focus:** Covers the crucial preparation steps in detail.
* **OpenAI Powered:** Employs GPT-3.5-turbo for high-quality, relevant content.
* **PDF.co Integration:** Automatically generates polished, shareable PDFs.
* **HTML/CSS Customization:** A template in `htmlTemplate.jsw` allows design control.

## Code Structure

1. **apiKeys.jsw:** Securely fetches API keys.
2. **createPDF.jsw:** Handles PDF generation using PDF.co.
3. **generateIncidentResponsePlan.jsw:** Interacts with OpenAI to generate the IRP content.
4. **htmlTemplate.jsw:** Contains the HTML structure and styling for the PDF.
5. **main.jsw:** Orchestrates the entire workflow (form handling, API calls, etc.).

## Usage
1. **Integrate Frontend:** Create a form in your Wix frontend to collect the user's company information.
2. **Call handleFormSubmission:** Trigger the handleFormSubmission function from main.jsw when the form is submitted. This will initiate the IRP generation and PDF download process.

## Customization
1. **htmlTemplate.jsw:** Modify this file to adjust the look and feel of the generated PDF.
2. **Prompt Engineering:** Refine the prompt sent to OpenAI in generateIncidentResponsePlan.jsw to influence the generated content.

## Error Handling
The code checks for errors during API calls and provides basic logging. You may want to expand this for production environments.

## Security
**API Key Storage:** API keys are never exposed directly in the code. They are fetched securely from Wix secrets.

## Contributing
Feel free to submit issues and pull requests. We welcome improvements and additional features!

## License
This project is licensed under the MIT License.
