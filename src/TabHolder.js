import React, {useState} from "react";
import SatComponent from "./TabComponents/satComponent";
import EcComponent from "./TabComponents/ecComponent";
import GpaComponent from "./TabComponents/gpaComponent";

export default function TabHolder(props) {
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
                <SatComponent satScore = {props.satScore} setSatScore = {props.setSatScore}/>
            </TabContent>
            <TabContent id="GPA" activeTab={activeTab}>
                <GpaComponent gpaAverage = {props.gpaAverage} setGpaAverage = {props.setGpaAverage}
                  isWeighted = {props.isWeighted} setIsWeighted = {props.setIsWeighted}
                />
            </TabContent>
            <TabContent id="ECs" activeTab={activeTab}>
              <EcComponent extraCurricular = {props.extraCurricular} setExtraCurricular = {props.setExtraCurricular}/>
            </TabContent>
          </div>
        </div>
      );
}