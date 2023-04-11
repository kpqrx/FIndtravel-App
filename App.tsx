import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Bookmarks, List, Spendings } from "./screens";
import Header from "./components/Header";
import {
  BanknotesIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import TabBarButton from "./components/TabBarButton/TabBarButton";
import { black } from "tailwindcss/colors";

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tabs.Navigator
        screenOptions={{
          header: Header,
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabBarButton {...props} />,
          tabBarActiveTintColor: black,
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: PlusCircleIcon }}
        />
        <Tabs.Screen
          name="List"
          component={List}
          options={{ tabBarIcon: ClipboardDocumentCheckIcon }}
        />
        <Tabs.Screen
          name="Spendings"
          component={Spendings}
          options={{ tabBarIcon: BanknotesIcon }}
        />
        <Tabs.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{ tabBarIcon: BookmarkIcon }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
