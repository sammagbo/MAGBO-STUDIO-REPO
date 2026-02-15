import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, Terminal } from "lucide-react";

interface Props {
      children: ReactNode;
}

interface State {
      hasError: boolean;
      error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
      public state: State = {
            hasError: false,
            error: null,
      };

      public static getDerivedStateFromError(error: Error): State {
            return { hasError: true, error };
      }

      public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
            console.error("Uncaught error:", error, errorInfo);
      }

      public render() {
            if (this.state.hasError) {
                  return (
                        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-mono">
                              <div className="max-w-2xl w-full bg-slate-900 border border-red-500/50 rounded-lg p-8 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse" />

                                    <div className="flex items-center gap-4 mb-6 text-red-500">
                                          <AlertTriangle className="w-12 h-12" />
                                          <h1 className="text-3xl font-bold tracking-tighter">Running System Failure Protocol</h1>
                                    </div>

                                    <div className="bg-black/50 p-4 rounded border border-red-500/20 mb-6 font-mono text-sm text-red-400">
                                          <p className="mb-2 uppercase tracking-widest text-xs text-red-600">Error Log:</p>
                                          <p>{this.state.error?.toString()}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                          <Terminal className="w-4 h-4" />
                                          <span>System halted. Please contact administration or reload manually.</span>
                                    </div>

                                    <button
                                          onClick={() => window.location.reload()}
                                          className="mt-6 px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded transition-all uppercase tracking-wider text-sm font-bold"
                                    >
                                          Reboot System
                                    </button>
                              </div>
                        </div>
                  );
            }

            return this.props.children;
      }
}
