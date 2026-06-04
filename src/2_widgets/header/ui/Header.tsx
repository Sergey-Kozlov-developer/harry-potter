import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@shared/ui/shadcn/navigation-menu";
import { MobileMenu } from "@widgets/mobile-menu";
import { NavLink } from "react-router";
import { MenuIcon } from "lucide-react";
import { Search } from "@features/search";
import { SelectHouse } from "@features/select-house";

export const Header = () => {
    const navsLink = [
        { id: 1, title: "Characters", path: "/" },
        // { id: 2, title: "Students", path: "/students" },
        // { id: 3, title: "Staffs", path: "/staffs" },
        { id: 4, title: "Spells", path: "/spells" },
    ];

    return (
        <header className="sticky-nav ">
            <div className="container mx-auto flex items-center justify-between py-2">
                <div className="font-bold text-xl">Harry Potter</div>
                <Search />
                <SelectHouse />
                <NavigationMenu className="flex-none">
                    <NavigationMenuList>
                        {navsLink.map((item) => (
                            <NavigationMenuItem
                                key={item.id}
                                className="hidden md:flex"
                            >
                                <NavigationMenuLink asChild>
                                    <NavLink to={item.path}>
                                        {item.title}
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="lex items-center gap-2 sm:hidden">
                    <MobileMenu icon={<MenuIcon />} listNav={navsLink} />
                </div>
            </div>
        </header>
    );
};
