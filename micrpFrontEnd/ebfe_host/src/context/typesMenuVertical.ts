export type Menu={
menu:boolean,
submenu:boolean
}

export type MenuContextType={
    menuContext:Menu
    setMenuContext:(value:Menu)=>void


}