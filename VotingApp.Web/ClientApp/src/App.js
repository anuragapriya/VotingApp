import "./styles.css";
import { VotingIndex } from "./component/voting/votingIndex";

export default function App() {
  return (
    <div>
      <div className="App">
        <h2>Voting app</h2>
      </div>
      <VotingIndex />
    </div>
  );
}
