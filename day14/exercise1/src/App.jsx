import React from "react";

function App() {
  const products = [
    {
      name: "Jollof Rice",
      price: "₦2,500",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/1024px-Jollof_Rice_with_Stew.jpg",
    },
    {
      name: "Ankara Fabric",
      price: "₦5,000",
      image: "https://i.ebayimg.com/images/g/Xq0AAOSwsEBivdJn/s-l1600.webp",
    },
    {
      name: "Suya",
      price: "₦1,000",
      image: "https://www.africanbites.com/wp-content/uploads/2022/03/a-plate-of-stacked-suya-beef-copy.jpg",
    },
    {
      name: "Palm Wine",
      price: "₦1,200",
      image: "https://www.shutterstock.com/image-photo/palm-wine-date-tree-clay-260nw-1407988373.jpg",
    },
    {
      name: "Aso-Ebi",
      price: "₦45,000",
      image: "https://lh3.googleusercontent.com/p/AF1QipPF6Z8jN4YEKS7yg0404G_VUhWTs2TFk6AZ0Ibb=w260-h175-n-k-no",
    },
    {
      name: "Chin Chin",
      price: "₦1,500",
      image: "https://egunsifoods.com/cdn/shop/articles/Chin_Chin_2100x.jpg?v=1639595235",
    },
    {
      name: "Puff Puff",
      price: "₦500",
      image: "https://allnigerianfoods.com/wp-content/uploads/puff_puff_recipe-500x500.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        🛒 Naija Market
      </h1>

      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
              transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl
            "
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover hover:opacity-90 transition-opacity"
            />

            {/* Product Info */}
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-green-600 font-bold mb-3">{item.price}</p>
              <button
                className="
                  bg-green-600 text-white px-4 py-2 rounded-lg w-full
                  hover:bg-green-700 transition-colors
                "
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

