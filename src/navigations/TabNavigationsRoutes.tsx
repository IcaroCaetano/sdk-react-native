import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigationsRoutes: React.FC = () => {
    return (

        <Tab.Navigator
            initialRouteName="MainHome"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: 'absolute' },
            }}
        >
            <Tab.Screen name="Mais" component={Home}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })
                }
                options={{
                   // tabBarIcon: ({ color, size }) => (
                      //<Icon name="align-justify" color={color} size={size} />
                   // )
                }
                }
            />

        </Tab.Navigator>
    )
}


export default TabNavigationsRoutes;