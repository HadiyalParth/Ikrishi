import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationRoutes} from '../constant';
import Splash from '../screen/Splash';
import Login from '../screen/Auth/Login';
import Register from '../screen/Auth/Register';
import ForgetPassword from '../screen/Auth/ForgetPassword';
import verifyOtp from '../screen/Auth/ForgetPassword/verifyOtp';
import setNewPassword from '../screen/Auth/ForgetPassword/setNewPassword';
import BottomNavigation from './BottomNavigation';
import ChoosePickUpPoint from '../screen/BookRide/ChoosePickUpPoint';
import ChooseRide from '../screen/BookRide/ChooseRide';
import CancelBooking from '../screen/BookRide/CancelBooking';
import DriverVaccinated from '../screen/BookRide/DriverVaccinated';
import DriverContact from '../screen/BookRide/DriverContact';
import Wallet from '../screen/BookRide/Wallet';
import BookingSummary from '../screen/BookRide/BookingSummary';
import BookRide from '../screen/BookRide/BookRide';
import CarRental from '../screen/CarRental/CarRental';
import CarDetails from '../screen/CarRental/CarDetails';
import TripDates from '../screen/CarRental/TripDates';
import FullMap from '../screen/CarRental/FullMap';
import CarRentalBookRide from '../screen/CarRental/BookingSummary';
import Congratulations from '../screen/CarRental/Congratulations';
import OrderGrocery from '../screen/OrderGrocery';
import BookingDetails from '../screen/Booking/BookingDetails';
import Message from '../screen/Booking/Message';
import EditProfile from '../screen/Profile/EditProfile';
import Settings from '../screen/Profile/Settings/Settings';
import ProfileWallet from '../screen/Profile/Wallet';
import TopUp from '../screen/Profile/TopUp';
import Notifications from '../screen/Notifications';
import Support from '../screen/Profile/Support/Support';
import SendEmail from '../screen/Profile/Support/SendEmail';

import {StripeProvider} from '@stripe/stripe-react-native';

const Stack = createStackNavigator();
export default function MainNavigation() {
  return (
    <StripeProvider
      publishableKey="pk_test_51NKiySCAHcOaAjfWoqybzkj97pejCA44SPO5GOWdxZGFVTLPMeolyhtR6qZOcsedEWRGCZQ2gLYcjbctTBoA7HJG00Y58FZsof"
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationRoutes.splash}>
          <Stack.Screen
            name={NavigationRoutes.splash}
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.login}
            component={Login}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.register}
            component={Register}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.forgetPassword}
            component={ForgetPassword}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.verifyOtp}
            component={verifyOtp}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.setNewPassword}
            component={setNewPassword}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.bottomNavigation}
            component={BottomNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.choosePickUpPoint}
            component={ChoosePickUpPoint}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.chooseRide}
            component={ChooseRide}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.cancelBooking}
            component={CancelBooking}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.driverVaccinated}
            component={DriverVaccinated}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.driverContact}
            component={DriverContact}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.wallet}
            component={Wallet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.bookingSummary}
            component={BookingSummary}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.bookRide}
            component={BookRide}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.congratulations}
            component={Congratulations}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.fullMap}
            component={FullMap}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.carRentalBookRide}
            component={CarRentalBookRide}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.carRental}
            component={CarRental}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.carDetails}
            component={CarDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.tripDates}
            component={TripDates}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.orderGrocery}
            component={OrderGrocery}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.bookingDetails}
            component={BookingDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.message}
            component={Message}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.editProfile}
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.settings}
            component={Settings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.profileWallet}
            component={ProfileWallet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.topUp}
            component={TopUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.notifications}
            component={Notifications}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.support}
            component={Support}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={NavigationRoutes.sendEmail}
            component={SendEmail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}
