import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">ระบบซ่อมมือถือ</h1>
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default App;
