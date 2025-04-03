import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  { id: 1, name: "Rice", price: 50, image: "https://via.placeholder.com/150", description: "High-quality rice." },
  { id: 2, name: "Beans", price: 40, image: "https://via.placeholder.com/150", description: "Fresh beans." },
];

const Products = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
