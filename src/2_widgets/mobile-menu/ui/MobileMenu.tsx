import type { RootState } from "@app/store/store";
import {
    closeMenu,
    openMenu,
} from "@features/menu-toggle/model/menuToggleSlice";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/shadcn/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@shared/ui/shadcn/sheet";
import type { IHMobileMenuProps } from "@widgets/mobile-menu/types/typeMobile";
import { memo, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

export const MobileMenu = memo(({ icon, listNav }: IHMobileMenuProps) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.menuToggle.isOpen);

    const handleLinkClick = useCallback(() => {
        dispatch(openMenu());
    }, [dispatch]);

    return (
        <Sheet
            open={isOpen}
            onOpenChange={(open) => !open && dispatch(closeMenu())}
        >
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn("sm:hidden")}
                    aria-label="Открыть меню"
                    onClick={handleLinkClick}
                >
                    {icon}
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className={cn("w-75 sm:w-100")}>
                <nav className="flex flex-col space-y-2 mt-8">
                    <SheetTitle />
                    <SheetDescription />
                    {listNav.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => dispatch(closeMenu())}
                            className={cn(
                                "flex items-center space-x-3 py-3 px-4 rounded-lg",
                                "hover:bg-accent transition-colors",
                                "text-lg font-medium"
                            )}
                        >
                            {item.icon && (
                                <span className="text-muted-foreground w-5 h-5">
                                    {item.icon}
                                </span>
                            )}
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
});
