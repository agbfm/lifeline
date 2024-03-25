import { Timeline } from "@/components/timeline/Timeline";
import { NewPostCard } from "@/components/posts/NewPostCard";
import { usePosts } from "@/hooks/api/usePosts";

const Home = () => {
  const [posts] = usePosts();
  return (
    <main className="flex bg-stone-50 min-h-screen w-full justify-center py-8">
      <div className="flex container justify-center">
        <div className="flex flex-col">
          <div className="pt-4 pb-8">
            <NewPostCard />
          </div>
          <Timeline posts={posts} />
        </div>
      </div>
    </main>
  );
};

export default Home;
