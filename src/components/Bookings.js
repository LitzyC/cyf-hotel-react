import React from "react";
import Profile from "./Profile.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [dataOriginal, setData] = useState([]);
  const [userId, setUserId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  useEffect(() => {
    fetch(
      "https://cyf-react.glitch.me" //https://cyf-react.glitch.me/error
    )
      .then(res => res.json())
      .then(data => {
        if (data.error?.length != 0) {
          setErrorMessage(data.error);
        } else {
          setBookings(data);
          setData(data);
        }
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  //16 hasta 23
  const search = searchVal => {
    const filterBookings = dataOriginal.filter((filtro, index) => {
      return (
        searchVal.toUpperCase() === filtro.firstName ||
        searchVal.toUpperCase() === el.surname
      );
    });
    setBookings(filterBookings > 0 ? dataOriginal : filterBookings);
  };

  const handleShowProfile = id => {
    //const filteredUser = bookings.filter(el => el.id === id)//Muestra toda la data del id que filtremos.
    setUserId(id);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} ShowProfile={handleShowProfile} />}
        {userId !== 0 && <Profile userId={userId} />}
        {isLoading ? (
          <div />
        ) : errorMessage?.length > 0 ? (
          <div>LOADING</div>
        ) : (
          <SearchResults results={bookings} ShowProfile={handleShowProfile} />
        )}
        {userId !== 0 && <Profile userId={userId} />}
      </div>
    </div>
  );
};

export default Bookings;
