
import "./Loading.css";

const Loading = ({
    message = "Loading...",
    description = "Please wait a moment.",
    fullScreen = false,
    size = "medium",
}) => {
    return (
        <div
            className={`swadion-loading ${
                fullScreen ? "swadion-loading--fullscreen" : ""
            }`}
            role="status"
            aria-live="polite"
        >
            <div className={`swadion-loader swadion-loader--${size}`}>
                <span className="swadion-loader__ring"></span>
                <span className="swadion-loader__dot"></span>
            </div>

            <h3 className="swadion-loading__title">
                {message}
            </h3>

            {description && (
                <p className="swadion-loading__description">
                    {description}
                </p>
            )}

            <span className="swadion-loading__brand">
                GOOD FOOD · GREAT STORIES · SWADION
            </span>
        </div>
    );
};

export default Loading;
