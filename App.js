import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignedInStack from "./navigation";
import { PortalProvider } from "@gorhom/portal";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <SignedInStack />
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
