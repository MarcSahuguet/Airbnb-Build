"use client";

import Container from "@/components/Container";
import React from "react";

function PrivacyPolicy() {

  return (
    <Container>

    <div className="flex flex-col space-y-4 pt-16">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-lg">
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        hourrail.com (the “Site”).
      </p>
      <h2 className="text-3xl font-bold">PERSONAL INFORMATION WE COLLECT</h2>
      <p className="text-lg">
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information.”
      </p>
      <p className="text-lg">
        We collect Device Information using the following technologies:
      </p>
      <ul className="list-disc list-inside">
        <li className="text-lg">
          - “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org.
        </li>
        <li className="text-lg">
          - “Log files” track actions occurring on the Site, and collect data
          including your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps.
        </li>
        <li className="text-lg">
          - “Web beacons,” “tags,” and “pixels” are electronic files used to
          record information about how you browse the Site.
        </li>
      </ul>
      <p className="text-lg">
        Additionally when you make a purchase or attempt to make a purchase
        through the Site, we collect certain information from you, including
        your name, billing address, shipping address, payment information
        (including credit card numbers), email address, and phone number.
        We refer to this information as “Order Information.”
        </p>
        <p className="text-lg">
        When we talk about “Personal Information” in this Privacy Policy, we are
        talking both about Device Information and Order Information.
        </p>
        <h2 className="text-3xl font-bold">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
        <p className="text-lg">
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices and/or
        order confirmations). Additionally, we use this Order Information to:
        Communicate with you; Screen our orders for potential risk or fraud; and
        When in line with the preferences you have shared with us, provide you
        with information or advertising relating to our products or services.
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).
        </p>
        <h2 className="text-3xl font-bold">SHARING YOUR PERSONAL INFORMATION</h2>
        <p className="text-lg">
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, we use
        Shopify to power our online store--you can read more about how Shopify
        uses your Personal Information here:
        https://www.shopify.com/legal/privacy. We also use Google Analytics to
        help us understand how our customers use the Site--you can read more
        about how Google uses your Personal Information here:
        https://www.google.com/intl/en/policies/privacy/. You can also opt-out
        of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights.
        </p>
        <h2 className="text-3xl font-bold">BEHAVIOURAL ADVERTISING</h2>
        <p className="text-lg">
        As described above, we use your Personal Information to provide you with
        targeted advertisements or marketing communications we believe may be of
        interest to you. For more information about how targeted advertising
        works, you can visit the Network Advertising Initiative’s (“NAI”)
        educational page at
        http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
        </p>
        <p className="text-lg">
        You can opt out of targeted advertising by using the links below:
        </p>
        <ul className="list-disc list-inside">
        <li className="text-lg">
          - Facebook: https://www.facebook.com/settings/?tab=ads
        </li>
        <li className="text-lg">
          - Google: https://www.google.com/settings/ads/anonymous
        </li>
        <li className="text-lg">
          - Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
        </li>
        </ul>
        <p className="text-lg">
        Additionally, you can opt out of some of these services by visiting the
        Digital Advertising Alliance’s opt-out portal at:
        http://optout.aboutads.info/.
        </p>
        <h2 className="text-3xl font-bold">DO NOT TRACK</h2>
        <p className="text-lg">
        Please note that we do not alter our Site’s data collection and use
        practices when we see a Do Not Track signal from your browser.
        </p>
        <h2 className="text-3xl font-bold">YOUR RIGHTS</h2>
        <p className="text-lg">
        If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal information
        be corrected, updated, or deleted. If you would like to exercise this
        right, please contact us through the contact information below.
        </p>
        <p className="text-lg">
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.
        </p>
        <h2 className="text-3xl font-bold">DATA RETENTION</h2>
        <p className="text-lg">
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
        </p>
        <h2 className="text-3xl font-bold">CHANGES</h2>
        <p className="text-lg">
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational,
        legal or regulatory reasons.
        </p>
        <h2 className="text-3xl font-bold">CONTACT US</h2>
        <p className="text-lg">
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail
        at
        </p>
        <p className="text-lg">
            <a href="mailto:media@hourail.voyage"/>
        </p>
        
    </div>
    </Container>
    );
    }
export default PrivacyPolicy;