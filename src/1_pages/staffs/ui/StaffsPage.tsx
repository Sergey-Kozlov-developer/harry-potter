import { StaffList } from "@widgets/staff-list";

export const StaffsPage = () => {
    return (
        <div className="flex flex-col items-center gap-7 mt-7">
            <h1 className="sm:text-2xl md:text-5xl">
                Staffs from the Harry Potter universe
            </h1>
            <StaffList />
        </div>
    );
};
