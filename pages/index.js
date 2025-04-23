import React, { Fragment } from "react";
import Head from "next/head";

import { useTranslations } from "next-intl";

import Navbar8 from "../components/navbar8";
import Hero17 from "../components/hero17";
import Features24 from "../components/features24";
import CTA26 from "../components/cta26";
import Features25 from "../components/features25";
import Pricing14 from "../components/pricing14";
import Steps2 from "../components/steps2";
import Testimonial17 from "../components/testimonial17";
import Contact10 from "../components/contact10";
import Footer4 from "../components/footer4";

const Home = (props) => {
    return (
        <>
            <div className="home-container">
                <Head>
                    <title>Metallic Ornate Butterfly</title>
                    <meta
                        property="og:title"
                        content="Metallic Ornate Butterfly"
                    />
                </Head>
                <Navbar8
                    page4Description={
                        <Fragment>
                            <span className="home-text100">
                                Page Four Description
                            </span>
                        </Fragment>
                    }
                    action1={
                        <Fragment>
                            <span className="home-text101">Main Action</span>
                        </Fragment>
                    }
                    link2={
                        <Fragment>
                            <span className="home-text102">Link 2</span>
                        </Fragment>
                    }
                    page1={
                        <Fragment>
                            <span className="home-text103">Page One</span>
                        </Fragment>
                    }
                    link1={
                        <Fragment>
                            <span className="home-text104">Link 1</span>
                        </Fragment>
                    }
                    page4={
                        <Fragment>
                            <span className="home-text105">Page Four</span>
                        </Fragment>
                    }
                    page2={
                        <Fragment>
                            <span className="home-text106">Page Two</span>
                        </Fragment>
                    }
                    link4={
                        <Fragment>
                            <span className="home-text107">Link 4</span>
                        </Fragment>
                    }
                    page1Description={
                        <Fragment>
                            <span className="home-text108">
                                Page One Description
                            </span>
                        </Fragment>
                    }
                    page2Description={
                        <Fragment>
                            <span className="home-text109">
                                Page Two Description
                            </span>
                        </Fragment>
                    }
                    link3={
                        <Fragment>
                            <span className="home-text110">Link 3</span>
                        </Fragment>
                    }
                    page3={
                        <Fragment>
                            <span className="home-text111">Page Three</span>
                        </Fragment>
                    }
                    page3Description={
                        <Fragment>
                            <span className="home-text112">
                                Page Three Description
                            </span>
                        </Fragment>
                    }
                    action2={
                        <Fragment>
                            <span className="home-text113">
                                Secondary Action
                            </span>
                        </Fragment>
                    }
                ></Navbar8>
                <Hero17
                    action2={
                        <Fragment>
                            <span className="home-text114">
                                Secondary action
                            </span>
                        </Fragment>
                    }
                    action1={
                        <Fragment>
                            <span className="home-text115">Main action</span>
                        </Fragment>
                    }
                    heading1={
                        <Fragment>
                            <span className="home-text116">
                                THE TANGIBLE GAP
                            </span>
                        </Fragment>
                    }
                    content1={
                        <Fragment>
                            <span className="home-text117">
                                EXPERIENCE MARKETING OUR SOLUTION
                            </span>
                        </Fragment>
                    }
                ></Hero17>
                <Features24
                    feature3Description={
                        <Fragment>
                            <span className="home-text118">
                                Description for Feature 3
                            </span>
                        </Fragment>
                    }
                    feature3Title={
                        <Fragment>
                            <span className="home-text119">
                                Feature 3 Title
                            </span>
                        </Fragment>
                    }
                    feature2Description={
                        <Fragment>
                            <span className="home-text120">
                                Description for Feature 2
                            </span>
                        </Fragment>
                    }
                    feature1Title={
                        <Fragment>
                            <span className="home-text121">
                                Feature 1 Title
                            </span>
                        </Fragment>
                    }
                    feature1Description={
                        <Fragment>
                            <span className="home-text122">
                                Description for Feature 1
                            </span>
                        </Fragment>
                    }
                    feature2Title={
                        <Fragment>
                            <span className="home-text123">
                                Feature 2 Title
                            </span>
                        </Fragment>
                    }
                ></Features24>
                <CTA26
                    heading1={
                        <Fragment>
                            <span className="home-text124">
                                Ready to elevate your brand?
                            </span>
                        </Fragment>
                    }
                    content1={
                        <Fragment>
                            <span className="home-text125">
                                Contact us today to discuss how we can help you
                                create unforgettable experiences for your
                                audience.
                            </span>
                        </Fragment>
                    }
                    action1={
                        <Fragment>
                            <span className="home-text126">Get in touch</span>
                        </Fragment>
                    }
                ></CTA26>
                <Features25
                    feature3Description={
                        <Fragment>
                            <span className="home-text127">
                                Showcasing unique and branded merchandise that
                                enhances brand visibility and engagement.
                            </span>
                        </Fragment>
                    }
                    feature1Description={
                        <Fragment>
                            <span className="home-text128">
                                Creating immersive experiences that connect
                                brands with their audience on a deeper level.
                            </span>
                        </Fragment>
                    }
                    feature2Title={
                        <Fragment>
                            <span className="home-text129">
                                Event Impact Stats
                            </span>
                        </Fragment>
                    }
                    feature1Title={
                        <Fragment>
                            <span className="home-text130">
                                Experience Marketing
                            </span>
                        </Fragment>
                    }
                    feature2Description={
                        <Fragment>
                            <span className="home-text131">
                                Measuring the success and impact of events
                                through data-driven analytics and insights.
                            </span>
                        </Fragment>
                    }
                    feature3Title={
                        <Fragment>
                            <span className="home-text132">
                                Merchandise Showcase
                            </span>
                        </Fragment>
                    }
                ></Features25>
                <Pricing14
                    plan3Price={
                        <Fragment>
                            <span className="home-text133">$299/month</span>
                        </Fragment>
                    }
                    plan3Action={
                        <Fragment>
                            <span className="home-text134">Get Started</span>
                        </Fragment>
                    }
                    plan11={
                        <Fragment>
                            <span className="home-text135">Basic plan</span>
                        </Fragment>
                    }
                    plan1Action={
                        <Fragment>
                            <span className="home-text136">Get Started</span>
                        </Fragment>
                    }
                    plan31={
                        <Fragment>
                            <span className="home-text137">
                                Enterprise plan
                            </span>
                        </Fragment>
                    }
                    plan3Feature41={
                        <Fragment>
                            <span className="home-text138">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan1Feature2={
                        <Fragment>
                            <span className="home-text139">
                                Social media management
                            </span>
                        </Fragment>
                    }
                    plan2Feature11={
                        <Fragment>
                            <span className="home-text140">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan3Feature51={
                        <Fragment>
                            <span className="home-text141">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan2Feature41={
                        <Fragment>
                            <span className="home-text142">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan2Feature2={
                        <Fragment>
                            <span className="home-text143">
                                SEO optimization
                            </span>
                        </Fragment>
                    }
                    plan3Feature21={
                        <Fragment>
                            <span className="home-text144">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan2Feature4={
                        <Fragment>
                            <span className="home-text145">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan2Yearly={
                        <Fragment>
                            <span className="home-text146">$1999/year</span>
                        </Fragment>
                    }
                    plan1Action1={
                        <Fragment>
                            <span className="home-text147">Get started</span>
                        </Fragment>
                    }
                    plan2Action={
                        <Fragment>
                            <span className="home-text148">Get Started</span>
                        </Fragment>
                    }
                    plan3Feature1={
                        <Fragment>
                            <span className="home-text149">
                                Full-service event planning
                            </span>
                        </Fragment>
                    }
                    plan2Feature3={
                        <Fragment>
                            <span className="home-text150">
                                PPC advertising management
                            </span>
                        </Fragment>
                    }
                    plan1Price1={
                        <Fragment>
                            <span className="home-text151">$200/yr</span>
                        </Fragment>
                    }
                    plan2={
                        <Fragment>
                            <span className="home-text152">Business plan</span>
                        </Fragment>
                    }
                    plan2Feature21={
                        <Fragment>
                            <span className="home-text153">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan2Action1={
                        <Fragment>
                            <span className="home-text154">Get started</span>
                        </Fragment>
                    }
                    plan3Feature2={
                        <Fragment>
                            <span className="home-text155">
                                Influencer marketing campaigns
                            </span>
                        </Fragment>
                    }
                    content1={
                        <Fragment>
                            <span className="home-text156">
                                Choose the perfect plan for you
                            </span>
                        </Fragment>
                    }
                    plan2Feature1={
                        <Fragment>
                            <span className="home-text157">
                                Advanced analytics and reporting
                            </span>
                        </Fragment>
                    }
                    heading1={
                        <Fragment>
                            <span className="home-text158">Pricing plan</span>
                        </Fragment>
                    }
                    plan3Feature31={
                        <Fragment>
                            <span className="home-text159">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan1={
                        <Fragment>
                            <span className="home-text160">Basic plan</span>
                        </Fragment>
                    }
                    plan21={
                        <Fragment>
                            <span className="home-text161">Business plan</span>
                        </Fragment>
                    }
                    plan1Feature11={
                        <Fragment>
                            <span className="home-text162">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan1Feature21={
                        <Fragment>
                            <span className="home-text163">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan3Feature5={
                        <Fragment>
                            <span className="home-text164">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan2Yearly1={
                        <Fragment>
                            <span className="home-text165">or $29 monthly</span>
                        </Fragment>
                    }
                    plan2Price={
                        <Fragment>
                            <span className="home-text166">$199/month</span>
                        </Fragment>
                    }
                    plan3Yearly1={
                        <Fragment>
                            <span className="home-text167">or $49 monthly</span>
                        </Fragment>
                    }
                    plan2Feature31={
                        <Fragment>
                            <span className="home-text168">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan3Feature11={
                        <Fragment>
                            <span className="home-text169">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan1Yearly1={
                        <Fragment>
                            <span className="home-text170">or $20 monthly</span>
                        </Fragment>
                    }
                    plan2Price1={
                        <Fragment>
                            <span className="home-text171">$299/yr</span>
                        </Fragment>
                    }
                    plan3Yearly={
                        <Fragment>
                            <span className="home-text172">$2999/year</span>
                        </Fragment>
                    }
                    plan3Feature4={
                        <Fragment>
                            <span className="home-text173">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan3Price1={
                        <Fragment>
                            <span className="home-text174">$499/yr</span>
                        </Fragment>
                    }
                    plan1Feature31={
                        <Fragment>
                            <span className="home-text175">
                                Feature text goes here
                            </span>
                        </Fragment>
                    }
                    plan1Feature3={
                        <Fragment>
                            <span className="home-text176">
                                Email marketing campaigns
                            </span>
                        </Fragment>
                    }
                    plan1Yearly={
                        <Fragment>
                            <span className="home-text177">$999/year</span>
                        </Fragment>
                    }
                    plan1Feature1={
                        <Fragment>
                            <span className="home-text178">
                                Customized marketing strategy
                            </span>
                        </Fragment>
                    }
                    plan3Feature3={
                        <Fragment>
                            <span className="home-text179">
                                Branded merchandise design
                            </span>
                        </Fragment>
                    }
                    content2={
                        <Fragment>
                            <span className="home-text180">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: " ",
                                    }}
                                />
                            </span>
                        </Fragment>
                    }
                    plan3Action1={
                        <Fragment>
                            <span className="home-text181">Get started</span>
                        </Fragment>
                    }
                    plan1Price={
                        <Fragment>
                            <span className="home-text182">$99/month</span>
                        </Fragment>
                    }
                    plan3={
                        <Fragment>
                            <span className="home-text183">
                                Enterprise plan
                            </span>
                        </Fragment>
                    }
                ></Pricing14>
                <Steps2
                    step1Description={
                        <Fragment>
                            <span className="home-text184">
                                We start by understanding your goals and
                                objectives through an initial consultation.
                            </span>
                        </Fragment>
                    }
                    step3Description={
                        <Fragment>
                            <span className="home-text185">
                                We execute the strategy with precision and
                                attention to detail to ensure a successful
                                marketing campaign.
                            </span>
                        </Fragment>
                    }
                    step2Title={
                        <Fragment>
                            <span className="home-text186">
                                Strategy Development
                            </span>
                        </Fragment>
                    }
                    step2Description={
                        <Fragment>
                            <span className="home-text187">
                                Our team works on creating a customized strategy
                                tailored to your specific needs and target
                                audience.
                            </span>
                        </Fragment>
                    }
                    step1Title={
                        <Fragment>
                            <span className="home-text188">
                                Initial Consultation
                            </span>
                        </Fragment>
                    }
                    step3Title={
                        <Fragment>
                            <span className="home-text189">
                                Implementation &amp; Execution
                            </span>
                        </Fragment>
                    }
                    step4Description={
                        <Fragment>
                            <span className="home-text190">
                                After the campaign, we analyze the results and
                                optimize the approach for future success.
                            </span>
                        </Fragment>
                    }
                    step4Title={
                        <Fragment>
                            <span className="home-text191">
                                Analysis &amp; Optimization
                            </span>
                        </Fragment>
                    }
                ></Steps2>
                <Testimonial17
                    author2Position={
                        <Fragment>
                            <span className="home-text192">
                                Marketing Director, Company XYZ
                            </span>
                        </Fragment>
                    }
                    author1Position={
                        <Fragment>
                            <span className="home-text193">
                                CEO, Company ABC
                            </span>
                        </Fragment>
                    }
                    author1Name={
                        <Fragment>
                            <span className="home-text194">John Doe</span>
                        </Fragment>
                    }
                    author3Name={
                        <Fragment>
                            <span className="home-text195">David Johnson</span>
                        </Fragment>
                    }
                    review2={
                        <Fragment>
                            <span className="home-text196">
                                Freeloader Agency&apos;s team is top-notch! They
                                are professional, creative, and always deliver
                                exceptional results.
                            </span>
                        </Fragment>
                    }
                    author2Name={
                        <Fragment>
                            <span className="home-text197">Jane Smith</span>
                        </Fragment>
                    }
                    author4Position={
                        <Fragment>
                            <span className="home-text198">CMO, TechCo</span>
                        </Fragment>
                    }
                    author4Name={
                        <Fragment>
                            <span className="home-text199">Sarah Williams</span>
                        </Fragment>
                    }
                    content1={
                        <Fragment>
                            <span className="home-text200">
                                Read what our clients have to say about their
                                experience working with us.
                            </span>
                        </Fragment>
                    }
                    author3Position={
                        <Fragment>
                            <span className="home-text201">
                                Founder, Startup123
                            </span>
                        </Fragment>
                    }
                    review1={
                        <Fragment>
                            <span className="home-text202">
                                Working with Freeloaoder Agency has been a
                                game-changer for our business. Their innovative
                                approach to marketing helped us reach new
                                heights.
                            </span>
                        </Fragment>
                    }
                    heading1={
                        <Fragment>
                            <span className="home-text203">Testimonials</span>
                        </Fragment>
                    }
                    review3={
                        <Fragment>
                            <span className="home-text204">
                                I can&apos;t recommend Freeloaoder Agency
                                enough. Their attention to detail and dedication
                                to client satisfaction are unmatched.
                            </span>
                        </Fragment>
                    }
                    review4={
                        <Fragment>
                            <span className="home-text205">
                                Choosing Freeloaoder Agency was one of the best
                                decisions we made. Their expertise in
                                experiential marketing truly sets them apart.
                            </span>
                        </Fragment>
                    }
                ></Testimonial17>
                <Contact10
                    content1={
                        <Fragment>
                            <span className="home-text206">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in ero.
                            </span>
                        </Fragment>
                    }
                    location1Description={
                        <Fragment>
                            <span className="home-text207">
                                123 Main Street, New York, NY 10001
                            </span>
                        </Fragment>
                    }
                    heading1={
                        <Fragment>
                            <span className="home-text208">Contact Us</span>
                        </Fragment>
                    }
                    location2Description={
                        <Fragment>
                            <span className="home-text209">
                                456 Hollywood Blvd, Los Angeles, CA 90001
                            </span>
                        </Fragment>
                    }
                    location1={
                        <Fragment>
                            <span className="home-text210">
                                New York Office
                            </span>
                        </Fragment>
                    }
                    location2={
                        <Fragment>
                            <span className="home-text211">
                                Los Angeles Office
                            </span>
                        </Fragment>
                    }
                ></Contact10>
                <Footer4
                    link5={
                        <Fragment>
                            <span className="home-text212">
                                Terms &amp; Conditions
                            </span>
                        </Fragment>
                    }
                    link3={
                        <Fragment>
                            <span className="home-text213">Contact Us</span>
                        </Fragment>
                    }
                    link1={
                        <Fragment>
                            <span className="home-text214">About Us</span>
                        </Fragment>
                    }
                    termsLink={
                        <Fragment>
                            <span className="home-text215">
                                Terms &amp; Conditions
                            </span>
                        </Fragment>
                    }
                    link2={
                        <Fragment>
                            <span className="home-text216">Services</span>
                        </Fragment>
                    }
                    link4={
                        <Fragment>
                            <span className="home-text217">Privacy Policy</span>
                        </Fragment>
                    }
                    cookiesLink={
                        <Fragment>
                            <span className="home-text218">Cookies Policy</span>
                        </Fragment>
                    }
                    privacyLink={
                        <Fragment>
                            <span className="home-text219">Privacy Policy</span>
                        </Fragment>
                    }
                ></Footer4>
            </div>
            <style jsx>
                {`
                    .home-container {
                        width: 100%;
                        display: flex;
                        min-height: 100vh;
                        align-items: center;
                        flex-direction: column;
                    }
                    .home-text100 {
                        display: inline-block;
                    }
                    .home-text101 {
                        display: inline-block;
                    }
                    .home-text102 {
                        display: inline-block;
                    }
                    .home-text103 {
                        display: inline-block;
                    }
                    .home-text104 {
                        display: inline-block;
                    }
                    .home-text105 {
                        display: inline-block;
                    }
                    .home-text106 {
                        display: inline-block;
                    }
                    .home-text107 {
                        display: inline-block;
                    }
                    .home-text108 {
                        display: inline-block;
                    }
                    .home-text109 {
                        display: inline-block;
                    }
                    .home-text110 {
                        display: inline-block;
                    }
                    .home-text111 {
                        display: inline-block;
                    }
                    .home-text112 {
                        display: inline-block;
                    }
                    .home-text113 {
                        display: inline-block;
                    }
                    .home-text114 {
                        display: inline-block;
                    }
                    .home-text115 {
                        display: inline-block;
                    }
                    .home-text116 {
                        display: inline-block;
                    }
                    .home-text117 {
                        display: inline-block;
                    }
                    .home-text118 {
                        display: inline-block;
                    }
                    .home-text119 {
                        display: inline-block;
                    }
                    .home-text120 {
                        display: inline-block;
                    }
                    .home-text121 {
                        display: inline-block;
                    }
                    .home-text122 {
                        display: inline-block;
                    }
                    .home-text123 {
                        display: inline-block;
                    }
                    .home-text124 {
                        display: inline-block;
                    }
                    .home-text125 {
                        display: inline-block;
                    }
                    .home-text126 {
                        display: inline-block;
                    }
                    .home-text127 {
                        display: inline-block;
                    }
                    .home-text128 {
                        display: inline-block;
                    }
                    .home-text129 {
                        display: inline-block;
                    }
                    .home-text130 {
                        display: inline-block;
                    }
                    .home-text131 {
                        display: inline-block;
                    }
                    .home-text132 {
                        display: inline-block;
                    }
                    .home-text133 {
                        display: inline-block;
                    }
                    .home-text134 {
                        display: inline-block;
                    }
                    .home-text135 {
                        display: inline-block;
                    }
                    .home-text136 {
                        display: inline-block;
                    }
                    .home-text137 {
                        display: inline-block;
                    }
                    .home-text138 {
                        display: inline-block;
                    }
                    .home-text139 {
                        display: inline-block;
                    }
                    .home-text140 {
                        display: inline-block;
                    }
                    .home-text141 {
                        display: inline-block;
                    }
                    .home-text142 {
                        display: inline-block;
                    }
                    .home-text143 {
                        display: inline-block;
                    }
                    .home-text144 {
                        display: inline-block;
                    }
                    .home-text145 {
                        display: inline-block;
                    }
                    .home-text146 {
                        display: inline-block;
                    }
                    .home-text147 {
                        display: inline-block;
                    }
                    .home-text148 {
                        display: inline-block;
                    }
                    .home-text149 {
                        display: inline-block;
                    }
                    .home-text150 {
                        display: inline-block;
                    }
                    .home-text151 {
                        display: inline-block;
                    }
                    .home-text152 {
                        display: inline-block;
                    }
                    .home-text153 {
                        display: inline-block;
                    }
                    .home-text154 {
                        display: inline-block;
                    }
                    .home-text155 {
                        display: inline-block;
                    }
                    .home-text156 {
                        display: inline-block;
                    }
                    .home-text157 {
                        display: inline-block;
                    }
                    .home-text158 {
                        display: inline-block;
                    }
                    .home-text159 {
                        display: inline-block;
                    }
                    .home-text160 {
                        display: inline-block;
                    }
                    .home-text161 {
                        display: inline-block;
                    }
                    .home-text162 {
                        display: inline-block;
                    }
                    .home-text163 {
                        display: inline-block;
                    }
                    .home-text164 {
                        display: inline-block;
                    }
                    .home-text165 {
                        display: inline-block;
                    }
                    .home-text166 {
                        display: inline-block;
                    }
                    .home-text167 {
                        display: inline-block;
                    }
                    .home-text168 {
                        display: inline-block;
                    }
                    .home-text169 {
                        display: inline-block;
                    }
                    .home-text170 {
                        display: inline-block;
                    }
                    .home-text171 {
                        display: inline-block;
                    }
                    .home-text172 {
                        display: inline-block;
                    }
                    .home-text173 {
                        display: inline-block;
                    }
                    .home-text174 {
                        display: inline-block;
                    }
                    .home-text175 {
                        display: inline-block;
                    }
                    .home-text176 {
                        display: inline-block;
                    }
                    .home-text177 {
                        display: inline-block;
                    }
                    .home-text178 {
                        display: inline-block;
                    }
                    .home-text179 {
                        display: inline-block;
                    }
                    .home-text180 {
                        display: inline-block;
                    }
                    .home-text181 {
                        display: inline-block;
                    }
                    .home-text182 {
                        display: inline-block;
                    }
                    .home-text183 {
                        display: inline-block;
                    }
                    .home-text184 {
                        display: inline-block;
                    }
                    .home-text185 {
                        display: inline-block;
                    }
                    .home-text186 {
                        display: inline-block;
                    }
                    .home-text187 {
                        display: inline-block;
                    }
                    .home-text188 {
                        display: inline-block;
                    }
                    .home-text189 {
                        display: inline-block;
                    }
                    .home-text190 {
                        display: inline-block;
                    }
                    .home-text191 {
                        display: inline-block;
                    }
                    .home-text192 {
                        display: inline-block;
                    }
                    .home-text193 {
                        display: inline-block;
                    }
                    .home-text194 {
                        display: inline-block;
                    }
                    .home-text195 {
                        display: inline-block;
                    }
                    .home-text196 {
                        display: inline-block;
                    }
                    .home-text197 {
                        display: inline-block;
                    }
                    .home-text198 {
                        display: inline-block;
                    }
                    .home-text199 {
                        display: inline-block;
                    }
                    .home-text200 {
                        display: inline-block;
                    }
                    .home-text201 {
                        display: inline-block;
                    }
                    .home-text202 {
                        display: inline-block;
                    }
                    .home-text203 {
                        display: inline-block;
                    }
                    .home-text204 {
                        display: inline-block;
                    }
                    .home-text205 {
                        display: inline-block;
                    }
                    .home-text206 {
                        display: inline-block;
                    }
                    .home-text207 {
                        display: inline-block;
                    }
                    .home-text208 {
                        display: inline-block;
                    }
                    .home-text209 {
                        display: inline-block;
                    }
                    .home-text210 {
                        display: inline-block;
                    }
                    .home-text211 {
                        display: inline-block;
                    }
                    .home-text212 {
                        display: inline-block;
                    }
                    .home-text213 {
                        display: inline-block;
                    }
                    .home-text214 {
                        display: inline-block;
                    }
                    .home-text215 {
                        display: inline-block;
                    }
                    .home-text216 {
                        display: inline-block;
                    }
                    .home-text217 {
                        display: inline-block;
                    }
                    .home-text218 {
                        display: inline-block;
                    }
                    .home-text219 {
                        display: inline-block;
                    }
                `}
            </style>
        </>
    );
};

export default Home;
