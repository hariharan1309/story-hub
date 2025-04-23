import ActionButtons from "@/components/ActionButtons";
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
    imageSrc: "/images/story1.jpg",
    views: 428,
  },
  {
    id: 2,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    imageSrc: "/images/story2.jpg",
    views: 428,
  },
  {
    id: 3,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Draft",
    imageSrc: "/images/story3.jpg",
    views: 428,
  },
  // Duplicate stories for the grid
  {
    id: 4,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/images/story1.jpg",
    views: 428,
  },
  {
    id: 5,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/images/story4.jpg",
    views: 428,
  },
  {
    id: 6,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/images/story5.jpg",
    views: 428,
  },
  {
    id: 7,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/images/story6.jpg",
    views: 428,
  },
  {
    id: 8,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    imageSrc: "/images/story4.jpg",
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

  return (
    <div>
      <Sidebar />
      <div className="flex-1">
        <Header title="Stories" username="Akshita Patel" />

        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <SearchBar />
            <ActionButtons />
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
