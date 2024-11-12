/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

import MainLayout from "@/components/Layout/MianLayout";
import NewsLetter from "@/components/Common/NewsLetter";

const TermsAndConditions = () => {
    return (
        <MainLayout>
                <div className="px-4 max-w-screen-lg mx-auto pt-28 ">
                    <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-8">
                        <h1 className=" text-4xl md:text-7xl text-primary font-semibold tracking-wider">
                            Terms and Conditions
                        </h1>
                        <div className="flex items-center gap-2 text-lg font-medium tracking-wide text-stone-400">
                            <Link className="hover:text-primary" href="/">
                                Home
                            </Link>
                            |
                            <Link className="hover:text-primary" href="/PravacyPolicy">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 py-8 md:py-16 text-sm md:text-lg">
                        <div className="flex items-center gap-2">
                            Welcome to{" "}
                            <Link className="text-primary text-2xl font-bold" href="/">
                                JamNest !{" "}
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                The domain name www.jamnest.com is owned by Genjee
                                Technologies Private Limited, company incorporated under the
                                Companies Act, 2013 having its registered office at S NO 118/4, H
                                NO 1968, Highway Residency, Sonaba Mahadu Saykar Path, Baner Gaon,
                                Pune, Pune, Maharashtra, 411045 (“JamNest” or “Us” or “We”or
                                “Our”). The Website is internet-based portal, owned and operated
                                by Genjee Technologies Private Limited, that assist users to
                                access various benefits such as, but not limited to, completing
                                missions, projects, gigs, micro-jobs, part time jobs, avail
                                discounts & offers, register for activities, applying for
                                internships.
                            </p>
                            <p>
                                These terms and conditions outline the rules and regulations for
                                the use of Website www.jamnest.com (hereinafter referred to
                                as “JamNest” or “Platform” or “Website”)
                            </p>
                            <p>
                                These terms and conditions ("Agreement") sets forth the general
                                terms and conditions of your use of the JamNest and any of
                                its related products and services (collectively, "Services"). This
                                Agreement is legally binding between all users including users who
                                are browsers, content providers, customers and/or are in any
                                manner connected with and/or contribute to the use of the Platform
                                ("User", "you" or "your") and this Website operator ("Operator",
                                "we", "us" or "our"). Subject to Your compliance with these Terms,
                                We grant You a non-exclusive, non-transferable, limited privilege
                                to access and use Our Platform. By accessing and using the Website
                                and Services, you acknowledge that you have read, understood, and
                                agree to be bound by the terms of this Agreement. If you are
                                entering into this Agreement on behalf of a business or other
                                legal entity, you represent that you have the authority to bind
                                such entity to this Agreement, in which case the terms "User",
                                "you" or "your" shall refer to such entity. If you do not have
                                such authority, or if you do not agree with the terms of this
                                Agreement, you must not accept this Agreement and may not access
                                and use the Website and Services. You acknowledge that this
                                Agreement is a contract between you and the Operator, even though
                                it is electronic and is not physically signed by you, and it
                                governs your use of the Website and Services. These Terms are an
                                electronic record generated by a computer system and do not
                                require any physical or digital signatures.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Accounts and membership
                            </h1>
                            <p>
                                You must be at least 13 years of age to use the Website and
                                Services. By using the Website and Services and by agreeing to
                                this Agreement you warrant and represent that you are at least 13
                                years of age. If you create an account on the Website, you are
                                responsible for maintaining the security of your account and you
                                are fully responsible for all activities that occur under the
                                account and any other actions taken in connection with it. We may,
                                but have no obligation to, monitor and review new accounts before
                                you may sign in and start using the Services. Providing false
                                contact information of any kind may result in the termination of
                                your account. You must immediately notify us of any unauthorized
                                uses of your account or any other breaches of security. We will
                                not be liable for any acts or omissions by you, including any
                                damages of any kind incurred as a result of such acts or
                                omissions. We may suspend, disable, or delete your account (or any
                                part thereof) if we determine that you have violated any provision
                                of this Agreement or that your conduct or content would tend to
                                damage our reputation and goodwill. If we delete your account for
                                the foregoing reasons, you may not re-register for our Services
                                and we may, in its sole discretion and without advance notice to
                                you, cancel any outstanding orders for Products or any pending
                                pending payments from our side. We may block your email address
                                and Internet protocol address to prevent further registration.This
                                Agreement will survive indefinitely unless and until JamNest
                                chooses, in its sole discretion and without advance to you, to
                                terminate it.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Use/Transaction as a minor:
                            </h1>
                            <p>
                                As a minor if You use or transact on the Platform(s), such use or
                                transaction shall be deemed to be made through Your legal guardian
                                or parents who have given their implied consent to allow their
                                minor dependents to use this Platform(s), at the risks and
                                consequences of the legal guardian or parents, as the case may be.
                            </p>
                            <p>
                                JamNest will not collect any personal data from minors. We
                                encourage parents and legal guardians to monitor their minor
                                dependent’s usage on the Platform and urge them in enforcing Our
                                Privacy Policy by instructing their minor dependents not to
                                provide any personal information on the Platform(s).
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Services
                            </h1>
                            <p>
                                The Platform is an online platform that supports and facilitates
                                Users to create a student profile, submit their details in order
                                to find and apply for and get access to various benefits such as
                                completing tasks,missions, gigs, offers, part time jobs, projects,
                                internship opportunities (collectively “Activities”) JamNest 
                                (“Services”). The Platform(s) may be accessed without any
                                registration. However, We shall be enabling registrations through
                                which You can register with Us and enjoy Our Services from one
                                single account on the Platform. For such registration, You shall
                                register as per the terms detailed hereunder.
                            </p>
                            <p>
                                On registration on the Platform(s), You shall have an option to
                                create a User Profile (“User Profile”) through which You can avail
                                our Services. While we put our best efforts to help You find a
                                suitable Activities, however, posting your details and applying
                                for Activities on JamNest does not guarantee you earning
                                money. By applying for Activities through Our Platform,{" "}
                                <span className="font-semibold text-primary tracking-wider">
                                    {" "}
                                    You acknowledge that such Activities are subject to the terms
                                    and conditions of the Company and it is Your responsibility to
                                    review such terms and conditions before{" "}
                                </span>
                                accepting any offer of Activities with that Company. JamNest
                                shall place the information relating to Activities in appropriate
                                sections on the Platform or in allied publications as We may deem
                                fit and proper. JamNest reserves its right to reject or
                                delete any insertion or information/data provided by the Company
                                without assigning any reason either before uploading or after
                                uploading the details of the Activities. JamNest further
                                reserves the right to make all such modifications/editing of the
                                vacancy details before displaying such posts on its Platform. If
                                You are an Company and post Activities on the Platform, You hereby
                                grant JamNest a non-exclusive right and license to use Your
                                company trademarks and service marks, including without limitation
                                company names and logos, solely in connection with marketing and
                                promoting the Activities You have posted and Your use of the
                                Services.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Cookies
                            </h1>
                            <p className="italic">
                                We employ the use of cookies. By accessing JamNest, you
                                agreed to use cookies in agreement with the our Privacy Policy.
                            </p>
                            <p>
                                Most interactive{" "}
                                <span className="text-primary font-medium tracking-wider px-2">
                                    websites use cookies{" "}
                                </span>{" "}
                                to let us retrieve the user’s details for each visit. Cookies are
                                used by our website to enable the functionality of certain areas
                                to make it easier for people visiting our website. Some of our
                                affiliate/advertising partners may also use cookies.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                User content
                            </h1>
                            <p>
                                We do not own any data, information or material (collectively,
                                "Content") that you submit on the Website in the course of using
                                the Service. You shall have sole responsibility for the accuracy,
                                quality,{" "}
                                <span className="text-primary font-medium tracking-wider">
                                    integrity{" "}
                                </span>
                                ,{" "}
                                <span className="text-primary font-medium tracking-wider">
                                    {" "}
                                    legality
                                </span>
                                , reliability, appropriateness, and intellectual property
                                ownership or right to use of all submitted Content. We may, but
                                have no obligation to, monitor and review the Content on the
                                Website submitted or created using our Services by you. You grant
                                us permission to access, copy, distribute, store, transmit,
                                reformat, display and perform the Content of your user account
                                solely as required for the purpose of providing the Services to
                                you. Without limiting any of those representations or warranties,
                                we have the right, though not the obligation, to, in our own sole
                                discretion, refuse or remove any Content that, in our reasonable
                                opinion, violates any of our policies or is in any way harmful or
                                objectionable. You also grant us the license to use, reproduce,
                                adapt, modify, publish or distribute the Content created by you or
                                stored in your user account for commercial, marketing or any
                                similar purpose.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Cashbacks/Rewards
                            </h1>
                            <p>
                                After a Member successfully completes a Qualifying
                                Transaction/Activity, and once we have received the resulting
                                Payment/Fees/Cashback for that Qualifying Transaction/Activity, we
                                pass that Reward/Cashback to the Member to his/her Wallet which
                                can be then withdrawn through various methods.
                            </p>
                            <p>
                                Please note that there are various circumstances in which a
                                transaction with a Retailer may not constitute a Qualifying
                                Transaction, or Cashback may not result from it. The Member
                                understands that some transactions made by him/her may not be with
                                us, but with the individual Brand/Retailer. Our support team
                                provide further information about these circumstances. Further,
                                from time to time Brands/Retailers may increase or decrease the
                                commission paid – in which case the cashback offer illustrated on
                                our Platform may be incorrect. By default, your applicable
                                transactions will be credited in line with the commission reported
                                to us by the Brand/Retailer, which may be more or less than the
                                advertised rate. We shall not be liable for any difference in the
                                expected cashback by the Member and the actual Cashback received
                                by the Member.
                            </p>
                            <p>
                                When we have traced a paying, Qualifying Transaction to your
                                Account, we will credit your Account with a 'pending payment'.
                                Once the Retailer confirms the transaction, the payment will be
                                marked as 'validated' – this can take 90 days or more from the
                                date of the purchase. If the goods are returned or the sale
                                reversed or amended by any means, then the reward/cashback payment
                                will not be made. Apart from the Brand/Retailer, it is also
                                mandatory for the members to intimate JamNest about any
                                returns or exchanges for which they might have earned cashback
                                unduly.
                            </p>
                            <p>
                                Whether a transaction shall qualify as a Qualifying for
                                reward/cashback Transaction shall be at the sole discretion of the
                                Brand/Retailer or us and the Member understands and agrees to the
                                same. We shall not be held responsible if the Brand/Retailer fails
                                to report a sale to us or does not qualify a transaction as
                                Qualifying Transaction. Further, we shall not be responsible in
                                the event due to some technical or other error we cannot trace an
                                Activity back to the Member and does not qualify the transaction
                                as a Qualifying Transaction for any reason whatsoever. Whilst we
                                will endeavour to recuperate non-payments from the Brand/Retailer,
                                the decision of ourselves, the Retailer or Retailer's tracking
                                agent is final. Whilst we will try and recuperate missing
                                commissions, at any point we reserve the right not to chase
                                missing commission claims, particularly where no activity has been
                                performed.
                            </p>
                            <p>
                                Further, in the event that the Brand/Retailer feels that the
                                activity is not genuine for any reason whatsoever and we do not
                                receive any Payment/Fees/Cashback for the transaction, the Member
                                will not receive any Reward/Cashback.
                            </p>
                            <p>
                                When a Member sends us an enquiry on missing cashback, our system
                                would check if the user had an exit click from our Platform for
                                that store on the date mentioned by the user. If no exit clicks
                                can be tracked, then we will show a message to the Member
                                indicating that they did not click via our website to earn
                                cashback prior to the sale. All exit clicks to stores are saved in
                                the database for cross reference on adding cashback values. Where
                                a commission enquiry has been successfully paid by a
                                Brand/Retailer, you may receive a lower amount than expected; this
                                is due to the amounts received by ourselves possibly being lower
                                than the original claim. We do allow you to query this with us. If
                                a Brand/Retailer still hasn't paid a manual commission claim after
                                a period of six months, then we reserve the right to close the
                                enquiry claim. All payment for Missing Reward/Cashback is only
                                applicable in instances where the Brand/Retailer pays JamNest.
                            </p>
                            <p>
                                We reserve the right to reclaim or make balance adjustments
                                accordingly where it has been established that any credit has been
                                applied in error. This will include but is not limited to
                                transactions where the credit is not genuinely due or payment for
                                any credited transaction has not been received from a
                                Brand/Retailer or its agencies and/or misuse or fraud. This can
                                include transactions which are already marked as payable or
                                validated in your Account, or for transactions which have already
                                been paid over to you by Paytm,NEFT, Cheque, Gift Cards or any
                                other payment modes as We may introduce from time to time. In all
                                such incidences, JamNest has the right to recover all unduly
                                paid cashback which the member is not entitled to earn, through
                                legal proceedings.
                            </p>
                            <p>
                                There are various circumstances in which Reward/Cashback will not
                                be payable to the Member, and will be forfeited to us, these could
                                be, without limitation:
                            </p>
                            <p>
                                where the cashback payment that we receive is not attributed to a
                                Qualifying Transaction or associated with an Account (such as
                                where the Member is not logged-in to our Platform when making the
                                relevant activity/purchase)
                            </p>
                            <p>
                                the transaction to which the Cashback relates is cancelled after
                                it has been entered into (whether under the right of cancellation
                                that applies to some activities made at a distance, or otherwise)
                                the Reward/Cashback is attributed to a Member or Account that has
                                been: suspended by us for any reason; associated with any
                                fraudulent activity or any breach of this Agreement.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Refunds and Cancellation
                            </h1>
                            <p>
                                In case of canceled/failed transactions billed to the user, the
                                refund will be issued to the original source of payment where it
                                takes 5-7 working days for the refunds to reach the users.
                            </p>
                            <p>
                                In case of any Activity or Offer has been stopped by us (i.e.
                                JamNest) due to any reason and if the user has already paid
                                for that particular Activity or Offer, the refund amount (for
                                which refund has been subsequently received from the respective
                                third-party/parties), the Company may issue BoomCoins of an
                                equivalent amount to the Customer. You may note that withdrawing
                                BoomCoins is allowed.
                            </p>
                            <p>
                                We are not liable to pay any refunds to the users for any
                                cancellations if they are not caused directly by us (i.e. JamNest),
                                 any third party/parties are responsible for it where we
                                have already transferred the amount to the third party/parties and
                                we have yet not received the refund from the concerned third
                                party/parties.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Cashbacks/Rewards
                            </h1>
                            <p>
                                You must be at least 13 years of age to use the Website and
                                Services. By using the Website and Services and by agreeing to
                                this Agreement you warrant and represent that you are at least 13
                                years of age. If you create an account on the Website, you are
                                responsible for maintaining the security of your account and you
                                are fully responsible for all activities that occur under the
                                account and any other actions taken in connection with it. We may,
                                but have no obligation to, monitor and review new accounts before
                                you may sign in and start using the Services. Providing false
                                contact information of any kind may result in the termination of
                                your account. You must immediately notify us of any unauthorized
                                uses of your account or any other breaches of security. We will
                                not be liable for any acts or omissions by you, including any
                                damages of any kind incurred as a result of such acts or
                                omissions. We may suspend, disable, or delete your account (or any
                                part thereof) if we determine that you have violated any provision
                                of this Agreement or that your conduct or content would tend to
                                damage our reputation and goodwill. If we delete your account for
                                the foregoing reasons, you may not re-register for our Services
                                and we may, in its sole discretion and without advance notice to
                                you, cancel any outstanding orders for Products or any pending
                                pending payments from our side. We may block your email address
                                and Internet protocol address to prevent further registration.This
                                Agreement will survive indefinitely unless and until JamNest
                                chooses, in its sole discretion and without advance to you, to
                                terminate it.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Backups
                            </h1>
                            <p>
                                We are not responsible for the Content residing on the Website. In
                                no event shall we be held liable for any loss of any Content. It
                                is your sole responsibility to maintain appropriate backup of your
                                Content. Notwithstanding the foregoing, on some occasions and in
                                certain circumstances, with absolutely no obligation, we may be
                                able to restore some or all of your data that has been deleted as
                                of a certain date and time when we may have backed up data for our
                                own purposes. We make no guarantee that the data you need will be
                                available.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Links to other resources
                            </h1>
                            <p>
                                Although the Website and Services may link to other resources
                                (such as websites, mobile applications, etc.), we are not,
                                directly or indirectly, implying any approval, association,
                                sponsorship, endorsement, or affiliation with any linked resource,
                                unless specifically stated herein. Some of the links on the
                                Website may be "affiliate links". This means if you click on the
                                link and purchase an item, the Operator will receive an affiliate
                                commission. We are not responsible for examining or evaluating,
                                and we do not warrant the offerings of, any businesses or
                                individuals or the content of their resources. We do not assume
                                any responsibility or liability for the actions, products,
                                services, and content of any other third parties. You should
                                carefully review the legal statements and other conditions of use
                                of any resource which you access through a link on the Website and
                                Services. Your linking to any other off-site resources is at your
                                own risk.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Prohibited uses
                            </h1>
                            <p>
                                In addition to other terms as set forth in the Agreement, you are
                                prohibited from using the Website and Services or Content: (a) for
                                any unlawful purpose; (b) to solicit others to perform or
                                participate in any unlawful acts; (c) to violate any
                                international, federal, provincial or state regulations, rules,
                                laws, or local ordinances; (d) to infringe upon or violate our
                                intellectual property rights or the intellectual property rights
                                of others; (e) to harass, abuse, insult, harm, defame, slander,
                                disparage, intimidate, or discriminate based on gender, sexual
                                orientation, religion, ethnicity, race, age, national origin, or
                                disability; (f) to submit false or misleading information; (g) to
                                upload or transmit viruses or any other type of malicious code
                                that will or may be used in any way that will affect the
                                functionality or operation of the Website and Services, third
                                party products and services, or the Internet; (h) to spam, phish,
                                pharm, pretext, spider, crawl, or scrape; (i) for any obscene or
                                immoral purpose; or (j) to interfere with or circumvent the
                                security features of the Website and Services, third party
                                products and services, or the Internet. We reserve the right to
                                terminate your use of the Website and Services for violating any
                                of the prohibited uses.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Intellectual property rights
                            </h1>
                            <p>
                                Intellectual Property Rights" means all present and future rights
                                conferred by statute, common law or equity in or in relation to
                                any copyright and related rights, trademarks, designs, patents,
                                inventions, goodwill and the right to sue for passing off, rights
                                to inventions, rights to use, and all other intellectual property
                                rights, in each case whether registered or unregistered and
                                including all applications and rights to apply for and be granted,
                                rights to claim priority from, such rights and all similar or
                                equivalent rights or forms of protection and any other results of
                                intellectual activity which subsist or will subsist now or in the
                                future in any part of the world. This Agreement does not transfer
                                to you any intellectual property owned by the Operator or third
                                parties, and all rights, titles, and interests in and to such
                                property will remain (as between the parties) solely with the
                                Operator. All trademarks, service marks, graphics and logos used
                                in connection with the Website and Services, are trademarks or
                                registered trademarks of the Operator or its licensors. Other
                                trademarks, service marks, graphics and logos used in connection
                                with the Website and Services may be the trademarks of other third
                                parties. Your use of the Website and Services grants you no right
                                or license to reproduce or otherwise use any of the Operator or
                                third party trademarks.
                            </p>
                            <p>You must not :</p>
                            <ol className="list-disc ml-2">
                                <li className="py-1">Republish material from JamNest</li>
                                <li className="py-1">
                                    Sell, rent or sub-license material from JamNest
                                </li>
                                <li className="py-1">
                                    Reproduce, duplicate or copy material from JamNest
                                </li>
                                <li className="py-1">Redistribute content from JamNest</li>
                            </ol>
                            <p>
                                Parts of this website offer an opportunity for users to post and
                                exchange opinions and information in certain areas of the website.
                                JamNest does not filter, edit, publish or review Comments
                                prior to their presence on the website. Comments do not reflect
                                the views and opinions of JamNest, its agents and/or
                                affiliates. Comments reflect the views and opinions of the person
                                who post their views and opinions. To the extent permitted by
                                applicable laws, JamNest shall not be liable for the
                                Comments or for any liability, damages or expenses caused and/or
                                suffered as a result of any use of and/or posting of and/or
                                appearance of the Comments on this website.
                            </p>
                            <p>
                                JamNest reserves the right to monitor all Comments and to
                                remove any Comments which can be considered inappropriate,
                                offensive or causes breach of these Terms and Conditions.
                            </p>
                            <p>
                                You warrant and represent that: You are entitled to post the
                                Comments on our website and have all necessary licenses and
                                consents to do so; The Comments do not invade any intellectual
                                property right, including without limitation copyright, patent or
                                trademark of any third party; The Comments do not contain any
                                defamatory, libelous, offensive, indecent or otherwise unlawful
                                material which is an invasion of privacy The Comments will not be
                                used to solicit or promote business or custom or present
                                commercial activities or unlawful activity.
                            </p>
                            <p>
                                You hereby grant JamNest a non-exclusive license to use,
                                reproduce, edit and authorize others to use, reproduce and edit
                                any of your Comments in any and all forms, formats or media.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                Hyperlinking to our Content
                            </h1>
                            <p>
                                The following organizations may link to our Website without prior
                                written approval:
                            </p>
                            <ol className="list-disc ml-2">
                                <li className="py-1">Government agencies;</li>
                                <li className="py-1">Search engines;</li>
                                <li className="py-1">News organizations;</li>
                                <li className="py-1">
                                    Online directory distributors may link to our Website in the
                                    same manner as they hyperlink to the Websites of other listed
                                    businesses; and
                                </li>
                                <li className="py-1">
                                    System wide Accredited Businesses except soliciting non-profit
                                    organizations, charity shopping malls, and charity fundraising
                                    groups which may not hyperlink to our Web site.
                                </li>
                            </ol>
                            <p>
                                These organizations may link to our home page, to publications or
                                to other Website information so long as the link: (a) is not in
                                any way deceptive; (b) does not falsely imply sponsorship,
                                endorsement or approval of the linking party and its products
                                and/or services; and (c) fits within the context of the linking
                                party’s site.
                            </p>
                            <p>
                                We may consider and approve other link requests from the following
                                types of organizations:
                            </p>
                            <ol className="list-disc ml-2">
                                <li className="py-1">
                                    commonly-known consumer and/or business information sources;
                                </li>
                                <li className="py-1">dot.com community sites;</li>
                                <li className="py-1">
                                    associations or other groups representing charities;
                                </li>
                                <li className="py-1">online directory distributors;</li>
                                <li className="py-1">internet portals;</li>
                                <li className="py-1">
                                    accounting, law and consulting firms; and
                                </li>
                                <li className="py-1">
                                    educational institutions and trade associations.
                                </li>
                            </ol>
                            <p>
                                We will approve link requests from these organizations if we
                                decide that: (a) the link would not make us look unfavorably to
                                ourselves or to our accredited businesses; (b) the organization
                                does not have any negative records with us; (c) the benefit to us
                                from the visibility of the hyperlink compensates the absence of
                                JamNest; and (d) the link is in the context of general
                                resource information.
                            </p>
                            <p>
                                These organizations may link to our home page so long as the link:
                                (a) is not in any way deceptive; (b) does not falsely imply
                                sponsorship, endorsement or approval of the linking party and its
                                products or services; and (c) fits within the context of the
                                linking party’s site.{" "}
                            </p>
                            <p>
                                f you are one of the organizations listed in paragraph 2 above and
                                are interested in linking to our website, you must inform us by
                                sending an e-mail to JamNest (hello@jamnest.com).
                                Please include your name, your organization name, contact
                                information as well as the URL of your site, a list of any
                            </p>
                            <p>
                                URLs from which you intend to link to our Website, and a list of
                                the URLs on our site to which you would like to link. Wait 2-3
                                weeks for a response.
                            </p>
                            <p>
                                Approved organizations may hyperlink to our Website as follows:
                            </p>
                            <ol className="list-disc ml-2">
                                <li className="py-1">By use of our corporate name; or</li>
                                <li className="py-1">
                                    By use of the uniform resource locator being linked to; or
                                </li>
                                <li className="py-1">
                                    By use of any other description of our Website being linked to
                                    that makes sense within the context and format of content on the
                                    linking party’s site.
                                </li>
                            </ol>
                            <p>
                                No use of JamNest’s or Genjee Technologies Private Limited's
                                logo or other artwork will be allowed for linking absent a
                                trademark license agreement.
                            </p>
                            <p>
                                We reserve the right to request that you remove all links or any
                                particular link to our Website. You approve to immediately remove
                                all links to our Website upon request. We also reserve the right
                                to amend these terms and conditions and it’s linking policy at any
                                time. By continuously linking to our Website, you agree to be
                                bound to and follow these linking terms and conditions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Removal of links from our website
                            </h1>
                            <p>
                                If you find any link on our Website that is offensive for any
                                reason, you are free to contact and inform us any moment by
                                sending an email to JamNest (hello@jamnest.com). We
                                will consider requests to remove links but we are not obligated to
                                or so or to respond to you directly.
                            </p>
                            <p>
                                We do not ensure that the information on this website is correct,
                                we do not warrant its completeness or accuracy; nor do we promise
                                to ensure that the website remains available or that the material
                                on the website is kept up to date.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                {" "}
                                iFrames
                            </h1>
                            <p>
                                Without prior approval and written permission, you may not create
                                frames around our Webpages that alter in any way the visual
                                presentation or appearance of our Website.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Limitation of liability
                            </h1>
                            <p>
                                To the fullest extent permitted by applicable law, in no event
                                will the Operator, its affiliates, directors, officers, employees,
                                agents, suppliers or licensors be liable to any person for any
                                indirect, incidental, special, punitive, cover or consequential
                                damages (including, without limitation, damages for lost profits,
                                revenue, sales, goodwill, use of content, impact on business,
                                business interruption, loss of anticipated savings, loss of
                                business opportunity) however caused, under any theory of
                                liability, including, without limitation, contract, tort,
                                warranty, breach of statutory duty, negligence or otherwise, even
                                if the liable party has been advised as to the possibility of such
                                damages or could have foreseen such damages. To the maximum extent
                                permitted by applicable law, the aggregate liability of the
                                Operator and its affiliates, officers, employees, agents,
                                suppliers and licensors relating to the services will be limited
                                to an amount greater of one dollar or any amounts actually paid in
                                cash by you to the Operator for the prior one month period prior
                                to the first event or occurrence giving rise to such liability.
                                The limitations and exclusions also apply if this remedy does not
                                fully compensate you for any losses or fails of its essential
                                purpose.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                MARKETING
                            </h1>
                            <p>
                                JamNest will send marketing e-mails and / or sms, phone
                                calls where You have provided consent for the same. We offer
                                regular emails, including a weekly update, to let You know about
                                new Activities. We may personalise the message content based upon
                                any information You have provided to Us and Your use of the
                                Platform. By applying to any Activities, you consent to receiving
                                communication regarding the that Activity or further Activities.
                                We may use information which we hold about You to show you
                                relevant advertising on third party websites (e.g. Facebook,
                                Google, Instagram, Snapchat and Twitter etc.). This could involve
                                showing You an advertising message where We know You have a JamNest
                                 User Profile and have used Our Services. If You don’t want
                                to be shown targeted advertising messages from JamNest or
                                some third party websites, these websites allow You to request not
                                to see messages from specific advertisers on that website in
                                future. The User hereby agrees that JamNest may share the
                                personal information of a User with other entities, provided that
                                such other entities conform to the data protection policies of
                                JamNest.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Indemnification
                            </h1>
                            <p>
                                You agree to indemnify and hold the Operator and its affiliates,
                                directors, officers, employees, agents, suppliers and licensors
                                harmless from and against any liabilities, losses, damages or
                                costs, including reasonable attorneys' fees, incurred in
                                connection with or arising from any third party allegations,
                                claims, actions, disputes, or demands asserted against any of them
                                as a result of or relating to your Content, your use of the
                                Website and Services or any willful misconduct on your part.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Severability
                            </h1>
                            <p>
                                All rights and restrictions contained in this Agreement may be
                                exercised and shall be applicable and binding only to the extent
                                that they do not violate any applicable laws and are intended to
                                be limited to the extent necessary so that they will not render
                                this Agreement illegal, invalid or unenforceable. If any provision
                                or portion of any provision of this Agreement shall be held to be
                                illegal, invalid or unenforceable by a court of competent
                                jurisdiction, it is the intention of the parties that the
                                remaining provisions or portions thereof shall constitute their
                                agreement with respect to the subject matter hereof, and all such
                                remaining provisions or portions thereof shall remain in full
                                force and effect.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Dispute resolution
                            </h1>
                            <p>
                                The formation, interpretation, and performance of this Agreement
                                and any disputes arising out of it shall be governed by the
                                substantive and procedural laws of Maharashtra, India without
                                regard to its rules on conflicts or choice of law and, to the
                                extent applicable, the laws of India. The exclusive jurisdiction
                                and venue for actions related to the subject matter hereof shall
                                be the courts located in Maharashtra, India, and you hereby submit
                                to the personal jurisdiction of such courts. You hereby waive any
                                right to a jury trial in any proceeding arising out of or related
                                to this Agreement. The United Nations Convention on Contracts for
                                the International Sale of Goods does not apply to this Agreement.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Changes and amendments
                            </h1>
                            <p>
                                We reserve the right to modify this Agreement or its terms
                                relating to the Website and Services at any time, effective upon
                                posting of an updated version of this Agreement on the Website.
                                When we do, we will revise the updated date on this page.
                                Continued use of the Website and Services after any such changes
                                shall constitute your consent to such changes
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Acceptance of these terms
                            </h1>
                            <p>
                                You acknowledge that you have read this Agreement and agree to all
                                its terms and conditions. By accessing and using the Website and
                                Services you agree to be bound by this Agreement. If you do not
                                agree to abide by the terms of this Agreement, you are not
                                authorized to access or use the Website and Services.
                            </p>
                            <p>Disclaimer Of Warranties And Liabilities: (Pending)</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Governing Law And Dispute Resolution
                            </h1>
                            <p>
                                We will try to solve any disagreements quickly and efficiently. If
                                You are not happy with the way We deal with any disagreement, You
                                may wish to take court roceedings. Our rights and obligations
                                pursuant to these Terms are governed by, and shall be construed in
                                accordance with, the laws of India and the place of jurisdiction
                                shall be exclusively in Mumbai. You waive Your right to institute
                                legal proceedings in any other jurisdiction. However, We shall be
                                entitled to institute legal proceedings in connection with any
                                matter arising under these Terms in any jurisdiction where You
                                reside, do business or have assets.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Report Abuse
                            </h1>
                            <p>
                                If You come across any abuse or violation of these Terms or
                                Privacy Policy by any user, please report to
                                hello@jamnest.com. We shall process all claims of abuse which
                                may result in removing the reported User from Our Platform and/or
                                suspension or termination of the account of the User. If the
                                aggrieved User feels that he has been wrongfully accused, he is
                                encouraged to reach out to Us
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                FEEDBACK
                            </h1>
                            <p>
                                We may, from time to time, invite or provide You with means to
                                provide feedback regarding the Platform, in the form of Text,
                                Image or Video and in such circumstances, any feedback You provide
                                will be deemed non-confidential and We shall have the right, but
                                not the obligation, to use such feedback on an unrestricted basis.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Contacting us
                            </h1>
                            <p>
                                If you would like to contact us to understand more about this
                                Agreement or wish to contact us concerning any matter relating to
                                it, you may send an email to hello@jamnest.com
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className=" text-xl md:text-2xl text-primary font-medium tracking-wider">
                                Grievance Officer
                            </h1>
                            <p>
                                In accordance with Information Technology Act 2000 and rules made
                                there under, the name and contact details of the Grievance Officer
                                are provided below
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="tracking-wider">Name : Rudra Mangesh Ghodke</p>
                            <p className="tracking-wider">E-mail id : rudra@globalkartel.com</p>
                            <p>This document was last updated on October 18, 2022</p>
                        </div>
                    </div>
                </div>
            <NewsLetter />
        </MainLayout>
    );
};

export default TermsAndConditions;
