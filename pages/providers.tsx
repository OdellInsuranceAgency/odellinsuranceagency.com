import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";

const Providers: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Providers - Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page="Providers"/>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding">
                        <div style={{float: "left", width: "450px"}}>
                            <a href="https://www.or.regence.com">
                                <div className="logo"><img src="/images/regence.jpg" alt="regence"/></div>
                            </a>
                            <a href="https://www.anthem.com">
                                <div className="logo"><img src="/images/anthem.jpg" alt="anthem"/></div>
                            </a>
                            <a href="https://www.kaiserpermanente.org">
                                <div className="logo"><img src="/images/kaiser.jpg" alt="kaiser"/></div>
                            </a>
                            <a href="https://www.providence.org">
                                <div className="logo"><img src="/images/providence.jpg" alt="providence"/></div>
                            </a>
                            <a href="https://www.prudential.com">
                                <div className="logo"><img src="/images/prudential.jpg" alt="prudential"/></div>
                            </a>
                            <a href="https://www.healthnet.com">
                                <div className="logo"><img src="/images/helth net.jpg" alt="health net"/></div>
                            </a>
                            <a href="https://www.cigna.com">
                                <div className="logo"><img src="/images/cigna.gif" alt="cigna"/></div>
                            </a>
                            <a href="https://www.pacificsource.com">
                                <div className="logo"><img src="/images/pacific.jpg" alt="pacific"/></div>
                            </a>
                            <a href="https://www.reliancestandard.com">
                                <div className="logo"><img src="/images/reliance.jpg" alt="Reliance Standard"/></div>
                            </a>
                            <a href="https://www.lfg.com">
                                <div className="logo"><img src="/images/lincoln.jpg" alt="lincoln"/></div>
                            </a>
                            <a href="https://www.metlife.com">
                                <div className="logo"><img src="/images/met.jpg" alt="met"/></div>
                            </a>
                            <a href="https://www.ameritas.com">
                                <div className="logo"><img src="/images/ameritas.jpg" alt="ameritas"/></div>
                            </a>
                        </div>
                        <div style={{float: "right", width: "450px"}}>
                            <a href="https://www.wa.regence.com">
                                <div className="logo"><img src="/images/regence washington.jpg"
                                                           alt="regence washington"/></div>
                            </a>
                            <a href="https://www.premera.com">
                                <div className="logo"><img src="/images/premera.jpg" alt="premera"/></div>
                            </a>
                            <a href="https://www.odscompanies.com">
                                <div className="logo"><img src="/images/ods.jpg" alt="ods"/></div>
                            </a>
                            <a href="https://www.lifewise.com">
                                <div className="logo"><img src="/images/lifewise.jpg" alt="lifewise"/></div>
                            </a>
                            <a href="https://www.uhc.com">
                                <div className="logo"><img src="/images/united.jpg" alt="united"/></div>
                            </a>
                            <a href="https://www.principal.com">
                                <div className="logo"><img src="/images/principal.jpg" alt="principal"/></div>
                            </a>
                            <a href="https://www.guardianlife.com">
                                <div className="logo"><img src="/images/guardian.jpg" alt="guardian"/></div>
                            </a>
                            <a href="https://www.standardinsurance.com">
                                <div className="logo"><img src="/images/the standard.jpg" alt="the standard"/></div>
                            </a>
                            <a href="https://www.aetna.com">
                                <div className="logo"><img src="/images/aetna.jpg" alt="aetna"/></div>
                            </a>
                            <a href="https://www.mutualofomaha.com">
                                <div className="logo"><img src="/images/omaha.jpg" alt="mutual of omaha"/></div>
                            </a>
                            <a href="https://www.unum.com">
                                <div className="logo"><img src="/images/unum.jpg" alt="unum"/></div>
                            </a>
                            <a href="https://www.iacusa.com">
                                <div className="logo"><img src="/images/ihc.jpg" alt="ihc"/></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clearing">&nbsp;</div>
            </div>
            <div id="footer">
                <Copyright/>
            </div>
        </div>
    </div>;
};

export default Providers;
