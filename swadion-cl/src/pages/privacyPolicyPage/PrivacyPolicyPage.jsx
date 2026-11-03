import { useNavigate } from "react-router-dom"
import "./PrivacyPolicyPage.css"
export const PrivacyPolicyPage = () => {
    const navigate = useNavigate();
    return (
        <div className="policy_page_continer">
            <p className="browse_back inter-regular" onClick={() => navigate("/")}>← Back to home</p>
            <div>
                <p className="policy_page_heding fraunces-medium">Privacy Policy</p>
                <p className="policy_section_paragraph inter-regular">Last updated: October 2026</p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Introduction</p>
                <p className="policy_section_paragraph inter-regular">This policy explains what information Swadion collects
                    when you visit the site and how it is used. By using the site you agree to this policy.
                </p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Information we collect</p>
                <p>Swadion has no user accounts. We do not ask you to register or to give your name,
                    address or payment details.
                </p>
                <ul>
                    <li className="inter-regular"><span>Messages you send us</span>. If you email us,
                        we receive your email address and whatever you write.
                    </li>
                    <li className="inter-regular"><span>Usage data</span>. Like most websites, our hosting and analytics
                        tools may automatically record your IP address, browser type, device,
                        the pages you visit and when you visit them.
                    </li>
                </ul>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Cookies</p>
                <p className="policy_section_paragraph inter-regular">Cookies are small files stored on your device.
                    We and our partners use cookies and similar technologies to keep the site working,
                    to understand how it is used and to show ads. You can block or delete cookies in your browser settings,
                    but some parts of the site may stop working.
                </p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Advertising</p>
                <p className="policy_section_paragraph inter-regular">We use Google AdSense to show ads.
                    Third-party vendors, including Google,
                    use cookies to serve ads based on your previous visits to this website and other websites.
                    Google's use of advertising cookies enables it and its partners to serve ads to you based on
                    your visit to this site and/or other sites on the internet.
                </p>
                <p className="policy_section_paragraph inter-regular">You can opt out of personalised advertising in
                    <span className="link_inside_text"
                        onClick={() => window.open("https://adssettings.google.com/", "_blank", "noopener,noreferrer")}
                    >Google Ads Settings</span> or at
                    <span className="link_inside_text"
                        onClick={() => window.open("https://www.aboutads.info/", "_blank", "noopener,noreferrer")}
                    >aboutads.info</span>.
                    To learn how Google uses data from sites that use its services, see
                    <span className="link_inside_text"
                        onClick={() => window.open("https://policies.google.com/technologies/partner-sites", "_blank", "noopener,noreferrer")}
                    >
                        How Google uses information from sites or apps that use our services
                    </span>.
                </p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Third-party links</p>
                <p className="policy_section_paragraph inter-regular">Recipes may link to videos on YouTube or to other websites.
                    We are not responsible for their content or privacy practices, so please read their policies.
                </p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Children</p>
                <p className="policy_section_paragraph inter-regular">Swadion is not directed at children under 13 and we do not
                    knowingly collect personal information from them.
                </p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Your choices</p>
                <p className="policy_section_paragraph inter-regular">You can ask what personal information we hold about you
                    (for example, from an email you sent us) and ask us to delete it. Write to us through the
                    <span className="link_inside_text" onClick={() => navigate("/contact")}>Contact page.</span>
                </p>
            </div>
            <div>
                <p className="policy_section_heding fraunces-medium">Changes to this policy</p>
                <p className="policy_section_paragraph inter-regular">We may update this policy from time to time.
                    The date at the top of the page shows when it last changed. See also our
                    <span className="link_inside_text" onClick={()=>navigate("/termsconditions")}>Terms & Conditions</span>.
                </p>
            </div>
        </div>
    )
}