import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            For users only
            <Outlet />
        </div>
    )
}