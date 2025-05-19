# 📍 SmartCheckIn SDK

The SmartCheckIn SDK allows you to passively check whether a user is within a certain location radius, perfect for event check-ins, location-based nudges, or gated access.

## 🚀 Quick Start

### 1. Add the SDK to your site

```html
<script src="sdk.js"></script>
```

### 2. Call `autoCheckin()` when your page loads

```js
SmartLinq.autoCheckin({
  lat: 40.110588,
  lng: -88.228432,
  radiusMiles: 0.5,
  eventId: "event-abc",
  onSuccess: (data) => {
    console.log("✅ Inside radius!", data);
  },
  onFail: (error) => {
    console.warn("❌ Not checked in:", error);
  }
});
```

---

## 📡 Backend API

**POST** `https://smartcheckin.onrender.com/api/checkin`

### Request Body:
```json
{
  "lat": 40.110,
  "lng": -88.220,
  "eventLat": 40.110,
  "eventLng": -88.220,
  "radius": 0.5
}
```

### Response:
```json
{
  "result": "inside",
  "distance": 0.12
}
```

---

## 🧠 Use Cases

- Passive check-in for events, coworking spaces, or conferences
- Send reminders if users are not near the expected location
- Restrict content until a user enters a geofenced zone
- Provide customized experiences based on physical proximity

---

## ⚙️ Requirements

- Browser must support `navigator.geolocation`
- Users must accept location permissions in their browser
- Works best with HTTPS and a stable backend server

---

## 📄 License

MIT © 2025 SmartLinq
