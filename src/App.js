import React from "react";
import Header from "./components/Header";

// import assets
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import ReusableSection from "./components/ReusableSection";

const App = () => {
  return (
    <div>
      <Header />
      <div className='app__reusableSections'>
        <ReusableSection
          title='Lowest Cost Solar Panels in America'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons={true}
          first
        />
        <ReusableSection
          title='Model S'
          desc='$69,420'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons={true}
          first
        />
        <ReusableSection
          title='Model 3'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons={true}
        />
        <ReusableSection
          title='Model X'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons={true}
        />
        <ReusableSection
          title='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons={true}
        />
        <ReusableSection
          title='Solar for New Roofs'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons={true}
        />
        <ReusableSection
          title='Accessories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
        />
      </div>
    </div>
  );
};

export default App;
