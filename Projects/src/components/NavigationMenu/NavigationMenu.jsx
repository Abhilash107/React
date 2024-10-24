import MenuList from "./MenuList";

//Tree  view
export default function NavigationMenu({menus = []}){



    return <div className="tree-view-container">

        <MenuList list={menus}/>

    </div>
}