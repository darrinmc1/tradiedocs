// =============================================================================
// TRADIEDOCS — SEED LESSONS
// =============================================================================

export type ModuleLevel = "beginner" | "intermediate" | "advanced"

export interface Module {
  id: string
  title: string
  description: string
  category: string
  level: ModuleLevel
  content: string
  duration: string
  durationMinutes: number
  learningOutcomes: string[]
  tags: string[]
  dateAdded: string
  lastUpdated: string
  status: "published" | "draft"
}

const modules: Module[] = [
  {
    "id": "about",
    "title": "About TradieDocs",
    "description": "Understand the core value proposition of TradieDocs, focusing on efficiency and professionalism for tradies. Learn how our platform helps streamline documentation, manage claims, and improve client communication.",
    "category": "claims",
    "level": "beginner",
    "content": "## About TradieDocs: Your Partner in Professional Documentation\n\nTradieDocs was founded with a singular mission: to empower tradies with the tools they need to run their businesses more efficiently and professionally. We understand the unique challenges faced by tradespeople – from managing job sites and client communications to handling complex paperwork and claims. Our platform is designed to simplify these processes, saving you valuable time and reducing the administrative burden that often distracts from the actual work.\n\n### Streamlining Your Workflow\n\nAt its heart, TradieDocs is about reclaiming your time. We know that administrative tasks can consume hours each week, time that could be better spent on jobs, with family, or growing your business. Our intuitive interface allows you to create, send, and manage quotes, invoices, and job sheets with ease. Digital forms, pre-filled templates, and mobile accessibility mean you can handle documentation on the go, directly from the job site, without being tied to a desk. This efficiency translates directly into more productive workdays and a smoother operational flow.\n\n### Enhancing Professionalism and Client Trust\n\nFirst impressions matter. In today's competitive market, presenting a professional image is crucial for securing new clients and retaining existing ones. TradieDocs helps you achieve this by providing polished, branded documents that reflect the quality of your work. Clear, detailed quotes and invoices build trust and transparency with your clients. Furthermore, our system facilitates timely communication, ensuring clients are kept informed at every stage of the project. This professional approach not only enhances your reputation but also minimizes misunderstandings and disputes.\n\n### Simplifying Claims Management\n\nDealing with insurance claims or disputes can be a significant headache. TradieDocs provides the necessary documentation to support your claims effectively. By maintaining organized records of work performed, materials used, and client agreements, you have readily accessible evidence to substantiate your position. This organized approach can significantly simplify the claims process, reducing back-and-forth communication and speeding up resolution times. While we aim to provide tools that support your claims, it is important to ensure all claims are factual and substantiated by the documentation provided.\n\n### Our Commitment to You\n\nWe are dedicated to continuously improving TradieDocs based on the feedback of tradies like you. Our goal is to be more than just software; we aim to be a reliable partner in your business success. We strive to offer practical solutions that address real-world problems, enabling you to focus on what you do best – delivering excellent trade services. We believe in the power of clear communication and efficient processes to elevate your business.",
    "duration": "8 min",
    "durationMinutes": 8,
    "learningOutcomes": [
      "Understand the primary benefits of using TradieDocs.",
      "Identify how TradieDocs improves business efficiency and professionalism.",
      "Recognize the role of TradieDocs in managing documentation and client communication."
    ],
    "tags": [
      "tradie software",
      "business efficiency",
      "documentation",
      "client management",
      "claims support"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
  {
    "id": "products",
    "title": "Understanding Your Product Claims",
    "description": "Learn how to identify and refine superlative and statistical claims within product descriptions to ensure accuracy and credibility.",
    "category": "claims",
    "level": "intermediate",
    "content": "## Substantiating Your Product Claims: Moving Beyond Superlatives\n\nIn the world of product marketing and sales, making compelling claims is essential. However, the line between persuasive language and unsubstantiated hyperbole can be easily crossed. This lesson focuses on identifying and rectifying two common types of problematic claims: superlative language and statistics without sources.\n\n### The Peril of Superlative Language\n\nWords like 'the best,' 'world-class,' 'guaranteed,' 'proven to,' 'always,' 'never fails,' '#1,' 'revolutionary,' 'game-changing,' and 'industry-leading' are powerful. They aim to position a product as superior and indispensable. However, without concrete evidence, these terms are mere assertions and can erode trust with your audience. For tradies, this might mean claims about tool durability, service efficiency, or material performance. For example, stating 'our tools are guaranteed to last a lifetime' is a bold claim that's difficult to universally prove and could lead to customer dissatisfaction if a tool fails prematurely.\n\n**Why it's a problem:**\n\n*   **Lack of Verifiability:** Superlatives are subjective and difficult, if not impossible, to measure objectively. What constitutes 'world-class' performance? Who decided your product is '#1'?\n*   **Erosion of Trust:** When customers discover that claims like 'guaranteed' or 'never fails' don't hold up in real-world scenarios, their trust in your brand diminishes significantly. This can lead to negative reviews and lost business.\n*   **Legal Ramifications:** In some jurisdictions, making unsubstantiated superlative claims can be considered false advertising, leading to potential legal issues.\n\n**How to improve:**\n\nInstead of relying on vague superlatives, focus on specific, verifiable benefits. Quantify performance where possible. For instance, instead of 'the fastest installation,' try 'installation completed in an average of 45 minutes.' Instead of 'revolutionary design,' explain *what* makes the design innovative and how it benefits the user, such as 'our patented quick-release mechanism reduces setup time by 30%.'\n\n### The Importance of Sourced Statistics\n\nNumbers, percentages, and statistics can be highly persuasive. '73% of businesses use our software,' 'our service saves you 40 hours per week,' or 'trusted by 10,000 companies' are all impactful statements. However, when these figures are presented without a clear source, they become suspect. A potential customer might wonder: Where did this data come from? Who conducted the study? Is this data even relevant to my situation?\n\n**Why it's a problem:**\n\n*   **Credibility Gap:** Uncited statistics create a credibility gap. They appear as arbitrary numbers plucked from thin air, undermining the perceived accuracy of your claims.\n*   **Susceptibility to Scrutiny:** Savvy consumers and business partners will question the validity of unsourced data. This can lead to lengthy discussions or outright dismissal of your product.\n*   **Misleading Information:** Without a source, it's impossible to verify the methodology or context of the statistic, potentially leading to the misrepresentation of facts.\n\n**How to improve:**\n\nAlways cite your sources for any numerical data, percentages, or statistics. This can be done through inline citations, footnotes, or a dedicated 'Sources' section. For example, 'According to a 2023 independent study by [Research Firm Name] (available at [link to study]), 73% of small businesses reported increased efficiency after implementing similar workflow solutions.'\n\n**Best Practices for Product Claims:**\n\n1.  **Be Specific:** Clearly articulate the features and benefits of your product.\n2.  **Be Verifiable:** Ensure all claims can be backed by evidence, data, or customer testimonials.\n3.  **Be Honest:** Avoid exaggeration or misleading statements.\n4.  **Know Your Audience:** Tailor your claims to resonate with the specific needs and expectations of your target market.\n5.  **Cite Your Sources:** For any statistical data, provide a clear and accessible reference.\n\nBy adhering to these principles, you can build stronger, more credible product descriptions that foster trust and drive genuine interest, ultimately benefiting both your customers and your business.",
    "duration": "10 min",
    "durationMinutes": 10,
    "learningOutcomes": [
      "Identify and remove unsubstantiated superlative language.",
      "Understand the importance of citing sources for statistics.",
      "Replace vague claims with specific, verifiable information."
    ],
    "tags": [
      "product claims",
      "marketing",
      "sales",
      "credibility",
      "evidence"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
  {
    "id": "updates",
    "title": "TradieDocs: Essential Updates and Features for Australian Tradies",
    "description": "Stay up-to-date with the latest features and essential documentation for Australian tradies using TradieDocs. This lesson covers SWMS templates, quote packs, compliance documents, and more, ensuring you're always ahead of the curve.",
    "category": "business management",
    "level": "intermediate",
    "content": "## Keeping Your Tradie Business Streamlined with TradieDocs\n\nIn today's competitive construction landscape, efficiency and compliance are paramount for Australian tradies. TradieDocs has been developed to address these critical needs, offering a suite of digital tools designed to simplify your administrative tasks and ensure you meet all regulatory requirements. This lesson delves into the essential updates and core features that make TradieDocs an indispensable asset for your business.\n\n### The Importance of SWMS Templates\n\nSafe Work Method Statements (SWMS) are legally required for high-risk construction work in Australia. Manually creating these documents can be time-consuming and prone to errors. TradieDocs provides robust, easy-to-use SWMS templates that are compliant with current Australian Work Health and Safety (WHS) legislation. Our templates are designed to be adaptable, allowing you to quickly fill in project-specific details, hazard identification, risk assessments, and control measures. By utilizing our digital SWMS, you ensure that your team is protected, your projects adhere to safety standards, and you avoid potential fines or project delays.\n\n### Streamlining with Quote Packs\n\nFirst impressions matter, and a professional quote is crucial for winning new business. TradieDocs offers customizable quote pack features that allow you to generate detailed, branded quotes in minutes. These packs can include not just pricing, but also company information, terms and conditions, and even relevant certifications or testimonials. The ability to send these digitally, track their status, and convert them into invoices upon acceptance streamlines the sales process significantly. This not only enhances your professional image but also improves cash flow by reducing the time between quoting and payment.\n\n### Ensuring Compliance with Digital Documents\n\nBeyond SWMS and quotes, Australian tradies face a myriad of compliance obligations. TradieDocs provides a central hub for all your essential documents. This includes: \n\n*   **Invoices:** Professional and easy-to-track invoices that can be generated from accepted quotes.\n*   **Contracts:** Standardized contract templates that can be customized for different types of jobs.\n*   **Employee Records:** Secure storage for essential HR and payroll documentation.\n*   **Licensing and Insurance:** A place to store and manage expiry dates for all necessary licenses and insurance policies.\n\nMaintaining compliance isn't just about avoiding penalties; it's about building a sustainable and reputable business. TradieDocs simplifies this by keeping all critical documents organised, accessible, and up-to-date.\n\n### Future-Proofing Your Business\n\nTradieDocs is continuously evolving to meet the dynamic needs of the Australian tradie industry. We are committed to providing tools that not only solve today's problems but also anticipate tomorrow's challenges. Our platform is designed with scalability in mind, ensuring that as your business grows, TradieDocs grows with you. We are dedicated to keeping our users informed about the latest legislative changes and industry best practices, integrating them directly into our platform. Our ongoing development ensures that you always have access to the most current and effective tools available.\n\nBy embracing digital solutions like TradieDocs, Australian tradies can significantly reduce administrative burdens, enhance professionalism, and ensure robust compliance. This allows you to focus on what you do best – delivering quality workmanship and growing your trade business.",
    "duration": "15 min",
    "durationMinutes": 15,
    "learningOutcomes": [
      "Understand the importance and functionality of SWMS templates.",
      "Learn how TradieDocs quote packs can improve sales and client relations.",
      "Identify key compliance documents managed through the TradieDocs platform."
    ],
    "tags": [
      "tradie",
      "swms",
      "compliance",
      "quote packs",
      "australia",
      "business management"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
  {
    "id": "blog",
    "title": "Crafting Effective Claims and Maintaining Brand Voice",
    "description": "Learn how to write compelling claims backed by evidence and ensure your content aligns with a practical, no-nonsense brand voice.",
    "category": "claims",
    "level": "intermediate",
    "content": "## Writing Strong Claims and Maintaining Your Brand Voice\n\nIn the competitive landscape of business communication, particularly for tradies, clarity, credibility, and a consistent brand voice are paramount. This lesson focuses on two critical aspects: substantiating your claims and adhering to a practical, direct brand persona. We'll explore how to move beyond vague promises to deliver impactful messages that resonate with your target audience while avoiding common pitfalls.\n\n### The Power of Substantiated Claims\n\nOne of the most significant ways to build trust and authority is by backing up every claim you make with solid evidence or a verifiable source. Vague or unsubstantiated claims, such as 'guaranteed results,' can erode credibility and leave potential clients questioning your reliability. Instead of making broad promises, aim for specificity and transparency.\n\n**Why Substantiate Claims?**\n\n*   **Builds Trust:** When you provide proof, you demonstrate honesty and transparency, fostering trust with your audience.\n*   **Enhances Credibility:** Backed claims position you as an expert who understands their subject matter deeply.\n*   **Improves Persuasion:** Evidence-based statements are far more persuasive than mere assertions.\n*   **Reduces Risk:** Clearly defined terms and demonstrable results minimize misunderstandings and potential disputes.\n\n**How to Substantiate Claims:**\n\n1.  **Use Data and Statistics:** If you have performance metrics, customer satisfaction rates, or project completion times, present them clearly. For example, instead of saying 'We offer the fastest service,' say 'Our average project completion time is 3 days, based on over 100 completed jobs last year.'\n2.  **Cite Sources:** If your claim is based on industry standards, research, or certifications, mention the source. For instance, 'Our materials meet Australian Standard AS/NZS 3000:2018 for electrical safety.'\n3.  **Provide Case Studies or Testimonials:** Real-world examples are powerful. Referencing a specific project or quoting a satisfied client adds weight to your claims. 'As seen in our recent project for Smith & Co., we reduced energy costs by 20% through our new insulation techniques.'\n4.  **Explain Your Process:** Sometimes, the 'how' is the substantiation. Detailing a unique methodology or a rigorous quality control process can justify a claim about superior outcomes.\n5.  **Be Specific:** Replace subjective adjectives with objective descriptions. Instead of 'the best,' use 'award-winning,' 'certified,' or 'recommended by X authority.'\n\n**Example Transformation:**\n\n*   **Weak Claim:** 'We guarantee you'll be happy with our work.'\n*   **Stronger Claim:** 'Our customer satisfaction rate is over 98%, based on post-project surveys from the last two years. We also offer a 12-month workmanship warranty on all installations.'\n\n### Maintaining a Practical Brand Voice\n\nFor tradies, the brand voice is typically direct, no-nonsense, and focused on delivering solutions. It's about clarity, efficiency, and reliability. Incorporating slang or overly casual language, even with good intentions, can dilute this message and create a disconnect with the audience. The goal is to sound professional, knowledgeable, and approachable, without being overly familiar.\n\n**Characteristics of a Practical Tradie Brand Voice:**\n\n*   **Direct and Concise:** Get to the point quickly. Avoid jargon unless it's industry-standard and understood by the client.\n*   **Action-Oriented:** Focus on what you do and how it benefits the client.\n*   **Reliable and Trustworthy:** The tone should convey competence and dependability.\n*   **Clear and Unambiguous:** Leave no room for misinterpretation.\n*   **Professional yet Approachable:** Friendly without being overly casual.\n\n**Avoiding Common Pitfalls:**\n\n*   **Slang:** Terms like 'mate-to-mate' or overly colloquial phrases can undermine professionalism. While the intention might be to sound friendly, it can come across as unprofessional or even condescending.\n*   **Excessive Jargon:** While some technical terms are necessary, explain them if the client might not be familiar.\n*   **Overly Casual Tone:** A tone that is too relaxed can make the service seem less serious or less reliable.\n\n**Example Transformation:**\n\n*   **Original:** 'We'll sort you out, mate. Just give us a yell, and we'll have a yarn about what needs doing.'\n*   **Revised:** 'We are ready to address your needs. Please contact us to schedule a consultation and discuss the required work.'\n\n**Putting It All Together**\n\nBy focusing on substantiated claims and a consistent, practical brand voice, you build a stronger, more trustworthy brand. This approach not only enhances your communication but also reinforces your professionalism and expertise in the eyes of your clients. Regularly review your content to ensure it meets these standards, and always strive for clarity, accuracy, and reliability in every message you send.\n",
    "duration": "12 min",
    "durationMinutes": 12,
    "learningOutcomes": [
      "Write claims supported by evidence and sources.",
      "Identify and replace unsubstantiated or vague claims.",
      "Align communication with a practical and professional brand voice."
    ],
    "tags": [
      "claims",
      "brand voice",
      "marketing",
      "credibility",
      "tradie marketing",
      "professional communication"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
    {
    "id": "do-you-need-a-swms",
    "title": "Do You Need a Safe Work Method Statement (SWMS)?",
    "description": "Understand when a Safe Work Method Statement (SWMS) is required for your construction or trade business to ensure compliance and worker safety. Learn to identify high-risk construction work.",
    "category": "safety",
    "level": "beginner",
    "content": "## When is a Safe Work Method Statement (SWMS) Required?\n\nIf you're running a trade business, especially in construction, you've likely heard the term SWMS. But what exactly is it, and when do you actually *need* one? Let's break it down in a way that makes sense for the tradie on the tools.\n\n### What is a SWMS?\n\nA Safe Work Method Statement (SWMS) is a document that outlines the high-risk construction work activities to be carried out at a workplace for a particular job. It identifies the hazards associated with those activities and puts in place controls to manage the risks. Think of it as a detailed plan to make sure a specific, potentially dangerous job is done safely.\n\n### The Golden Rule: High-Risk Construction Work\n\nThe main trigger for needing an SWMS is when you're performing **high-risk construction work (HRCW)**. This is the key phrase to remember. If the work you're doing falls into this category, you absolutely must have a SWMS in place *before* the work starts.\n\n### What Counts as High-Risk Construction Work?\n\nThis is where it can get a bit tricky, as the definition can vary slightly between states and territories in Australia. However, most jurisdictions have a common list of activities that are generally considered HRCW. Here are some of the most common ones you'll encounter:\n\n*   **Work at heights:** This is a big one. If there's a risk of falling more than 2 metres, you're likely looking at HRCW.\n*   **Demolition:** Taking down structures is inherently risky.\n*   **Using a pre-fabricated or pre-assembled unit:** Especially if it involves lifting or requires special precautions.\n*   **Working in or near a confined space:** Think tanks, silos, or trenches where ventilation is poor and entry/exit is difficult.\n*   **Working in or near a trench or shaft:** Especially if it's deeper than 1.5 metres or requires shoring.\n*   **Working in or adjacent to a tunnel or an excavation:** Similar to trenches, but often larger scale.\n*   **Working on or near a telecommunications tower:** Height and structural integrity are major concerns.\n*   **Using explosives:** Obvious risks here.\n*   **Carrying out structural support for, or in, or adjacent to a mine or quarry:** Involves earth stability and potential collapses.\n*   **Working on, or in, or adjacent to a bridge, or other structure where there is a risk of collapse:** Structural integrity is paramount.\n*   **Manual handling of heavy or awkward loads:** Particularly if it poses a risk of musculoskeletal injury.\n*   **Using plant or equipment in a way that poses a risk of entanglement, electrocution, or being struck by an object:** This covers a wide range of machinery operations.\n*   **Working with or near energised electrical installations:** Electrical hazards are serious.\n*   **Carrying out work in relation to which there is a risk of engulfment or asphyxiation:** Related to confined spaces and certain materials.\n\n**Important Note:** Always check your specific state or territory's Work Health and Safety (WHS) regulations. They will have the definitive list and any specific thresholds (like the 2-metre fall height).\n\n### Beyond High-Risk: When Else Might You Need One?\n\nWhile HRCW is the primary driver, there are other situations where a SWMS is a really good idea, even if not strictly mandated by law for that specific task:\n\n1.  **Client Requirements:** Many larger projects or commercial clients will stipulate that SWMS must be provided for *all* work on site, not just HRCW. It's always best to check your contract and site inductions.\n2.  **Complex or Unusual Tasks:** If a job is particularly complex, involves multiple trades, or has unique hazards that aren't covered by standard operating procedures, a SWMS can help you think through all the steps and risks.\n3.  **Insurance Purposes:** In the unfortunate event of an incident, having documented safe work procedures like a SWMS can demonstrate you took reasonable steps to manage risks.\n4.  **Best Practice:** Even for seemingly straightforward jobs, documenting potential hazards and controls is simply good business practice. It ensures everyone is on the same page and promotes a safety-first culture.\n\n### Who Creates the SWMS?\n\nIdeally, the SWMS should be developed by people who are competent to do the work and understand the risks involved. This often means the supervisor, team leader, or experienced workers involved in the task. It’s not just an office job; it needs practical input.\n\n### What Should Be in a SWMS?\n\nA typical SWMS includes:\n\n*   The specific job or task description.\n*   The name of the person or people developing the SWMS.\n*   The date it was prepared and reviewed.\n*   A list of identified hazards.\n*   The control measures to manage those hazards.\n*   Who is responsible for implementing the controls.\n*   How the controls will be monitored and reviewed.\n\n### The Takeaway\n\nYour primary focus for needing a SWMS is **high-risk construction work**. If you're unsure whether your task falls into this category, err on the side of caution and check your local WHS regulations or consult with a safety professional. It's better to have one and not need it, than to need one and not have it. Keeping your team safe and your business compliant is what it's all about, mate.",
    "duration": "12 min",
    "durationMinutes": 12,
    "learningOutcomes": [
      "Identify when a SWMS is legally required.",
      "Recognise common types of high-risk construction work.",
      "Understand the purpose and basic components of a SWMS."
    ],
    "tags": [
      "swms",
      "high risk construction work",
      "work safety",
      "wfs",
      "construction safety",
      "tradie safety"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
    {
    "id": "swms-vs-jsa-vs-risk-assessment",
    "title": "SWMS vs JSA vs Risk Assessment: Understanding the Differences",
    "description": "Clarify the distinctions between Safe Work Method Statements (SWMS), Job Safety Analyses (JSAs), and general risk assessments in a practical, tradie-focused way. Understand when each is required and how they contribute to workplace safety.",
    "category": "safety",
    "level": "beginner",
    "content": "## SWMS vs JSA vs Risk Assessment: What's the Difference?\n\nIn the building and construction game, safety is king. You've probably heard terms like SWMS, JSA, and Risk Assessment thrown around a lot. While they all aim to keep everyone safe on the job, they're not quite the same thing. Knowing the difference can save you headaches, fines, and most importantly, keep you and your mates out of harm's way. Let's break it down in plain English, no fluff.\n\n### What is a Risk Assessment?\n\nThink of a risk assessment as the big picture. It's the process of identifying hazards (what could go wrong) and assessing the risks associated with them (how likely is it to go wrong, and how bad would it be?). This is a fundamental part of workplace safety for *any* job, big or small.\n\n*   **What it is:** A systematic process to identify hazards, assess risks, and decide on control measures.\n*   **When you need it:** Always! Before starting any task or at the beginning of a project.\n*   **Key questions:** What could cause harm? Who might be harmed and how? What are we doing to control the risk? What further controls can we put in place?\n*   **Example:** Identifying that working at heights poses a risk of falls, assessing the likelihood and severity, and deciding that using a harness and proper scaffolding is necessary.\n\n### What is a Job Safety Analysis (JSA)?\n\nA JSA (sometimes called a Job Hazard Analysis or JHA) is a bit more specific than a general risk assessment. It breaks down a particular job or task into steps, identifies the hazards associated with each step, and outlines the controls needed to manage those hazards.\n\n*   **What it is:** A step-by-step breakdown of a specific job, identifying hazards and controls for each step.\n*   **When you need it:** For routine or non-routine tasks, especially those that involve specific hazards or risks.\n*   **Key questions:** What are the steps of the job? What are the hazards at each step? How can we control these hazards?\n*   **Example:** For installing a roof, a JSA might break it down into: 'Set up scaffolding' (hazard: falls, control: secure footing, guardrails), 'Cut roof sheeting' (hazard: sharp edges, control: gloves, eye protection), 'Fix sheeting' (hazard: working at heights, control: safety harness).\n\nJSAs are often done before starting a task and discussed with the team performing the work. They're a great way to ensure everyone understands the risks and controls for the specific job they're about to do.\n\n### What is a Safe Work Method Statement (SWMS)?\n\nA SWMS takes things a step further, particularly for high-risk construction work. It's a formal document that outlines the high-risk construction work activities to be carried out at a workplace, the hazards arising from these activities, and the measures to be put in place to control the risks.\n\n*   **What it is:** A formal, documented process for managing risks associated with high-risk construction work.\n*   **When you need it:** Specifically required by law in Australia for 'high-risk construction work' as defined by regulations (e.g., work at heights, demolition, working with electricity, asbestos removal, confined spaces).\n*   **Key questions:** What is the high-risk activity? What are the specific hazards and risks? What are the control measures, and who is responsible for implementing them? How will risks be monitored and reviewed?\n*   **Example:** For a project involving working on a roof that is more than two metres above the ground, a SWMS would be mandatory. It would detail the specific steps, the hazards (like falls from height, falling objects), and the controls (like edge protection, safety nets, specific harness procedures, exclusion zones below).\n\n### Key Differences and When to Use Each\n\nThe main differences lie in their scope and when they are legally required:\n\n*   **Risk Assessment:** The foundational process, always needed.\n*   **JSA:** Breaks down a specific job into steps, good for most tasks.\n*   **SWMS:** Mandatory for specific 'high-risk construction work' and is a more formal, documented record.\n\nIn many cases, a SWMS will incorporate elements of a JSA and a risk assessment. The key is to understand the requirements for the specific work you are doing and the jurisdiction you are in.\n\n**Always consult your state or territory regulator (like SafeWork NSW, WorkSafe Victoria, etc.) for the definitive legal requirements in your area.** This information is a guide, not a substitute for legal advice or official regulatory guidance.\n\nBy understanding these documents, you're not just ticking boxes; you're actively contributing to a safer worksite for everyone. Stay safe out there!",
    "duration": "10 min",
    "durationMinutes": 10,
    "learningOutcomes": [
      "Distinguish between SWMS, JSA, and general risk assessments.",
      "Identify when each type of safety document is typically required.",
      "Understand the foundational role of risk assessment in workplace safety."
    ],
    "tags": [
      "swms",
      "jsa",
      "risk assessment",
      "workplace safety",
      "construction safety",
      "australia"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
  {
    id: "how-to-fill-out-a-swms",
    title: "How to Fill Out a SWMS",
    description: "Step-by-step guide to completing a SWMS properly — work steps, hazards, controls, and sign-off.",
    category: "safety",
    level: "beginner",
    content: `## How to Fill Out a SWMS

A SWMS isn't complicated — but it does need to be done properly. Here's the step-by-step.

### Section 1: Job Details

Fill in the basics: your business name, ABN, site address, date, and a description of the high-risk work you'll be doing.

### Section 2: Work Steps

Break the job into individual steps, in order. Be specific — "install cables" is too vague; "pull new cable through ceiling cavity from switchboard to bedroom 2" tells someone what's actually happening.

### Section 3: Hazards

For each step, identify what could go wrong. Common hazards:
- Falls from height
- Electrical contact
- Falling objects
- Manual handling injuries
- Exposure to dust, fumes, or chemicals

### Section 4: Risk Rating

Rate each hazard using a risk matrix (likelihood × consequence). This helps you prioritise which controls to focus on.

### Section 5: Control Measures

For each hazard, list what you'll do to eliminate or reduce the risk. Use the hierarchy of controls: eliminate → substitute → engineer → admin → PPE.

### Section 6: Sign-Off

Everyone doing the work must read and sign the SWMS before starting. Keep the signed copy on-site.

### Common Mistakes

- Copying a generic SWMS without adjusting for the actual job
- Listing "use PPE" as the only control
- Not getting workers to sign before work starts
- Not reviewing when conditions change`,
    duration: "6 min",
    durationMinutes: 6,
    learningOutcomes: [
      "Complete each section of a SWMS correctly",
      "Write site-specific hazards and controls",
      "Avoid the most common SWMS mistakes",
    ],
    tags: ["swms", "safety", "how-to"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
    {
    "id": "licensing-electrical",
    "title": "Electrical Licensing Requirements Across States",
    "description": "A comprehensive guide to understanding electrical licensing, including mutual recognition, state-specific requirements, and the application process.",
    "category": "licensing",
    "level": "intermediate",
    "content": "## Navigating Electrical Licensing: State by State\n\nFor electricians, holding the correct license is not just a legal requirement; it's a fundamental aspect of ensuring safety and professionalism in the trade. While the core skills of electrical work are universal, the licensing landscape can vary significantly from one state to another. This guide aims to demystify the process, particularly focusing on the concept of mutual recognition and highlighting key differences.\n\n### The Myth of Universal Mutual Recognition\n\nA common misconception is that most states offer seamless mutual recognition for electrical licenses. While many states do participate in some form of mutual recognition, it's rarely a blanket agreement. The phrase 'Most states have mutual recognition, but you must apply before working' is vague and lacks evidence. In reality, the process often involves a formal application, verification of your existing license, and sometimes additional requirements specific to the state you wish to work in.\n\n**What is Mutual Recognition?**\n\nMutual recognition agreements (MRAs) are designed to reduce barriers for tradespeople looking to work across state lines. Under an MRA, a person who holds a license or registration in one participating state may be eligible to obtain a similar license in another participating state without having to complete all the original qualification requirements again. However, this doesn't mean you can simply pack your tools and start working.\n\n**States with Strong Mutual Recognition:**\n\nMany states, particularly those that have adopted the National Occupational Licensing Framework, have robust mutual recognition processes. For example:\n\n*   **New South Wales (NSW) and Victoria (VIC):** These states generally have strong mutual recognition for electrical licenses. An electrician licensed in NSW can typically apply for and obtain a Victorian license, and vice versa, provided their existing license is current and they meet any specific state-based administrative requirements.\n*   **Queensland (QLD) and South Australia (SA):** Similar to NSW and VIC, these states often work under reciprocal agreements, simplifying the process for licensed electricians moving between them.\n\n**States with Limited or No Mutual Recognition:**\n\nIt's crucial to understand that not all states are equal in their MRAs. Some states may have limited recognition, requiring additional assessments or experience. Others might not have formal MRAs for certain trades, meaning you'll likely need to meet their full initial licensing requirements.\n\n*   **Western Australia (WA):** While WA participates in some MRAs, its licensing requirements and processes can sometimes differ substantially, potentially requiring additional competency assessments or specific experience relevant to WA's regulations.\n*   **Tasmania (TAS):** Tasmania, while often cooperative, may have specific administrative hurdles or require you to demonstrate knowledge of local regulations and standards.\n\n**The Application Process: A Universal Step**\n\nRegardless of the level of mutual recognition, the critical step is *always* to apply for the license in the new state *before* you commence work. This application process typically involves:\n\n1.  **Verification:** The licensing body will verify your existing license with the issuing state authority.\n2.  **Application Form:** Completing a detailed application form, which may include personal details, license history, and contact information.\n3.  **Proof of Identity and Qualifications:** Providing certified copies of your current license, qualifications, and identification.\n4.  **Fees:** Paying the required application and licensing fees.\n5.  **State-Specific Requirements:** Potentially demonstrating knowledge of local electrical acts, regulations, and standards. This might involve a specific exam or submitting evidence of experience relevant to the state's jurisdiction.\n\n**Practical Considerations for Tradies**\n\nWhen planning to work in a new state, it's best practice for you guys to:\n\n*   **Research Thoroughly:** Visit the official website of the electrical licensing authority in the state you intend to work in. Look for sections on 'mutual recognition,' 'interstate applications,' or 'licensing requirements.'\n*   **Contact the Authority:** If the information is unclear, don't hesitate to contact the licensing body directly. They can provide the most accurate and up-to-date information.\n*   **Allow Ample Time:** The application and approval process can take several weeks, sometimes longer. Factor this into your project timelines.\n*   **Understand the Scope:** Ensure the license you obtain covers the specific type of electrical work you intend to perform.\n\nIn conclusion, while mutual recognition simplifies interstate electrical licensing, it is not an automatic process. Proactive research, diligent application, and adherence to each state's specific regulations are essential for any electrician looking to expand their work opportunities across state borders. Always apply before you start the job, and ensure you understand the nuances of the licensing system in your target state.",
    "duration": "15 min",
    "durationMinutes": 15,
    "learningOutcomes": [
      "Understand the concept and limitations of mutual recognition for electrical licenses.",
      "Identify key differences in licensing requirements between states.",
      "Outline the necessary steps to apply for an interstate electrical license."
    ],
    "tags": [
      "electrical license",
      "mutual recognition",
      "interstate licensing",
      "trades",
      "licensing requirements",
      "electrician"
    ],
    "dateAdded": "2026-08-20",
    "lastUpdated": "2026-08-20",
    "status": "published"
  },
  {
    id: "licensing-plumbing",
    title: "Licensing by State: Plumbing",
    description: "Plumbing trade licensing requirements across all Australian states and territories.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Plumbing

Plumbing is licensed in every state. Here's the breakdown.

### Licence Types

- **Plumbing apprentice/trainee** — supervised work only
- **Licensed/registered plumber** — can perform plumbing work
- **Plumbing contractor** — can contract plumbing work to clients
- **Specialist endorsements** — gas fitting, roof plumbing, mechanical services, fire protection, backflow prevention

### State-by-State

| State | Regulator | Notes |
|-------|-----------|-------|
| NSW | NSW Fair Trading | Requires Qualified Supervisor Certificate for contracting |
| VIC | Victorian Building Authority (VBA) | Registered/Licensed Plumber, separate gas endorsement |
| QLD | QBCC | Plumbing licence classes 1–4 based on scope |
| SA | Consumer and Business Services (CBS) | Licensed Plumber + Contractor Registration |
| WA | Building and Energy | Plumber's Licence (tradesperson or contractor) |
| TAS | CBOS | Licensed Plumber + Contractor Licence |
| NT | Plumbers and Drainers Licensing Board | Licensed Plumber |
| ACT | Access Canberra | Plumber Licence (journeyman or contractor) |

> Regulator names and structures change over time. Confirm the current licensing body and requirements with your state regulator before applying.

### Gas Fitting

Gas fitting requires a separate endorsement or licence in all states. Never do gas work without the correct credential — the penalties are severe and the safety risks are real.

### Cross-State Work

Mutual recognition applies but you must apply to the receiving state before starting work.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Know which plumbing licences exist in your state",
      "Understand gas fitting endorsement requirements",
      "Know the process for cross-state recognition",
    ],
    tags: ["licensing", "plumbing", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "licensing-building-carpentry",
    title: "Licensing by State: Building & Carpentry",
    description: "Building and carpentry licensing requirements — when you need a licence, monetary thresholds, and state variations.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Building & Carpentry

Building and carpentry licensing is more complex than electrical or plumbing because the requirements vary significantly by state and by the value of work.

### When Do You Need a Licence?

Unlike electrical and plumbing (which are always licensed), building/carpentry licensing often depends on:
- **The value of the work** — many states set a dollar threshold
- **The type of work** — structural vs. non-structural
- **Whether you're contracting** — doing work for a builder vs. contracting directly to homeowners

### State-by-State

| State | Regulator | Licence threshold |
|-------|-----------|-------------------|
| NSW | NSW Fair Trading | Set by the regulator — check current threshold |
| VIC | Victorian Building Authority | Set by the regulator — check current threshold |
| QLD | QBCC | Set by the regulator — check current threshold |
| SA | Consumer and Business Services | Set by the regulator — check current threshold |
| WA | Building and Energy | Set by the regulator — check current threshold |
| TAS | CBOS | All building work requires registration |
| NT | Building Practitioners Board | All building work |
| ACT | Access Canberra | Set by the regulator — check current threshold |

Licence thresholds are dollar-value cut-offs set by each state and are updated periodically. Always confirm the current threshold with your state regulator before deciding whether you need a licence.

### Licence Classes

Most states have tiered builder licences:
- **Unlimited** — any value of work
- **Medium rise** — up to 3 storeys
- **Low rise** — houses and small commercial
- **Trade contractor** — specific trade work only

### Owner-Builder

Most states allow homeowners to do their own work under an owner-builder permit, but there are restrictions on selling within a set period (the timeframe varies by state — check your state regulator).`,
    duration: "6 min",
    durationMinutes: 6,
    learningOutcomes: [
      "Know the licensing threshold in your state",
      "Understand the difference between licence classes",
      "Know when owner-builder rules apply",
    ],
    tags: ["licensing", "building", "carpentry", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "anatomy-of-a-winning-quote",
    title: "The Anatomy of a Quote That Wins Jobs",
    description: "What to include in a tradie quote, how to present it professionally, and what separates winners from the pile.",
    category: "business",
    level: "beginner",
    content: `## The Anatomy of a Quote That Wins Jobs

A good quote wins the job AND protects your margin.

### What Every Quote Needs

- **Your business details** — name, ABN, licence number, contact info
- **Client details** — name, site address
- **Scope of work** — exactly what's included and what's not
- **Itemised pricing** — materials, labour, and any allowances
- **GST** — shown separately if you're registered
- **Validity period** — 14–30 days is standard
- **Acceptance method** — signature block or written confirmation
- **Variations clause** — "any work outside this scope will be quoted separately"

### What Separates Winners

1. **Professional presentation** — typed, with your logo. Not handwritten on the back of a receipt
2. **Clear exclusions** — "does not include asbestos removal, council approvals, or painting"
3. **Payment terms** — deposit, progress payments, final payment on completion
4. **A brief scope description in plain English** — so the client knows exactly what they're getting

### Pricing Strategies

- **Fixed price** — most common for residential. You carry the risk
- **Cost-plus** — actual costs plus a margin. Better for uncertain scopes
- **Day rate** — simple but clients may question how long you take

### The Follow-Up

Send the quote within 24 hours of the site visit. Follow up 3 days later if you haven't heard back. Most tradies lose jobs by being slow, not expensive.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Include all essential elements in your quotes",
      "Present quotes that look professional",
      "Choose the right pricing strategy for each job",
    ],
    tags: ["quoting", "business", "pricing"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "pricing-jobs-to-make-money",
    title: "How to Price Jobs So You Actually Make Money",
    description: "Calculating your real hourly rate, accounting for overheads, and avoiding the trap of underquoting.",
    category: "business",
    level: "intermediate",
    content: `## How to Price Jobs So You Actually Make Money

Most tradies undercharge. Here's how to fix that.

### Know Your Real Hourly Rate

Your charge-out rate isn't your take-home. You need to cover:
- **Your wage** — what you'd pay yourself as an employee
- **Super** — the legislated Super Guarantee rate on top (confirm the current rate at ato.gov.au)
- **Insurance** — public liability, income protection, tool cover
- **Vehicle costs** — fuel, rego, insurance, depreciation, servicing
- **Tools and equipment** — replacement, maintenance, calibration
- **Admin time** — quoting, invoicing, bookkeeping, emails (usually 20–30% of your week)
- **Downtime** — rain days, cancellations, gaps between jobs

### The Formula

A rough guide: take the hourly wage you want to earn, then multiply by 2.5 to 3x. That's your minimum charge-out rate.

If you want to take home $50/hour, you need to charge $125–150/hour.

### Common Traps

- **Not accounting for travel time** — you're not earning while driving
- **Underestimating job duration** — add 20% to your time estimate
- **Forgetting small costs** — consumables, tips, connectors, tape
- **Competing on price alone** — the cheapest quote often loses money

### Fixed-Price Jobs

For fixed-price quotes, estimate hours × your rate + materials + 15–20% contingency. Review your estimates after every job to improve your accuracy.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Calculate your true hourly cost including overheads",
      "Set a charge-out rate that covers all costs plus profit",
      "Avoid the most common pricing traps",
    ],
    tags: ["pricing", "business", "margins"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "getting-paid-invoice-terms",
    title: "Getting Paid: Invoice Terms",
    description: "ATO tax invoice requirements, payment terms for tradies, and what to do when clients don't pay.",
    category: "business",
    level: "beginner",
    content: `## Getting Paid: Invoice Terms

You've done the work — now make sure you get paid.

### ATO Tax Invoice Requirements

If you're registered for GST, your invoice must include:
- The words "Tax Invoice"
- Your business name and ABN
- Date of issue
- Description of what was supplied
- GST amount (or a statement that the total includes GST)
- Total amount payable

### Payment Terms

Standard terms in the trades:
- **7 days** — aggressive but common for small jobs
- **14 days** — the sweet spot for most tradies
- **30 days** — standard for commercial work and builders

### When They Don't Pay

1. **Friendly reminder** at 7 days overdue — email or text
2. **Firm follow-up** at 14 days — phone call + written notice
3. **Final notice** at 30 days — letter of demand, mention debt collection
4. **Small claims** — for amounts under the threshold (varies by state)

### Tips

- Invoice on the day you finish, not a week later
- Include bank details and consider card payments
- Keep records of all communication about payment
- For large jobs, use progress payments — don't wait until completion`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Create ATO-compliant tax invoices",
      "Set appropriate payment terms",
      "Follow a process when clients don't pay",
    ],
    tags: ["invoicing", "payments", "business"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "variations-scope-creep",
    title: "Variations: How to Charge for Scope Creep",
    description: "Handling scope changes professionally — documenting variations, getting sign-off, and avoiding payment disputes.",
    category: "business",
    level: "intermediate",
    content: `## Variations: How to Charge for Scope Creep

"While you're here, can you just..." — the five most expensive words in the trades.

### What's a Variation?

Any change to the original scope: additional work, changed specs, or unforeseen site conditions.

### Why Document Them?

Verbal agreements about changes are the number one cause of payment disputes. If it's not in writing, it didn't happen.

### How to Handle Variations

1. **Stop and document** — don't start extra work until it's agreed in writing
2. **Write a variation notice** — describe the change, the reason, and the cost impact
3. **Get sign-off** — the client or builder must approve before you proceed
4. **Adjust your invoice** — reference the variation number on your final invoice

### What to Include

- Reference to the original quote/contract
- Description of the change
- Reason for the change
- Cost impact (additional materials + labour)
- Time impact (if any)
- Signature/approval block

### The Hard Conversation

Some clients push back on variation costs. Stand your ground — politely. The original quote covered the original scope. Changes cost money. If they want it done, they need to approve the cost first.`,
    duration: "4 min",
    durationMinutes: 4,
    learningOutcomes: [
      "Document variations properly before starting extra work",
      "Write a variation notice that protects you",
      "Handle pushback on variation costs",
    ],
    tags: ["variations", "contracts", "business"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "abn-gst-bas-tradie-tax-basics",
    title: "ABN, GST, and BAS: Tradie Tax Basics",
    description: "When you need an ABN, when to register for GST, BAS obligations, and common tax mistakes tradies make.",
    category: "compliance",
    level: "beginner",
    content: `## ABN, GST, and BAS: Tradie Tax Basics

Getting your tax set-up right from the start saves headaches later.

### Do You Need an ABN?

If you're operating a business — quoting for jobs, providing your own tools, controlling how the work is done — you need an ABN.

### GST Registration

- **Mandatory** once your annual turnover reaches the ATO's GST registration threshold (check the current threshold at ato.gov.au)
- **Voluntary** below that — useful if you want to claim GST credits on tools and materials

### BAS Obligations

Once registered for GST, lodge a Business Activity Statement:
- **Quarterly** — most common for small businesses
- Report GST collected, GST paid, and PAYG withholding (if applicable)

### Common Mistakes

- **Not separating business and personal money** — open a dedicated business account
- **Forgetting to charge GST** — if registered, it's not optional
- **Not keeping receipts** — no receipt, no GST credit
- **Lodging BAS late** — penalties and interest add up fast
- **Not putting aside money for GST/tax** — set aside 30% of every invoice into a separate savings account`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Know when ABN and GST registration are required",
      "Understand your BAS obligations",
      "Avoid the most common tradie tax mistakes",
    ],
    tags: ["abn", "gst", "bas", "tax", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "public-liability-vs-income-protection",
    title: "Public Liability vs Income Protection",
    description: "What each insurance covers, which is mandatory, and what builders require before you step on-site.",
    category: "compliance",
    level: "beginner",
    content: `## Public Liability vs Income Protection

Two different insurances that protect two different things. Both matter.

### Public Liability Insurance

**What it covers:** Claims against you if someone is injured or their property is damaged because of your work.

**Examples:**
- A client trips over your tools and breaks their wrist
- You accidentally damage a water main while excavating
- A piece of material falls from a scaffold and hits a car

**Is it mandatory?** Not by law in most states, but most builders and principal contractors require $10–20 million coverage before you step on-site. In practice, you can't work without it.

**Cost:** ~$500–$2,000/year depending on trade and coverage level.

### Income Protection Insurance

**What it covers:** Pays a portion of your income (usually 75%) if you can't work due to injury or illness.

**Examples:**
- You tear your rotator cuff and can't work for 3 months
- You're diagnosed with a condition requiring extended treatment
- You break your leg on a weekend and miss 8 weeks of work

**Is it mandatory?** No. But tradies' bodies take a beating, and this is the insurance that keeps your mortgage paid.

**Cost:** Varies based on age, trade, and benefit period. Typically $100–$300/month.

### What Builders Require

Before you start on most sites, you'll need:
- Certificate of Currency for Public Liability ($10M or $20M)
- Workers' Comp certificate (if you have employees)
- Your trade licence details`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Understand what public liability and income protection each cover",
      "Know what documentation builders require",
      "Make an informed decision about which insurances to carry",
    ],
    tags: ["insurance", "public-liability", "income-protection", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "subcontractor-vs-employee",
    title: "Subcontractor vs Employee",
    description: "The ATO's criteria for distinguishing contractors from employees, and the consequences of getting it wrong.",
    category: "compliance",
    level: "intermediate",
    content: `## Subcontractor vs Employee

Getting this wrong can cost you tens of thousands in back-taxes, super, and penalties.

### Why It Matters

If the ATO decides your "subcontractor" is actually an employee, **you** owe:
- Superannuation (at the legislated Super Guarantee rate — check the current rate at ato.gov.au)
- PAYG withholding
- Workers' compensation premiums
- Payroll tax (if over threshold)
- Leave entitlements
- Plus interest and penalties

### ATO Criteria

The ATO looks at the **whole relationship**:

**Points toward contractor:**
- Has their own ABN and invoices for work
- Provides their own tools and equipment
- Controls how and when the work is done
- Can delegate or subcontract
- Bears commercial risk (fixes defects at own cost)
- Works for multiple clients

**Points toward employee:**
- You direct how, when, and where they work
- You provide tools, materials, and equipment
- They work exclusively or mainly for you
- You pay them by the hour/day (not per job)
- They can't subcontract or delegate

### The Safest Approach

- Use a written subcontractor agreement
- Ensure the subbie has their own ABN, insurance, and licence
- Let them control how they do the work
- Pay per job or milestone, not by the hour
- Don't require exclusivity`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Apply the ATO criteria to determine contractor vs employee",
      "Structure subcontractor relationships to minimise risk",
      "Know the financial consequences of misclassification",
    ],
    tags: ["subcontractor", "employee", "ato", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "toolbox-talks-5-minute-templates",
    title: "Toolbox Talks: 5-Minute Templates",
    description: "Running effective toolbox talks — what to cover, how to keep them engaging, and how to document them.",
    category: "safety",
    level: "beginner",
    content: `## Toolbox Talks: 5-Minute Templates

A toolbox talk is a short safety briefing held on-site before work starts or at the beginning of a shift.

### How Often?

- **Daily** on high-risk sites
- **Weekly** on lower-risk sites
- **Every time** conditions change (new task, new workers, weather)

### What to Cover

Pick one topic per talk:
- Manual handling and lifting
- Working at heights
- Electrical safety
- Heat stress and hydration
- PPE requirements for the day's tasks
- Housekeeping and trip hazards
- Hazardous substances on-site
- Mobile plant and traffic management
- Fatigue management
- Trenching and excavation safety

### How to Make Them Stick

- Keep it under 5 minutes
- Ask questions — "who can spot the hazard?" — don't just read a sheet
- Use real examples from the site or recent incidents
- Get workers to sign an attendance sheet

### Documentation

Record the date, topic, who presented, and who attended. Keep the records — they're evidence of your safety management system and will be the first thing an inspector asks for.`,
    duration: "4 min",
    durationMinutes: 4,
    learningOutcomes: [
      "Run an effective 5-minute toolbox talk",
      "Choose relevant topics for your site",
      "Document talks for compliance purposes",
    ],
    tags: ["toolbox-talks", "safety", "templates"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "what-happens-when-worksafe-shows-up",
    title: "What Happens When WorkSafe Shows Up",
    description: "What to expect during a WorkSafe inspection, your rights, and how to prepare so it's not a disaster.",
    category: "compliance",
    level: "advanced",
    content: `## What Happens When WorkSafe Shows Up

A WorkSafe inspector can enter your site at any time without notice. Here's what to expect.

### Why They Visit

- **Proactive inspections** — random or targeted campaigns (e.g., "falls from heights" blitz)
- **Complaint-driven** — someone reported a concern
- **Incident follow-up** — after a notifiable incident

### What They'll Ask For

1. **Your SWMS** — for any high-risk work happening on-site
2. **Risk assessments** — evidence you've assessed hazards
3. **Induction records** — proof workers were inducted
4. **Licences** — for licensed trades (electrical, plumbing, high-risk work)
5. **Insurance certificates** — public liability, workers' comp
6. **Incident records** — your incident register
7. **Training records** — evidence of safety training

### Your Rights

- You can ask to see the inspector's ID
- You can have a representative present
- You can ask what the inspection is about
- You must be given a copy of any notice issued
- You can request a review of any notice

### What They Can Do

- Issue an **improvement notice** — fix the issue within a set timeframe
- Issue a **prohibition notice** — stop work immediately until the issue is resolved
- Issue **on-the-spot fines**
- Refer matters for prosecution

### How to Prepare

Keep your documentation current and accessible on-site:
- SWMS signed and dated
- Induction records
- Toolbox talk records
- Licence copies
- Insurance certificates of currency

The best time to get your paperwork in order is before the inspector arrives. The second-best time is right now.`,
    duration: "6 min",
    durationMinutes: 6,
    learningOutcomes: [
      "Know what to expect during a WorkSafe inspection",
      "Understand your rights during an inspection",
      "Keep the right documentation on-site and accessible",
    ],
    tags: ["worksafe", "inspection", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
]

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_MODULES: Module[] = modules

export const MODULE_MAP = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
) as Record<string, Module>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id]
}
