import './App.css';
import GreetingCard from './components/GreetingCard';
function App() {
  return (
    <div className="App">
      <GreetingCard
        name="Omodolapo"
        message=" have a great day!"
        color="green"
      />
      <GreetingCard
        name="David"
        message="You’re doing amazing today!"
        color="#961c7bff"
      />
      <GreetingCard
        name="Esther"
        message="Keep shining and smiling "
        color="#d6a8aaff"
      />
    </div>
  );
}
export default App;