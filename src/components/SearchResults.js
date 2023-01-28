import React, { useState } from "react";
import moment from "moment/moment";
import PropTypes from "prop-types";

const SearchResults = ({ results, showProfile }) => {
  const [selectItems, setSelecItems] = useState([]);

  const addOrRemove = (selectedArr, item) => {
    return selectedArr.includes(item)
      ? selectedArr.filter(i => i !== item)
      : [...selectedArr, item];
  };

  const handleClick = id => {
    setSelecItems(addOrRemove(selectItems, id));
  };

  /*const handleShowProfile = (id) => {
    console.log(id);
  };*/

  ///
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">TITLE</th>
          <th scope="col">FIRST NAME</th>
          <th scope="col">SURNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROOM ID</th>
          <th scope="col">CHECK IN DATE</th>
          <th scope="col">CHECK OUT DATE</th>
          <th scope="col">NIGHTS</th>
          <th scope="col">PROFILE</th>
        </tr>
      </thead>
      <tbody>
        {results.map(el => {
          const checkIn = moment(el.checkInDate);
          const checkOut = moment(el.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");
          return (
            <tr
              key={el.id}
              onClick={() => handleClick(el.id)}
              className={
                selectItems.indexOf(el.id) >= 0 ? "selected" : undefined
              }
            >
              <td>{el.title}</td>
              <td>{el.firstName}</td>
              <td>{el.surname}</td>
              <td>{el.email}</td>
              <td>{el.roomId}</td>
              <td>{el.checkInDate}</td>
              <td>{el.checkOutDate}</td>
              <td>{difference}</td>
              <td>
                <button onClick={() => showProfile(el.id)}>Show Profile</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SearchResults.prototype = {
  results: PropTypes.array.isRequired
};

export default SearchResults;
