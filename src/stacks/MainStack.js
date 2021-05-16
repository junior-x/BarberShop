import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigatior>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigatior>
);

///export default MainStack();