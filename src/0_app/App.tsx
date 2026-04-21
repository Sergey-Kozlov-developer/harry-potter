import { router } from "@app/routes/routes";
import { RouterProvider } from "react-router";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
