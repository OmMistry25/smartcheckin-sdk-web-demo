
# 📦 SmartCheckIn SDK: Developer Use Case Documentation

Welcome to the SmartCheckIn SDK developer documentation. This document outlines real-world implementation examples and integration code for various industries using SmartCheckIn's geolocation-aware passive check-in system.

---

## 🧾 1. Event Management Platforms (e.g. Luma, Pie)

**Use Case:** Allow users to RSVP and be passively checked in upon arrival without needing manual input.

**Flow:**
- Host shares SmartCheckIn-powered RSVP link.
- On the day of the event, SmartCheckIn checks if user is within the event radius.
- If so, the user is logged as checked in.

**Integration Example:**
```js
SmartCheckIn.autoCheckin({
  lat: 40.1105,
  lng: -88.2284,
  radiusMiles: 0.25,
  eventId: "evening-panel-2025",
  onSuccess: (data) => registerCheckIn(data),
  onFail: () => notifyAbsence()
});
```

---

## 🏡 2. Airbnb or Property Rentals

**Use Case:** Automatically detect guest presence for streamlined check-in and smart unlock flows.

**Flow:**
- SmartCheckIn link is shared after booking confirmation.
- On arrival, SmartCheckIn checks if user is near the property.
- Access instructions or smart locks are triggered.

**Integration Example:**
```js
SmartCheckIn.autoCheckin({
  lat: 34.0522,
  lng: -118.2437,
  radiusMiles: 0.1,
  eventId: "airbnb-checkin-023",
  onSuccess: () => triggerSmartLock(),
  onFail: () => sendReminder()
});
```

---

## 🛍️ 3. Local Retail or Brand Activation

**Use Case:** Offer geotargeted promotions and redirect customers based on proximity to store locations.

**Integration Example:**
```js
SmartCheckIn.autoCheckin({
  lat: 40.7590,
  lng: -73.9845,
  radiusMiles: 0.3,
  eventId: "nyc-summer-sale",
  onSuccess: () => window.location.href = "/promo",
  onFail: () => window.location.href = "/find-store"
});
```

---

## 🎓 4. Campus or Seminar Attendance

**Use Case:** Log attendance of students passively when they arrive at a lecture or seminar.

**Integration Example:**
```js
SmartCheckIn.autoCheckin({
  lat: 40.1135,
  lng: -88.2249,
  radiusMiles: 0.2,
  eventId: "midterm-review-IE370",
  onSuccess: (data) => sendToRegistrar(data),
  onFail: () => console.warn("Not in location.")
});
```

---

## 🏢 5. Smart Offices & Coworking Spaces

**Use Case:** Automatically log members when they arrive at coworking or shared office spaces.

**Integration Example:**
```js
SmartCheckIn.autoCheckin({
  lat: 37.789,
  lng: -122.401,
  radiusMiles: 0.1,
  eventId: "workplace-checkin",
  onSuccess: () => unlockDoor(),
  onFail: () => notifyFrontDesk()
});
```

---

## 🧭 6. Guided Tours or Scavenger Hunts

**Use Case:** Trigger stage-based actions (clues, content) only when users are at predefined checkpoints.

**Integration Example:**
```js
SmartCheckIn.autoCheckin({
  lat: 48.8584,
  lng: 2.2945,
  radiusMiles: 0.05,
  eventId: "paris-tour-stop3",
  onSuccess: () => showNextHint(),
  onFail: () => alert("Keep exploring.")
});
```

---

## 🛠️ Final Notes

- SmartCheckIn SDK can be used with any frontend JS environment.
- `eventId` is optional, but helps log event-specific analytics.
- Ensure you have CORS configured correctly on your backend (Render, Vercel, etc).
- All location logic happens client-side; data is POSTed to SmartCheckIn for logging.

📩 Contact us to consult on deeper integrations.
