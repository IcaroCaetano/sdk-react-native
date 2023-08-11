import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import TabNavigationsRoutes from './TabNavigationsRoutes';
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

        <DrawerNav.Screen name="Home" component={TabNavigationsRoutes} 
                options={{ drawerItemStyle: { display: 'none' } }} />
            {
             //   flows.map((flows) => {
             //   return (
              //      <Drawer.Screen key={flows.name} name={flows.name} component={GeneralTabNavigation} initialParams={{ screen: `${flows.link.address}` }}
               //     options={{
              //          drawerIcon: ({ color }) => (
              //          <Icon name={flows.icon} size={20} color={color} />
              //          ),
              //          drawerItemStyle: { display: `${flows.navVisible ? "flex" : "none"}`, borderBottomWidth: 2, borderBottomColor: "#0000001A" },
              //          drawerLabelStyle: { fontSize: 15, fontWeight: "600" }
               //     }}
               //     />
               // )
                //})
            }
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