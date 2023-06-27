import React, { useEffect } from "react";
import { useState } from "react";
import "./List.scss";

const List = () => {
  const [item, setItem] = useState(" ");
  const [listing, setListing] = useState(() => {
    const localValue = localStorage.getItem("LIST");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // states are immutable

  const handleSubmit = (event) => {
    event.preventDefault();
    setListing((currentListing) => {
      return [
        ...currentListing,
        { id: Math.random(), title: item, completed: false },
      ];
    });

    setItem("");
  };

  const toggleListing = (id, completed) => {
    setListing((currentListings) => {
      return currentListings.map((listing) => {
        if (listing.id === id) {
          listing.completed = completed;
          return { ...listing, completed };
        }

        return listing;
      });
    });
  };

  const deleteListing = (id) => {
    setListing((currentListing) => {
      return currentListing.filter((listing) => listing.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("LIST", JSON.stringify(listing));
  }, [listing]);

  return (
    // only return one element that's why i need to wrap the whole return statements in this <> </>  (called a fragment)
    <>
      <p className="form-header"> What would you like to do today?</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container__form">
            <h1 className="form-container__heading">My to-do list:</h1>
            <h1 className="form-container__info">
              {listing.length === 0 && "You have no tasks for today"}
            </h1>{" "}
            {/* short circuit */}
            {listing.map((lis) => {
              return (
                <li key={lis.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={lis.completed}
                      onChange={(e) => toggleListing(lis.id, e.target.checked)}
                    />
                    {lis.title}
                  </label>
                  <button
                    className="form-container__button-remove"
                    onClick={() => deleteListing(lis.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
            <label htmlFor="item" className="form-container__task">
              Add task:
            </label>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="item"
              className="form-container__input"
            />
            <button className="form-container__button-add">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default List;
