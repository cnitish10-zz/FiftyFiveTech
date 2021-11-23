
import './App.css';
const fib=[0,1]
for(let i=2;i<=100;i++)
fib[i]=fib[i-1]+fib[i-2]
function App() {
  const handleSubmit = (event) => {

    event.preventDefault();
    alert("fibonaaci number at " +event.target.num.value +" position is " +fib[event.target.num.value])
  };
  return (
    <div class="main">
    <h1>Enter a Number to get fibonaaci</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="num" placeholder="Enter Your Number"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
