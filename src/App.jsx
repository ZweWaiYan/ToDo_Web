import NewInput from "./components/new_input";
import ListInput from "./components/list_input";
import Title from "./components/title";

import BGdesktoplight from "./assets/bg-desktop-light.jpg";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">      
      <div
        className="w-full h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGdesktoplight})` }}
      >        
        <NewInput className="p-10"/>
        <ListInput className="p-10" />
      </div>   
    </div>
  );
}

export default App;
