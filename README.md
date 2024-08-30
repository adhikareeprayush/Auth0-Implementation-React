# 0Auth-Implementation-React

This project demonstrates the implementation of Auth0 authentication in a React application. It provides a simple interface for users to log in and out using Auth0's authentication services.

## Features

- User authentication with Auth0
- Conditional rendering based on authentication status
- Display of user information when authenticated

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- An Auth0 account and application set up

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/adhikareeprayush/0Auth-Implementation-React.git
   ```

2. Navigate to the project directory:
   ```
   cd 0Auth-Implementation-React
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Auth0 credentials:
   ```
   VITE_DOMAIN=your-auth0-domain
   VITE_CLIENT_ID=your-auth0-client-id
   ```

## Usage

To run the application locally:

```
npm run dev
```

This will start the development server, and you can view the application in your web browser at `http://localhost:5173` (or whichever port Vite assigns).

## Project Structure

- `src/App.jsx`: Main application component
- `src/main.jsx`: Entry point of the application, sets up Auth0Provider

## Key Components

### App.jsx

This is the main component of the application. It uses the `useAuth0` hook to access authentication-related functions and user information.

```jsx
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  // ... (rest of the component code)
}

export default App
```

### main.jsx

This file sets up the Auth0Provider and wraps the main App component.

```jsx
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
```

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue in the GitHub repository.