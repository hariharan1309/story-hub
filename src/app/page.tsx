"use client";
import AddStory from "@/components/AddStory";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import Stories from "@/components/Stories";
import { Story } from "@/components/Storycard";
import TabNav from "@/components/TabNav";
import { useState } from "react";
const stories: Story[] = [
  {
    id: 1,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/stories/story_1.jpg",
    views: 428,
  },
  {
    id: 2,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    imageSrc: "/stories/story_2.jpg",
    views: 428,
  },
  {
    id: 3,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Draft",
    imageSrc: "/stories/story_3.jpg",
    views: 428,
  },
  {
    id: 4,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/stories/story_4.jpg",
    views: 428,
  },
  {
    id: 5,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/stories/story_5.jpg",
    views: 428,
  },
  {
    id: 6,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/stories/story_6.jpg",
    views: 428,
  },
  {
    id: 7,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/stories/story_7.jpg",
    views: 428,
  },
  {
    id: 8,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/stories/story_5.jpg",
    views: 428,
  },
];
const tabs = [
  { name: "All", count: 4500 },
  { name: "Draft", count: 1203 },
  { name: "Pending", count: 890 },
  { name: "Published", count: 2432 },
  { name: "Archived", count: 320 },
];
export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex w-full">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className="flex-1 w-full">
        <Header
          title="Stories"
          username="Akshita Patel"
          toggleSidebar={toggleSidebar}
        />

        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-end mb-4 gap-2 md:gap-4 lg:gap-8">
            <SearchBar />
            <AddStory />
          </div>

          <TabNav
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <Stories stories={stories} />
        </div>
      </div>
    </div>
  );
}
