import Navbar from "@/components/Navbar";
import style from "./home.module.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <h1 className={style.heading}>this is home component</h1>
      </div>
    </>
  );
}
