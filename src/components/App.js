import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByAge, setSortByAge] = useState(false);
  const [planeteers, setPlaneteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((res) => res.json())
      .then((data) => {
        setPlaneteers(data);
      });
  }, []);

  const filteredPlaneteers = planeteers.filter((planeteer) => {
    return (
      planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedPlaneteers = filteredPlaneteers.sort((a, b) => {
    if (sortByAge) {
      return a.birthYear - b.birthYear;
    } else {
      return a.id - b.id;
    }
  });

  const handleSort = (sortByAge) => {
    setSortByAge(sortByAge);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSort={handleSort}
      />
      <RandomButton />
      <PlaneteersContainer planeteers={sortedPlaneteers} />
    </div>
  );
};

export default App;
