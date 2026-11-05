
import "./ErrorState.css";

const ErrorState = ({
    title = "Unable to connect to Swadion",
    message = "Our kitchen is taking a little longer to open. Please try again.",
    onRetry,
    retryText = "Try Again",
    fullScreen = false,
}) => {
    return (
        <div
            className={`swadion-error ${
                fullScreen ? "swadion-error--fullscreen" : ""
            }`}
            role="alert"
        >
            <div className="swadion-error__icon">
                <svg
                    viewBox="0 0 24 24"
                    width="34"
                    height="34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 9a15 15 0 0 1 18 0" />
                    <path d="M6.5 12.5a10 10 0 0 1 11 0" />
                    <path d="M10 16a4 4 0 0 1 4 0" />
                    <path d="M12 20h.01" />
                    <path d="m3 3 18 18" />
                </svg>
            </div>

            <h3 className="swadion-error__title">
                {title}
            </h3>

            <p className="swadion-error__message">
                {message}
            </p>

            {onRetry && (
                <button
                    type="button"
                    className="swadion-error__button"
                    onClick={onRetry}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 7v5h-5" />
                        <path d="M4 17v-5h5" />
                        <path d="M5.6 9a7 7 0 0 1 11.8-2L20 12" />
                        <path d="M18.4 15a7 7 0 0 1-11.8 2L4 12" />
                    </svg>

                    {retryText}
                </button>
            )}

            <span className="swadion-error__brand">
                GOOD FOOD · GREAT STORIES · SWADION
            </span>
        </div>
    );
};

export default ErrorState;
