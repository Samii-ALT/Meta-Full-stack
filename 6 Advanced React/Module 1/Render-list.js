import logo from './logo.svg';
import './App.css';

  const topFood = [
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
  

function App() {
  const listItem = topFood.map(Food => {
    const itemText = `${Food.title} - ${Food.price}`
    return <li>{itemText}</li>
  })
  return (
    <>
      <ul>
        {listItem}
      </ul>
    </>
  )
}

export default App;
