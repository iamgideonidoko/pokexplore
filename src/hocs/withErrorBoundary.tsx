import type { FC, ErrorInfo } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const withErrorBoundary = (Component: FC) => {
  const logError = (error: Error, info: ErrorInfo) => {
    console.error("Caught an error:", error, info);
  };
  function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
    // ! Call `resetErrorBoundary()` to reset the error boundary and retry the render.
    return (
      <div
        role="alert"
        className="flex min-h-screen flex-col items-center justify-center gap-6 text-center"
      >
        <p className="text-xl font-medium">Something went wrong:</p>
        <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>
          {error.message}
        </pre>
        <button onClick={resetErrorBoundary} className="py-2">
          Try again
        </button>
      </div>
    );
  }
  const WithErrorBoundary = () => (
    <ErrorBoundary fallbackRender={fallbackRender} onError={logError}>
      <Component />
    </ErrorBoundary>
  );
  return WithErrorBoundary;
};

export default withErrorBoundary;
