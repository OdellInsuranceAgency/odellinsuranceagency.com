import type {PropsWithChildren, ReactElement, ReactNode} from "react";
import styles from "./TestimonialBox.module.css";

interface TestimonialBoxProps {
    author: string;
    authorTitle: ReactNode;
}

export default function TestimonialBox(props: PropsWithChildren<TestimonialBoxProps>): ReactElement {
    return <div id="testimonials-box">
        <div className="top"></div>
        <div className="padding">
            <div className="box-title">TESTIMONIAL</div>
            <div className="box-content">
                {props.children}
                <p className={styles.author}>
                    <b>{props.author}</b><br/>{props.authorTitle}
                </p>
            </div>
        </div>
        <div className="bottom"></div>
    </div>;
}
