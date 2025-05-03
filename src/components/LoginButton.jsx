import { PublicClientApplication } from "@azure/msal-browser";

export default function LoginButton() {
  const msalInstance = new PublicClientApplication({
    auth: {
      clientId: "45b0ef9e-ac60-48c8-9584-9fcbcc0081e9",
      authority:
        "https://login.microsoftonline.com/8a12ec8d-a0b2-401f-8170-68b3eb9792af",
      redirectUri: "http://localhost:5173",
    },
  });
  const handleLogin = async () => {
    try {
      await msalInstance.initialize();
      const loginResponse = await msalInstance.loginPopup({
        scopes: ["user.read"],
      });
      console.log("Logged in user:", loginResponse.account);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={handleLogin}
    >
      เข้าสู่ระบบด้วย Microsoft
    </button>
  );
}
