import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@shared/ui/shadcn/navigation-menu";
import { NavLink } from "react-router";

export const Header = () => {
    const navsLink = [
        { id: 1, title: "Characters", path: "/" },
        { id: 2, title: "Students", path: "/students" },
        { id: 3, title: "Staffs", path: "/staffs" },
        { id: 4, title: "Spells", path: "/spells" },
    ];

    return (
        <header className="flex items-center justify-between px-4 py-2">
            <div className="font-bold text-xl">Harry Potter</div>

            <NavigationMenu>
                <NavigationMenuList>
                    {navsLink.map((item) => (
                        <NavigationMenuItem key={item.id}>
                            <NavigationMenuLink asChild>
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};
