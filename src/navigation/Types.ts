import { ListItem } from '../types';

export type RootStackParamList = {
  Splash: undefined;
  Dashboard: undefined;
  Landing: undefined;
  Introduction: undefined;  // If you have a separate screen for it in the stack
  Detail: { item: ListItem };
};
