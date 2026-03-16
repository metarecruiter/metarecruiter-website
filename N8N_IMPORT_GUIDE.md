# N8N Workflow - Quick Import Guide

This guide will help you import the pre-built N8N workflow in under 5 minutes.

---

## Step 1: Import the Workflow

1. **Open N8N** and go to your workflows page
2. Click **"Import from File"** or **"Import from URL"**
3. Select the file: `n8n-workflow-metarecruiter.json`
4. Click **"Import"**

The workflow will open automatically.

---

## Step 2: Configure Webhook Secret (Optional but Recommended)

1. Click on the **"Validate Secret"** node
2. In the conditions section, find:
   ```
   value2: "YOUR_SECRET_TOKEN_HERE"
   ```
3. Replace `YOUR_SECRET_TOKEN_HERE` with a random secret string (e.g., `sk_metarecruiter_abc123xyz789`)
4. **Save this secret** - you'll need to add it to your website's environment variables

> **Skip this step:** If you don't want secret validation, you can delete the "Validate Secret" node and connect "Webhook" directly to "Route by Form Type"

---

## Step 3: Set Up Go High Level Credentials

### 3.1 Create GHL API Credentials in N8N

1. Click **"Credentials"** in the left sidebar (or top menu)
2. Click **"+ New Credential"**
3. Search for **"Go High Level API"**
4. Fill in:
   - **Name**: `MetaRecruiter GHL`
   - **API Key**: Your GHL API key (from GHL Settings → API)
   - **Test**: Click "Test" to verify connection
5. Click **"Save"**

### 3.2 Get Your GHL Location ID

1. Log into Go High Level
2. Go to **Settings** → **Business Info**
3. Copy your **Location ID** (looks like: `abc123def456ghi789`)

### 3.3 Configure Each GHL Node

You need to update **4 nodes**:
- GHL - Driver Application
- GHL - Owner Operator
- GHL - Hire Drivers
- GHL - Contact Form

**For each node:**

1. Click on the node
2. In **Authentication**, select: `MetaRecruiter GHL` (the credential you just created)
3. In the **Body Parameters** section, find:
   ```
   locationId: "YOUR_GHL_LOCATION_ID"
   ```
4. Replace `YOUR_GHL_LOCATION_ID` with your actual Location ID
5. Click **"Execute Node"** to test (optional)

---

## Step 4: Get Your Webhook URL

1. Click on the **"Webhook"** node (the first one)
2. Click **"Listen for Test Event"** or **"Production URL"**
3. Copy the webhook URL - it will look like:
   ```
   https://your-n8n-instance.com/webhook/metarecruiter-forms
   ```
4. **Save this URL** - you'll need it for your website configuration

---

## Step 5: Activate the Workflow

1. At the top right, toggle the workflow to **"Active"**
2. The workflow is now live and ready to receive form submissions!

---

## Step 6: Configure Your Website

### On Netlify:

1. Go to your Netlify dashboard
2. Navigate to: **Site settings** → **Environment variables**
3. Add two variables:

   **Variable 1:**
   - **Key**: `VITE_N8N_WEBHOOK_URL`
   - **Value**: `https://your-n8n-instance.com/webhook/metarecruiter-forms` (from Step 4)

   **Variable 2:** (only if you set up secret validation in Step 2)
   - **Key**: `VITE_WEBHOOK_SECRET`
   - **Value**: Your secret token (from Step 2)

4. Click **"Save"**
5. **Redeploy your site** (Deploys → Trigger deploy → Deploy site)

---

## Step 7: Test the Integration

1. Go to your live website
2. Fill out each form:
   - `/apply` - Driver application
   - `/owner-operators` - Owner operator
   - `/hire-drivers` - Hire drivers
   - `/contact` - Contact form

3. Check N8N:
   - Go to **"Executions"** in N8N
   - You should see successful executions for each form submission

4. Check Go High Level:
   - Go to **Contacts**
   - Verify new contacts were created with correct tags

---

## Troubleshooting

### "Webhook not found" error
- Make sure the workflow is **Active** (toggle at top right)
- Check that the webhook path matches: `metarecruiter-forms`

### "Unauthorized" error (401)
- Your webhook secret doesn't match
- Verify the secret in both N8N ("Validate Secret" node) and Netlify env vars
- Or disable secret validation by removing the "Validate Secret" node

### GHL API errors
- Verify your GHL API credentials are correct
- Check that Location ID is accurate
- Ensure API key has correct permissions (contacts.write, contacts.readonly)

### Data not mapping correctly
- Click on a failed execution in N8N
- Check the error message in the GHL node
- Verify field names match your GHL custom fields exactly

---

## Advanced Customization

### Add Email Notifications

After each GHL node, add a **"Send Email"** node:

1. Add node → **Send Email**
2. Configure SMTP settings
3. Set:
   - **To**: `support@metarecruiter.com`
   - **Subject**: `New {{ $json.body.formType }} submission`
   - **Body**: Use expressions like `{{ $json.body.firstName }}` to include form data

### Add Slack/Discord Notifications

1. Add node → **Slack** or **Discord**
2. Connect after each GHL node
3. Configure message with form data

### Add to Pipeline/Opportunity

To automatically create opportunities in GHL:

1. After the "Create Contact" node
2. Add **HTTP Request** node
3. Configure:
   - **URL**: `https://services.leadconnectorhq.com/opportunities/`
   - **Method**: POST
   - **Body**: Include contactId from previous step

---

## What Gets Sent to GHL

### Driver Application (apply-driver)
- Contact info: firstName, lastName, email, phone
- Tags: `driver-applicant`, `qualified` or `not-qualified`
- Source: "Website - Driver Application"
- Custom fields available: cdl_class_a, otr_experience, accidents_3yr, violations, route_preference, start_date

### Owner Operator (owner-operator)
- Contact info: firstName, lastName, email, phone
- Tags: `owner-operator`, `qualified`
- Source: "Website - Owner Operator Application"
- Custom fields available: has_cdl, owns_truck, truck_make, truck_year, has_fmcsa, mc_number, years_experience, preferred_routes

### Hire Drivers (hire-drivers)
- Contact info: name (as firstName), email, phone
- Tags: `hiring-interest`, `carrier`
- Source: "Website - Hire Drivers"
- Custom fields available: company_name, drivers_needed, message

### Contact Form (contact)
- Contact info: firstName, lastName, email, phone
- Tags: `general-contact`
- Source: "Website - Contact Form"

---

## Support

If you run into issues:
1. Check N8N execution logs for detailed error messages
2. Test the webhook with a tool like Postman first
3. Verify all placeholder values (YOUR_SECRET_TOKEN_HERE, YOUR_GHL_LOCATION_ID) have been replaced
4. Make sure the workflow is Active

---

**You're all set! 🎉**

Your forms will now automatically create contacts in Go High Level with proper tagging and routing.
