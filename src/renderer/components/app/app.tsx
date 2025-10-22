import { AppProps } from './app.types';
import './app.css';

/**
 * Main App component - think of it as main in other programs but App is "main" for the renderer
 * 
 * @param props {@link AppProps}
 * @returns 
 */
export default function App (props: AppProps) {

    return (
        <div className='App-full-window-background'>
            Hello World!
        </div>
    );
}