import lightBaseTheme from 
'material-ui/styles/baseThemes/lightBaseTheme';
import merge from 'lodash.merge';

const colors = require('material-ui/styles/colors');
const muiTheme = {
palette: {
  textColor: colors.grey700,
  primary1Color: '#3a6088',
  accent1Color: colors.redA200,
  accent2Color: colors.redA400,
  accent3Color: colors.redA100,
},
table: {
  height: 'calc(100vh - 122px)'
},
tableHeaderColumn: {
  fontSize: '14px'
},
container: {
  width: 500,
  textAlign: 'center',
  paddingTop: 10,
  float: "none",
  margin: "auto",
},


};
const theme = merge(lightBaseTheme, muiTheme)
export default theme;