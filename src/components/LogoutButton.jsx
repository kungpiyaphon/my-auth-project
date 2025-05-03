import { useMsal } from "@azure/msal-react";

function LogoutButton() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect(); // หรือ instance.logoutPopup();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
}

export default LogoutButton;