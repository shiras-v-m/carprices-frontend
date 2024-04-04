import MainLayout from "../layout/MainLayout";
import Link from "next/link";


export default function Custom404() {
    return (
        <MainLayout><div id="notfound">
            <div className="notfound-bg">
                <div />
                <div />
                <div />
                <div />
            </div>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page Not Found</h2>
                <p>
                    The page you are looking for might have been removed had its name
                    changed or is temporarily unavailable.
                </p>
                <Link href="/">Homepage</Link>
                
            </div>
        </div></MainLayout>
    );
}