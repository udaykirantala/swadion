import { useNavigate } from "react-router-dom"
import "./ContactPage.css"
export const ContactPage = () => {
    const navigate = useNavigate();
    return (
        <div className="contact_page_continer">
            <p className="browse_back inter-regular" onClick={() => navigate("/")}>← Back to home</p>
            <div>
                <p className="about_page_heding fraunces-medium">Contact</p>
                <p className="contact_section_heding fraunces-medium">We read every message. Write to us about:</p>
                <ul>
                    <li className="inter-regular">A correction to a recipe or its nutrition values.</li>
                    <li className="inter-regular">A recipe you would like to see on the site.</li>
                    <li className="inter-regular">A question about how the site works.</li>
                    <li className="inter-regular">A privacy request (see the
                        <span className="link_inside_text" onClick={() => navigate("/privacypolicy")}>Privacy Policy</span>
                        ).
                    </li>
                    <li className="inter-regular">Advertising or business enquiries.</li>
                </ul>
            </div>
            <div>
                <p className="contact_section_heding fraunces-medium">Email</p>
                <p className="link_inside_text">swadion.contact@gmail.com</p>
            </div>
            <div>
                <p className="contact_section_heding fraunces-medium">Before you write</p>
                <p className="contact_section_paragraph inter-regular">
                    We are not able to give personal dietary, medical or allergy advice. If you have an allergy or a health condition, check every ingredient and speak to a qualified professional.
                </p>
            </div>
        </div>
    )
}