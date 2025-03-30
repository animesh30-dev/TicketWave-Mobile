import { Stack } from "expo-router";

export default function TicketLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Events" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
      <Stack.Screen name="event/[id]" />
    </Stack>
  );
}
