import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { MenuButton } from '../components/MenuButton';

const mapStateToProps = state => ({ colors: state.settings.colors });

export default withNavigation(connect(mapStateToProps)(MenuButton));
