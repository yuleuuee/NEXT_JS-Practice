// import LearnDataFetch from "../components/LearnCssModule";

// "@/" means "./src/" --> this helps in the quick path location
import LearnCssModule from '@/components/LearnCssModule'
import ImageComponent from '@/components/ImageComponent'
import LearnDataFetch from '@/components/LearnDataFetch' 


export default function Home() {
  return (
    <main className="flex flex-col first-line justify-evenly p-2">

      {/* <h1>Ch3 , Home Page</h1> */}

      {/* <LearnCssModule></LearnCssModule> */}
      
      {/* <ImageComponent></ImageComponent> */}

      <LearnDataFetch></LearnDataFetch>
    </main>
  );
}
