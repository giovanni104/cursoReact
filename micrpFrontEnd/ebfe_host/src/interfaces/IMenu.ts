export interface IMenuResponse {
    menuItem:    string;
    orden:       number;
    menuItemDto: MenuItemDto[];
}

export interface MenuItemDto {
    url:    string;
    e2PAM5: string;
    orden:  number;
    tipo:   string;
    e2EMPR: number;
    e2CMM7: string;
    e2DSFC: null;
    e2TFM7: null;
    e2NAM7: null;
    e2DSM7: number;
    e2FHM7: number;
    e2HDM7: null;
    e2HFM7: number;
    e2EST7: string;
    title:  string;
}