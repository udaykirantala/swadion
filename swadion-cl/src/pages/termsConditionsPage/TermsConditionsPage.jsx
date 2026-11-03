import { useNavigate } from "react-router-dom";
import "./TermsConditionsPage.css"

export const TermsConditionsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="terms_page_continer">
            <p className="browse_back inter-regular" onClick={() => navigate("/")}>← Back to home</p>
            <div>
                <p className="terms_page_heding fraunces-medium">Terms & Conditions</p>
                <p className="terms_section_paragraph inter-regular">Last updated: October 2026</p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Accepting these terms</p>
                <p className="terms_section_paragraph inter-regular">By using Swadion you agree to these Terms & Conditions
                    and to our <span className="link_inside_text" onClick={() => navigate("/privacypolicy")}>Privacy Policy</span>.
                    If you do not agree, please do not use the site.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Using the site</p>
                <p>You may browse the site and use its recipes for your own personal, non-commercial use. You agree not to:</p>
                <ul>
                    <li className="inter-regular">copy, republish or sell our content without our written permission;</li>
                    <li className="inter-regular">use automated tools to scrape the site or to overload it;</li>
                    <li className="inter-regular">try to disrupt the site or gain access to parts of it that are not public;</li>
                    <li className="inter-regular">use the site for anything unlawful.</li>

                </ul>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Recipes, nutrition and food safety</p>
                <p className="terms_section_paragraph inter-regular">Recipes and nutrition information are provided for general
                    information only. Calories and nutrient values are estimates per serving and can
                    vary with ingredients and brands.
                </p>
                <p className="terms_section_paragraph inter-regular">We are not a medical or dietetic service.
                    If you have an allergy, an intolerance or a health condition,
                    check every ingredient and ask a qualified professional before you cook or eat.
                </p>
                <p className="terms_section_paragraph inter-regular">Follow safe food handling: wash your hands,
                    cook meat, poultry, eggs and seafood thoroughly and refrigerate leftovers promptly.
                    You cook and eat at your own risk.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Our content</p>
                <p className="terms_section_paragraph inter-regular">The text, recipes, images, design and logo on this site
                    belong to us or our licensors and are protected by copyright.
                    You may print a recipe for your own use. Anything else needs our written permission.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Links and advertising</p>
                <p className="terms_section_paragraph inter-regular">The site contains links to other websites and
                    shows ads from third parties. We do not control or endorse them and are not responsible
                    for their content or practices.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">No warranty</p>
                <p className="terms_section_paragraph inter-regular">The site and its content are provided “as is” and
                    “as available”. We do not promise that the site will be error-free or always available,
                    or that its information is complete or accurate.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Limit of liability</p>
                <p className="terms_section_paragraph inter-regular">To the fullest extent the law allows,
                    Swadion and its owners are not liable for any loss or
                    damage arising from your use of the site or from relying on its recipes or nutrition information.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Changes</p>
                <p className="terms_section_paragraph inter-regular">We may change these terms or the site at any time.
                    Using the site after a change means you accept the new terms.
                </p>
            </div>
            <div>
                <p className="terms_section_heding fraunces-medium">Contact</p>
                <p className="terms_section_paragraph inter-regular">Questions about these terms?Reach us through the 
                    <span className="link_inside_text" onClick={() => navigate("/contact")}>Contact page</span>.
                </p>
            </div>
        </div>
    )
}