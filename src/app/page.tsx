import Image from "next/image";
import styles from "./page.module.css";
import Availability from "./availability/page";

export default function Home() {
    return (
      <div>
       <Availability></Availability>
      </div>
    );
  }