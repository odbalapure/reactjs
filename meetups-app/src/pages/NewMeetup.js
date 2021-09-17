import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeeupForm";

function NewMeetupsPage() {
  // Gives access to history objects and you have access to several functions to navigate your page
  const history = useHistory();

  function addMeetupHandler(meetupdata) {
    // fetch sends a GET request by default
    fetch("https://react-demo-d8286-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      header: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // Push a new page to stack of pages - we can go back after form is submitted
      // history.push("/");

      // naviagate programatically when form is submitted
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
