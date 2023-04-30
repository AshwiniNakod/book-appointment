import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  useEffect(() => {
    const getdata = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setUser(json);
          setSearchApiData(json);
        });
    };
    getdata();
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.value)
    if (e.target.value == "") {
      setUser(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.phone.includes(e.target.value)
      );

      filterResult.length > 0
        ? setUser(filterResult)
        : setUser([{ name: "No user found" }]);
    }
    setFilterVal(e.target.value);
  };

  return (
    <div className="user_profile">
      <h1>Book Appointment</h1>
      <div className="search-input">
        <span>
          <input
            className="input-search"
            type="text"
            value={filterVal}
            placeholder="search"
            onChange={handleChange}
          />
        </span>
        <span>
          <button className="btn-profile">view Profile</button>
        </span>
      </div>
      <div>
        <table className="user-table">
          <th>Full Name</th>
          <th>Contact</th>
          {user.map((el) => {
            return (
              <tr>
                <td>{el.name}</td>
                <td>{el.phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="profile-details">
        <img className="profile-image" src="" alt="photo" />
        <ul style={{ listStyle: "none" }}>
          <li>Location:</li>
          <li>Contact</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
}
