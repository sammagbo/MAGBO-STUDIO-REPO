import { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
      children: ReactNode;
}

interface State {
      hasError: boolean;
}

// Shown only if a section crashes. The language comes from <html lang>, which the language context keeps up to date.
const TEXT = {
      fr: { title: "La page n'a pas pu s'afficher.", reload: 'Recharger la page' },
      pt: { title: 'A página não pôde ser exibida.', reload: 'Recarregar a página' },
      en: { title: 'The page could not be displayed.', reload: 'Reload the page' },
};

const pageLanguage = (): keyof typeof TEXT => {
      const lang = typeof document === 'undefined' ? '' : document.documentElement.lang;
      return lang === 'fr' || lang === 'pt' ? lang : 'en';
};

export class ErrorBoundary extends Component<Props, State> {
      public state: State = { hasError: false };

      public static getDerivedStateFromError(): State {
            return { hasError: true };
      }

      public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
            console.error('Uncaught error:', error, errorInfo);
      }

      public render() {
            if (!this.state.hasError) return this.props.children;
            const text = TEXT[pageLanguage()];
            return (
                  <div className="error-screen" role="alert">
                        <div className="es-inner">
                              <p className="es-title">{text.title}</p>
                              <button type="button" className="es-button" onClick={() => window.location.reload()}>
                                    {text.reload}
                              </button>
                        </div>
                  </div>
            );
      }
}
