import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getFilteredEvents } from "../../data/dummy-data";

export default function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) return <p className="center">Loading...</p>;

  const filterDate = { year: +filterData[0], month: +filterData[1] };
  if (isNaN(filterDate.year) || isNaN(filterDate.month))
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  const filteredEvents = getFilteredEvents(filterDate);

  return (
    <>
      {filteredEvents.length > 0 ? (
        <>
          <ResultsTitle
            date={new Date(filterDate.year, filterDate.month - 1)}
          />
          <EventList items={filteredEvents} />
        </>
      ) : (
        <>
          <ErrorAlert>
            <p className="center">No events for that date.</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      )}
    </>
  );
}
