import { Header } from "@widgets/header";
import { Outlet } from "react-router";

const LayoutApp = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutApp;
