import AuthProvider from "./authprovider/authProvider";
import Routes from "./routes";



function App() {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
}

export default App;