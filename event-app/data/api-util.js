export async function getAllEvents() {
  return fetch(process.env.DB_URL + "events.json")
    .then((res) => res.json())
    .then((data) => {
      const allEvents = [];
      for (const key in data) {
        allEvents.push(data[key]);
      }
      return allEvents;
    });
}

export async function getFeaturedEvents() {
  return fetch(process.env.DB_URL + "events.json")
    .then((res) => res.json())
    .then((data) => {
      const featuredEvents = [];
      for (const key in data) {
        if (data[key].isFeatured) featuredEvents.push(data[key]);
      }
      return featuredEvents;
    });
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
