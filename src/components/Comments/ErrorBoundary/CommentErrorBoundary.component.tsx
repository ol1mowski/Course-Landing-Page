import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class CommentErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in comments:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          <h3 className="font-medium">Wystąpił błąd</h3>
          <p>Przepraszamy, nie udało się załadować komentarzy.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 text-sm underline"
          >
            Spróbuj ponownie
          </button>
        </div>
      );
    }

    return this.props.children;
  }
} 