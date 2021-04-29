import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHomepage from "./pages/user/Homepage";
import ShopsListpage from "./pages/user/ShopsListpage";
import Shoppage from "./pages/admin/ShopDetailspage";
import AllMallspage from "./pages/user/AllMallspage";
import AdminHomepage from "./pages/admin/Homepage";
import AddFormPage from "./pages/admin/AddFormPage";
import AdminShopLists from "./pages/admin/ShopListspage";
import AddShopsFormPage from "./pages/admin/AddShopsFormPage";
import EditShopForm from "./components/Form/EditShopForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* User Routes */}
          <Route path="/user/home" component={UserHomepage} />
          <Route path="/user/allmalls" component={AllMallspage} />
          <Route exact path="/user/malls/:id" component={ShopsListpage} />

          {/* Admin Routes */}
          <Route path="/admin/malls/:mallid/:shopid" component={Shoppage} />
          <Route path="/admin/addmall" component={AddFormPage} />
          <Route path="/admin/:mallid/addshop" component={AddShopsFormPage} />
          <Route path="/admin/malls/:mallid" component={AdminShopLists} />
          <Route
            path="/admin/:mallid/:shopid/editshop"
            component={EditShopForm}
          />
          <Route
            path="/admin/home"
            render={() => <AdminHomepage isAdmin="true" />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
