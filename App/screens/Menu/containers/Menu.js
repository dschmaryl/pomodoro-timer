import { connect } from 'react-redux';

import { Menu } from '../components/Menu';

const mapStateToProps = state => ({ colors: state.colors.colors });

export default connect(mapStateToProps)(Menu);
