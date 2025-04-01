import React, { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = isShowMore
    ? actors.slice(0, actors.length)
    : actors.slice(0, 4);

  const handleShowMore = () => setIsShowMore(!isShowMore);
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actor</p>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {currentActor.map((actor) => (
          <ActorInfo key={actor.id} actor={actor} />
        ))}
      </div>
      <p className="mt-1 cursor-pointer text-[1.2vw]" onClick={handleShowMore}>
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};

export default ActorList;
