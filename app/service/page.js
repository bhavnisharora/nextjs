import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar";

export default function service() {
  return (
    <>
      <div className="container">
        <Navbar />
        <h1>this is service component</h1>
      </div>
    </>
  );
}
