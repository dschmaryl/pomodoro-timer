import { connect } from 'react-redux';

import { Header } from '../components/Header';

const mapStateToProps = state => ({ colors: state.colors.colors });

export default connect(mapStateToProps)(Header);
