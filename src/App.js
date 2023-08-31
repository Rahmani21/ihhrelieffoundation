import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import About from "./components/pages/about/About";
import History from "./components/pages/history/History";
import AuthorativeCommettee from "./components/pages/authorative committees/AuthorativeCommettee";
import Foundation_deed from "./components/pages/foundation-deed/Foundation_deed";
import Human_Resources from "./components/pages/human_resource/Human_Resources";
import PressRoom from "./components/pages/PressRoome/PressRoom";
import PersonalDataProtection from "./components/pages/Personal_data_protection/PersonalDataProtection";
import Information_Security_Policy from "./components/pages/information_security_policy/Information_Security_Policy";
import Anti_corruption_and_bribery from "./components/pages/Anti_corruption_and_bribery/Anti_corruption_and_bribery";
import Donor_rights from "./components/pages/Donor Rights/Donor_rights";
import Tax_Exemtpion from "./components/pages/Tax Exemption/Tax_Exemtpion";

import Humanitarian_Relief from "./components/pages/Scrope_Of_Work/Huamanitarian_relief/Humanitarian_Relief";
import Human_Rights from "./components/pages/Scrope_Of_Work/Human_rights/Human_Rights";
import Humanitarian_Diplomacy from "./components/pages/Scrope_Of_Work/Humanitarian_Diplomacy/Humanitarian_Diplomacy";
import Emergency_Aid from "./components/pages/Scrope_Of_Work/Emergency_aid/Emergency_Aid";
import Search_and_Rescue from "./components/pages/Scrope_Of_Work/Search_and_rescue/Search_and_Rescue";
import Voluntary_Activities from "./components/pages/Scrope_Of_Work/VoluntaryActivities/Voluntary_Activities";
import Raising_awareness from "./components/pages/Scrope_Of_Work/RaisingAwareness/Raising_awareness";
import Qurbani from "./components/pages/Scrope_Of_Work/Qurbani/Qurbani";
import Cataract from "./components/pages/Scrope_Of_Work/cataract/Cataract";
import Orphan from "./components/pages/Scrope_Of_Work/orphan/Orphan";
import Orphanages from "./components/pages/Scrope_Of_Work/orphanage/Orphanages";
import RAF_IHH_ChildrensLiving from "./components/pages/Scrope_Of_Work/RAF_&_IHH/RAF_IHH_ChildrensLiving";
import Supported_Orphans_Across_The_World from "./components/pages/Scrope_Of_Work/Supported_Orphans_Across_The_World/Supported_Orphans_Across_The_World";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/authorized-committees" element={<AuthorativeCommettee />} />
        <Route path="/foundation-deed" element={<Foundation_deed />} />
        <Route path="/press/document" element={<PressRoom />} />
        <Route path="/human-resources" element={<Human_Resources />} />

        <Route path="/personal-data-protection-law" element={<PersonalDataProtection />} />
        <Route path="/information-security-policy" element={<Information_Security_Policy />} />
        <Route path="/anti-corruption-and-bribery" element = {<Anti_corruption_and_bribery />} />
        <Route path="/donor-rights" element = {<Donor_rights />} />
        <Route path="/tax-allowance" element = {<Tax_Exemtpion />}  />
        <Route path="/humanitarian-relief"  element={<Humanitarian_Relief />} />
        <Route path="/human-rights" element={<Human_Rights />} />
        <Route path="/humanitarian-diplomacy" element={<Humanitarian_Diplomacy />} />
        <Route path="/emergency-aid" element={<Emergency_Aid />} />
        <Route path="/search-and-rescue" element={<Search_and_Rescue />} />
        <Route path="/volunteer-works" element={<Voluntary_Activities />} />
        <Route path="/raising-awareness" element = {<Raising_awareness />} />
        <Route path="qurbani" element={<Qurbani />} />
        <Route path="/cataract" element ={<Cataract />} />
        <Route path="/orphan" element={<Orphan />} />
        <Route path="/orphanages" element={<Orphanages />} />
        <Route path="/ihh-raf-child-life-center" element = {<RAF_IHH_ChildrensLiving />} />
        <Route path="/our-orphans-around-the-world" element = {<Supported_Orphans_Across_The_World />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
