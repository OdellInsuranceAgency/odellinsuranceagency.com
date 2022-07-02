import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";
import AskUsNow from "../components/AskUsNow";
import TestimonialBox from "../components/TestimonialBox";

const Benefits: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Benefits - Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page="Benefits"/>
            <div id="picturebar">
                <div className="picture_first"><img src="/pictures/healthcare5.jpg" height="181px" alt="Health Care"/>
                </div>
                <div className="picture"><img src="/pictures/insurance.jpg" height="181px" alt="Insurance"/></div>
                <div className="picture_last"><img src="/pictures/cannonbeach.jpg" height="181px" alt="Cannon Beach"/>
                </div>
                <p className="endfloat"></p>
            </div>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding">
                        <div style={{float: "right", width: "352px"}}>
                            <AskUsNow/>
                            <TestimonialBox author="Paul Madden"
                                            authorTitle={<>Vice President<br/>Madden Industrial Craftsmen Inc.</>}>
                                &quot;Over the past several years we have used Robert Odell for our employee benefits
                                programs and he has done an outstanding job making sure everything goes as smooth as
                                possible from start to finish.&nbsp;
                                Robert brings a lot of knowledge to the table and has become an integral part of our
                                insurance program.&nbsp;
                                I highly recommend him.&quot;
                            </TestimonialBox>
                        </div>
                        <div style={{float: "left", width: "480px", padding: "10px 20px 40px"}}>
                            <p>We are an independent, local benefit consulting firm providing customized benefit
                                programs including but not limited to:</p>
                            <div style={{float: "left", paddingLeft: "30px"}}>
                                <ul>
                                    <li>Medical Plans (including prescription &amp; vision)</li>
                                    <li>Dental Plans</li>
                                    <li>Fully Insured &amp; Alternative Financing Arrangements</li>
                                    <li>Flexible Spending Accounts</li>
                                    <li>Health Savings Accounts</li>
                                    <li>Life &amp; AD&amp;D Insurance</li>
                                    <li>Disability Plans</li>
                                    <li>Long Term Care Plans</li>
                                    <li>Disease Management &amp; Wellness Programs</li>
                                    <li>Employee Assistance Program (EAP)</li>
                                    <li>International Benefit Management Coverage</li>
                                    <li>Customized Employee Communications</li>
                                    <li>Voluntary &amp; Worksite Programs</li>
                                    <li>Executive Plans</li>
                                    <li>Business Travel Plans</li>
                                </ul>
                            </div>
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

export default Benefits;
