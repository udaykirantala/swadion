
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideNavBar } from "../components/SideNavBar/SideNavBar";
import { Footer } from "../components/footer/Footer";
import "./MainLayout.css";
import { checkBackendHealth } from "../redux/restApis";
import Loading from "../components/common/loadingCom/Loading";
import ErrorState from "../components/common/errorStateCom/ErrorState";

export const MainLayout = () => {
    const [isChecking, setIsChecking] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState("");

    const checkHealth = async () => {
        setIsChecking(true);
        setError("");

        try {
            await checkBackendHealth();
            setIsConnected(true);
        } catch (error) {
            setIsConnected(false);
            setError(error.message);
        } finally {
            setIsChecking(false);
        }
    };

    useEffect(() => {
        checkHealth();
    }, []);

    return (
        <div>
            <div>
                <SideNavBar />
            </div>

            <div className="outlet">
                {isChecking ? (
                    <Loading
                        message="Preparing your recipes..."
                        description="Fresh flavours are just a moment away."
                        size="large"
                    />
                ) : isConnected ? (
                    <Outlet />
                ) : (
                    <ErrorState
                        title="Unable to connect to Swadion"
                        message={error}
                        onRetry={checkHealth}
                        retryText="Try Again"
                    />
                )}
            </div>

            {isConnected && (
                <div className="footer">
                    <Footer />
                </div>
            )}
        </div>
    );
};
