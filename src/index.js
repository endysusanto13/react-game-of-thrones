import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';

import { AuthProvider } from "domains/auth";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { Listings } from "./pages/listings";
import { ListingDetailsPage } from "./pages/listing-details";
import { PageNotFound } from "./pages/404";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

ReactDOM.render(
<BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/character/:characterId">
          <ListingDetailsPage />
        </Route>
        <Route path="/" exact>
          <Listings />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </AuthProvider>
  </QueryClientProvider>
</BrowserRouter>
  ,document.querySelector("#root")
);
