import "./App.css"

// function App() {
//   return (
 
//   <h1 className="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   )
// }

// export default App


// function App(){
//   return (
//     <div className="min-h-scrren bg-gray-100 flex items- center justify-center">
//       <h1 className="text-4xl font-bold text-naija-green">
//       Hello Tailwind Css!
//       </h1>
//     </div>
//   )
// }
// export default App;


export default function App() {
  return (
    <div className="bg-naija-green text-green-500 flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Naija!</h1>
        <h2>This my box of Tailwind CSS </h2>
        <button className="mt-6 px-6 py-2 bg-white text-naija-green font-bold rounded hover:bg-gray-100">
          Click Me
        </button>
      </div>
    </div>
  );
}
