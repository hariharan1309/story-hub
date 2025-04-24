import React from 'react';
import Storycard, { Story } from './Storycard';

type StoriesProps = {
  stories: Story[];
};

const Stories: React.FC<StoriesProps> = ({ stories }) => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[calc(100vh-250px)] overflow-y-auto">
      {stories.map((story) => (
        <Storycard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;