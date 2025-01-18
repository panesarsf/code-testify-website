import React from "react";

import AssociateCertificate from "../../assets/certificates/Associate.png";
import DataArchitect from "../../assets/certificates/Data Architect.png";
import JavaScriptDeveloperI from "../../assets/certificates/JavaScript Developer I.png";
import PlatformAppBuilder from "../../assets/certificates/Platform App Builder.png";
import PlatformDeveloperI from "../../assets/certificates/Platform Developer I.png";
import PlatformDeveloperII from "../../assets/certificates/Platform Developer II.png";

import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <h2>Our Services</h2>
      <div className={styles.container}>
        <div className={styles.service}>
          <h3>Quality Assurance (QA)</h3>
          <ul>
            <li>Comprehensive manual and automated testing solutions.</li>
            <li>Identifying and fixing bugs for a seamless user experience.</li>
            <li>End-to-end testing solutions tailored to your projects.</li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Software Automation</h3>
          <ul>
            <li>Automating repetitive processes to save time and resources.</li>
            <li>Optimizing workflows to enhance productivity.</li>
            <li>Custom automation tools to fit your specific requirements.</li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Software Development</h3>
          <ul>
            <li>Building scalable and efficient software solutions.</li>
            <li>
              Leveraging the latest technologies to bring your ideas to life.
            </li>
            <li>Ensuring high performance and reliability in every product.</li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Web Application Development</h3>
          <ul>
            <li>Creating responsive and dynamic web applications.</li>
            <li>
              Designing user-friendly interfaces that align with your brand.
            </li>
            <li>
              Delivering secure and optimized solutions for your business.
            </li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Customized Customer Solutions</h3>
          <ul>
            <li>
              Tailoring solutions to meet your unique business challenges.
            </li>
            <li>Partnering with you to understand and achieve your goals.</li>
            <li>
              Offering innovative and scalable strategies to drive success.
            </li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Salesforce Services</h3>
          <ul>
            <li>Salesforce Consultation, Migration, and Development.</li>
            <li>
              Custom objects, workflows, and integrations for streamlined
              operations.
            </li>
            <li>Ongoing training and support for maximum productivity.</li>
          </ul>
        </div>
      </div>
      <div className={styles.salesforceServices} id="salesforce">
        <h2>Salesforce Services</h2>
        <div className={styles.container}>
          <div className={styles.service}>
            <h3>Salesforce Consultation</h3>
            <ul>
              <li>
                Expert guidance to help align Salesforce capabilities with your
                business goals.
              </li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Salesforce Migration</h3>
            <ul>
              <li>
                Secure and efficient migration of existing sales data into
                Salesforce.
              </li>
              <li>
                Ensuring data accuracy and integrity during the transition.
              </li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Salesforce Implementation/Customization and Development</h3>
            <ul>
              <li>
                Tailored Sales Cloud setup to align with your business
                processes.
              </li>
              <li>
                Custom objects, fields, and workflows to meet unique sales
                needs.
              </li>
              <li>Lead and Opportunity Management Automation.</li>
              <li>Sales Forecasting and Reporting Dashboards.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Custom Development and Integrations</h3>
            <ul>
              <li>Build custom solutions for complex use cases.</li>
              <li>
                Integrate Sales/Service Cloud with third-party platforms like
                ERP systems, marketing tools, or communication platforms (e.g.,
                Slack, Teams).
              </li>
              <li>Agentforce AI setup as per business needs.</li>
              <li>
                Implement Omni-Channel features for intelligent case routing
                across email, chats, and phone to the right agents.
              </li>
              <li>
                Build a self-service portal with Salesforce Knowledge to reduce
                agent workload.
              </li>
              <li>
                Offer FSL implementations to support businesses with mobile
                workers or service scheduling.
              </li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Integration</h3>
            <ul>
              <li>
                Seamless integration with third-party tools like ERP, marketing
                automation, and accounting systems.
              </li>
              <li>Synchronize data across platforms for a unified workflow.</li>
            </ul>
          </div>
          <div className={styles.service}>
            <h3>Training and Support</h3>
            <ul>
              <li>
                Comprehensive user training for faster adoption and
                productivity.
              </li>
              <li>Ongoing technical support to resolve any issues.</li>
            </ul>
          </div>
        </div>
        <div className={styles.certificateSection}>
          <div className={styles.certificateContainer}>
            <img src={AssociateCertificate} alt="Associate Certificate" />
            <h4>Associate Certificate</h4>
          </div>
          <div className={styles.certificateContainer}>
            <img src={DataArchitect} alt="Data Architect Certificate" />
            <h4>Data Architect Certificate</h4>
          </div>
          <div className={styles.certificateContainer}>
            <img src={JavaScriptDeveloperI} alt="JavaScript Developer I" />
            <h4>JavaScript Developer I</h4>
          </div>
          <div className={styles.certificateContainer}>
            <img src={PlatformAppBuilder} alt="Platform App Builder" />
            <h4>Platform App Builder</h4>
          </div>
          <div className={styles.certificateContainer}>
            <img src={PlatformDeveloperI} alt="Platform Developer I" />
            <h4>Platform Developer I</h4>
          </div>
          <div className={styles.certificateContainer}>
            <img src={PlatformDeveloperII} alt="Platform Developer II" />
            <h4>Platform Developer II</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
