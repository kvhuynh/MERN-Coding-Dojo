import './App.css';

import { Navigate, Route, Routes } from "react-router-dom";

import { AllAuthors } from "./views/AllAuthors";
import { NewAuthor } from "./views/NewAuthor";
import { OneAuthor} from "./views/OneAuthor";
import { EditAuthor } from "./views/EditAuthor"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate  to="/authors" replace />}/>
        <Route path="authors/:id" element={<OneAuthor />}/>
        <Route path="/authors/:id/edit" element={ <EditAuthor /> }></Route>
        <Route path="/authors/new" element={<NewAuthor />} />
        <Route path="/authors" element={<AllAuthors/ >}/>
      </Routes>
    </div>
  );
}

export default App;
