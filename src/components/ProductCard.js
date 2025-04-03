const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg p-4 shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  