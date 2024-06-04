import ClickButton from "@/components/ClickButton";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1> Next Practice : ch6 </h1>
      <ClickButton addBy={2}></ClickButton>
    </main>
  );
}
