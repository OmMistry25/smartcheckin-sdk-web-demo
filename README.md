# SmartCheckIn SDK Demo

Welcome to the **SmartCheckIn SDK Demo**: a simple front-end implementation that shows how to use our JavaScript SDK to detect if a user is near a specific geographic location (event check-in) **passively**, without requiring a manual click.

Live Demo → [https://ommistry25.github.io/smartcheckin-sdk-demo/](https://ommistry25.github.io/smartcheckin-sdk-demo/)  

---

## 🧠 What This Demo Shows

This SDK:
- Accesses the user's geolocation.
- Sends location to the SmartLinq API.
- Automatically determines whether the user is inside a defined event radius.
- Renders check-in status on the front-end with zero clicks.

---

## 📁 Project Structure

```
smartlinq-sdk-demo/
│
├── index.html          # Main landing page
├── sdk.js              # SmartLinq SDK call to API
├── style.css           # Minimal styling
├── README.md           # You're here!
```

---

## ⚙️ How It Works

1. When the page loads, the browser requests geolocation permission.
2. If approved, the SDK sends the coordinates to your hosted API endpoint:
   ```
   POST https://smartcheckin.onrender.com/api/checkin
   ```
3. The backend checks if the coordinates are within the radius of the event.
4. The response is shown on the screen:
   - ✅ Checked In
   - ❌ Not Checked In

---

## 🔧 Configuration

By default, the following event parameters are hardcoded in `sdk.js`:

```js
const eventLat = 40.11;
const eventLng = -88.22;
const radius = 0.5; // miles
```

You can update these to test against different event locations.

---

## 🧪 Quick Testing

You can simulate different geolocations by:
- Visiting [https://www.browserstack.com/geolocation](https://www.browserstack.com/geolocation)
- Using Chrome DevTools → Sensors → Location Override

---

## 🛠 Deployment Notes

- Hosted via GitHub Pages
- Backend hosted on [Render](https://render.com/)
- CORS policy requires correct headers (already handled in backend deployment)

---

## 📦 Backend Endpoint Spec

**POST `/api/checkin`**

**Request Body:**

```json
{
  "lat": 40.110,
  "lng": -88.220,
  "eventLat": 40.110,
  "eventLng": -88.220,
  "radius": 0.5
}
```

**Response:**

```json
{
  "checkedIn": true,
  "distance": 0.1
}
```

---

## 🧑‍💻 Who Is This For?

This demo is useful for:
- Event platforms wanting **passive check-ins**
- Mobile-first experiences
- Campus/event teams
- Marketing teams analyzing location-based engagement

---

## 📬 Contact

Built by [Om Mistry](https://mysmartlinq.com)  
Email: omist2@illinois.edu  
Product: [mysmartlinq.com](https://mysmartlinq.com)

---

> This is a part of MySmartLinq, which helps brands and platforms build intelligent QR and link flows that adapt based on time, location, and behavior.
