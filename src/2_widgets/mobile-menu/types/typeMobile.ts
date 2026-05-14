import type { ReactNode } from "react";

export interface IMobileMenu {
    id: number;
    path: string;
    title: string;
    icon?: ReactNode;
}

export interface IHMobileMenuProps {
    icon: ReactNode;
    listNav: IMobileMenu[];
}
