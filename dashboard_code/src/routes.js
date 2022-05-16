import BookTicket from "views/Dashboard";
import MyWallet from "views/Notifications";
import BuyTicket from "views/Icons";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import MyTicket from "views/Map";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [{
        path: "/bookticket",
        name: "Book Ticket",
        icon: "nc-icon nc-delivery-fast",
        component: BookTicket,
        layout: "/home",
    },
    {
        path: "/buyticket",
        name: "Buy Ticket",
        icon: "nc-icon nc-delivery-fast",
        component: BuyTicket,
        layout: "/home",
    },
    {
        path: "/myticket",
        name: "My Tickets",
        icon: "nc-icon nc-paper",
        component: MyTicket,
        layout: "/home",
    },

    {
        path: "/mywallet",
        name: "My Wallet",
        icon: "nc-icon nc-briefcase-24",
        component: MyWallet,
        layout: "/home",
    },
    {
        path: "/user-info",
        name: "User Profile",
        icon: "nc-icon nc-single-02",
        component: UserPage,
        layout: "/home",
    },
    // {
    //     path: "/tables",
    //     name: "Table List",
    //     icon: "nc-icon nc-tile-56",
    //     component: TableList,
    //     layout: "/home",
    // },
    // {
    //     path: "/typography",
    //     name: "Typography",
    //     icon: "nc-icon nc-caps-small",
    //     component: Typography,
    //     layout: "/home",
    // },
    // {
    //     pro: true,
    //     path: "/upgrade",
    //     name: "Upgrade to PRO",
    //     icon: "nc-icon nc-spaceship",
    //     component: UpgradeToPro,
    //     layout: "/home",
    // },
];
export default routes;