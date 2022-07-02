import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";

const Bob: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Bob - Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page={null}/>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding" style={{textAlign: "center"}}>
                        <img src="/pictures/tennis.jpg" height="800px" title="Bob in Action!"/>
                    </div>
                </div>
            </div>
            <div id="footer">
                <Copyright/>
            </div>
        </div>
    </div>;
};

export default Bob;
