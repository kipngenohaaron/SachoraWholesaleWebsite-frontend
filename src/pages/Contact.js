import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Sachora Wholesale</h1>
        <p className="mt-2">Your trusted partner for bulk food supplies.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
