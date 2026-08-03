import "./LoadingOverlay.css";

export default function LoadingOverlay() {
    return (
        <div className="loading-overlay">

            <div className="loader-card">

                <div className="spinner"></div>

                <h2>HealthGuard AI</h2>

                <p>
                    Analyzing your health profile...
                </p>

            </div>

        </div>
    );
}