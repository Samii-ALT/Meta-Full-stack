import logo from './logo.svg';
import './App.css';

  const data = [
    {
      id: 1, 
      title: "Qorma",
      discription: "This is one of my favurite food..",
      image: "https://picsum.photos/200/300/?random",
      price: "$3"
    },

    {
      id: 2, 
      title: "Karahi",
      discription: "My second FVT..",
      image: "https://picsum.photos/200/300/?random",
      price: "$3.5"
    },

    {
      id: 3, 
      title: "Biryani",
      discription: "I guess everyone's fvt in pakistan..",
      image: "https://picsum.photos/200/300/?random",
      price: "$2"
    }
  ]

  const topFood = data.map( Food => {
    return {
      content: `${Food.title} - ${Food.discription}`,
      price: `${Food.price}`
    }
  })

function App() {
  console.log(topFood);
  return <h1>Examine the console Output</h1>
}

export default App;
