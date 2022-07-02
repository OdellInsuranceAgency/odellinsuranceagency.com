import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";
import AskUsNow from "../components/AskUsNow";
import TestimonialBox from "../components/TestimonialBox";

const Services: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Services - Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page="Services"/>
            <div id="picturebar">
                <div className="picture_first">
                    <img src="/pictures/healthcare1.jpg" height="156px" alt="Health Care"/>
                </div>
                <div className="picture">
                    <img src="/pictures/healthcare2.jpg" height="156px" alt="Health Care"/>
                </div>
                <div className="picture">
                    <img src="/pictures/healthcare4.jpg" height="156px" alt="Health Care"/>
                </div>
                <div className="picture">
                    <img src="/pictures/hurtpiggy.jpg" height="156px" alt="Recovering"/>
                </div>
                <div className="picture_last">
                    <img src="/pictures/healthcare6.jpg" height="156px" alt="Health Care"/>
                </div>
                <p style={{clear: "left"}}></p>
            </div>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding">
                        <div style={{float: "right", width: "352px"}}>
                            <AskUsNow/>
                            <TestimonialBox author="Jim Holding, CPA" authorTitle="">
                                &quot;Robert Odell has managed our employee benefits for over 10 years.&nbsp;
                                He has worked hard and successfully to maximize our employees&apos; benefit levels while
                                minimizing our costs.&nbsp;
                                He diligently negotiates rates with our current insurance providers and seeks quotes
                                from other carriers to ensure we receive the most cost effective benefit package.&nbsp;
                                Robert has excellent knowledge of the health insurance environment and
                                regulations.&nbsp;
                                He communicates new laws and provides valuable guidance and direction to our Human
                                Resource staff to stay compliant with laws.&nbsp;
                                Robert is an invaluable business partner and I highly recommend him for your insurance
                                needs.&quot;
                            </TestimonialBox>
                        </div>
                        <div style={{float: "left", width: "500px", padding: "0px 20px 30px"}}>
                            <ul>
                                <li><b>Develop</b> a calendar to establish the desired timing of activities to use and
                                    measure progress in reaching goals.
                                </li>
                                <li><b>Provide</b> a comprehensive review and analysis of the current benefit plans
                                    including all document, agreements and communication materials.
                                </li>
                                <li><b>Identify</b> problems and concerns with the benefit plan resulting from analysis
                                    and engage in discussions with customer regarding such.
                                </li>
                                <li><b>Define</b> benefit philosophy and goals to determine ideal benefit package and
                                    short term/long term direction for the plans.
                                </li>
                                <li><b>Provide</b> creative solutions to existing benefit structure with an overview of
                                    cost efficiency with respect to (but not limited to) PPO fees and discounts,
                                    pharmacy fees and discounts, and management of large claims.
                                </li>
                                <li><b>Prepare</b> and provide alternative benefit options to accommodate customer
                                    organizational processes, structure and environment.
                                </li>
                                <li><b>Communicate</b> products and industry trends that will support quality health
                                    care and the desire of customer to maintain cost control while establishing an
                                    affordable program which will meet employees long term needs.
                                </li>
                                <li><b>Review</b> and identify critical contractual, legislative or technical issues
                                    which need to be addressed or included in finalizing the plans.
                                </li>
                                <li><b>Participate</b> and actively engage in benefit meetings and rate negotiations as
                                    directed by customer.
                                </li>
                                <li><b>Support</b> the development of employee information and communication materials.
                                </li>
                                <li><b>Act</b> as an advocate to establish accountability for carriers and vendors
                                    associated with the plans.
                                </li>
                                <li><b>Assist</b> in selecting legal and/or actuarial services as needed.</li>
                            </ul>
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

export default Services;
