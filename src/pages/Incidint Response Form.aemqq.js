 import { handleFormSubmission } from 'backend/main';
import wixLocation from 'wix-location';

$w.onReady(function () {
    $w('#irpForm').onWixFormSubmit(async (event) => {
        const userData = {};
        
        // Iterate through form fields to collect data
        event.fields.forEach(({ fieldName, fieldValue }) => {
            if (!fieldValue) {
                console.warn(`Field ${fieldName} is empty.`);
            }
            userData[fieldName] = fieldValue;
        });

        console.log('Submitting userData:', userData); // Log the userData being submitted

        // Show the loading box with an animation
        $w('#htmlLoadingBox').show('fade', { duration: 500 });

        // Show the loading box with an animation
        $w('#loadingMsg').show('fade', { duration: 500 });

        // Hide the submission button
        $w('#submitButton').hide();

        try {
            const result = await handleFormSubmission(userData);
            console.log('Result from handleFormSubmission:', result); // Log the result from backend

            if (result.success) {
                wixLocation.to(result.downloadLink);
                $w('#successMessage').show();
            } else {
                // Handle error without specific error message element
                console.error('Submission failed:', result.errorMessage);
                // Redirect to the failure page
                wixLocation.to('/failure-page'); // Adjust the URL as per your site structure
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error without specific error message element
            // Redirect to the failure page
            wixLocation.to('/failure-page'); // Adjust the URL as per your site structure
        } finally {
            // Hide the loading box with an animation
            $w('#loadingMsg').hide('fade', { duration: 500 });
            $w('#htmlLoadingBox').hide('fade', { duration: 500 });
            
        }
    });
});