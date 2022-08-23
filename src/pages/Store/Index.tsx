import { SideBar } from "../../components/SideBar";

export function Store() {
    return(
        <div className="container">
            <SideBar />

            <main style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff"
            }}>
                Manuntenção...
            </main>
        </div>
    );
};
