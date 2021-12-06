
import { SearchProvider } from "./context/SearchContext";
import { HomePage } from "./page/HomePage";

const App:React.FC = () => {
  return (
   <SearchProvider>
     <HomePage/>
   </SearchProvider>
  )
}

export default App;