import { connect } from 'react-redux';

import { Header } from '../components/Header';

const mapStateToProps = state => ({ colors: state.theme.colors });

export default connect(mapStateToProps)(Header);
