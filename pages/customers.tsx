import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";

const Customers: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Customers - Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page="Customers"/>
            <div id="picturebar">
                <div className="picture_first"><img src="/pictures/building.jpg" height="132px" alt="Construction"/>
                </div>
                <div className="picture"><img src="/pictures/apples.jpg" height="132px" alt="Produce"/></div>
                <div className="picture"><img src="/pictures/lasercutter.jpg" height="132px" alt="Fabribation"/></div>
                <div className="picture"><img src="/pictures/diecast.jpg" height="132px" alt="Die Casting"/></div>
                <div className="picture"><img src="/pictures/roses.jpg" height="132px" alt="Roses"/></div>
                <div className="picture_last"><img src="/pictures/scrapbooks.jpg" height="132px" alt="Art Supplies"/>
                </div>
                <p className="endfloat"></p>
            </div>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding">
                        <div style={{float: "left", width: "450px"}}>
                            <a href="https://www.milwaukeecrane.com">
                                <div className="logo">
                                    <img src="/images/milwaukee crane.jpg" alt="Milwaukee Crane"/>
                                </div>
                            </a>
                            <a href="https://www.tvtdiecast.com">
                                <div className="logo">
                                    <img src="/images/tvtdiecasting.jpg" alt="TVT Die Casting"/>
                                </div>
                            </a>
                            {/*<a href="https://www.lambsmarkets.com">*/}
                            {/*    <div className="logo"><img src="/images/lambs.jpg" alt="Lambs Markets"/></div>*/}
                            {/*</a>*/}
                            <a href="https://www.rbslumber.com/">
                                <div className="logo">
                                    <img src="/images/rosenbergbuilders.jpg" alt="Rosenberg Builders"/>
                                </div>
                            </a>
                            <a href="https://www.da-pdx.com">
                                <div className="logo">
                                    <img src="/images/dermatologyassociates.jpg" alt="Dermatology Associates"/>
                                </div>
                            </a>
                            <a href="https://vanportdesign.com/">
                                <div className="logo">
                                    <img src="/images/vanportdesign.jpg" alt="Van-Port Design"/>
                                </div>
                            </a>
                        </div>
                        <div style={{float: "right", width: "450px"}}>
                            <a href="https://srcfab.com/">
                                <div className="logo">
                                    <img src="/images/src.jpg" alt="Scientific Research Company"/>
                                </div>
                            </a>
                            {/*<a href="https://www.pro-lineswa.com">*/}
                            {/*    <div className="logo"><img src="/images/pro line.jpg" alt="Pro-Lines"/></div>*/}
                            {/*</a>*/}
                            <a href="https://www.wereorganized.com/">
                                <div className="logo">
                                    <img src="/images/wereorganized.jpg" alt="We're Organized"/>
                                </div>
                            </a>
                            <a href="https://www.crystalgreenslandscape.com">
                                <div className="logo">
                                    <img src="/images/crystalgreens.jpg" alt="Crystal Greens Landscaping"/>
                                </div>
                            </a>
                            {/*<a href="https://tsgrayconstruction.com">*/}
                            {/*    <div className="logo"><img src="/images/tsgrayconstruction.jpg"*/}
                            {/*                               alt="TS Gray Construction"/></div>*/}
                            {/*</a>*/}
                            <a href="http://www.osmpi.com/home.html">
                                <div className="logo">
                                    <img src="/images/oregonscrew.jpg" alt="Oregon Screw Machine Products Inc."/>
                                </div>
                            </a>
                            <a href="http://www.precisionpowderinc.com">
                                <div className="logo">
                                    <img src="/images/precisionpowder.jpg" alt="Precision Powder Coating, Inc."/>
                                </div>
                            </a>
                        </div>
                        {/*Removed Items*/}
                        {/*<a href="http://www.internationalgarden.com"><div class="logo"><img src="/images/internationalgarden.jpg" alt="International Garden Products" /></div></a>*/}
                        {/*<a href="http://www.iselinursery.com"><div class="logo"><img src="/images/iselinursery.jpg" alt="Iseli Nursery" /></div></a>*/}
                        {/*<a href="http://www.weeksroses.com"><div class="logo"><img src="/images/roses.jpg" alt="Weeks Roses" /></div></a>*/}
                        {/*<a href="http://www.rgpi.net"><div class="logo"><img src="/images/robertgraypartners.jpg" alt="Robert Gray Partners" /></div></a>*/}
                        {/*<a href="http://www.c2f.com"><div class="logo"><img src="/images/c2f.jpg" alt="C2F" /></div></a>*/}
                        {/*<a href="http://www.mici.com"><div class="logo"><img src="/images/maddenlogo.jpg" alt="Madden Industrial Craftsmen" /></div></a>*/}
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

export default Customers;
