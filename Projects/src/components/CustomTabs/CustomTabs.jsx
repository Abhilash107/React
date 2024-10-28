import { useState } from "react"



export default function CustomTabs({tabsContent, onchange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onchange(getCurrentIndex)

    }
    return (
        <div className="wrapper">
                <div className="heading">
                    {
                        tabsContent.map( (tabItem, index)=> (
                            <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                            key={tabItem.label} onClick={()=> handleOnClick(index)}>
                                <span className="label">{tabItem.label}</span>
                            </div>
                        ) )
                    }
                </div>

                <div className="content">
                    {
                        tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                    }

                </div>
        </div>
    )
}