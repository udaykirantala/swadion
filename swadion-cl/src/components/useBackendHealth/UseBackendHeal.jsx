
import { useState } from "react";
import { checkBackendHealth } from "../api/healthApi";

const useBackendHeal = () => {
    const [isChecking, setIsChecking] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState("");

    const checkHealth = async () => {
        setIsChecking(true);
        setError("");

        try {
            await checkBackendHealth();
            setIsConnected(true);
            return true;
        } catch (err) {
            setIsConnected(false);
            setError(err.message);
            return false;
        } finally {
            setIsChecking(false);
        }
    };

    return {
        isChecking,
        isConnected,
        error,
        checkHealth,
    };
};

export default useBackendHeal;
