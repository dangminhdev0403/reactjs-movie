import FeatureMovie from "@/components/FeatureMovie";
import MediaList from "@/components/MediaList";
import { TABS, TOP_RATED_TABS } from "../libs/constant";

function HomePage() {
  return (
    <div>
      <FeatureMovie />
      <MediaList title="Trending" tabs={TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePage;
