import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Mobile from './src/screen/Slash/index';
import Register from './src/screen/Register/index';
import Login from './src/screen/Login/index';
import Home from './src/screen/Home/index'
import Agronomy from './src/screen/Agronomy/index'
import Expert from './src/screen/Expert/index'
import Account from './src/screen/Account/index'
import Season from './src/screen/Season/index'
import Know_area from './src/screen/know _area/index'
import Conversations from './src/screen/Conversations/index'
import Announcement from './src/screen/Announcement/index'
import Specialadvice from './src/screen/Specialadvice/index'
import Expensetracker from './src/screen/Expensetracker/index'
import Instantlisting from './src/screen/Instantlisting/index'
import General from './src/screen/General/index'
import Farm from './src/screen/Farm/index'
import Seed from './src/screen/Seed/index'
import Nutrients from './src/screen/Nutrients/index'
import Water from './src/screen/Water/index'
import Insect from './src/screen/Insect/index'
import Disease from './src/screen/Disease/index'
import Weed from './src/screen/Weed/index'
import Storage from './src/screen/Storage/index'
import Specialcase from './src/screen/Specialcase/index'
import Askquestions from './src/screen/Askquestions/index'
import Profile from './src/screen/Profile/index'
import Changepassword from './src/screen/Changepassword/index'
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account" >
      
        <Stack.Screen name="Mobile" component={Mobile}
          options={{ headerShown: false }} />

        <Stack.Screen name="Register" component={Register}
          options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={Home}
          options={{
            title: "मुख पृष्ठ",
            headerShadowVisible: false,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />

        <Stack.Screen name="Agronomy" component={Agronomy}
          options={{
            title: "कृषिविज्ञान",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />

        <Stack.Screen name="Expert" component={Expert}
          options={{
            title: "एक विशेषज्ञ से पूछें",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />

        <Stack.Screen name="Account" component={Account}
          options={{
            title: "खाता",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />

        <Stack.Screen name="Season" component={Season}
          options={{
            title: "मौसम",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />

        <Stack.Screen name="Know_area" component={Know_area}
          options={{
            title: "अपने क्षेत्र को जानें",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Conversations" component={Conversations}
          options={{
            title: "वार्तालाप",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Announcement" component={Announcement}
          options={{
            title: "घोषणा",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Specialadvice" component={Specialadvice}
          options={{
            title: "विशेष सलाह",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Expensetracker" component={Expensetracker}
          options={{
            title: "व्यय ट्रैकर",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Instantlisting" component={Instantlisting}
          options={{
            title: "त्वरित सूची",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="General" component={General}
          options={{
            title: "सामान्य",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Farm" component={Farm}
          options={{
            title: "खेत",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Seed" component={Seed}
          options={{
            title: "बीज",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Nutrients" component={Nutrients}
          options={{
            title: "पोषक तत्त्व",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Water" component={Water}
          options={{
            title: "पानी",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Insect" component={Insect}
          options={{
            title: "कीट",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Disease" component={Disease}
          options={{
            title: "बीमारी",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Weed" component={Weed}
          options={{
            title: "खर-पतवार",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Storage" component={Storage}
          options={{
            title: "संचयन",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Specialcase" component={Specialcase}
          options={{
            title: "संचयन",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Askquestions" component={Askquestions}
          options={{
            title: "संचयन",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Profile" component={Profile}
          options={{
            title: "उपयोगकर्ता रूपरेखा",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />
        <Stack.Screen name="Changepassword" component={Changepassword}
          options={{
            title: "पासवर्ड बदलें",
            headerShadowVisible: false,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#5D1916',
            },
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
