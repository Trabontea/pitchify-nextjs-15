// github https://github.com/adrianhajdin/yc_directory
// https://github.com/adrianhajdin/yc_directory/blob/main/README.md
//rsf, rsc

import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams} :{searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author:{_id: 1, name: 'Gigel', image: 'https://placehold.co/48x48'},
      _id: 1,
      description: 'this is an description',
      image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
      category: 'Robots',
      title: 'we Robots'
    },
    {
      _createdAt: new Date(),
      views: 15,
      author:{_id: 1, name: 'Gigel', image: 'https://placehold.co/48x48'},
      _id: 2,
      description: 'this is an description',
      image: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
      category: 'Mountains',
      title: 'The Mountaines'
    }
    
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup, <br/> connect with entrpreneurs</h1>
          <p className="sub-heading !max-w-3xl">
            Submit ideas, vote on pitches, and get Noticed in Virtual Competitions
          </p>
        
        <SearchForm query={query}/>
      </section>
      
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ?(
            posts.map((post) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ): ( <p className="no-results"> No startups found</p>
          )}
        </ul>
      
      </section>
      
    
    
    </>
  );
}
