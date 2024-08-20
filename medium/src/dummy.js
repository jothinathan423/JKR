import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

export const Google = () => {
  return (
    <>
        <GoogleOAuthProvider clientId="286184197739-22d7vh2a4vvectj34baec2gnn1pas58s.apps.googleusercontent.com">
        <App></App>

      </GoogleOAuthProvider>

      </>
  );
}