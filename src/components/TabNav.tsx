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
    <div className="mb-6 overflow-x-auto">
      <div className="flex space-x-1 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap ${
              activeTab === tab.name
                ? 'bg-indigo-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNav;