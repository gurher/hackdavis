import { useState, useEffect } from "react";
const drivers = [
  {
    name: "Kiri Aoi",
    from: "Davis, CA",
    to: "Los Angeles, CA",
    price: 45,
    seat_available: "3/4",
    stars: 4,
  },
  {
    name: "James Bartsen",
    from: "Davis, CA",
    to: "Santa Barbara, CA",
    price: 35,
    seat_available: "1/4",
    stars: 3,
  },
  {
    name: "Kelly Anison",
    from: "Davis, CA",
    to: "Las Vegas, NV",
    price: 75,
    seat_available: "2/4",
    stars: 5,
  },
  {
    name: "David Kim",
    from: "Davis, CA",
    to: "San Francisco, CA",
    price: 15,
    seat_available: "1/4",
    stars: 4,
  },
  {
    name: "Ashley Young",
    from: "Davis, CA",
    to: "San Jose, CA",
    price: 20,
    seat_available: "3/4",
    stars: 3,
  },
];
export default function FindMyDriver() {
  const [filteredLocation, setFilteredLocation] = useState("all");
  const [filterableDrivers, setFilerableDrivers] = useState(drivers);
  const filterByLocation = (locationName) => {
    if (locationName) {
      setFilteredLocation(locationName);
      setFilerableDrivers(
        drivers.filter((each) => each.to.split(",")[0] == locationName)
      );
    } else {
      setFilerableDrivers(drivers);
    }
  };

  useEffect(() => {
    setFilerableDrivers(drivers);
  }, []);

  return (
    <div className="w-full">
      <aside className="w-full max-w-6xl mx-auto px-8 mt-8">
        <section className="w-full max-w-4xl px-4 pb-4 pt-6 bg-white shadow-inner relative border rounded-lg">
          <h4 className="absolute top-0 left-0 transform translate-x-4  -translate-y-4 w-max text-sm font-medium px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 shadow-2xl border">
            Popular Locations
          </h4>
          <div className="w-full flex items-center space-x-4 overflow-auto">
            <button
              onClick={() => filterByLocation()}
              className="w-full inline-block bg-themeLight p-2 rounded-lg text-themeWhite font-medium text-sm"
            >
              Show All
            </button>
            {drivers.map((driver, index) => (
              <button
                onClick={() => filterByLocation(driver.to.split(",")[0])}
                className="w-full inline-block bg-themeLight transition-all hover hover:bg-themeRed p-2 rounded-lg text-themeWhite font-medium text-sm"
                key={index}
              >
                {driver.to.split(",")[0]}
              </button>
            ))}
          </div>
        </section>
      </aside>
      <main className="w-full">
        {filterableDrivers && (
          <section className="w-full max-w-6xl mx-auto px-8 pt-6 pb-8">
            <p className="font-thin text-themeOrange mb-8">
              {filterableDrivers.length > 1
                ? filterableDrivers.length + " drivers"
                : filterableDrivers.length + " driver"}{" "}
              found.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterableDrivers.map((driver, index) => (
                <article
                  key={index}
                  className="p-4 rounded-lg border border-slate-300 shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{driver.name}</h3>
                    <div className="flex items-center space-x-2 border rounded-md overflow-hidden px-2">
                      <span className="p-1 font-medium bg-neutral-50 text-themeOrange">
                        To
                      </span>
                      <code className="text-sm">{driver.to}</code>
                    </div>
                  </div>
                  <div className="my-4">
                    <p>
                      {driver.name} is leaving from {driver.from}
                    </p>
                    <p className="text-sm text-slate-400">
                      Seat availabiliy :{" "}
                      <span className="text-green-400">
                        {driver.seat_available}
                      </span>
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">Driver Rate</span>
                      <div className="flex space-x-2">
                        {Array.from(Array(driver.stars).keys()).map(
                          (_, index) => (
                            <span
                              className="w-4 h-4 bg-green-400 rounded-full"
                              key={index}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4>
                      <span className="font-medium text-2xl">
                        ${driver.price}
                      </span>
                    </h4>
                    <button className="px-3 py-2 bg-themeRed rounded-lg text-themeWhite font-medium transition-all hover hover:bg-themeLight">
                      Request Ride
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
