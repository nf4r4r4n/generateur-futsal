import { colors } from "@/constants/theme";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

const tabBarOptions = [
  {
    name: "index",
    title: "Accueil",
    icon: "home",
    bg: colors.green["50"],
    color: colors.green["600"],
  },
  {
    name: "import-players",
    title: "Importer",
    icon: "upload",
    bg: colors.blue["50"],
    color: colors.blue["600"],
  },
];

export default function RootLayout() {
  return (
    <Tabs>
      {tabBarOptions.map(
        ({ name, title, icon, bg, color: textColor }, index) => (
          <Tabs.Screen
            key={index}
            name={name}
            options={{
              title,
              tabBarIcon: ({ color }) => (
                <Octicons name={icon as any} color={color} />
              ),
              tabBarActiveBackgroundColor: bg,
              tabBarActiveTintColor: textColor,
              headerShown: false,
            }}
          />
        ),
      )}
    </Tabs>
  );
}
