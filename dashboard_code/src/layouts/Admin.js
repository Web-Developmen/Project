
import React from "react";

import { Route, Switch, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";


import "assets/scss/paper-dashboard.scss?v=1.3.0";

import routes from "routes.js";

var ps;

function Dashboard(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps = new PerfectScrollbar(mainPanel.current);
  //     document.body.classList.toggle("perfect-scrollbar-on");
  //   }
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.body.classList.toggle("perfect-scrollbar-on");
  //     }
  //   };
  // });
  // React.useEffect(() => {
  //   mainPanel.current.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  // }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    // <div className={styles}>
      <div className="container-fluid">
        console.console.log(props);
      <Sidebar
      
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
        
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
              path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
        <Footer fluid />
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
      /> */}
      </div>
    // </div>
  );
}

export default Dashboard;
