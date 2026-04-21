import LayoutApp from "@app/layout/LayoutApp";
import { CharactersPage } from "@pages/characters";
import { SpellsPage } from "@pages/spells";
import { StaffsPage } from "@pages/staffs";
import { StudentsPage } from "@pages/students";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutApp,
        children: [
            {
                path: "/",
                Component: CharactersPage,
            },
            {
                path: "/students",
                Component: StudentsPage,
            },
            {
                path: "/staffs",
                Component: StaffsPage,
            },
            {
                path: "/spells",
                Component: SpellsPage,
            },
        ],
    },
]);
