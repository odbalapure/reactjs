import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  /* 
  useEffect: Runs some code under some conditions, for eg: the fetch function  
  will always execute whenever the component executes

  @params: [ function, array of dependencies (empty incase of no external dependencies) ]
  */
  useEffect(() => {
    setIsLoading(true);

    /* NOTE: React components MUST be synchronous, they have to return JSX not a PROMISE 
            Hence we don't write the component function as "async" */
    fetch("https://react-demo-d8286-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        console.log("Firebase Data:", meetups);

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });  
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* {[<li key="item-1">Item 1</li>, <li key="item-2">Item 2</li>]} */}
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          // Each child in a list should have a unique "key" prop
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];