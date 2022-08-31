// import { Routes, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Home from "./routes/home/home.component";
// import Navigation from "./routes/navigation/navigation.component";
// import Authentication from "./routes/authentication/authentication.component";
// import Shop from "./routes/shop/shop.component";
// import Checkout from "./routes/checkout/checkout.component";
// import { useEffect } from "react";
// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangedListener,
// } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from "./store/user/user.action";

// const App = () => {
//   const dispatch = useDispatch();
//   console.log("kek");
//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }

//       console.log(setCurrentUser(user));
//       dispatch(setCurrentUser(user));
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path="shop/*" element={<Shop />} />
//         <Route path="auth" element={<Authentication />} />
//         <Route path="checkout" element={<Checkout />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
