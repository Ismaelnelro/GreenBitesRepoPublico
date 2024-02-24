import { Footer, Header } from '../containers'
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;