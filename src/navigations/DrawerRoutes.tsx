import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
//import { Feather } from '@expo/vector-icons';


const DrawerNav = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
    return (
        <DrawerNav.Navigator 
            screenOptions={{    title: 'home', 
                              //  drawerLabelStyle: {marginLeft: -25, fontSize: 15}, 
                              //  drawerActiveBackgroundColor: '#012257',
                              //  drawerActiveTintColor: '#fff',
                              //  drawerInactiveTintColor: '#333'
                            }} 
            //drawerContent={CustomDrawer}
            >
            <DrawerNav.Screen 
                name="home"
                component={Home}
                options={{
                    //drawerIcon: ({ color, size }) => <Feather name="home" color={ color } size={ size }/>,
                    drawerLabel: 'Home'
                }}
            />
        </DrawerNav.Navigator>
    )

}

export default DrawerRoutes;