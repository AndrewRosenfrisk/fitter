import {render, screen} from '@testing-library/react'
import App from './App'

describe('App component', () => {
    test('renders fitter header', () => {
        render(<App />);
        const h1Element = screen.getByText(/fitter/i);
        expect(h1Element).toBeInTheDocument();
    })

})