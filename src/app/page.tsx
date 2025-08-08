import Header from "../components/Header";
import About from "../components/About";
import ContactDetails from "../components/ContactDetails";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden glassmorphism">
        <Header />
        <About />
        <hr className="border-gray-200" />
        <ContactDetails />
        <Footer />
      </div>
    </main>
  );
}
