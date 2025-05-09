type Tab = {
  name: string;
  count: number;
};

type TabNavProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const TabNav: React.FC<TabNavProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mb-6">
      <div className="flex hidescrollbar max-md:overflow-x-auto max-sm:max-w-full space-x-2">
        {tabs.map((tab) => (
          <button
            name="Tag"
            aria-label="Tag"
            key={tab.name}
            className={`p-2 sm:p-3 lg:p-[15px] cursor-pointer rounded-[10px] font-semibold space-x-1 whitespace-nowrap ${
              activeTab === tab.name
                ? "bg-[#1C1442] text-white"
                : "bg-[#E7E8EF] text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span>{tab.name}</span>
            <span
              className={`${
                activeTab === tab.name ? "text-white" : "!text-[#A0A3BD]"
              }`}
            >
              ({tab.count})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNav;
