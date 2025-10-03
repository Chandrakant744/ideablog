import { ListItem } from '../types';

export type RootStackParamList = {
  Splash: undefined;
  Dashboard: undefined;
  Landing: undefined;
  Introduction: undefined; 
  Detail: { item: ListItem };
};
