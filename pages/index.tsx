import type {NextPage} from "next";
import Head from "next/head";
import Copyright from "../components/Copyright";
import NavigationBar from "../components/NavigationBar";
import AskUsNow from "../components/AskUsNow";
import TestimonialBox from "../components/TestimonialBox";

const Home: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page="Home"/>
            <div id="picturebar">
                <div className="picture_first">
                    <img src="pictures/tigardcar.jpg" height="141px" alt="Sunset"/>
                </div>
                <div className="picture">
                    <img src="pictures/olderpeople.jpg" height="141px" alt="Active Lifestyles"/>
                </div>
                <div className="picture">
                    <img src="pictures/insurance3.jpg" height="141px" alt="Insurance"/>
                </div>
                <div className="picture">
                    <img src="pictures/tigardbaseball.jpg" height="141px" alt="Baseball"/>
                </div>
                <div className="picture_last">
                    <img src="pictures/tigardballoons.jpg" height="141px" alt="Festival"/>
                </div>
                <p className="endfloat"></p>
            </div>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding">
                        <div style={{float: "right", width: "352px"}}>
                            <AskUsNow/>
                            <TestimonialBox author="Art Pascuzzi"
                                            authorTitle="President, Milwaukee Crane & Equipment Co.">
                                &quot;For many years Robert Odell has handled our company insurance.&nbsp;
                                He has always been pro-active in his approach bringing new ideas and information to our
                                attention.&nbsp;
                                We have been provided professional guidance through the rough times and maintained a top
                                quality insurance package meeting our needs.&nbsp;
                                Robert has always provided considerable assistance to us and I am happy to recommend
                                him.&quot;
                            </TestimonialBox>
                        </div>

                        <div style={{float: "left", width: "550px"}}>
                            <p>
                                In 1962, Robert Odell began his insurance career with Northwest Hospital
                                Service (BlueCross).&nbsp;Specializing in group insurance and employee benefits,
                                Robert has developed expertise in plan design and risk analysis while assisting
                                100&rsquo;s of companies with their insurance needs.&nbsp;
                            </p>
                            <p>
                                Health Care Reform has been an insurance industry effort since the beginning in
                                1944.&nbsp; Today&rsquo;s efforts by the government brings to the forefront the
                                need to have experienced and knowledgeable insurance consultants.
                            </p>
                            <p>
                                Odell Insurance Agency has the knowledge, tools, and expertise to assist you with
                                your insurance needs.&nbsp; We greatly appreciate all those who have supported
                                our efforts over the years and look forward to assisting others in the future.
                            </p>
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

export default Home;
