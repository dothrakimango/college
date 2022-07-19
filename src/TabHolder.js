import React, {useState} from "react";
import SatComponent from "./TabComponents/satComponent";

export default function TabHolder(score, setScore) {
    const [activeTab, setActiveTab] = useState("SAT");

    const TabContent = ({id, activeTab, children}) => {
        return (
          activeTab === id ? <div className="TabContent">
            { children }
          </div>
          : null
        );
       };
    
    const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
        const handleClick = () => {
          setActiveTab(id);
        };
        
       return (
          <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            { title }
          </li>
        );
       };

    return (
        <div className="Tabs">
          {/* Tab nav */}
          <ul className="nav">
            <TabNavItem title="SAT" id="SAT" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="GPA" id="GPA" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem title="ECs" id="ECs" activeTab={activeTab} setActiveTab={setActiveTab}/>
          </ul>
          <div className="outlet">
            <TabContent id="SAT" activeTab={activeTab}>
                <SatComponent satScore = {score} setSatScore = {setScore}/>
            </TabContent>
            <TabContent id="GPA" activeTab={activeTab}>
                <p>Tab 2 works!</p>
            </TabContent>
            <TabContent id="ECs" activeTab={activeTab}>
                <p>Tab 3 works!</p>
            </TabContent>
          </div>
        </div>
      );
}