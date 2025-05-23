// github https://github.com/adrianhajdin/yc_directory
// https://github.com/adrianhajdin/yc_directory/blob/main/README.md
//rsf, rsc

import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  //For Search
  const params = { search: query || null };

  // introducem params in fetch
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches, and get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <StartupCard key={post._id} post={post as StartupTypeCard} />
            ))
          ) : (
            <p className="no-results"> No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
