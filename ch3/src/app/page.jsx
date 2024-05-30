import LearnCssModule from "@/components/LearnCssModule";
import ImageComponent from "@/components/ImageComponent";
import LearnDataFetch from "@/components/LearnDataFetch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-2">
      {/* <h1>Ch3 , Home Page</h1> */}

      {/* <LearnCssModule></LearnCssModule> */}
      
      <ImageComponent></ImageComponent>
      <ImageComponent></ImageComponent>

      {/* <LearnDataFetch></LearnDataFetch> */}

    </main>
  );
}
