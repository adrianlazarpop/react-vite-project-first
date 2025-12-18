import { useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots as robotsData } from "../robots.js";
import Scroll from "../components/Scroll";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  // const [robots, setRobots] = useState([robotsData]);
  const robots = robotsData;
  const [searchfield, setSearchfield] = useState("");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       setRobots(users);
  //     });
  //   setRobots(robotsData);
  // }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  console.log(robots, searchfield);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
