window.SmartLinq = {
  autoCheckin: function ({ lat, lng, radiusMiles = 0.5, eventId, onSuccess, onFail }) {
    if (!navigator.geolocation) {
      onFail?.("Geolocation not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(function (position) {
      fetch("https://mysmartlinq.onrender.com/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          eventLat: lat,
          eventLng: lng,
          radius: radiusMiles,
          eventId: eventId
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.result === "inside") {
            onSuccess?.(data);
          } else {
            onFail?.("Outside radius. Distance: " + data.distance.toFixed(2) + " mi");
          }
        })
        .catch(err => {
          onFail?.("API error: " + err.message);
        });
    }, () => {
      onFail?.("User denied geolocation access.");
    });
  }
};
