const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Privacy Policy',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'This Website collects some Personal Data from its users.',
            eleventyNavigation: {
                key: 'privacy-policy',
                title: 'Privacy Policy',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'en/privacy-policy/',
            ogImageRelativeUrl: 'assets/img/landing/software-company/nexxo-varese-hero.jpg',
            sitemap: {
                links: sitemapAlternates.privacyPolicy
            }
        }
    }

    async render(data) {
        return `
        <!-- Breadcrumb -->
        <nav class="container py-4 my-lg-3" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>${this.i18n('pagesUrl.homepage.linkName')}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">${this.i18n('pagesUrl.privacyPolicy.linkName')}</li>
          </ol>
        </nav>
        <section class="container">
        <h1>PRIVACY INFORMATION NOTICE</h1>
        <h2>EXTENDED INFORMATION NOTICE PURSUANT TO ARTICLES 12, 13 AND, WHERE APPLICABLE, 14 OF THE GDPR – REGULATION (EU) 2016/679 ON THE PROTECTION OF NATURAL PERSONS WITH REGARD TO THE PROCESSING OF PERSONAL DATA (“GDPR”)</h2>
            <p>The data controller releases the following information notice pursuant to articles 12, 13 and, where applicable, 14 of the GDPR with regard to the processing of personal data provided by the Customer/data subject by filling in and signing the Contract for the purchase of the products/services offered for sale by the data controller, by spontaneously uploading personal data to this website (in particular by filling in forms) or simply browsing the site.</p>
        <h3>1. DATA CONTROLLER AND CONTACT DETAILS</h3>
            <p>The data controller is Nexxo Cross Platform S.r.l. – Via Ernesto Cairoli 5 21100 Varese (VA), Partita Iva 03799860121, Tel. 0332 1580 443, email: info@nexxoxp.com</p>
        <h3>2. PRINCIPLES APPLICABLE TO PROCESSING OF PERSONAL DATA</h3>
            <p>Pursuant to the provisions of the GDPR, the data controller shall constantly endeavour to ensure that the personal data are:</p>
        <ol type="a">
            <li>processed lawfully, fairly and in a transparent manner;</li>
            <li>collected for specified, explicit and legitimate purposes, and not further processed in a manner that is incompatible with those purposes;</li>
            <li>adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;</li>
            <li>accurate and, where necessary, kept up to date;</li>
            <li>kept for no longer than is necessary for the purposes for which the personal data are processed;</li>
            <li>processed in a manner that ensures appropriate security of the personal data, taking appropriate technical and organizational measures;</li>
            <li>processed, if based on consent given by a freely taken decision by the Customer/data subject, on the basis of a request for consent submitted in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using a clear, plain language.</li>
        </ol>
            <p>The data controller shall adopt appropriate technical and organisational measures to ensure the protection of the personal data by design, and to guarantee that, by default, only personal data which are necessary for each specific purpose of the processing are processed.The data controller shall collect and take utmost account of the instructions, observations and opinions of the Customer/data subject sent to the aforementioned addresses, in order to implement a dynamic privacy management system which ensures the effective protection of persons with regard to the processing of their data.</p>
        <h3>3. MANNER OF AND PROCEDURE FOR PROCESSING PERSONAL DATA</h3>
            <p>Personal data shall be processed manually and with electronic tools, using logics strictly for the purposes stated below and in such a way as to guarantee the security and confidentiality of the data.</p>
        <h3>4. PURPOSES OF PROCESSING PERSONAL DATA</h3>
        <h4>(4a) Purposes for which personal data are processed</h4>
            <p>The personal data provided by the Customer/data subject shall be processed mainly for the performance of the Contract and the management of credit, and, more generally, for the management of the relationship arising from the Contract. Furthermore, the personal data may be processed for the selection of new staff, the distribution of products/services, the management of the suppliers and other circumstances arising from the request of the Customer/data subject or business administration. The provision of data in the Contract or subsequently, during the contractual relationship, for the purposes of the processing in question is mandatory; therefore, failure to provide such data or the partial or incorrect provision thereof shall render the execution and/or performance of the Contract impossible. The Customer/data subject will not be able to use the products/services offered by the data controller, potentially exposing the Customer/data subject to liability for breach of the Contract. The personal data provided by the Customer/data subject may also be subject to processing if this is necessary for the fulfilment of a legal obligation of the data controller, in order to safeguard the vital interests of the Customer/data subject or of another natural person, for the performance of a task of public interest or linked to the exercise of public powers with which the data controller is tasked, or to satisfy a legitimate interest of the data controller or of third parties, on the condition that the interests or the rights or the fundamental freedoms of the Customer/data subject do not prevail; here, as elsewhere, the provision of data is mandatory; therefore, failure to provide such data or the partial or incorrect disclosure thereof may expose the Customer/data subject to liabilities and sanctions as provided for by the Law.</p>
        <h4>(4b) Additional purposes for which personal data are processed following specific and express consent of Customer/data subject</h4>
            <p>Other than the above purposes of processing, the personal data thus provided/acquired may be processed, with the consent of the Customer/data subject to be given by selecting the box on the Contract or the Site (or using other social or web applications of the data controller) – for example, for market research and for commercial and promotional communications, over the telephone (also using the mobile number provided) and automated contact systems (e-mail, SMS, MMS, fax etc.) regarding products/services offered by the data controller or by companies of the Group to which the data controller may belong. Consent for the purposes of processing under this point (4b) is optional; therefore, following refusal to give such consent, the data will be processed exclusively for such purposes as referred to in point (4a) above, except for such cases as mentioned below with reference to the legitimate interests of the data controller or of third parties.</p>
        <h3>5. CATEGORIES OF PERSONAL DATA PROCESSED</h3>
            <p>The data controller shall process mainly identification/contact data (name, surname, addresses, type and number of identity documents, telephone numbers, e-mail addresses, tax/invoicing data etc.), and, if commercial transactions are envisaged, financial data (related to banking, especially details of current accounts, credit card numbers, and other data related to the said commercial transactions). The processing carried out by the data controller, both for the performance of the Contract and based on the express consent of the Customer/data subject, shall not concern, in general, particular categories of personal data that are recognized as sensitive (data revealing racial or ethnic origin, political opinions, religious beliefs, the state of health or sexual orientation etc.), or genetic and biometric data or so-called judicial data (related to criminal convictions and offences). However, it cannot be ruled out that the data controller, in order to fulfil the obligations arising from the Contract, may be obliged to store and/or process sensitive, genetic, biometric or judicial data of the Customer/data subject or of third parties, which the Customer/data subject holds in his/her capacity as data controller; in the case in question, the processing by the data controller shall be mandatory, under the conditions and within the limits of the appointment of the data controller as data processor by the Customer/data subject. In his/her capacity as data controller with reference to the Site and, potentially, as data processor appointed (under the above terms) by the Customer/data subject, the data controller shall also process the so-
            called browsing data. Computerized systems and software procedures dedicated to the operation of websites acquire, throughout their normal operation, some personal data whose transmission is implicit in the use of Internet communication protocols. This is information that is not collected in order to be associated to identified subjects, but which, by its very nature, may allow the identification of the data subject. This category of information includes geolocalisation data, IP addresses, the type of browser, the operating system, the domain name and the website addresses from which the site was accessed or exited, information on pages visited by the users inside the site, the time of access, the duration of presence on an individual page, the analysis of internal browsing and other parameters related to the user’s operating system and IT environment. This is, therefore, information that, by its nature, allows, through elaboration and association with data held by third parties, the identification of users. Further, the Site may use both session cookies (which are not stored on the data subject’s computer and disappear once the browser has been closed) and persistent cookies, for the transmission of personal information, or systems for tracking the data subjects anyway.</p>
        <h3>6. SOURCE OF PERSONAL DATA</h3>
            <p>The personal data processed by the data controller are collected directly by the data controller from the Customer/data subject at the time of, and during, his/her browsing of the Site (or by using other social or web applications of the data controller), or, also via his/her own advertisements, on the occasion of, or following, the execution of the Contract, during the execution thereof, or from public sources. As mentioned above, the data controller, as data processor charged therewith and in order to fulfil the obligations arising from the Contract, may store and/or process data, especially browsing data, including potentially sensitive, genetic, biometric and judicial data which the Customer/data subject holds in his/her capacity as data controller, acquired with the consent of said third parties, at the time of, or during, the browsing by the said third parties of the Site (or by using other social or web applications of the data controller).</p>
        <h3>7. LEGITIMATE INTERESTS</h3>
            <p>The legitimate interests of the data controller or of third parties may constitute a valid legal basis for the processing, on the condition that the interests or the rights or the fundamental freedoms of the data subject do not prevail. Generally speaking, such legitimate interests may arise from a pertinent and appropriate relationship between the data controller and the data subject – for example, where the data subject is a customer of the data controller. The following, in particular, shall constitute a legitimate interest of the data controller for the processing of the personal data of the Customer/data subject: for the purposes of fraud prevention, for purposes of direct marketing, to ensure the free circulation of such data inside the Group of undertakings to which the data controller may belong, or related to the traffic, in order to guarantee the security of networks and of information, i.e. the ability of a network or a system to resist unforeseen events or illegal acts that may compromise the availability, authenticity, integrity and confidentiality of data.</p>
        <h3>8. CIRCULATION OF PERSONAL DATA</h3>
        <h4>(8a) Disclosure of personal data - categories of recipients</h4>
            <p>As well as employees and various partners of the data controller (who have been authorised by the data controller to process data based on adequate written operational instructions, in order to guarantee the confidentiality and security of the data), third parties, to whom/which the data controller entrusts certain activities or part thereof, may carry out certain processing operations which are useful for such purposes as referred to in point (4a), i.e. in fulfilment of both contractual and legal obligations, including, without limitation: commercial and/or technical partners; companies that provide banking and financial services; companies that provide document archiving services; debt recovery companies; auditing and financial statement certification companies; rating companies; persons who provide professional support and consultancy for the data controller; companies that provide customer care services; factoring companies, companies that securitise receivables or credit transfer companies; companies of 
            the Group to which the data controller may belong; persons who provide commercial information; IT service companies. The persons belonging to the said categories shall process the personal data in question as independent data controllers, or as data processors, with reference to specific processing operations that are included in the contractual performance that the said persons carry out in favour/on behalf of the data controller; the data controller shall provide the data processors with adequate written operational instructions, with particular reference to the adoption of the minimum security measures, so as to guarantee the security and confidentiality of the data.Certain processing operations may be carried out by third parties, to whom/which the data controller entrusts certain activities or part thereof, useful for such purposes as referred to in point (4b), including, without limitation: commercial and/or technical partners; companies that provide marketing services institutionally; advertising agencies; persons who provide support and consultancy with regard to competitions and sweepstakes. The persons belonging to the said categories shall process the personal data as independent data controllers, or as data processors, with reference to specific processing operations that are included in the contractual performance that the said persons carry out in favour/on behalf of the data controller; the data controller shall provide the data processors with adequate written operational instructions, with particular reference to the adoption of minimum security measures, so as to guarantee the security and confidentiality of the data. The periodically updated list of data processors with whom/which the data controller maintains relationships is available on written request addressed to the registered office of the data controller. Personal data may also be disclosed, on request, to the competent authorities, in fulfilment of the obligations arising from provisions of the law.</p>
        <h4>(8b) Transfer of personal data to third countries</h4>
            <p>The personal data of the Customer/data subject may also be transferred abroad, namely to both EU countries and non-EU countries, and, in the latter case, either based on a decision of adequacy or in the context of and with such adequate guarantees as provided for by the GDPR (i.e., in particular, in the presence of model contractual clauses for the protection of data approved by the European Commission), or other than the above circumstances, under one or more of the derogations provided for by the GDPR (in particular, following the explicit consent of the Customer/data subject or for the performance of the Contract concluded by the Customer/data subject, or for the implementation of a contract executed between the data controller and another natural or legal person in favour of the Customer/data subject, notably for the performance of activities required by the data controller for the performance of the Contract concluded with the Customer/data subject). In the event of transfer of data to non-EU countries, the Customer/data subject may, on written request addressed to the registered office of the data controller, get to know the adequate guarantees, or the derogations, that justify the across-the-border transfer. It is hereby expressly understood that, in the event of transfer of the data to non-EU countries, for all requests concerning the data and for the exercise of the rights granted to the Customer/data subject by the GDPR, the Customer/data subject may always address the data controller.</p>
        <h3>9. CRITERIA FOR DETERMINING RETENTION PERIOD FOR PERSONAL DATA</h3>
            <p>For such purposes as referred to in point (4a) above, the retention period for the personal data provided by the Customer/data subject and the potential subsequent processing thereof shall coincide with the statutory limitation period of the rights/obligations (legal, fiscal etc.) arising from the Contract, i.e. usually 10 years, unless in the case of acts that interrupt the limitation period, thereby prolonging it.For such purposes as referred to in point (4b) above, the retention period for the personal data provided by the Customer/data subject and the potential subsequent processing thereof shall end with the withdrawal of the consent provided by the Customer/data subject or, in the absence of consent, one year after the end of the relationship between the data controller and the Customer/data subject.</p>
        <h3>10. RIGHTS OF CUSTOMER/DATA SUBJECT</h3>
            <p>The data controller acknowledges – and facilitates the exercise by the Customer/data subject of – all the rights under the GDPR, especially the right to request access to personal data that concern him/her, and to obtain a copy thereof (article 15 of the GDPR), the right to rectification (article 16 of the GDPR), and to the erasure of the data (article 17 of the GDPR), the rights of restriction of the processing that concerns him/her (article 18 of the GDPR), the right to the portability of the data (article 20 of the GDPR, if the requirements are met) and the right to object to the processing that concerns him/her (articles 21 and 22 of the GDPR, for the cases mentioned above, and, in particular, in case of processing for marketing purposes or processing via an automated decision-making process – including profiling – which produces legal effects that concern him/her, if the requirements are met). The data controller also acknowledges – in cases where the processing is based on consent – the right of the Customer/data subject to withdraw said consent at any time, without prejudice to the lawfulness of the processing based on the consent provided prior to the withdrawal. For such purpose, the Customer/data subject may unregister from the Site (or other social or web applications of the data controller) at any time, either by using the link at the bottom of all commercial communications received, or by contacting the data controller at the above addresses.The data controller shall also inform the Customer/data subject of the right to lodge a complaint with the Personal Data Protection Authority in its capacity as supervisory authority in Italy and to bring court proceedings against both a decision of the Data Protection Authority and the data controller and/or a data processor.If the Customer/data subject intends to modify or delete the data provided through the Site, the Customer/data subject may apply to the data controller therefor. If the Customer/data subject has registered with the Site, the Customer/data subject may use his/her reserved area to exercise such rights as provided for in the information notice. If you wish to have your personal data deleted, we may not be able to supply you with the requested service.</p>
        <h3>11. SECURITY OF SYSTEMS AND OF PERSONAL DATA</h3>
            <p>Bearing in mind the state of the art and the implementation cost, as well as the nature, the subject, the scope and the purposes of processing, as well as the risk, in terms of probability and severity, to the rights and freedoms of natural persons, the data controller shall adopt the technical and organizational measures that can guarantee a security level appropriate to the risk presented, especially by ensuring, on a permanent basis, the confidentiality, integrity, availability and resilience of the processing systems and services (for example, through the encryption of the personal data, where necessary), and the ability to promptly restore the availability of the data in case of physical or technical incidents, and by adopting internal procedures aimed at regularly testing, verifying and assessing the efficacy of the technical and organisational measures adopted. In assessing the adequate level of security, the data controller shall take into account the risks presented by the processing, arising, in particular, from the destruction, loss, modification, unauthorised disclosure of, or the accidental or illegal access to the personal data transmitted, stored or in any way processed.The data controller shall endeavour to ensure that anyone who acts under his/her authority and has access to personal data does not process them unless he/she has been authorised to do so by the data controller. Having said this, the Customer/data subject understands and accepts that no security system guarantees certain and absolute security; therefore, the data controller shall not be liable for acts or deeds by third parties who may access the systems without being duly authorised, although proper precautions have been taken.</p>
        <h3>12. AUTOMATED DECISION-MAKING PROCESSES, INCLUDING PROFILING</h3>
            <p>The data controller may carry out automated processing, including profiling, in relation to the purposes under point (4b) above, to optimise the browsability of the Site (or the usability of other social or web applications of the data controller) and to improve the purchasing experience, without prejudice to what has been mentioned above with regard to the rights of objection and withdrawal of consent by the Customer/data subject. “Profiling” shall mean any form of automated processing of personal data evaluating certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person’s personal preferences, interests, location etc., in order to create, for example, profiles, or homogeneous groups of persons by characteristic, interest or behaviour. The data controller shall not carry out any automated processing that produces legal effects which concern the Customer/data subject or which significantly impinge on his/her person, except where this is necessary for the execution or performance of the Contract, is authorised by the law or is based on the explicit consent of the Customer/data subject, acknowledging the latter’s right to obtain human intervention, to express his/her point of view and to challenge the decision anyway.</p>
    </section>

 
        `
    }
}