import type {NextPage} from "next";
import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";
import TestimonialBox from "../components/TestimonialBox";
import styles from "./contact.module.css";
import Link from "next/link";

const mail: string = `
mailto:Robert@odellinsuranceagency.com?cc=&lt;Your Email Address&gt;&amp;subject=Sent From odellinsuranceagency.com&amp;body=Hello Mr. Robert Odell.%0a%0aI would like to take part in your no cost, no obligation review and assessment of my health care insurance portfolio.%0a%0aYou may reach me by phone at &lt;Your Phone Number&gt;.%0a%0a%0a%0aThank You,%0a%0a&lt;Your Name&gt;
`;

const Contact: NextPage = () => {
    return <div id="pagewrapper">
        <Head>
            <title>Contact Us - Odell Insurance Agency</title>
        </Head>
        <div className="container">
            <NavigationBar page="Contact Us"/>
            <div id="picturebar">
                <div className="picture_first">
                    <img src="/pictures/contactus3.jpg" height="168px" alt="Call Us By Phone"/>
                </div>
                <div className="picture">
                    <img src="/pictures/contact1.jpg" height="168px" alt="Contact by Internet"/>
                </div>
                <div className="picture_last">
                    <img src="/pictures/contact.jpg" height="168px" alt="Email Us Today"/>
                </div>
                <p className="endfloat"></p>
            </div>
            <div id="content-padding">
                <div id="content">
                    <div className="colpadding">
                        <div style={{float: "right", width: "352px"}}>
                            <TestimonialBox author="Mike Hollowell" authorTitle={<>
                                Scientific Research Company<br/>
                                4018 N. Williams Ave<br/>
                                Portland, OR 97227<br/>
                                503-281-7048<br/>
                                503-281-1409 fax<br/>
                                www.srcfab.com
                            </>}>
                                &quot;I have relied on <Link href="/bob"><a>Bob Odell</a></Link> for nearly
                                25 years to handle my group health insurance requirements.&nbsp;
                                He is both knowledgeable and professional and always seems to find a way to
                                make things work for us in some very difficult market situations.&nbsp; I
                                consider him a business partner and he handles his end of things very
                                well - which takes the load off me.&nbsp;
                                Bob is very personable and has established a high level of trust with my
                                employees which goes a long way in selling our group insurance package as
                                a valuable benefit.&nbsp;
                                I would not consider anyone else for this service and have and will continue
                                to highly recommend him to others.&quot;
                            </TestimonialBox>
                        </div>
                        <div style={{
                            float: "left",
                            width: "500px",
                            backgroundColor: "#EEE",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                        }}>
                            <div>
                                <p>
                                    <span className={styles.emphasis}>To sign up</span>&nbsp;
                                    <span>
                                        for a no cost, no obligation review and assessment of your
                                        health care insurance portfolio, fill in your information below
                                        and press the &quot;Sign up&quot; button.
                                    </span>
                                </p>
                                <form id="id_contactus" action="contactus.php" acceptCharset="UTF-8" method="post">
                                    <div className={styles.id_form_item}>
                                        <label htmlFor="edit-name">Your Name:</label>
                                        <input name="name" maxLength={80} value="" type="text" size={50}/>
                                    </div>
                                    <div className={styles.id_form_item}>
                                        <label htmlFor="edit-email">Email Address:</label>
                                        <input name="email" maxLength={200} type="text" size={50}/>
                                    </div>
                                    <div className={styles.id_form_item}>
                                        <label htmlFor="edit-phone">Phone Number:</label>
                                        <input name="phone" maxLength={40} type="text" size={40}/>
                                    </div>
                                    <input style={{marginTop: "10px"}} name="submit"
                                           value="Sign up for your free Assessment..." type="submit"/>
                                </form>
                            </div>
                            <div className={styles.id_sign_up_container}>
                                <span className={styles.emphasis}>To send a more personalized request,</span>
                                <span style={{display: "block"}}>use the email link provided here:</span>
                                <a className={styles.emphasis2} href={mail}>Robert@odellinsuranceagency.com</a>
                            </div>
                            <div className={styles.id_sign_up_container}>
                                <span className={styles.emphasis}>Call or Write Us Today!</span><br/>
                                <span><img src="/images/oldenglish.png"/></span>dell Insurance Agency<br/>
                                c/o Robert Odell<br/>
                                14850 SW 100th Ave<br/>
                                Tigard, OR 97224-4714<br/>
                                OFFICE: 503-639-3224<br/>
                                CELL: 503-706-2342
                            </div>
                        </div>
                        <div className="clearing">&nbsp;</div>
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

export default Contact;
