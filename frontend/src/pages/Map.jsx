import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Footer from "../components/Footer";


const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "520px",
  borderRadius: "16px",
};

const fallbackCenter = { lat: 36.9741, lng: -122.0308 }; // Santa Cruz 

export default function Map() {
  const [center, setCenter] = useState(fallbackCenter);
  const [userPos, setUserPos] = useState(null);
  const [query, setQuery] = useState("women's health clinic");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries,
  });

  // Ask for user location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCenter(loc);
        setUserPos(loc);
      },
      () => {
        // If denied, keep fallbackCenter
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, []);

  const mapOptions = useMemo(
    () => ({
      clickableIcons: false,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    }),
    []
  );

  const searchNearby = () => {
    if (!window.google || !isLoaded) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      location: center,
      radius: 6000, // meters (about 3.7 miles)
      keyword: query,
    };

    service.nearbySearch(request, (places, status) => {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK || !places) {
        setResults([]);
        return;
      }

      // Keep only useful fields, reduce noise
      const cleaned = places.slice(0, 12).map((p) => ({
        placeId: p.place_id,
        name: p.name,
        rating: p.rating,
        address: p.vicinity,
        location: {
          lat: p.geometry?.location?.lat(),
          lng: p.geometry?.location?.lng(),
        },
      }));

      setResults(cleaned);
      setSelected(null);

      // Recenter to first result if it exists
      if (cleaned[0]?.location?.lat && cleaned[0]?.location?.lng) {
        setCenter(cleaned[0].location);
      }
    });
  };

  const resetToMyLocation = () => {
    if (userPos) setCenter(userPos);
  };

  return (
    <>

      <main className="topic-page">
        <section className="topic-hero">
          <div className="topic-container">
            <span className="topic-kicker">Find Support Nearby</span>
            <h1 className="topic-title">Find a Doctor / Clinic</h1>
            <p className="topic-subtitle">
              Search for nearby clinics, hospitals, pharmacies, women’s health services, and
              more. Results are based on your approximate location (with permission).
            </p>

            <div className="topic-note">
              <strong>Privacy note:</strong> Your location stays in your browser. This page doesn’t
              save or upload it anywhere.
            </div>
          </div>
        </section>

        <div className="topic-container topic-body">
          <section className="topic-section">
            <h2 className="section-title">Search</h2>

            <div className="map-controls">
              <input
                className="map-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Try: "urgent care", "obgyn", "planned parenthood", "pharmacy"'
              />
              <button className="btn btn-primary" onClick={searchNearby}>
                Search near me
              </button>
              <button className="btn btn-secondary" onClick={resetToMyLocation}>
                My location
              </button>
            </div>

            {!import.meta.env.VITE_GOOGLE_API_KEY && (
              <p className="muted" style={{ marginTop: 12 }}>
                Missing API key: set <strong>VITE_GOOGLE_API_KEY</strong> in your .env file.
              </p>
            )}

            {loadError && (
              <p className="muted" style={{ marginTop: 12 }}>
                Map failed to load. Check your API key + enabled APIs (Maps JavaScript + Places).
              </p>
            )}

            <div className="map-wrap">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={13}
                  options={mapOptions}
                >
                  {/* User marker */}
                  {userPos && (
                    <Marker
                      position={userPos}
                      title="You are here"
                      icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
                    />
                  )}

                  {/* Result markers */}
                  {results.map((p) => (
                    <Marker
                      key={p.placeId}
                      position={p.location}
                      title={p.name}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </GoogleMap>
              ) : (
                <div className="map-loading">Loading map…</div>
              )}
            </div>
          </section>

          <section className="topic-section">
            <h2 className="section-title">Results</h2>

            {results.length === 0 ? (
              <p className="muted">
                No results yet. Try searching: <strong>“women’s health clinic”</strong>,{" "}
                <strong>“urgent care”</strong>, <strong>“pharmacy”</strong>,{" "}
                <strong>“Planned Parenthood”</strong>, or <strong>“hospital”</strong>.
              </p>
            ) : (
              <div className="results-grid">
                {results.map((p) => (
                  <button
                    key={p.placeId}
                    className={`result-card ${selected?.placeId === p.placeId ? "is-active" : ""}`}
                    onClick={() => {
                      setSelected(p);
                      setCenter(p.location);
                    }}
                    type="button"
                  >
                    <div className="result-title">{p.name}</div>
                    <div className="result-meta">
                      {p.rating ? `★ ${p.rating}` : "No rating"} •{" "}
                      {p.address || "Address unavailable"}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {selected && (
              <div className="link-box" style={{ marginTop: 18 }}>
                <h3>{selected.name}</h3>
                <p className="muted">{selected.address}</p>
                <p className="muted">
                  Tip: Click markers or results to recenter the map. For directions, open the location
                  in Google Maps.
                </p>
                <a
                  className="topic-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    selected.name
                  )}&query_place_id=${selected.placeId}`}
                >
                  Open in Google Maps
                </a>
              </div>
            )}
          </section>
        </div>
      </main>

    </>
  );
}

