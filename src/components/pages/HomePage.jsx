import { TABS, TOP_RATED_TABS } from "../../libs/constant";
import FeatureMovie from "../FeatureMovie";
import MediaList from "../MediaList";

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
