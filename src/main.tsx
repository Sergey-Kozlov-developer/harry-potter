import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@app/styles/index.css";
import App from "./0_app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./0_app/store/store.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
