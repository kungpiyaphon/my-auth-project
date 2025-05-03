import { PublicClientApplication } from "@azure/msal-browser";

export default function LoginButton() {
  const msalInstance = new PublicClientApplication({
    auth: {
      clientId: import.meta.env.VITE_CLIENT_ID,
      authority:
        `https://login.microsoftonline.com/${import.meta.env.VITE_TENANT_ID}`,
      redirectUri: import.meta.env.VITE_REDIRECT_URI,
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
