import Head from "next/head";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getFilteredEvents } from "../../data/api-util";

export default function FilteredEvents(props) {
  const filteredEvents = props.filteredEvents;
  const filterDate = props.filterDate;

  if (props.hasError)
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

  return (
    <>
      {filteredEvents.length > 0 ? (
        <>
          <Head>
            <title>{`Events for ${filterDate.year}/${filterDate.month}`}</title>
          </Head>
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

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;
  const filterDate = { year: +filterData[0], month: +filterData[1] };
  if (isNaN(filterDate.year) || isNaN(filterDate.month))
    return { props: { hasError: true } };

  return {
    props: {
      filteredEvents: await getFilteredEvents(filterDate),
      filterDate: filterDate,
    },
  };
}
