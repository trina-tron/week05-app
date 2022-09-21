import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

const Layout= ({children, home}) => {
    return (  
        <div>
            <Nav/>
            <main>{children}</main>
        
            {/* adding a home button to any page not home */}
            {!home &&(
                <Link href="/">
                    <a className="btn btn-primary mt-3">Back Home</a>
                </Link>
            )}
            <Footer/>
        </div>
    );
}
 
export default Layout;