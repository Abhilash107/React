import CustomTabs from "./CustomTabs"
import './tabs.css'

function RandomComponent(){

    return <h1>Some random content</h1>
}


export default function TabTest(){
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content 1</div> 
        },
        {
            label: "Tab 2",
            content: <div>This is content 2</div> 
        },
        {
            label: "Tab 3",
            content: <RandomComponent/>
        }
    ]

    function handleChange(currentTabIndex){
        
    }


    return <CustomTabs tabsContent={tabs} onchange={handleChange} />

}