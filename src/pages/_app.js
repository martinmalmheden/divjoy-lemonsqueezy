import React from "react";
import "./../styles/global.css";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import PricingPage from "./pricing";
import AuthPage from "./auth";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import PurchasePage from "./purchase";
import NotFoundPage from "./404";
import { AuthProvider } from "./../util/auth";
import { QueryClientProvider } from "./../util/db";

function App(props) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <>
            <Navbar />

            <Switch>
              <Route exact path="/" component={IndexPage} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/pricing" component={PricingPage} />

              <Route exact path="/auth/:type" component={AuthPage} />

              <Route exact path="/dashboard" component={DashboardPage} />

              <Route exact path="/settings/:section" component={SettingsPage} />

              <Route exact path="/legal/:section" component={LegalPage} />

              <Route exact path="/purchase/:plan" component={PurchasePage} />

              <Route component={NotFoundPage} />
            </Switch>
          </>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
