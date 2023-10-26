import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Posts</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg" style={{ marginTop: "2rem" }}>
            No Posts to Display
          </p>
        ))}
      {/* {searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Posts to Display</p>
      )} */}
    </main>
  );
};

export default Home;
