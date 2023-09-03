import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignedInStack from "./navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SignedInStack />
    </GestureHandlerRootView>
  );
}
