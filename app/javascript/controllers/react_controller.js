import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {Controller} from "@hotwired/stimulus";

const App = lazy(() => import("../components/App"));

export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const app = document.getElementById("app");
    if (app) {
      createRoot(app).render(
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
      );
    } else {
      console.error("Element with id 'app' not found");
    }
  }
}
