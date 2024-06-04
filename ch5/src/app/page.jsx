import GetDataComponent from "./components/GetDataComponent";
import GetDataNew from "./components/GetDataNew";
import PostDataNew from "./components/PostDataNew";
import PostDataComponent from "./components/PostDataComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>Next.js with Database | MongoDB |</h1> */}

      {/* <GetDataComponent></GetDataComponent> */}
      
      {/* getting and posting data using (api and fetch )in old way */}
      <PostDataComponent></PostDataComponent>
      {/* <GetDataComponent></GetDataComponent> */}
      <GetDataNew></GetDataNew>

      {/* getting and posting data form just frontend (just like php) in easy way */}
      {/* <GetDataNew></GetDataNew> */}
      {/* <PostDataNew></PostDataNew> */}

    </main>
  );
}
