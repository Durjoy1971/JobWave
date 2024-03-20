import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Jobcard from "./components/JobCard/JobCard";
import JobData from "./JobData";

function App() {
  return (
    <div className="font-display">
      <Navbar />
      <Header />
      <SearchBar />
      {JobData.map((job) => {
        return <Jobcard key={job.id} {...job} />;
      })}
    </div>
  );
}

export default App;
