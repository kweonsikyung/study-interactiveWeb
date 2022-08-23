import React from "react";
import './App.css';
import ReactstrapAlerts from './R034_ReactstrapAlerts'
import ReactstrapBadges from './R035_ReactstrapBadges'
import ReactstrapBreadcrumbs from './R036_ReactstrapBreadcrumbs'
import ReactstrapDropDown from './R037_ReactstrapDropDown'
import ReactstrapButtonGroup from './R038_ReactstrapButtonGroup'
import ReactstrapBottons from './R039_ReactstrapBottons'
import ReactstrapCard from './R040_ReactstrapCard'
import ReactstrapCarousel from './R041_ReactstrapCarousel'
import ReactstrapCollapse from './R042_ReactstrapCollapse'
import ReactstrapFade from './R043_ReactstrapFade'
import ReactstrapForm from './R044_ReactstrapForm'
import ReactstrapInputGroup from './R045_ReactstrapInputGroup'
import ReactstrapJumbotron from './R046_ReactstrapJumbotron'
import ReactstrapListGroup from './R047_ReactstrapListGroup'
import ReactstrapModal from './R048_ReactstrapModal'
import ReactstrapNavbar from './R049_ReactstrapNavbar'
import ReactstrapPagination from './R050_ReactstrapPagination'
import ReactstrapPopover from './R051_ReactstrapPopover'
import ReactstrapProgress from './R052_ReactstrapProgress'
import ReactstrapSpinner from './R053_ReactstrapSpinner'
import ReactstrapTable from './R054_ReactstrapTable'
import ReactstrapTab from './R055_ReactstrapTab'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <h1>START REACT 200!</h1>
      <p>CSS 적용하기</p>
      {/* R019 예제 
      <PropsBoolean BooleanTrueFalse = {false}/>
      <PropsBoolean BooleanTrueFalse />
      */}
      {/* R020 에제
      <PropsObjVal Object_Json={{react: "리액트", twohundred: "200"}}/>
       */}
      {/* R021 예제 
      <PropsRequired ReactNumber={200} />
      
      */}
      {/* R022 예제 
      <PropsDefault ReactNumber={200} />
      */}
      {/* R023 예제 
      <PropsNode>
        <span>Node from App.js</span>
      </PropsNode>
      */}
      {/* R024 예제 
      <ReactState reactString={"react"} />
      */}
      <ReactstrapAlerts/>
      <ReactstrapBadges/>
      <ReactstrapBreadcrumbs/>
      <ReactstrapDropDown/>
      <ReactstrapButtonGroup/>
      <ReactstrapBottons/>
      <ReactstrapCard/>
      <ReactstrapCarousel/>
      <ReactstrapCollapse/>
     <ReactstrapFade/>
       <ReactstrapForm/>
      {/*<ReactstrapInputGroup/>
      <ReactstrapJumbotron />
      <ReactstrapListGroup/>
      <ReactstrapModal />
      <ReactstrapNavbar/>
      <ReactstrapPagination />
      <ReactstrapPopover />
      <ReactstrapProgress />
      <ReactstrapSpinner/>
      <ReactstrapTable/>
      <ReactstrapTab/> */}

    </div>
  );
}

export default App;