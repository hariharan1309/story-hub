import React from "react";
import Storycard, { Story } from "./Storycard";

type StoriesProps = {
  stories: Story[];
};

const Stories: React.FC<StoriesProps> = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 hidescrollbar sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-h-[calc(100vh-250px)] overflow-y-auto">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className={`animate-fade-in-up delay-[${index * 200}ms] `}
        >
          <Storycard story={story} />
        </div>
      ))}
    </div>
  );
};

export default Stories;
