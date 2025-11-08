import { useContext } from 'react';
import { AuthContext } from './Authcontext'; // Import the context object

  export function useAuth() {
    const context = useContext(AuthContext);

    // Optional: Add a check for the provider, which is good practice
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
} 