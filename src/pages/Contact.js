import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryForm from "../components/InquiryForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p>Reach out for bulk orders or inquiries.</p>
        <div className="mt-4">
          <InquiryForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
