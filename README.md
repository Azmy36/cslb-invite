# CSL Behring MEA Registration Form

This project contains a registration form for the CSL Behring MEA Distributors Meeting 2025 that sends data to a Google Sheet.

## Setup Instructions

### 1. Google Apps Script Setup

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with the contents of `google_apps_script.js`
4. Save the project
5. Deploy the script as a web app:
   - Click "Deploy" → "New deployment"
   - Choose "Web app" as the type
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
6. Copy the deployment URL (you'll need this for the HTML form)

### 2. Google Sheet Setup

1. Create a new Google Sheet with ID: `1l326BdSbxs_1Nm0Zc16kJJ_ZMKjkZvAJLbyLjHyINvA`
2. Make sure the sheet has a worksheet named "Sheet1"
3. The script will automatically add headers in this order:
   - Full Name
   - Email
   - Phone
   - Organization
   - Job Title
   - Country
   - Attending Mode
   - Timestamp

### 3. Form Fields

The form collects the following information:
- **Full Name** (text input)
- **Email Address** (email input)
- **Phone Number** (tel input with validation)
- **Organization** (text input)
- **Job Title** (text input)
- **Country** (dropdown with all countries)
- **Attending Mode** (dropdown: "In Person" or "Virtual")

### 4. How It Works

1. User fills out the form
2. JavaScript validates all required fields
3. Data is sent to the Google Apps Script via POST request
4. Google Apps Script receives the data and adds it to the specified Google Sheet
5. User is redirected to `completed.html` on successful submission

### 5. Files

- `register.html` - The main registration form
- `completed.html` - Success page (redirected to after submission)
- `google_apps_script.js` - Google Apps Script code
- `assets/` - Contains images and icons used in the form

### 6. Customization

To change the Google Sheet ID or Apps Script URL:
1. Update the sheet ID in `google_apps_script.js` (line 3)
2. Update the fetch URL in `register.html` (in the submitForm function)

### 7. Testing

1. Open `register.html` in a web browser
2. Fill out the form with test data
3. Submit the form
4. Check your Google Sheet to verify the data was added

## Notes

- The form uses `no-cors` mode for the fetch request, which means we can't read the response from the Apps Script
- Error handling is basic - if the request fails, an error message is shown
- The form includes client-side validation for required fields
- Phone numbers are validated to accept international format with optional + prefix 