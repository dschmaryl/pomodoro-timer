import { connect } from 'react-redux';

import { Start } from './Start';

const mapStateToProps = state => ({ colors: state.colors.colors });

export default connect(mapStateToProps)(Start);
