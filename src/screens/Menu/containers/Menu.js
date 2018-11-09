import { connect } from 'react-redux';

import { Menu } from '../components/Menu';

const mapStateToProps = state => ({ colors: state.settings.colors });

export default connect(mapStateToProps)(Menu);
