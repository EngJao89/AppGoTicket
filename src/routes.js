import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

const mainRoutes = {
    Login: {
      name: 'Login',
      screen: Login,
    },
    List: {
      name: 'List',
      screen: List,
    },
    Book: {
      name: 'Book',
      screen: Book,
    }
  }

  const mainNavigator = createSwitchNavigator(mainRoutes, { initialRouteName: 'Login'} )

export default createAppContainer(mainNavigator)