import React, {useState} from "react";
import SatComponent from "./TabComponents/satComponent";
import EcComponent from "./TabComponents/ecComponent";

export default function TabHolder(props) {
    const [activeTab, setActiveTab] = useState("SAT");
    console.log(props.satScore)

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
                <SatComponent satScore = {props.satScore} setSatScore = {props.setSatScore}/>
            </TabContent>
            <TabContent id="GPA" activeTab={activeTab}>
                <p>Tab 2 works!</p>
            </TabContent>
            <TabContent id="ECs" activeTab={activeTab}>
              <EcComponent extraCurricular = {props.extraCurricular} setExtraCurricular = {props.setExtraCurricular}/>
            </TabContent>
          </div>
        </div>
      );
}