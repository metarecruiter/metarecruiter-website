# N8N + Go High Level Integration Setup

This document explains how to set up N8N to receive form submissions from your website and route them to Go High Level.

## Overview

**Flow:**
```
Website Forms → N8N Webhook → Go High Level API
```

All 4 forms route through a **single N8N webhook** with different `formType` values:
- `apply-driver` - Driver application form
- `owner-operator` - Owner-operator application form
- `hire-drivers` - Carrier inquiry form
- `contact` - General contact form

---

## Step 1: Create N8N Workflow

### 1.1 Create New Workflow in N8N

1. Log into your N8N instance
2. Click **"+ New workflow"**
3. Name it: `MetaRecruiter - Form Submissions`

### 1.2 Add Webhook Node

1. Add a **Webhook** node (trigger)
2. Configure:
   - **HTTP Method**: POST
   - **Path**: `metarecruiter-forms` (or your preferred path)
   - **Authentication**: None (we'll use header validation)
   - **Response Mode**: Immediately
   - **Response Code**: 200

3. Click **"Listen for test event"** to get your webhook URL
4. Copy the webhook URL - it will look like:
   ```
   https://your-n8n.com/webhook/metarecruiter-forms
   ```

### 1.3 Add Secret Validation (Optional but Recommended)

1. Add an **IF** node after the Webhook
2. Configure condition:
   - **Condition**: `{{ $json.headers['x-webhook-secret'] }}` equals `your-secret-token`
3. Connect:
   - **TRUE** → Continue to routing
   - **FALSE** → Stop execution or send error response

### 1.4 Add Switch Node (Route by Form Type)

1. Add a **Switch** node
2. Configure 4 routes based on `formType`:

**Route 1: apply-driver**
- Condition: `{{ $json.body.formType }}` equals `apply-driver`

**Route 2: owner-operator**
- Condition: `{{ $json.body.formType }}` equals `owner-operator`

**Route 3: hire-drivers**
- Condition: `{{ $json.body.formType }}` equals `hire-drivers`

**Route 4: contact**
- Condition: `{{ $json.body.formType }}` equals `contact`

---

## Step 2: Connect to Go High Level

### 2.1 Get GHL API Credentials

1. Log into Go High Level
2. Go to **Settings** → **API**
3. Create a new API Key with permissions:
   - `contacts.write`
   - `contacts.readonly`
   - `opportunities.write` (if using pipelines)

4. Copy your:
   - **API Key**
   - **Location ID**

### 2.2 Add HTTP Request Nodes

For each route from the Switch node, add an **HTTP Request** node:

#### Driver Application (apply-driver)

```javascript
// HTTP Request Configuration
Method: POST
URL: https://services.leadconnectorhq.com/contacts/

Headers:
- Authorization: Bearer YOUR_GHL_API_KEY
- Version: 2021-07-28
- Content-Type: application/json

Body (JSON):
{
  "locationId": "YOUR_LOCATION_ID",
  "firstName": "{{ $json.body.firstName }}",
  "lastName": "{{ $json.body.lastName }}",
  "email": "{{ $json.body.email }}",
  "phone": "{{ $json.body.phone }}",
  "tags": ["driver-applicant", "{{ $json.body.qualified ? 'qualified' : 'not-qualified' }}"],
  "source": "Website - Driver Application",
  "customFields": {
    "cdl_class_a": "{{ $json.body.hasCdl }}",
    "otr_experience": "{{ $json.body.otrExp }}",
    "accidents_3yr": "{{ $json.body.accidents }}",
    "violations": "{{ $json.body.violations }}",
    "route_preference": "{{ $json.body.routeType }}",
    "start_date": "{{ $json.body.startDate }}"
  }
}
```

#### Owner-Operator (owner-operator)

```javascript
Method: POST
URL: https://services.leadconnectorhq.com/contacts/

Headers: (same as above)

Body (JSON):
{
  "locationId": "YOUR_LOCATION_ID",
  "firstName": "{{ $json.body.firstName }}",
  "lastName": "{{ $json.body.lastName }}",
  "email": "{{ $json.body.email }}",
  "phone": "{{ $json.body.phone }}",
  "tags": ["owner-operator", "qualified"],
  "source": "Website - Owner Operator Application",
  "customFields": {
    "has_cdl": "{{ $json.body.hasCdl }}",
    "owns_truck": "{{ $json.body.ownsTruck }}",
    "truck_make": "{{ $json.body.truckMake }}",
    "truck_year": "{{ $json.body.truckYear }}",
    "has_fmcsa": "{{ $json.body.hasFmcsa }}",
    "mc_number": "{{ $json.body.mcNumber }}",
    "years_experience": "{{ $json.body.yearsExp }}",
    "preferred_routes": "{{ $json.body.routes }}"
  }
}
```

#### Hire Drivers (hire-drivers)

```javascript
Method: POST
URL: https://services.leadconnectorhq.com/contacts/

Headers: (same as above)

Body (JSON):
{
  "locationId": "YOUR_LOCATION_ID",
  "firstName": "{{ $json.body.name }}",
  "email": "{{ $json.body.email }}",
  "phone": "{{ $json.body.phone }}",
  "tags": ["hiring-interest", "carrier"],
  "source": "Website - Hire Drivers",
  "customFields": {
    "company_name": "{{ $json.body.company }}",
    "drivers_needed": "{{ $json.body.drivers }}",
    "message": "{{ $json.body.message }}"
  }
}
```

#### Contact Form (contact)

```javascript
Method: POST
URL: https://services.leadconnectorhq.com/contacts/

Headers: (same as above)

Body (JSON):
{
  "locationId": "YOUR_LOCATION_ID",
  "firstName": "{{ $json.body.firstName }}",
  "lastName": "{{ $json.body.lastName }}",
  "email": "{{ $json.body.email }}",
  "phone": "{{ $json.body.phone }}",
  "tags": ["general-contact"],
  "source": "Website - Contact Form"
}
```

---

## Step 3: Configure Website

### 3.1 Set Environment Variables

1. Copy `.env.example` to `.env`
2. Add your N8N webhook URL:
   ```bash
   VITE_N8N_WEBHOOK_URL=https://your-n8n.com/webhook/metarecruiter-forms
   VITE_WEBHOOK_SECRET=your-secret-token
   ```

### 3.2 Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Navigate to: **Site settings** → **Environment variables**
3. Add:
   - **Key**: `VITE_N8N_WEBHOOK_URL`
   - **Value**: `https://your-n8n.com/webhook/metarecruiter-forms`

   - **Key**: `VITE_WEBHOOK_SECRET`
   - **Value**: Your secret token

4. Click **Save**
5. Redeploy your site

---

## Step 4: Testing

### 4.1 Test Each Form

1. Go to your website
2. Fill out each form:
   - `/apply` - Driver application
   - `/owner-operators` - Owner operator
   - `/hire-drivers` - Hire drivers
   - `/contact` - Contact form

3. Check N8N executions to verify data is received
4. Check Go High Level to confirm contacts are created

### 4.2 Verify Data Mapping

In Go High Level, verify:
- Contact is created
- Tags are applied correctly
- Custom fields are populated
- Source is set to "Website - [Form Type]"

---

## Troubleshooting

### Forms aren't sending to N8N

1. Check browser console for errors
2. Verify webhook URL in Netlify environment variables
3. Make sure site was redeployed after adding env vars

### N8N receives data but GHL fails

1. Check GHL API key permissions
2. Verify Location ID is correct
3. Check N8N execution logs for error messages
4. Ensure custom field names match GHL exactly

### Webhook secret validation failing

1. Verify secret matches in both .env and N8N
2. Check that header name is exactly `X-Webhook-Secret`
3. Ensure secret has no extra spaces or quotes

---

## Security Notes

- ✅ Never commit `.env` file to git (already in .gitignore)
- ✅ Use webhook secret validation in production
- ✅ Keep GHL API keys secure in N8N
- ✅ Use HTTPS for all connections (Netlify provides this free)
- ✅ Consider rate limiting in N8N if needed

---

## Advanced: Add Email Notifications

Want to get notified when forms are submitted? Add a **Send Email** node after each HTTP Request:

```javascript
Method: SMTP
To: support@metarecruiter.com
Subject: New {{ $json.body.formType }} submission
Body:
New form submission received from {{ $json.body.firstName }} {{ $json.body.lastName }}
Email: {{ $json.body.email }}
Phone: {{ $json.body.phone }}
Form Type: {{ $json.body.formType }}
```

---

## Support

If you need help:
1. Check N8N execution logs for errors
2. Check Go High Level API documentation
3. Test webhook with Postman/Insomnia first
4. Verify environment variables are set correctly in Netlify
