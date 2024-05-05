//main page

import getSongs from "@/actions/getSongs";
import Header from "@/components/Header"; //import Header component
import ListItem from "@/components/ListItem"; //import ListItem component
import PageContent from "@/app/(site)/components/PageContent";

export const revalidate = 0;

export default async function Home() {  //main home 
  const songs = await getSongs();
  
  return (
    //Main div class
    <div className="      
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
      "> 
      <Header>
        <div className="mb-2">
          <h1 //header 1: text- Represents 4 by 1 text ratio 
            className="
              text-white
              text-4xl
              font-semibold
            ">
            Welcome back
          </h1>
          <div //grid set cols-represents number of components per row and gap is horizontal space/mt is vertical space
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-3
              mt-4
            "
          >
            <ListItem //Liked songs!
              image="/images/liked.png" //Icon
              name="Liked Songs" //Tag
              href="liked" //Link
              />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest Songs
          </h1>
        </div>
        <PageContent songs = {songs}/>
      </div>
    </div>
  );
}
