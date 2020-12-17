import { extendTheme } from "native-base";
import { colorTheme } from './colors';
import { componentTheme } from './components';
export const kitchensinkTheme = extendTheme({
  colors: { ...colorTheme },
  components: { ...componentTheme },
});
