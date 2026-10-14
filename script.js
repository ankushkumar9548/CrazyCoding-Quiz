/**
 * ═══════════════════════════════════════════════════════════
 *  CrazyCoding MCQ Quiz Portal — script.js
 *  Author      : Mr. Ankush (Assistant Professor, CSE)
 *  Description : Full quiz engine — student details, subject
 *                selection, quiz logic, timer, results,
 *                WhatsApp sharing, and question bank.
 *
 *  HOW TO ADD MORE QUESTIONS:
 *  ─────────────────────────
 *  Find the QUESTION_BANK object below.
 *  Each entry follows this shape:
 *  {
 *    q: "Question text?",
 *    options: ["Option A", "Option B", "Option C", "Option D"],
 *    correct: 0,          // 0-based index into options[]
 *    explanation: "..."   // shown in the answer review
 *  }
 *  Add objects to the relevant unit + topic array.
 *  Topic keys match the TOPICS definition further below.
 * ═══════════════════════════════════════════════════════════
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   1.  STRUCTURE DEFINITIONS
════════════════════════════════════════════════════════════ */

/**
 * TOPICS — maps unit → array of { id, label } for every topic.
 * The `id` is also the key used in QUESTION_BANK.
 */
const TOPICS = {
  unit1: [
    { id: 't1',  label: 'Introduction to Front-End Development' },
    { id: 't2',  label: 'Internet and World Wide Web (WWW)' },
    { id: 't3',  label: 'Web Browsers and Web Servers' },
    { id: 't4',  label: 'Website Architecture' },
    { id: 't5',  label: 'Structure of an HTML Document' },
    { id: 't6',  label: 'HTML5 Elements' },
    { id: 't7',  label: 'Headings and Paragraphs' },
    { id: 't8',  label: 'Text Formatting Tags' },
    { id: 't9',  label: 'Hyperlinks' },
    { id: 't10', label: 'Images' },
    { id: 't11', label: 'Lists' },
    { id: 't12', label: 'Tables' },
    { id: 't13', label: 'Forms' },
    { id: 't14', label: 'Multimedia Elements (Audio and Video)' },
    { id: 't15', label: 'Iframes' },
    { id: 't16', label: 'Semantic HTML5 Tags' },
  ],
  unit2: [
    { id: 'c1',  label: 'Introduction to CSS' },
    { id: 'c2',  label: 'Types of CSS' },
    { id: 'c3',  label: 'CSS Selectors' },
    { id: 'c4',  label: 'Colors' },
    { id: 'c5',  label: 'Backgrounds' },
    { id: 'c6',  label: 'Borders' },
    { id: 'c7',  label: 'Fonts' },
    { id: 'c8',  label: 'Text Properties' },
    { id: 'c9',  label: 'CSS Box Model' },
    { id: 'c10', label: 'Margin and Padding' },
    { id: 'c11', label: 'Display Properties' },
    { id: 'c12', label: 'Positioning Techniques' },
    { id: 'c13', label: 'Flexbox' },
    { id: 'c14', label: 'CSS Grid' },
    { id: 'c15', label: 'Media Queries' },
    { id: 'c16', label: 'Responsive Web Design Principles' },
    { id: 'c17', label: 'Transitions' },
    { id: 'c18', label: 'Animations' },
  ],
};

/* ════════════════════════════════════════════════════════════
   2.  QUESTION BANK
   ─────────────────
   Add as many questions as you like under each topic key.
   Format:  { q, options: [A,B,C,D], correct (0-based), explanation }
════════════════════════════════════════════════════════════ */
const QUESTION_BANK = {

  /* ── UNIT 1 ─────────────────────────────────────────── */

  t1: [ // Introduction to Front-End Development


     {
  q: 'Which tag is used to associate a text label with a form control?',
  options: ['<input>', '<label>', '<form>', '<caption>'],
  correct: 1,
  explanation: 'The <label> tag associates a text label with a form control.'
},
{
  q: 'Which semantic tag is commonly used for copyright information or closing details at the bottom of a page or section?',
  options: ['<header>', '<section>', '<footer>', '<aside>'],
  correct: 2,
  explanation: 'The <footer> tag is commonly used for copyright information and closing details.'
},
{
  q: 'Which value of flex-direction lays flex items vertically from top to bottom?',
  options: ['row', 'column', 'vertical', 'column-reverse'],
  correct: 1,
  explanation: 'The column value arranges flex items vertically from top to bottom.'
},
{
  q: 'Which CSS property controls the space between grid rows and columns?',
  options: ['margin', 'padding', 'gap', 'spacing'],
  correct: 2,
  explanation: 'The gap property controls the space between rows and columns in CSS Grid.'
},
{
  q: 'Which tag provides a caption or title for an HTML table?',
  options: ['<title>', '<caption>', '<thead>', '<label>'],
  correct: 1,
  explanation: 'The <caption> tag defines a caption or title for an HTML table.'
},
{
  q: "Which HTML attribute opens a link in a new browsing context when set to '_blank'?",
  options: ['href', 'target', 'rel', 'open'],
  correct: 1,
  explanation: "The target attribute with the value '_blank' opens a link in a new browsing context."
},
{
  q: 'Which CSS pseudo-class applies styles when the pointer is over an element?',
  options: [':active', ':focus', ':hover', ':visited'],
  correct: 2,
  explanation: 'The :hover pseudo-class applies styles when the pointer is positioned over an element.'
},
{
  q: 'Which HTML tag is used to include JavaScript in a page?',
  options: ['<javascript>', '<js>', '<script>', '<code>'],
  correct: 2,
  explanation: 'The <script> tag is used to include or execute JavaScript in an HTML page.'
},
{
  q: 'What is the purpose of the viewport meta tag commonly used for responsive pages?',
  options: [
    'To change the page title',
    "To control the viewport's size and scaling",
    'To add animations',
    'To load JavaScript'
  ],
  correct: 1,
  explanation: 'The viewport meta tag controls the viewport size and scaling, helping pages display properly on different devices.'
},
{
  q: 'Which HTML attribute is used to give an element a unique identifier for CSS or JavaScript?',
  options: ['class', 'name', 'id', 'key'],
  correct: 2,
  explanation: 'The id attribute gives an HTML element a unique identifier that can be targeted by CSS or JavaScript.'
},
{
  q: 'Which property is used to round the corners of a box?',
  options: ['corner-radius', 'border-radius', 'box-radius', 'radius'],
  correct: 1,
  explanation: 'The border-radius property is used to create rounded corners.'
},
{
  q: 'Which value of display hides an element and removes it from normal layout flow?',
  options: ['hidden', 'invisible', 'none', 'remove'],
  correct: 2,
  explanation: 'display: none hides the element and removes it from the normal layout flow.'
},
{
  q: 'What is the default value of the CSS position property?',
  options: ['relative', 'absolute', 'fixed', 'static'],
  correct: 3,
  explanation: 'The default value of the CSS position property is static.'
},
{
  q: 'What does box-sizing: border-box do?',
  options: [
    'Excludes padding from the width',
    'Includes padding and border within the specified width and height',
    'Removes the border',
    'Doubles the element width'
  ],
  correct: 1,
  explanation: 'border-box includes the element’s padding and border within its specified width and height.'
},
{
  q: 'What is a key principle of responsive web design?',
  options: [
    'Use only fixed-width layouts',
    'Design pages to adapt to different screen sizes',
    'Avoid media queries',
    'Use only desktop layouts'
  ],
  correct: 1,
  explanation: 'Responsive web design allows a webpage to adapt to different screen sizes and devices.'
},
{
  q: 'Which CSS property names the keyframes animation to apply?',
  options: ['animation-name', 'keyframe-name', 'animation-key', 'keyframes'],
  correct: 0,
  explanation: 'The animation-name property specifies the name of the keyframes animation to apply.'
},
{
  q: 'Which property controls the time taken by a CSS transition?',
  options: ['transition-speed', 'transition-delay', 'transition-duration', 'transition-time'],
  correct: 2,
  explanation: 'The transition-duration property specifies how long a transition takes to complete.'
},
{
  q: "Which unit is relative to the root element's font size?",
  options: ['em', '%', 'rem', 'px'],
  correct: 2,
  explanation: 'The rem unit is relative to the font size of the root HTML element.'
},
{
  q: 'What is the purpose of a media query?',
  options: [
    'To add JavaScript',
    'To apply CSS based on device or viewport conditions',
    'To create HTML elements',
    'To load images'
  ],
  correct: 1,
  explanation: 'Media queries apply CSS rules based on conditions such as screen width, height, or device characteristics.'
},
{
  q: 'Which CSS layout system is particularly suited to two-dimensional rows and columns?',
  options: ['Flexbox', 'Grid', 'Float', 'Inline-block'],
  correct: 1,
  explanation: 'CSS Grid is designed for two-dimensional layouts using rows and columns.'
},
{
  q: 'Which CSS layout system is designed for arranging items in rows or columns along one dimension at a time?',
  options: ['CSS Grid', 'Flexbox', 'Table Layout', 'Positioning'],
  correct: 1,
  explanation: 'Flexbox is a one-dimensional layout system for arranging items in a row or a column.'
},
{
  q: 'What is the output effect of this CSS? p { display: none; }',
  options: [
    'The paragraph becomes transparent',
    'The paragraph becomes bold',
    'The paragraph is hidden and removed from layout',
    'The paragraph moves to the top'
  ],
  correct: 2,
  explanation: 'display: none hides the paragraph and removes it from the normal document layout.'
},
{
  q: 'What is the content width? .box { width: 200px; padding: 10px; border: 2px solid; box-sizing: border-box; }',
  options: ['200px', '180px', '176px', '224px'],
  correct: 2,
  explanation: 'With border-box, the total width is 200px. Content width is 200 - 20px padding - 4px border = 176px.'
},
{
  q: "Which property creates space outside an element's border?",
  options: ['padding', 'margin', 'border-spacing', 'gap'],
  correct: 1,
  explanation: 'The margin property creates space outside an element’s border.'
},
{
  q: 'In the CSS box model, what lies between the content and the border?',
  options: ['Margin', 'Padding', 'Width', 'Outline'],
  correct: 1,
  explanation: 'Padding is the space between an element’s content and its border.'
},



     
    {
      q: 'Which of the following technologies is used for the structure of a web page?',
      options: ['CSS', 'JavaScript', 'HTML', 'PHP'],
      correct: 2,
      explanation: 'HTML (HyperText Markup Language) defines the structure and content of a web page.'
    },
    {
      q: 'Front-end web development primarily deals with:',
      options: ['Server-side logic', 'Database management', 'User interface and user experience', 'Network configuration'],
      correct: 2,
      explanation: 'Front-end development focuses on building the visual interface that users interact with directly in the browser.'
    },
    {
      q: 'Which language is responsible for making a web page interactive?',
      options: ['HTML', 'CSS', 'SQL', 'JavaScript'],
      correct: 3,
      explanation: 'JavaScript adds interactivity such as dynamic content, animations, and event handling to web pages.'
    },
    {
      q: 'The "trinity" of front-end web development consists of:',
      options: ['HTML, CSS, PHP', 'HTML, CSS, JavaScript', 'HTML, Bootstrap, jQuery', 'CSS, React, Node.js'],
      correct: 1,
      explanation: 'HTML, CSS, and JavaScript are the three core technologies of front-end development.'
    },
    {
      q: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Computer Style Syntax', 'Creative Style Standards', 'Colorful Styling Script'],
      correct: 0,
      explanation: 'CSS stands for Cascading Style Sheets. It is used to control the presentation and layout of web pages.'
    },
    {
      q: 'Which of these is a front-end JavaScript framework/library?',
      options: ['Django', 'Laravel', 'React', 'Flask'],
      correct: 2,
      explanation: 'React is a popular JavaScript library for building user interfaces, used in front-end development.'
    },
    {
      q: 'A web browser renders which type of code to display a web page?',
      options: ['Python', 'HTML/CSS/JS', 'Java', 'C++'],
      correct: 1,
      explanation: 'Web browsers parse and render HTML, CSS, and JavaScript to display web pages.'
    },
  ],

  t2: [ // Internet and World Wide Web
    {
      q: 'Who is credited with inventing the World Wide Web?',
      options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Vint Cerf'],
      correct: 2,
      explanation: 'Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.'
    },
    {
      q: 'What does HTTP stand for?',
      options: ['HyperText Transfer Protocol', 'High Tech Transfer Program', 'HyperText Transmission Protocol', 'Host Transfer Protocol'],
      correct: 0,
      explanation: 'HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the Web.'
    },
    {
      q: 'The Internet is best described as:',
      options: ['A single computer', 'A global network of interconnected computers', 'A web browser', 'A type of software'],
      correct: 1,
      explanation: 'The Internet is a global network of billions of computers and devices connected using standardized protocols.'
    },
    {
      q: 'What is a URL?',
      options: ['Uniform Resource Locator', 'Universal Rendering Language', 'Unified Resource Link', 'User Request Layer'],
      correct: 0,
      explanation: 'A URL (Uniform Resource Locator) is the address used to access a resource on the Internet.'
    },
    {
      q: 'HTTPS differs from HTTP in that it:',
      options: ['Loads pages faster', 'Uses a secure encrypted connection', 'Supports only images', 'Works without a browser'],
      correct: 1,
      explanation: 'HTTPS uses TLS/SSL encryption to secure the data transferred between the browser and the server.'
    },
    {
      q: 'Which protocol is used to send email?',
      options: ['FTP', 'HTTP', 'SMTP', 'DNS'],
      correct: 2,
      explanation: 'SMTP (Simple Mail Transfer Protocol) is used for sending emails across the Internet.'
    },
    {
      q: 'DNS stands for:',
      options: ['Dynamic Network System', 'Domain Name System', 'Data Naming Service', 'Distributed Node Server'],
      correct: 1,
      explanation: 'DNS (Domain Name System) translates domain names (e.g., google.com) into IP addresses.'
    },
  ],

  t3: [ // Web Browsers and Web Servers
    {
      q: 'Which of the following is a popular web browser?',
      options: ['Apache', 'Nginx', 'Google Chrome', 'MySQL'],
      correct: 2,
      explanation: 'Google Chrome is one of the most widely used web browsers for accessing the Internet.'
    },
    {
      q: 'A web server\'s primary role is to:',
      options: ['Store user passwords', 'Serve web pages to clients upon request', 'Design web pages', 'Manage CSS files'],
      correct: 1,
      explanation: 'A web server processes incoming HTTP requests and responds by serving the requested web page or resource.'
    },
    {
      q: 'Apache and Nginx are examples of:',
      options: ['Web browsers', 'Web servers', 'Programming languages', 'Database systems'],
      correct: 1,
      explanation: 'Apache HTTP Server and Nginx are two of the most popular open-source web server software packages.'
    },
    {
      q: 'What is the default port number for HTTP?',
      options: ['443', '8080', '21', '80'],
      correct: 3,
      explanation: 'HTTP uses port 80 by default. HTTPS uses port 443.'
    },
    {
      q: 'A browser\'s rendering engine is responsible for:',
      options: ['Downloading files', 'Parsing and displaying HTML/CSS', 'Handling email', 'Managing DNS queries'],
      correct: 1,
      explanation: 'The rendering engine (e.g., Blink in Chrome, Gecko in Firefox) parses HTML and CSS to render the page visually.'
    },
  ],

  t4: [ // Website Architecture
    {
      q: 'In a client-server architecture, the client is typically:',
      options: ['The database', 'The web browser', 'The hosting company', 'The CSS file'],
      correct: 1,
      explanation: 'In web architecture, the client (usually a browser) requests resources from the server.'
    },
    {
      q: 'A three-tier web architecture consists of:',
      options: ['HTML, CSS, JS', 'Client, Application Server, Database', 'Browser, Router, ISP', 'Frontend, Middle, Backend'],
      correct: 1,
      explanation: 'Three-tier architecture separates concerns into the presentation layer (client), logic layer (app server), and data layer (database).'
    },
    {
      q: 'A static website delivers:',
      options: ['Content generated per-user dynamically', 'Fixed pre-built HTML files the same to all users', 'Real-time database queries', 'Server-side scripts only'],
      correct: 1,
      explanation: 'Static websites serve the same pre-built HTML, CSS, and JS files to all visitors without server-side processing.'
    },
  ],

  t5: [ // Structure of an HTML Document
    {
      q: 'Which declaration must appear at the very beginning of an HTML5 document?',
      options: ['<html>', '<head>', '<!DOCTYPE html>', '<meta charset="UTF-8">'],
      correct: 2,
      explanation: '<!DOCTYPE html> must be the first line of an HTML5 document to instruct the browser to use HTML5 parsing.'
    },
    {
      q: 'Which tag contains meta-information about the HTML document?',
      options: ['<body>', '<header>', '<head>', '<meta>'],
      correct: 2,
      explanation: 'The <head> element contains meta-information like the title, character set, stylesheets, and scripts.'
    },
    {
      q: 'The visible content of a web page is placed inside:',
      options: ['<html>', '<head>', '<title>', '<body>'],
      correct: 3,
      explanation: 'All visible content (text, images, links, etc.) that appears in the browser window is placed inside the <body> tag.'
    },
    {
      q: 'Which tag sets the text displayed in the browser\'s tab?',
      options: ['<header>', '<h1>', '<title>', '<caption>'],
      correct: 2,
      explanation: 'The <title> tag inside <head> sets the document title shown in the browser tab and in search results.'
    },
    {
      q: 'Which attribute specifies the character encoding in a <meta> tag?',
      options: ['lang', 'charset', 'content', 'type'],
      correct: 1,
      explanation: 'The charset attribute in <meta charset="UTF-8"> specifies the character encoding for the document.'
    },
    {
      q: 'HTML tags are enclosed in:',
      options: ['Curly braces { }', 'Parentheses ( )', 'Angle brackets < >', 'Square brackets [ ]'],
      correct: 2,
      explanation: 'HTML tags are written inside angle brackets, e.g., <p>, <div>, <a>.'
    },
    {
      q: 'An HTML attribute provides:',
      options: ['Styling information only', 'Additional information about an element', 'JavaScript behavior', 'Database connection details'],
      correct: 1,
      explanation: 'Attributes provide additional information or configuration for HTML elements, e.g., href in <a href="...">'
    },
  ],

  t6: [ // HTML5 Elements
    {
      q: 'Which HTML5 element is used to draw graphics on the fly via JavaScript?',
      options: ['<svg>', '<canvas>', '<picture>', '<figure>'],
      correct: 1,
      explanation: 'The <canvas> element provides a bitmap drawing surface that is manipulated via the JavaScript Canvas API.'
    },
    {
      q: '<article> in HTML5 represents:',
      options: ['A hyperlink', 'A self-contained, independently distributable piece of content', 'A navigation bar', 'A style block'],
      correct: 1,
      explanation: '<article> is a semantic element for self-contained content like blog posts, news stories, or forum posts.'
    },
    {
      q: 'Which HTML5 input type allows date selection?',
      options: ['type="calendar"', 'type="datetime"', 'type="date"', 'type="picker"'],
      correct: 2,
      explanation: '<input type="date"> renders a date picker control in supporting browsers.'
    },
    {
      q: 'The <details> element in HTML5 creates:',
      options: ['A table of details', 'A disclosure widget the user can open/close', 'An inline definition', 'A comment block'],
      correct: 1,
      explanation: '<details> creates a disclosure widget. Paired with <summary>, it creates an expandable section.'
    },
    {
      q: 'Which element is used to define a client-side script in HTML5?',
      options: ['<code>', '<script>', '<style>', '<link>'],
      correct: 1,
      explanation: 'The <script> element embeds or references JavaScript code that runs in the browser.'
    },
  ],

  t7: [ // Headings and Paragraphs
    {
      q: 'HTML provides how many levels of heading elements?',
      options: ['3', '4', '5', '6'],
      correct: 3,
      explanation: 'HTML has six heading elements: <h1> through <h6>, with <h1> being the most important.'
    },
    {
      q: 'Which heading tag produces the largest text by default?',
      options: ['<h6>', '<h3>', '<h1>', '<heading>'],
      correct: 2,
      explanation: '<h1> is the highest-level heading and is rendered with the largest default font size.'
    },
    {
      q: 'The <p> tag defines:',
      options: ['A hyperlink', 'A paragraph', 'A preformatted block', 'A picture'],
      correct: 1,
      explanation: 'The <p> tag defines a paragraph. Browsers add a margin before and after each paragraph by default.'
    },
    {
      q: 'Which tag preserves whitespace and displays text in a fixed-width font?',
      options: ['<code>', '<kbd>', '<pre>', '<samp>'],
      correct: 2,
      explanation: 'The <pre> (preformatted) element preserves spaces, tabs, and newlines and renders text in a monospace font.'
    },
    {
      q: 'Best practice for SEO recommends using:',
      options: ['Multiple <h1> tags per page', 'Only one <h1> tag per page', 'No heading tags', 'Only <h2> and <h3>'],
      correct: 1,
      explanation: 'SEO best practice is to have exactly one <h1> per page as the primary heading for search engines.'
    },
  ],

  t8: [ // Text Formatting Tags
    {
      q: 'Which tag makes text bold and conveys strong importance?',
      options: ['<b>', '<strong>', '<em>', '<i>'],
      correct: 1,
      explanation: '<strong> is the semantic tag for strong importance and renders bold; <b> is presentational bold without semantic meaning.'
    },
    {
      q: 'The <em> tag renders text as:',
      options: ['Bold', 'Underlined', 'Italic with emphasis', 'Strikethrough'],
      correct: 2,
      explanation: '<em> marks text with emphasis and renders it in italic by default. It has semantic meaning unlike <i>.'
    },
    {
      q: 'Which HTML tag displays deleted (strikethrough) text?',
      options: ['<del>', '<s>', '<strike>', '<del> or <s>'],
      correct: 3,
      explanation: 'Both <del> (semantically deleted content) and <s> (no longer accurate) render strikethrough text in HTML5.'
    },
    {
      q: 'The <mark> tag highlights text with a:',
      options: ['Bold style', 'Yellow background by default', 'Red color', 'Underline'],
      correct: 1,
      explanation: '<mark> highlights text with a yellow background by default to indicate relevance or importance.'
    },
    {
      q: 'Which tag is used for subscript text (e.g., H₂O)?',
      options: ['<sup>', '<sub>', '<small>', '<span>'],
      correct: 1,
      explanation: '<sub> creates subscript text, positioned below the baseline — useful for chemical formulas.'
    },
    {
      q: 'The <abbr> tag is used to:',
      options: ['Create abbreviations with no tooltip', 'Mark abbreviated terms with an optional full-form title', 'Style short text', 'Create a smaller font'],
      correct: 1,
      explanation: '<abbr title="Full Form">Abbr</abbr> marks an abbreviation or acronym, showing the full form as a tooltip.'
    },
  ],

  t9: [ // Hyperlinks
    {
      q: 'Which attribute of <a> specifies the link destination?',
      options: ['src', 'link', 'href', 'url'],
      correct: 2,
      explanation: 'The href (Hypertext Reference) attribute of the <a> tag specifies the URL the link points to.'
    },
    {
      q: 'To open a link in a new browser tab, use:',
      options: ['target="_self"', 'target="_new"', 'target="_blank"', 'target="_top"'],
      correct: 2,
      explanation: 'target="_blank" opens the linked document in a new browser tab or window.'
    },
    {
      q: 'A relative URL like "about.html" is relative to:',
      options: ['The root of the Internet', 'The current document\'s location', 'The browser\'s home page', 'The server root always'],
      correct: 1,
      explanation: 'Relative URLs are resolved relative to the location of the current HTML document.'
    },
    {
      q: 'Which link creates a mailto: link that opens an email client?',
      options: ['<a href="email:user@example.com">', '<a href="mailto:user@example.com">', '<a href="mail:user@example.com">', '<a href="user@example.com">'],
      correct: 1,
      explanation: 'href="mailto:address" creates a link that opens the user\'s default email client with the To field pre-filled.'
    },
    {
      q: 'An anchor link (#id) within the same page is called a:',
      options: ['External link', 'Bookmark / Fragment link', 'Relative link', 'Canonical link'],
      correct: 1,
      explanation: 'Using href="#sectionId" creates an in-page anchor (bookmark/fragment link) that jumps to the element with that id.'
    },
    {
      q: 'The rel="noopener noreferrer" attribute on a link is used to:',
      options: ['Style the link differently', 'Prevent security vulnerabilities when using target="_blank"', 'Disable the link', 'Track link clicks'],
      correct: 1,
      explanation: 'rel="noopener noreferrer" prevents the new tab from accessing window.opener and hides the referrer, improving security.'
    },
  ],

  t10: [ // Images
    {
      q: 'Which attribute provides alternative text for an image?',
      options: ['title', 'caption', 'alt', 'src'],
      correct: 2,
      explanation: 'The alt attribute provides alternative text for an image, shown when the image cannot be loaded and read by screen readers.'
    },
    {
      q: 'The src attribute of <img> specifies:',
      options: ['The image size', 'The path/URL to the image file', 'The image caption', 'The image format'],
      correct: 1,
      explanation: 'The src (source) attribute in <img src="..."> specifies the path or URL to the image file to display.'
    },
    {
      q: 'Which image format supports transparency (alpha channel)?',
      options: ['JPEG', 'BMP', 'PNG', 'GIF only'],
      correct: 2,
      explanation: 'PNG (Portable Network Graphics) supports full alpha-channel transparency. GIF supports binary transparency only.'
    },
    {
      q: 'The <figure> and <figcaption> elements are used to:',
      options: ['Draw shapes', 'Group an image with its caption semantically', 'Display videos', 'Create image maps'],
      correct: 1,
      explanation: '<figure> wraps self-contained media (like an image) and <figcaption> provides a caption for it.'
    },
    {
      q: 'Which HTML5 element allows serving different image sources for different screen sizes?',
      options: ['<img srcset>', '<source>', '<picture>', 'Both <img srcset> and <picture>'],
      correct: 3,
      explanation: 'Both the srcset/sizes attributes on <img> and the <picture> element allow responsive images for different screen sizes.'
    },
  ],

  t11: [ // Lists
    {
      q: 'Which HTML tag creates an unordered (bulleted) list?',
      options: ['<ol>', '<li>', '<ul>', '<list>'],
      correct: 2,
      explanation: '<ul> creates an unordered list. Each list item is defined with <li>.'
    },
    {
      q: 'An ordered list uses which tag?',
      options: ['<nl>', '<list type="ordered">', '<ul>', '<ol>'],
      correct: 3,
      explanation: '<ol> creates an ordered (numbered) list. Items inside are also marked with <li>.'
    },
    {
      q: 'A definition list in HTML uses which pair of tags for terms and descriptions?',
      options: ['<dt> and <dc>', '<dl> → <dt> and <dd>', '<term> and <def>', '<list> → <item>'],
      correct: 1,
      explanation: '<dl> is the definition list container; <dt> defines the term and <dd> defines the description/definition.'
    },
    {
      q: 'Which CSS property changes the bullet style of an unordered list?',
      options: ['list-style-type', 'bullet-style', 'list-marker', 'ul-style'],
      correct: 0,
      explanation: 'list-style-type controls the marker style (e.g., disc, circle, square) for list items.'
    },
    {
      q: 'Nested lists are created by:',
      options: ['Adding a class="nested" attribute', 'Placing a <ul> or <ol> inside an <li>', 'Using <sublist>', 'Not supported in HTML5'],
      correct: 1,
      explanation: 'To nest a list, place another <ul> or <ol> inside an <li> element of the parent list.'
    },
  ],

  t12: [ // Tables
    {
      q: 'Which HTML tag defines a table row?',
      options: ['<td>', '<th>', '<tr>', '<table>'],
      correct: 2,
      explanation: '<tr> defines a table row. Rows contain either <th> (header cells) or <td> (data cells).'
    },
    {
      q: 'The <th> element differs from <td> because:',
      options: ['It is for table headers and is bold and centered by default', 'It holds table data', 'It creates a table foot', 'It merges cells'],
      correct: 0,
      explanation: '<th> is a table header cell. Browsers render it bold and center-aligned by default.'
    },
    {
      q: 'The colspan attribute is used to:',
      options: ['Span multiple rows', 'Merge a cell across multiple columns', 'Set column width', 'Color a column'],
      correct: 1,
      explanation: 'colspan="n" makes a cell span n columns horizontally. rowspan makes a cell span n rows vertically.'
    },
    {
      q: 'Which element groups the header rows of a table?',
      options: ['<thead>', '<th>', '<header>', '<tgroup>'],
      correct: 0,
      explanation: '<thead> groups the header content of a table. <tbody> groups body rows and <tfoot> groups footer rows.'
    },
    {
      q: 'The <caption> element in a table:',
      options: ['Adds a border', 'Provides a title/caption for the table', 'Merges cells', 'Adds a footnote row'],
      correct: 1,
      explanation: '<caption> specifies a caption (title) for the table, rendered above the table by default.'
    },
    {
      q: 'To merge two cells vertically, you use:',
      options: ['colspan', 'rowspan', 'cellmerge', 'merge'],
      correct: 1,
      explanation: 'rowspan="n" makes a table cell span n rows vertically.'
    },
  ],

  t13: [ // Forms
    {
      q: 'The action attribute of a <form> specifies:',
      options: ['The form style', 'The URL where the form data is sent', 'The input type', 'The submit button label'],
      correct: 1,
      explanation: 'The action attribute defines the URL/server-side script that receives and processes the submitted form data.'
    },
    {
      q: 'Which HTTP method sends form data in the URL query string?',
      options: ['POST', 'PUT', 'GET', 'DELETE'],
      correct: 2,
      explanation: 'GET appends form data as query parameters in the URL (e.g., page.php?name=Rahul). POST sends data in the HTTP body.'
    },
    {
      q: '<input type="radio"> is used for:',
      options: ['Selecting multiple options', 'Selecting one option from a group', 'Uploading files', 'Entering multiline text'],
      correct: 1,
      explanation: 'Radio buttons allow the user to select exactly one option from a set of mutually exclusive choices.'
    },
    {
      q: 'The <textarea> element creates:',
      options: ['A single-line text input', 'A multi-line text input area', 'A dropdown list', 'A file upload button'],
      correct: 1,
      explanation: '<textarea> provides a multi-line plain text editing control.'
    },
    {
      q: 'Which attribute makes a form field mandatory?',
      options: ['validate', 'mandatory', 'required', 'notempty'],
      correct: 2,
      explanation: 'The required attribute prevents form submission if the field is empty, providing built-in HTML5 validation.'
    },
    {
      q: '<label for="id"> associates a label with an input when:',
      options: ['The input has the same class', 'The input has an id matching the for attribute', 'They are siblings', 'The input is required'],
      correct: 1,
      explanation: 'The for attribute of <label> must match the id of the input element to associate them, improving accessibility.'
    },
    {
      q: 'The <select> element creates:',
      options: ['A text input', 'A checkbox group', 'A dropdown/select list', 'A radio button group'],
      correct: 2,
      explanation: '<select> creates a drop-down list. Each option inside is defined with the <option> element.'
    },
    {
      q: 'Which input type is best for entering a password?',
      options: ['type="text"', 'type="secret"', 'type="password"', 'type="hidden"'],
      correct: 2,
      explanation: 'type="password" masks the entered characters, preventing shoulder-surfing.'
    },
  ],

  t14: [ // Multimedia (Audio and Video)
    {
      q: 'Which HTML5 element embeds audio content?',
      options: ['<sound>', '<music>', '<audio>', '<media>'],
      correct: 2,
      explanation: 'The <audio> element is used to embed audio in HTML5. It supports MP3, OGG, and WAV formats.'
    },
    {
      q: 'The controls attribute on <video> or <audio>:',
      options: ['Sets the volume', 'Displays built-in browser playback controls', 'Loops the media', 'Hides the media'],
      correct: 1,
      explanation: 'Adding the controls attribute displays the browser\'s default media controls (play, pause, volume, seek).'
    },
    {
      q: 'The autoplay attribute causes a media element to:',
      options: ['Play automatically when the page loads', 'Play only on click', 'Loop indefinitely', 'Mute the sound'],
      correct: 0,
      explanation: 'autoplay makes the audio/video start playing automatically as soon as it is ready (browsers may restrict this).'
    },
    {
      q: 'Which element within <video>/<audio> specifies multiple source formats for browser compatibility?',
      options: ['<src>', '<file>', '<source>', '<media>'],
      correct: 2,
      explanation: '<source> inside <video> or <audio> lists multiple file formats; the browser picks the first one it can play.'
    },
    {
      q: 'The loop attribute on a video element means:',
      options: ['The video pauses at end', 'The video rewinds and starts again when it ends', 'The video loads slowly', 'The video is silent'],
      correct: 1,
      explanation: 'The loop attribute makes the video restart automatically when it reaches the end.'
    },
  ],

  t15: [ // Iframes
    {
      q: 'What does an <iframe> element do?',
      options: ['Creates an inline frame to embed another HTML page', 'Adds a border to text', 'Inserts an image', 'Defines a frameset'],
      correct: 0,
      explanation: '<iframe> (inline frame) embeds another HTML document or external URL within the current page.'
    },
    {
      q: 'The src attribute of <iframe> specifies:',
      options: ['The iframe\'s CSS style', 'The URL of the page to embed', 'The iframe\'s title', 'The iframe\'s background color'],
      correct: 1,
      explanation: 'src specifies the URL of the document to load inside the iframe.'
    },
    {
      q: 'For accessibility, an iframe should always include:',
      options: ['The frameborder attribute', 'A title attribute describing its content', 'scrolling="no"', 'A hidden class'],
      correct: 1,
      explanation: 'The title attribute on an iframe describes its content to screen readers, improving accessibility.'
    },
    {
      q: 'The sandbox attribute on an <iframe> is used to:',
      options: ['Make the iframe larger', 'Apply restrictions on content to enhance security', 'Set a sand-coloured background', 'Enable JavaScript only'],
      correct: 1,
      explanation: 'sandbox restricts iframe content — preventing form submission, JS execution, etc. — unless specific permissions are granted.'
    },
  ],

  t16: [ // Semantic HTML5 Tags
    {
      q: 'Which semantic element represents the main navigation links?',
      options: ['<menu>', '<navbar>', '<nav>', '<links>'],
      correct: 2,
      explanation: '<nav> is a semantic element that wraps the primary navigation links of a page or section.'
    },
    {
      q: 'The <header> element in HTML5 typically contains:',
      options: ['The footer content', 'Introductory content or navigational aids', 'The main article text', 'Database connections'],
      correct: 1,
      explanation: '<header> represents introductory content — usually the site logo, title, and main navigation.'
    },
    {
      q: 'The <main> element is used to:',
      options: ['Define the page header', 'Wrap the dominant content unique to that page', 'Create a sidebar', 'Embed scripts'],
      correct: 1,
      explanation: '<main> contains the central content of the <body>, unique to that page. There should be only one <main> per document.'
    },
    {
      q: 'Which semantic element represents a sidebar or ancillary content?',
      options: ['<section>', '<aside>', '<extra>', '<sidebar>'],
      correct: 1,
      explanation: '<aside> defines content tangentially related to the main content — typically a sidebar, pull-quote, or related links.'
    },
    {
      q: 'The <footer> element typically contains:',
      options: ['The main heading', 'Copyright, contact info, and related links', 'Navigation menus', 'Hero images'],
      correct: 1,
      explanation: '<footer> holds information about its containing element, like copyright notices, contact details, or related links.'
    },
    {
      q: 'Why is using semantic HTML important?',
      options: ['It makes pages load faster', 'It improves SEO and accessibility without adding CSS', 'It replaces CSS entirely', 'It is only for mobile pages'],
      correct: 1,
      explanation: 'Semantic HTML gives meaning to content — helping search engines index pages better and screen readers navigate them correctly.'
    },
    {
      q: '<section> vs <div>: the main difference is that:',
      options: ['<section> is always full-width', '<section> is a thematic grouping with semantic meaning; <div> is generic', '<div> supports class; <section> does not', 'They are identical'],
      correct: 1,
      explanation: '<section> groups thematically related content (usually with a heading); <div> is a generic, non-semantic container.'
    },
  ],

  /* ── UNIT 2 ─────────────────────────────────────────── */

  c1: [ // Introduction to CSS
    {
      q: 'CSS is used primarily to:',
      options: ['Define page structure', 'Add interactivity', 'Control the presentation and layout of HTML elements', 'Manage databases'],
      correct: 2,
      explanation: 'CSS (Cascading Style Sheets) controls colors, fonts, spacing, layout, and the overall visual appearance of HTML elements.'
    },
    {
      q: 'CSS rules consist of:',
      options: ['Functions and variables', 'A selector and a declaration block', 'Tags and attributes', 'Events and handlers'],
      correct: 1,
      explanation: 'A CSS rule has a selector (what to style) and a declaration block { property: value; } (how to style it).'
    },
    {
      q: 'Which CSS property changes the text color?',
      options: ['font-color', 'text-color', 'color', 'foreground'],
      correct: 2,
      explanation: 'The color property sets the foreground color (text color) of an element.'
    },
    {
      q: '"Cascading" in CSS refers to:',
      options: ['Animations that flow downward', 'The priority rules that determine which styles apply when multiple rules match', 'CSS loading order only', 'The float property'],
      correct: 1,
      explanation: 'Cascading describes how CSS resolves conflicts: specificity, source order, and !important all play a role.'
    },
    {
      q: 'The CSS comment syntax is:',
      options: ['// comment', '<!-- comment -->', '/* comment */', '# comment'],
      correct: 2,
      explanation: 'CSS uses /* ... */ for comments. HTML uses <!-- ... --> and JavaScript uses // or /* */.'
    },
  ],

  c2: [ // Types of CSS
    {
      q: 'Inline CSS is written:',
      options: ['In an external .css file', 'Inside a <style> tag in <head>', 'Directly in the style attribute of an HTML element', 'In the JavaScript file'],
      correct: 2,
      explanation: 'Inline CSS uses the style attribute: <p style="color:red;">. It has the highest specificity among the three types.'
    },
    {
      q: 'Internal CSS is placed:',
      options: ['In an external .css file linked via <link>', 'Inside <style> tags in the <head> section', 'In the HTML element\'s style attribute', 'At the bottom of <body>'],
      correct: 1,
      explanation: 'Internal (embedded) CSS is written inside a <style> element, typically in the <head> of the HTML document.'
    },
    {
      q: 'External CSS is linked to an HTML page using:',
      options: ['<style src="file.css">', '<css href="file.css">', '<link rel="stylesheet" href="file.css">', '<script src="file.css">'],
      correct: 2,
      explanation: '<link rel="stylesheet" href="styles.css"> in the <head> links an external CSS file to the HTML document.'
    },
    {
      q: 'Which type of CSS is easiest to maintain for large projects?',
      options: ['Inline CSS', 'Internal CSS', 'External CSS', 'All are equal'],
      correct: 2,
      explanation: 'External CSS keeps styles in one file, making them easy to update across many pages — essential for large projects.'
    },
    {
      q: 'The order of specificity (lowest to highest) among the three types is:',
      options: ['External < Internal < Inline', 'Inline < External < Internal', 'Internal < External < Inline', 'All have equal specificity'],
      correct: 0,
      explanation: 'Inline styles override internal which override external styles (assuming equal specificity of selectors), so: External < Internal < Inline.'
    },
  ],

  c3: [ // CSS Selectors
    {
      q: 'The CSS selector "#header" targets elements with:',
      options: ['class="header"', 'tag name header', 'id="header"', 'name="header"'],
      correct: 2,
      explanation: '# in CSS selects an element by its id attribute. IDs must be unique within a page.'
    },
    {
      q: 'The CSS selector ".highlight" targets elements with:',
      options: ['id="highlight"', 'class="highlight"', 'name="highlight"', 'type="highlight"'],
      correct: 1,
      explanation: '. (dot) in CSS selects elements by class name. Multiple elements can share the same class.'
    },
    {
      q: 'The universal selector in CSS is:',
      options: ['*', 'all', 'every', 'global'],
      correct: 0,
      explanation: '* (asterisk) is the universal selector; it matches every element in the document.'
    },
    {
      q: 'The descendant selector "div p" selects:',
      options: ['Only <p> that are direct children of <div>', 'All <p> elements anywhere inside a <div>', 'All <div> and <p> elements', '<div> elements inside <p>'],
      correct: 1,
      explanation: 'A space between selectors (div p) selects all <p> elements that are descendants (at any depth) of a <div>.'
    },
    {
      q: 'The :hover pseudo-class applies styles when:',
      options: ['The element is clicked', 'The user hovers the mouse over the element', 'The element is focused', 'The page loads'],
      correct: 1,
      explanation: ':hover applies styles when the user\'s pointer is over the element — used for interactive button/link effects.'
    },
    {
      q: 'The child combinator selector "ul > li" selects:',
      options: ['All <li> descendants of <ul>', 'Only direct child <li> elements of <ul>', '<ul> children only', 'The first <li> only'],
      correct: 1,
      explanation: '> selects only direct children; "ul > li" matches <li> elements that are immediate children of a <ul>.'
    },
    {
      q: 'Which selector targets the first child of its parent?',
      options: [':first-child', ':first-element', ':nth-child(0)', ':first'],
      correct: 0,
      explanation: ':first-child pseudo-class selects an element that is the first child of its parent.'
    },
  ],

  c4: [ // Colors
    {
      q: 'Which CSS function defines a color using Red, Green, and Blue values?',
      options: ['hsl()', 'rgba()', 'rgb()', 'hex()'],
      correct: 2,
      explanation: 'rgb(r, g, b) specifies a color with red, green, and blue values each ranging from 0 to 255.'
    },
    {
      q: 'What does the "a" in rgba() stand for?',
      options: ['Automatic', 'Alignment', 'Alpha (opacity)', 'Animation'],
      correct: 2,
      explanation: 'rgba(r, g, b, a) adds an alpha channel (0 = fully transparent, 1 = fully opaque) to rgb().'
    },
    {
      q: 'A hex color code #ff0000 represents:',
      options: ['Green', 'Blue', 'Red', 'White'],
      correct: 2,
      explanation: '#ff0000 = rgb(255, 0, 0) = full red, no green, no blue.'
    },
    {
      q: 'HSL stands for:',
      options: ['Height, Shadow, Layer', 'Hue, Saturation, Lightness', 'Hue, Size, Luminance', 'High, Standard, Low'],
      correct: 1,
      explanation: 'HSL describes colors using Hue (0-360°), Saturation (0-100%), and Lightness (0-100%).'
    },
    {
      q: 'Which value makes an element fully transparent?',
      options: ['opacity: 1', 'color: transparent', 'opacity: 0', 'visibility: transparent'],
      correct: 2,
      explanation: 'opacity: 0 makes an element completely transparent (invisible), though it still occupies space.'
    },
  ],

  c5: [ // Backgrounds
    {
      q: 'Which CSS property sets the background color of an element?',
      options: ['color', 'bg-color', 'background', 'background-color'],
      correct: 3,
      explanation: 'background-color sets the background color. background is the shorthand that also covers image, repeat, position, size, etc.'
    },
    {
      q: 'background-repeat: no-repeat means:',
      options: ['The image tiles both horizontally and vertically', 'The image is displayed only once, not tiled', 'The image repeats only vertically', 'No background image is shown'],
      correct: 1,
      explanation: 'no-repeat prevents a background image from tiling; it is displayed once in its original or specified position.'
    },
    {
      q: 'The CSS property background-size: cover ensures:',
      options: ['The image is shown at its original size', 'The image covers the entire element, possibly cropping it', 'The image is contained inside the element', 'The image repeats to fill the element'],
      correct: 1,
      explanation: 'cover scales the image to cover the container, maintaining aspect ratio. Parts of the image may be clipped.'
    },
    {
      q: 'background-attachment: fixed makes the background:',
      options: ['Fixed to the element and scrolls with it', 'Fixed to the viewport and does not scroll with the page', 'Hidden when scrolling', 'Repeated on scroll'],
      correct: 1,
      explanation: 'fixed attaches the background to the viewport, creating a parallax-like effect where the page scrolls over the image.'
    },
    {
      q: 'Which CSS function creates a linear gradient background?',
      options: ['gradient()', 'linear-gradient()', 'color-gradient()', 'bg-gradient()'],
      correct: 1,
      explanation: 'linear-gradient(direction, color1, color2, ...) creates a smooth transition between colors along a straight line.'
    },
  ],

  c6: [ // Borders
    {
      q: 'The CSS shorthand "border: 2px solid red" sets:',
      options: ['Width only', 'Width, style, and color in one declaration', 'Color only', 'Style and color only'],
      correct: 1,
      explanation: 'The border shorthand property sets border-width, border-style, and border-color in a single declaration.'
    },
    {
      q: 'Which border-style value creates a dotted border?',
      options: ['dashed', 'solid', 'dotted', 'double'],
      correct: 2,
      explanation: 'border-style: dotted creates a series of round dots around the element.'
    },
    {
      q: 'border-radius: 50% on a square element creates:',
      options: ['A rounded rectangle', 'A circle', 'An oval', 'A triangle'],
      correct: 1,
      explanation: 'Applying border-radius: 50% to an element with equal width and height creates a perfect circle.'
    },
    {
      q: 'The outline property differs from border because:',
      options: ['Outline supports colors but border does not', 'Outline does not affect layout (takes no space)', 'Outline only works on <input>', 'Border cannot have a radius'],
      correct: 1,
      explanation: 'outline does not take up space in the layout (no box model space); it is drawn outside the border without affecting layout.'
    },
    {
      q: 'box-shadow with the value "2px 4px 8px rgba(0,0,0,.3)" sets:',
      options: ['A border', 'A shadow with horizontal offset, vertical offset, blur radius, and color', 'A text shadow', 'An outline'],
      correct: 1,
      explanation: 'box-shadow takes: h-offset v-offset blur-radius spread-radius color. It creates a shadow around the element.'
    },
  ],

  c7: [ // Fonts
    {
      q: 'The CSS property for changing the font typeface is:',
      options: ['font', 'typeface', 'font-family', 'font-name'],
      correct: 2,
      explanation: 'font-family specifies the font(s) for text. You can list fallbacks: font-family: "Arial", sans-serif;'
    },
    {
      q: 'Which value of font-weight makes text bold?',
      options: ['font-weight: 100', 'font-weight: heavy', 'font-weight: bold', 'font-weight: italic'],
      correct: 2,
      explanation: 'font-weight: bold (or 700) makes text bold. Values range from 100 (thin) to 900 (black).'
    },
    {
      q: '@font-face in CSS is used to:',
      options: ['Apply a built-in font', 'Embed a custom font file for use on the web', 'Change face color', 'Animate fonts'],
      correct: 1,
      explanation: '@font-face allows you to define a custom font by specifying the font-family name and the source file URL.'
    },
    {
      q: 'Google Fonts are loaded in HTML using:',
      options: ['<font src>', '<script src>', '<link rel="stylesheet"> pointing to the Google Fonts URL', '<import> tag'],
      correct: 2,
      explanation: 'Google Fonts provides a <link> tag or @import CSS rule to load their hosted font files.'
    },
    {
      q: '"sans-serif" in CSS is an example of:',
      options: ['A specific font name', 'A generic font family', 'A font weight', 'A font format'],
      correct: 1,
      explanation: 'Generic font families (serif, sans-serif, monospace, cursive, fantasy) act as fallbacks when specific fonts are unavailable.'
    },
  ],

  c8: [ // Text Properties
    {
      q: 'The CSS property to align text is:',
      options: ['text-position', 'align', 'text-align', 'horizontal-align'],
      correct: 2,
      explanation: 'text-align (left, right, center, justify) controls the horizontal alignment of text within its container.'
    },
    {
      q: 'text-decoration: none is commonly used to:',
      options: ['Bold text', 'Remove the underline from links', 'Add strikethrough', 'Increase letter spacing'],
      correct: 1,
      explanation: 'text-decoration: none removes all text decorations — most commonly used to remove the underline from <a> tags.'
    },
    {
      q: 'The line-height property controls:',
      options: ['The height of the element', 'The spacing between lines of text', 'The indent of the first line', 'The font size'],
      correct: 1,
      explanation: 'line-height sets the vertical distance between lines of text. A value of 1.6 is often recommended for readability.'
    },
    {
      q: 'text-transform: uppercase converts text to:',
      options: ['Title Case', 'Lowercase', 'ALL CAPS', 'Small Caps'],
      correct: 2,
      explanation: 'text-transform: uppercase renders all characters in uppercase without modifying the HTML.'
    },
    {
      q: 'letter-spacing controls:',
      options: ['Space between words', 'Space between individual characters', 'Line height', 'Text indent'],
      correct: 1,
      explanation: 'letter-spacing adds or removes space between individual characters (tracking) in a block of text.'
    },
  ],

  c9: [ // CSS Box Model
    {
      q: 'The CSS Box Model consists of (from inside out):',
      options: ['Content → Margin → Border → Padding', 'Content → Padding → Border → Margin', 'Padding → Content → Border → Margin', 'Border → Content → Padding → Margin'],
      correct: 1,
      explanation: 'The Box Model layers are: Content → Padding → Border → Margin. Padding is inside the border; margin is outside.'
    },
    {
      q: 'By default, box-sizing is set to:',
      options: ['border-box', 'content-box', 'padding-box', 'margin-box'],
      correct: 1,
      explanation: 'Default box-sizing is content-box: width/height apply only to content. Padding and border are added on top of that size.'
    },
    {
      q: 'With box-sizing: border-box, the width property includes:',
      options: ['Content only', 'Content + Padding', 'Content + Padding + Border', 'Content + Padding + Border + Margin'],
      correct: 2,
      explanation: 'border-box includes padding and border in the element\'s specified width/height, making layout much easier.'
    },
    {
      q: 'The total width of a content-box element with width:200px, padding:10px, border:5px is:',
      options: ['200px', '220px', '230px', '215px'],
      correct: 2,
      explanation: 'Total width = 200 (content) + 10+10 (left+right padding) + 5+5 (left+right border) = 230px.'
    },
    {
      q: 'Which property adds space inside the element (between content and border)?',
      options: ['margin', 'spacing', 'padding', 'gap'],
      correct: 2,
      explanation: 'padding adds internal space between the content area and the border. margin adds external space outside the border.'
    },
  ],

  c10: [ // Margin and Padding
    {
      q: 'margin: auto is commonly used to:',
      options: ['Set margin to browser default', 'Center a block element horizontally', 'Remove all margins', 'Add margin only to top and bottom'],
      correct: 1,
      explanation: 'Setting margin: auto (or margin-left/right: auto) on a block element with a defined width centers it horizontally.'
    },
    {
      q: 'The shorthand "margin: 10px 20px" sets:',
      options: ['Top-Right: 10px, Bottom-Left: 20px', 'Top-Bottom: 10px, Left-Right: 20px', 'All sides to 10px and 20px alternately', 'Top: 10px, Right: 20px, Bottom: 0, Left: 0'],
      correct: 1,
      explanation: '2-value shorthand: first value = top & bottom, second value = left & right.'
    },
    {
      q: 'Margin collapse occurs when:',
      options: ['Two margins overlap and the larger one wins', 'Margin is set to negative', 'Padding and margin mix', 'Border-box is used'],
      correct: 0,
      explanation: 'Vertical margins between adjacent block elements collapse: the resulting margin equals the largest of the two, not their sum.'
    },
    {
      q: 'padding: 10px 20px 15px means:',
      options: ['Top:10, Right-Left:20, Bottom:15', 'All sides: 10, 20, 15 cycling', 'Top:10, Right:20, Bottom:15, Left:20', 'Left-Right: 10, 20, 15'],
      correct: 2,
      explanation: '3-value shorthand: Top=10px, Left&Right=20px, Bottom=15px. The missing left takes the right value.'
    },
  ],

  c11: [ // Display Properties
    {
      q: 'An element with display: block:',
      options: ['Sits inline with other elements', 'Starts on a new line and takes full width', 'Is hidden', 'Has no width'],
      correct: 1,
      explanation: 'Block elements (div, p, h1 etc.) start on a new line and stretch to fill the full width of their container.'
    },
    {
      q: 'display: inline-block allows an element to:',
      options: ['Float left', 'Be inline but accept width and height', 'Take full width', 'Disappear from layout'],
      correct: 1,
      explanation: 'inline-block elements flow inline like text but accept width, height, margin, and padding on all sides.'
    },
    {
      q: 'display: none vs visibility: hidden — the difference is:',
      options: ['No difference', 'display:none removes the element from layout; visibility:hidden hides it but it still occupies space', 'visibility:hidden removes it from layout', 'Both remove the element from layout'],
      correct: 1,
      explanation: 'display:none removes the element completely from the document flow. visibility:hidden hides it visually but keeps the space.'
    },
    {
      q: 'display: flex turns an element into:',
      options: ['A block container with float layout', 'A flex container enabling the Flexbox layout model', 'An inline element', 'A grid container'],
      correct: 1,
      explanation: 'display:flex makes an element a flex container. Its direct children become flex items arranged by Flexbox rules.'
    },
  ],

  c12: [ // Positioning Techniques
    {
      q: 'An element with position: relative moves:',
      options: ['Relative to the viewport', 'Relative to its normal position in the document flow', 'Relative to the nearest positioned ancestor', 'Out of the document flow completely'],
      correct: 1,
      explanation: 'position:relative moves an element relative to where it would normally appear, and it still occupies its original space.'
    },
    {
      q: 'position: absolute positions an element:',
      options: ['Fixed to the browser window', 'Relative to the nearest positioned (non-static) ancestor', 'Relative to its normal flow position', 'Centered automatically'],
      correct: 1,
      explanation: 'absolute removes the element from the flow and positions it relative to the nearest ancestor with position other than static.'
    },
    {
      q: 'position: fixed places an element:',
      options: ['Relative to its parent', 'Fixed relative to the browser viewport — it doesn\'t scroll', 'In the normal document flow', 'Absolute to the <body>'],
      correct: 1,
      explanation: 'fixed elements stay in the same screen position as the user scrolls — used for sticky headers, floating buttons, etc.'
    },
    {
      q: 'The z-index property controls:',
      options: ['Zoom level of the element', 'The horizontal offset', 'The stacking order of positioned elements on the z-axis', 'Element transparency'],
      correct: 2,
      explanation: 'z-index determines which element appears on top when elements overlap. Higher z-index = appears in front.'
    },
    {
      q: 'position: sticky acts like:',
      options: ['Absolute until page load', 'Relative until it hits a scroll threshold, then fixed', 'Always fixed to viewport', 'Static with z-index applied'],
      correct: 1,
      explanation: 'sticky behaves like relative until the element reaches a specified scroll position, then it sticks like fixed.'
    },
  ],

  c13: [ // Flexbox
    {
      q: 'The main axis in Flexbox is determined by:',
      options: ['The height of the container', 'The flex-direction property (default: row)', 'The align-items property', 'The justify-content property'],
      correct: 1,
      explanation: 'flex-direction defines the main axis. Default is row (horizontal). Changing to column makes the main axis vertical.'
    },
    {
      q: 'justify-content in Flexbox aligns flex items along:',
      options: ['The cross axis', 'The main axis', 'Both axes', 'The z-axis'],
      correct: 1,
      explanation: 'justify-content distributes space along the main axis (e.g., flex-start, flex-end, center, space-between, space-around).'
    },
    {
      q: 'align-items in Flexbox aligns flex items along:',
      options: ['The main axis', 'The cross axis (perpendicular to main axis)', 'Both axes', 'The z-axis'],
      correct: 1,
      explanation: 'align-items aligns flex items along the cross axis (e.g., stretch, center, flex-start, flex-end, baseline).'
    },
    {
      q: 'flex-wrap: wrap allows flex items to:',
      options: ['Shrink indefinitely', 'Wrap onto multiple lines when they overflow', 'Expand to fill one line', 'Hide overflowing items'],
      correct: 1,
      explanation: 'By default flex-wrap is nowrap (items stay on one line). wrap allows items to wrap to the next line when needed.'
    },
    {
      q: 'The flex: 1 shorthand means:',
      options: ['flex-grow: 0, flex-shrink: 1, flex-basis: auto', 'flex-grow: 1, flex-shrink: 1, flex-basis: 0', 'Width is 1px', 'The item is first in order'],
      correct: 1,
      explanation: 'flex: 1 is shorthand for flex-grow:1 flex-shrink:1 flex-basis:0, making items grow equally to fill the container.'
    },
    {
      q: 'To center an item both horizontally and vertically with Flexbox:',
      options: ['Use margin: auto on each item', 'Set justify-content: center AND align-items: center on the container', 'Use position:absolute', 'Use float:center'],
      correct: 1,
      explanation: 'Setting both justify-content: center and align-items: center on a flex container perfectly centers its children.'
    },
  ],

  c14: [ // CSS Grid
    {
      q: 'display: grid turns an element into:',
      options: ['A flex container', 'A two-dimensional grid container', 'A table', 'A block element only'],
      correct: 1,
      explanation: 'display:grid enables the CSS Grid layout, allowing two-dimensional (rows AND columns) layout control.'
    },
    {
      q: 'grid-template-columns: repeat(3, 1fr) creates:',
      options: ['3 equal-width columns', 'A 3-row grid', '3 columns each 1px wide', 'One column 3fr wide'],
      correct: 0,
      explanation: 'repeat(3, 1fr) creates 3 columns each taking 1 fraction of the available space — so three equal-width columns.'
    },
    {
      q: 'The gap property in CSS Grid controls:',
      options: ['The border of grid cells', 'The space between rows and/or columns', 'The padding inside grid items', 'The grid\'s outer margin'],
      correct: 1,
      explanation: 'gap (formerly grid-gap) sets the gutter space between rows and columns in a grid or flex container.'
    },
    {
      q: 'grid-column: 1 / 3 means a grid item spans:',
      options: ['From column 1 to column 3 (2 columns)', 'Only column 1 and 3', 'The first 3 columns', 'Column 1 only with 3px gap'],
      correct: 0,
      explanation: 'grid-column: start / end uses line numbers. 1 / 3 means from grid line 1 to grid line 3, spanning 2 columns.'
    },
    {
      q: 'The fr unit in CSS Grid stands for:',
      options: ['Fractional units of the available space', 'Front relative units', 'Frame ratio', 'Fixed reference'],
      correct: 0,
      explanation: 'fr is a fractional unit that distributes available space proportionally among columns/rows that use it.'
    },
  ],

  c15: [ // Media Queries
    {
      q: 'Media queries in CSS are used to:',
      options: ['Query a database', 'Apply different styles based on device characteristics (screen size, etc.)', 'Load images dynamically', 'Handle media file formats'],
      correct: 1,
      explanation: 'Media queries apply CSS rules conditionally based on device properties like viewport width, resolution, or orientation.'
    },
    {
      q: 'The correct syntax for a media query targeting screens ≤ 768px is:',
      options: ['@media (max-width: 768px) { }', '@media screen < 768px { }', '@responsive (768px) { }', 'media-query(768px) { }'],
      correct: 0,
      explanation: '@media (max-width: 768px) { } applies the enclosed styles only on viewports up to 768px wide.'
    },
    {
      q: 'A "mobile-first" CSS approach uses:',
      options: ['max-width media queries', 'min-width media queries', 'Only desktop styles', 'JavaScript to detect devices'],
      correct: 1,
      explanation: 'Mobile-first means writing base styles for small screens and using min-width queries to progressively enhance for larger screens.'
    },
    {
      q: 'Which keyword in a media query targets print stylesheets?',
      options: ['@media paper', '@media print', '@media file', '@media output'],
      correct: 1,
      explanation: '@media print { } applies styles only when the user prints the page or uses print preview.'
    },
    {
      q: 'The "and" keyword in media queries:',
      options: ['Combines two feature conditions that must both be true', 'Acts as OR between conditions', 'Selects specific devices', 'Ignores one condition'],
      correct: 0,
      explanation: '@media (min-width: 600px) and (max-width: 900px) matches viewports between 600px and 900px (both conditions must be true).'
    },
  ],

  c16: [ // Responsive Web Design
    {
      q: 'The viewport meta tag <meta name="viewport" content="width=device-width, initial-scale=1"> is used to:',
      options: ['Set the background color', 'Configure how the page scales on mobile devices', 'Link a stylesheet', 'Add the page title'],
      correct: 1,
      explanation: 'This meta tag tells the browser to set the viewport width to the device width and initial zoom to 1, enabling proper mobile rendering.'
    },
    {
      q: 'Responsive Web Design was coined by:',
      options: ['Tim Berners-Lee', 'Ethan Marcotte', 'Jeffrey Zeldman', 'Eric Meyer'],
      correct: 1,
      explanation: 'Ethan Marcotte coined the term "Responsive Web Design" in his 2010 A List Apart article.'
    },
    {
      q: 'The three core components of Responsive Web Design are:',
      options: ['HTML, CSS, JavaScript', 'Grid, Flexbox, Media Queries', 'Fluid grids, Flexible images, Media Queries', 'Bootstrap, Sass, Less'],
      correct: 2,
      explanation: 'RWD\'s three pillars: fluid grids (proportional layouts), flexible images (scale within containers), and media queries (conditional styles).'
    },
    {
      q: 'The CSS unit "vw" stands for:',
      options: ['Vertical Width', 'Viewport Width (1vw = 1% of viewport width)', 'Variable Width', 'Vector Width'],
      correct: 1,
      explanation: '1vw equals 1% of the viewport width. Similarly, 1vh = 1% of viewport height.'
    },
    {
      q: 'max-width: 100% on an <img> ensures:',
      options: ['The image is always 100px wide', 'The image never exceeds its container width (fluid image)', 'The image is hidden on mobile', 'The image stretches to full screen'],
      correct: 1,
      explanation: 'max-width: 100% prevents images from overflowing their container — a fundamental responsive image technique.'
    },
  ],

  c17: [ // Transitions
    {
      q: 'The CSS transition property enables:',
      options: ['Keyframe animations', 'Smooth changes from one CSS state to another over time', 'JavaScript event handling', '3D transforms'],
      correct: 1,
      explanation: 'CSS transitions let you smoothly animate a change in a CSS property value (e.g., color on hover) over a specified duration.'
    },
    {
      q: 'transition: all 0.3s ease means:',
      options: ['All properties animate over 3 seconds linearly', 'All properties animate over 0.3 seconds with ease timing', 'Only opacity transitions over 0.3s', 'No transition applied'],
      correct: 1,
      explanation: 'all = apply to all properties, 0.3s = duration, ease = timing function (slow start, fast middle, slow end).'
    },
    {
      q: 'The transition-timing-function value "linear" means:',
      options: ['The animation accelerates then decelerates', 'The animation moves at a constant speed throughout', 'The animation bounces at the end', 'The animation delays before starting'],
      correct: 1,
      explanation: 'linear applies constant speed throughout the transition. ease, ease-in, ease-out, and cubic-bezier offer other timing curves.'
    },
    {
      q: 'transition-delay sets:',
      options: ['The duration of the transition', 'The time before the transition starts', 'The speed curve', 'The property to animate'],
      correct: 1,
      explanation: 'transition-delay specifies a wait time before the transition begins after the triggering event.'
    },
  ],

  c18: [ // Animations
    {
      q: '@keyframes in CSS is used to:',
      options: ['Define a function in JavaScript', 'Define the sequence of steps in a CSS animation', 'Create a media query', 'Import an animation library'],
      correct: 1,
      explanation: '@keyframes defines the animation\'s intermediate steps (from/to or percentage-based) that the browser interpolates.'
    },
    {
      q: 'animation-iteration-count: infinite means:',
      options: ['The animation plays once', 'The animation plays 3 times', 'The animation repeats forever', 'The animation never starts'],
      correct: 2,
      explanation: 'infinite makes the animation loop continuously without stopping.'
    },
    {
      q: 'animation-fill-mode: forwards keeps:',
      options: ['The animation looping', 'The element\'s styles as defined in the last keyframe after the animation ends', 'The element invisible until the animation starts', 'The element in its first keyframe state before starting'],
      correct: 1,
      explanation: 'forwards retains the computed styles from the last keyframe after the animation completes, preventing a snap-back.'
    },
    {
      q: 'The animation shorthand "spin 2s linear infinite" specifies:',
      options: ['Name, timing-function, duration, iteration-count', 'Name, duration, timing-function, iteration-count', 'Duration, name, timing-function, iteration-count', 'Name, delay, timing-function, iteration-count'],
      correct: 1,
      explanation: 'CSS animation shorthand order: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state.'
    },
    {
      q: 'animation-direction: alternate makes the animation:',
      options: ['Play in reverse every time', 'Play forward on odd cycles and backward on even cycles', 'Play from 50% onwards', 'Skip every other cycle'],
      correct: 1,
      explanation: 'alternate plays the animation forward on odd iterations and backward on even iterations, creating a ping-pong effect.'
    },
  ],
};

/* ════════════════════════════════════════════════════════════
   3.  QUIZ STATE  (all runtime data lives here)
════════════════════════════════════════════════════════════ */
const state = {
  // Student
  studentName:  '',
  studentPhone: '',
  studentQuid:  '',
  studentSection: '',
  numQuestionsChoice: 'all',

  // Subject
  unit:      '',
  unitLabel: '',
  topicId:   '',
  topicLabel: '',

  // Quiz
  questions:        [],   // shuffled subset
  currentIndex:     0,
  userAnswers:      [],   // index of chosen option (or null)
  markedForReview:  [],   // bool per question
  visitedQuestions: [],   // bool per question

  // Timer
  totalSeconds:   0,
  secondsLeft:    0,
  timerInterval:  null,
  timeTakenSec:   0,
};

/* ════════════════════════════════════════════════════════════
   4.  DOM REFERENCES  (cached once on DOMContentLoaded)
════════════════════════════════════════════════════════════ */
let dom = {};

function cacheDom() {
  dom = {
    // Theme
    themeToggle: document.getElementById('themeToggle'),
    // Screens
    screens: {
      details: document.getElementById('screen-details'),
      subject: document.getElementById('screen-subject'),
      quiz:    document.getElementById('screen-quiz'),
      result:  document.getElementById('screen-result'),
    },
    // Details form
    detailsForm:    document.getElementById('detailsForm'),
    studentName:    document.getElementById('studentName'),
    studentPhone:   document.getElementById('studentPhone'),
    studentQuid:    document.getElementById('studentQuid'),
    studentSection: document.getElementById('studentSection'),
    nameError:      document.getElementById('nameError'),
    phoneError:     document.getElementById('phoneError'),
    quidError:      document.getElementById('quidError'),
    sectionError:   document.getElementById('sectionError'),
    // Subject screen
    subjectGreeting: document.getElementById('subjectGreeting'),
    unitSelect:      document.getElementById('unitSelect'),
    topicGroup:      document.getElementById('topicGroup'),
    topicSelect:     document.getElementById('topicSelect'),
    noQuestionsMsg:  document.getElementById('noQuestionsMsg'),
    btnBackToDetails:document.getElementById('btnBackToDetails'),
    btnStartQuiz:    document.getElementById('btnStartQuiz'),
    // Quiz screen
    quizMetaName:  document.getElementById('quizMetaName'),
    quizMetaTopic: document.getElementById('quizMetaTopic'),
    timerDisplay:  document.getElementById('timerDisplay'),
    progressBar:   document.getElementById('progressBar'),
    statAnswered:  document.getElementById('statAnswered'),
    statUnanswered:document.getElementById('statUnanswered'),
    statMarked:    document.getElementById('statMarked'),
    questionCount: document.getElementById('questionCount'),
    markBadge:     document.getElementById('markBadge'),
    questionText:  document.getElementById('questionText'),
    optionsList:   document.getElementById('optionsList'),
    btnPrev:       document.getElementById('btnPrev'),
    btnMark:       document.getElementById('btnMark'),
    btnNext:       document.getElementById('btnNext'),
    btnSubmit:     document.getElementById('btnSubmit'),
    navGrid:       document.getElementById('navGrid'),
    // Result screen
    resultPassFail:   document.getElementById('resultPassFail'),
    donutFill:        document.getElementById('donutFill'),
    scorePercent:     document.getElementById('scorePercent'),
    rStudentName:     document.getElementById('rStudentName'),
    rQuid:            document.getElementById('rQuid'),
    rSection:         document.getElementById('rSection'),
    rTopic:           document.getElementById('rTopic'),
    rTotal:           document.getElementById('rTotal'),
    rCorrect:         document.getElementById('rCorrect'),
    rIncorrect:       document.getElementById('rIncorrect'),
    rUnattempted:     document.getElementById('rUnattempted'),
    rPercent:         document.getElementById('rPercent'),
    rTimeTaken:       document.getElementById('rTimeTaken'),
    btnWhatsApp:      document.getElementById('btnWhatsApp'),
    btnPrint:         document.getElementById('btnPrint'),
    btnDownload:      document.getElementById('btnDownload'),
    btnRetry:         document.getElementById('btnRetry'),
    reviewList:       document.getElementById('reviewList'),
    // Modal
    submitModal:      document.getElementById('submitModal'),
    modalBody:        document.getElementById('modalBody'),
    btnModalCancel:   document.getElementById('btnModalCancel'),
    btnModalConfirm:  document.getElementById('btnModalConfirm'),
  };
}

/* ════════════════════════════════════════════════════════════
   5.  UTILITY HELPERS
════════════════════════════════════════════════════════════ */

/** Fisher-Yates shuffle — returns a new shuffled array. */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Format seconds → "MM:SS" string. */
function formatTime(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

/** Show a specific screen, hide others. */
function showScreen(name) {
  Object.entries(dom.screens).forEach(([key, el]) => {
    el.classList.toggle('active', key === name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Get selected radio value by name. */
function getRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

/* ════════════════════════════════════════════════════════════
   6.  THEME TOGGLE
════════════════════════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem('ccq-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  dom.themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  dom.themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('ccq-theme', next);
}

/* ════════════════════════════════════════════════════════════
   7.  STUDENT DETAILS SCREEN
════════════════════════════════════════════════════════════ */

/** Validates the details form. Returns true if valid. */
function validateDetails() {
  let valid = true;

  const name = dom.studentName.value.trim();
  if (name.length < 2) {
    dom.nameError.textContent = 'Please enter your full name (at least 2 characters).';
    valid = false;
  } else {
    dom.nameError.textContent = '';
  }

  const phone = dom.studentPhone.value.trim();
  // Must start with + and contain only digits after +
  if (!/^\+[0-9]{7,15}$/.test(phone)) {
    dom.phoneError.textContent = 'Enter a valid number with country code, e.g. +919876543210.';
    valid = false;
  } else {
    dom.phoneError.textContent = '';
  }

  const quid = dom.studentQuid.value.trim();
  if (quid.length < 2) {
    dom.quidError.textContent = 'Please enter a valid Quiz ID (QUID).';
    valid = false;
  } else {
    dom.quidError.textContent = '';
  }

  const section = dom.studentSection.value.trim();
  if (!['I', 'J', 'L'].includes(section)) {
    dom.sectionError.textContent = 'Please select your Section (I, J, or L).';
    valid = false;
  } else {
    dom.sectionError.textContent = '';
  }

  return valid;
}

function handleDetailsSubmit(e) {
  e.preventDefault();
  if (!validateDetails()) return;

  state.studentName    = dom.studentName.value.trim();
  state.studentPhone   = dom.studentPhone.value.trim();
  state.studentQuid    = dom.studentQuid.value.trim();
  state.studentSection = dom.studentSection.value.trim();
  state.numQuestionsChoice = getRadioValue('numQuestions') || 'all';

  dom.subjectGreeting.textContent = `Hello, ${state.studentName} (Sec: ${state.studentSection}, QUID: ${state.studentQuid})! Choose the unit and topic you want to practice.`;
  showScreen('subject');
}

/* ════════════════════════════════════════════════════════════
   8.  SUBJECT / UNIT / TOPIC SCREEN
════════════════════════════════════════════════════════════ */

/** Populate topic dropdown when a unit is chosen. */
function handleUnitChange() {
  const unit = dom.unitSelect.value;
  dom.topicSelect.innerHTML = '<option value="">— Choose a Topic —</option>';
  dom.noQuestionsMsg.style.display = 'none';
  dom.btnStartQuiz.disabled = true;

  if (!unit) {
    dom.topicGroup.style.display = 'none';
    return;
  }

  // Add "Entire Unit" option
  const entireOpt = document.createElement('option');
  entireOpt.value = 'all';
  entireOpt.textContent = '📚 Entire Unit (All Topics)';
  dom.topicSelect.appendChild(entireOpt);

  // Add each topic
  (TOPICS[unit] || []).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = t.label;
    dom.topicSelect.appendChild(opt);
  });

  dom.topicGroup.style.display = 'block';
}

/** Validate topic selection and check if questions exist. */
function handleTopicChange() {
  const unit  = dom.unitSelect.value;
  const topic = dom.topicSelect.value;
  dom.noQuestionsMsg.style.display = 'none';
  dom.btnStartQuiz.disabled = true;

  if (!topic) return;

  const pool = buildQuestionPool(unit, topic);
  if (pool.length === 0) {
    dom.noQuestionsMsg.style.display = 'block';
    return;
  }
  dom.btnStartQuiz.disabled = false;
}

/** Collect all questions for the chosen unit/topic. */
function buildQuestionPool(unit, topic) {
  const bank = QUESTION_BANK;
  if (topic === 'all') {
    // Merge all topics of the unit
    return (TOPICS[unit] || []).flatMap(t => bank[t.id] || []);
  }
  return bank[topic] || [];
}

/** Start the quiz. */
function handleStartQuiz() {
  const unit  = dom.unitSelect.value;
  const topic = dom.topicSelect.value;

  state.unit  = unit;
  state.unitLabel = dom.unitSelect.options[dom.unitSelect.selectedIndex].text;
  state.topicId   = topic;
  state.topicLabel = (topic === 'all')
    ? 'Entire Unit'
    : dom.topicSelect.options[dom.topicSelect.selectedIndex].text;

  // Build + shuffle pool
  let pool = shuffle(buildQuestionPool(unit, topic));

  // Limit to requested number
  const choice = state.numQuestionsChoice;
  if (choice !== 'all') {
    const n = parseInt(choice, 10);
    pool = pool.slice(0, Math.min(n, pool.length));
  }

  if (pool.length === 0) {
    dom.noQuestionsMsg.style.display = 'block';
    return;
  }

  // Randomize options while tracking correct answer
  state.questions = pool.map(q => {
    const indices = shuffle([0, 1, 2, 3]);
    const newOptions = indices.map(i => q.options[i]);
    const newCorrect = indices.indexOf(q.correct);
    return { q: q.q, options: newOptions, correct: newCorrect, explanation: q.explanation };
  });

  state.currentIndex    = 0;
  state.userAnswers     = new Array(state.questions.length).fill(null);
  state.markedForReview = new Array(state.questions.length).fill(false);
  state.visitedQuestions = new Array(state.questions.length).fill(false);
  state.visitedQuestions[0] = true;

  // Timer: 1 minute per question (min 5 min, max 60 min)
  state.totalSeconds = state.questions.length * 60;
  state.secondsLeft  = state.totalSeconds;

  startQuizScreen();
}

/* ════════════════════════════════════════════════════════════
   9.  QUIZ SCREEN
════════════════════════════════════════════════════════════ */

function startQuizScreen() {
  // Update meta chips
  dom.quizMetaName.textContent  = `👤 ${state.studentName}`;
  dom.quizMetaTopic.textContent = `📖 ${state.topicLabel}`;

  buildNavGrid();
  renderQuestion();
  startTimer();
  showScreen('quiz');
}

/** Render the current question and options. */
function renderQuestion() {
  const idx = state.currentIndex;
  const q   = state.questions[idx];
  const total = state.questions.length;

  dom.questionCount.textContent = `Question ${idx + 1} of ${total}`;
  dom.questionText.textContent  = q.q;

  // Mark badge
  dom.markBadge.classList.toggle('hidden', !state.markedForReview[idx]);

  // Options
  dom.optionsList.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const li  = document.createElement('li');
    li.className = 'option-item' + (state.userAnswers[idx] === i ? ' selected' : '');
    li.setAttribute('role', 'radio');
    li.setAttribute('aria-checked', state.userAnswers[idx] === i ? 'true' : 'false');
    li.setAttribute('tabindex', '0');
    li.innerHTML = `<span class="option-label">${labels[i]}</span><span>${escapeHtml(opt)}</span>`;

    li.addEventListener('click', () => selectOption(i));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') selectOption(i); });
    dom.optionsList.appendChild(li);
  });

  // Prev / Next buttons
  dom.btnPrev.disabled = idx === 0;
  dom.btnNext.textContent = idx === total - 1 ? 'Review →' : 'Next →';

  // Update stats + progress
  updateStats();
  updateNavGrid();
}

/** Select an answer option. */
function selectOption(optionIndex) {
  state.userAnswers[state.currentIndex] = optionIndex;
  renderQuestion(); // re-render to highlight
}

/** Navigate prev/next. */
function goTo(index) {
  if (index < 0 || index >= state.questions.length) return;
  state.visitedQuestions[index] = true;
  state.currentIndex = index;
  renderQuestion();
}

/** Toggle mark-for-review on current question. */
function toggleMark() {
  const idx = state.currentIndex;
  state.markedForReview[idx] = !state.markedForReview[idx];
  renderQuestion();
}

/** Update progress bar and answered/unanswered stats. */
function updateStats() {
  const total     = state.questions.length;
  const answered  = state.userAnswers.filter(a => a !== null).length;
  const unanswered = total - answered;
  const marked     = state.markedForReview.filter(Boolean).length;

  dom.statAnswered.textContent   = `Answered: ${answered}`;
  dom.statUnanswered.textContent = `Unanswered: ${unanswered}`;
  dom.statMarked.textContent     = `Marked: ${marked}`;

  const pct = Math.round((answered / total) * 100);
  dom.progressBar.style.width = pct + '%';
  dom.progressBar.setAttribute('aria-valuenow', pct);
}

/** Build the navigator grid (small numbered buttons). */
function buildNavGrid() {
  dom.navGrid.innerHTML = '';
  state.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => goTo(i));
    dom.navGrid.appendChild(btn);
  });
}

/** Refresh nav-grid button states. */
function updateNavGrid() {
  const btns = dom.navGrid.querySelectorAll('.nav-btn');
  btns.forEach((btn, i) => {
    btn.className = 'nav-btn';
    if (i === state.currentIndex) btn.classList.add('active-q');
    if (state.userAnswers[i] !== null) btn.classList.add('answered');
    else if (state.visitedQuestions[i]) btn.classList.add('unanswered');
    if (state.markedForReview[i]) btn.classList.add('marked');
  });
}

/* ════════════════════════════════════════════════════════════
   10.  TIMER
════════════════════════════════════════════════════════════ */

function startTimer() {
  clearInterval(state.timerInterval);
  dom.timerDisplay.classList.remove('warn');  // FIX: remove leftover warn class from previous quiz
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    updateTimerDisplay();

    // Warn when ≤ 60 seconds remaining
    if (state.secondsLeft <= 60) dom.timerDisplay.classList.add('warn');

    if (state.secondsLeft <= 0) {
      clearInterval(state.timerInterval);
      submitQuiz(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  dom.timerDisplay.textContent = '⏱ ' + formatTime(state.secondsLeft);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  state.timeTakenSec = state.totalSeconds - state.secondsLeft;
}

/* ════════════════════════════════════════════════════════════
   11.  SUBMIT MODAL
════════════════════════════════════════════════════════════ */

function showSubmitModal() {
  const unanswered = state.userAnswers.filter(a => a === null).length;
  dom.modalBody.textContent =
    unanswered > 0
      ? `You have ${unanswered} unanswered question(s). Are you sure you want to submit?`
      : 'All questions are answered. Ready to submit?';
  dom.submitModal.classList.add('open');  // FIX: use CSS class toggle
}

function hideSubmitModal() {
  dom.submitModal.classList.remove('open');  // FIX: remove class to hide
}

/* ════════════════════════════════════════════════════════════
   12.  QUIZ SUBMISSION & SCORING
════════════════════════════════════════════════════════════ */

function submitQuiz(autoSubmit = false) {
  stopTimer();
  hideSubmitModal();

  // Calculate scores
  let correct = 0, incorrect = 0, unattempted = 0;
  state.questions.forEach((q, i) => {
    const ans = state.userAnswers[i];
    if (ans === null)        unattempted++;
    else if (ans === q.correct) correct++;
    else                    incorrect++;
  });

  const total = state.questions.length;
  const pct   = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed = pct >= 40;

  // Save to localStorage (last result only)
  const resultData = {
    studentName:    state.studentName,
    studentPhone:   state.studentPhone,
    studentQuid:    state.studentQuid,
    studentSection: state.studentSection,
    unitLabel:      state.unitLabel,
    topicLabel:     state.topicLabel,
    total, correct, incorrect, unattempted, pct, passed,
    timeTaken: state.timeTakenSec,
    date: new Date().toLocaleString(),
  };
  try { localStorage.setItem('ccq-last-result', JSON.stringify(resultData)); } catch(_) {}

  renderResultScreen(resultData, correct, incorrect, unattempted, pct, passed);
  showScreen('result');

  // Trigger WhatsApp share to professor's number upon submit
  try {
    sendWhatsApp();
  } catch (err) {
    console.warn('Auto-popup blocked by browser. User can click Send Result button.', err);
  }

  if (autoSubmit) {
    alert('⏰ Time is up! Your quiz has been automatically submitted.');
  }
}

/* ════════════════════════════════════════════════════════════
   13.  RESULT SCREEN
════════════════════════════════════════════════════════════ */

function renderResultScreen(data, correct, incorrect, unattempted, pct, passed) {
  // Pass / Fail badge
  dom.resultPassFail.textContent = passed ? '✅ PASSED' : '❌ FAILED';
  dom.resultPassFail.className = 'passfail-badge ' + (passed ? 'pass' : 'fail');

  // Score donut animation — FIX: use CSS variable colors to respect dark mode
  dom.scorePercent.textContent = pct + '%';
  const circumference = 2 * Math.PI * 50; // r=50 → 314.16
  const dash = (pct / 100) * circumference;
  // Read actual computed CSS variable colour so dark mode is respected
  const rootStyle = getComputedStyle(document.documentElement);
  const strokeColor = passed
    ? rootStyle.getPropertyValue('--clr-success').trim()
    : rootStyle.getPropertyValue('--clr-danger').trim();
  dom.donutFill.style.stroke = strokeColor;
  // Trigger animation after brief delay so transition plays
  setTimeout(() => {
    dom.donutFill.setAttribute('stroke-dasharray', `${dash.toFixed(2)} ${circumference.toFixed(2)}`);
  }, 100);

  // Info table
  dom.rStudentName.textContent = state.studentName;
  if (dom.rQuid) dom.rQuid.textContent = state.studentQuid;
  if (dom.rSection) dom.rSection.textContent = `Section ${state.studentSection}`;
  dom.rTopic.textContent       = `${state.unitLabel} / ${state.topicLabel}`;
  dom.rTotal.textContent       = data.total;
  dom.rCorrect.textContent     = correct + ' (' + Math.round((correct/data.total)*100) + '%)';
  dom.rIncorrect.textContent   = incorrect;
  dom.rUnattempted.textContent = unattempted;
  dom.rPercent.textContent     = pct + '% — ' + (passed ? 'Pass 🎉' : 'Fail 😔');
  dom.rTimeTaken.textContent   = formatTime(state.timeTakenSec);

  // Detailed review
  renderAnswerReview();
}

/** Render question-by-question review section. */
function renderAnswerReview() {
  const labels = ['A', 'B', 'C', 'D'];
  dom.reviewList.innerHTML = '';

  state.questions.forEach((q, i) => {
    const userAns    = state.userAnswers[i];
    const isCorrect  = userAns === q.correct;
    const isSkipped  = userAns === null;

    const item = document.createElement('div');
    item.className = 'review-item';

    // Status icon
    const statusIcon = document.createElement('div');
    statusIcon.className = 'review-status-icon';
    statusIcon.textContent = isSkipped ? '⬜' : (isCorrect ? '✅' : '❌');
    item.appendChild(statusIcon);

    // Header
    const header = document.createElement('div');
    header.className = 'review-item-header';
    header.innerHTML = `
      <div class="review-qnum">${i + 1}</div>
      <div class="review-qtext">${escapeHtml(q.q)}</div>`;
    item.appendChild(header);

    // Options
    const optList = document.createElement('ul');
    optList.className = 'review-options';
    q.options.forEach((opt, oi) => {
      const li = document.createElement('li');
      li.className = 'review-option';

      const isUserChoice    = oi === userAns;
      const isCorrectChoice = oi === q.correct;

      if (isCorrectChoice) {
        li.classList.add('opt-correct');
        li.innerHTML = `✅ <strong>${labels[oi]}.</strong> ${escapeHtml(opt)} <em>(Correct Answer)</em>`;
      } else if (isUserChoice && !isCorrectChoice) {
        li.classList.add('opt-wrong');
        li.innerHTML = `❌ <strong>${labels[oi]}.</strong> ${escapeHtml(opt)} <em>(Your Answer)</em>`;
      } else {
        li.classList.add('opt-neutral');
        li.innerHTML = `<strong>${labels[oi]}.</strong> ${escapeHtml(opt)}`;
      }
      optList.appendChild(li);
    });
    item.appendChild(optList);

    // Meta line
    const meta = document.createElement('div');
    meta.className = 'review-meta';
    meta.innerHTML = `
      <span>Your Answer: <strong>${userAns !== null ? labels[userAns] + '. ' + escapeHtml(q.options[userAns]) : 'Not Attempted'}</strong></span>
      <span>Correct: <strong>${labels[q.correct]}. ${escapeHtml(q.options[q.correct])}</strong></span>`;
    item.appendChild(meta);

    // Explanation
    if (q.explanation) {
      const exp = document.createElement('div');
      exp.className = 'review-explanation';
      exp.innerHTML = `<strong>Explanation:</strong> ${escapeHtml(q.explanation)}`;
      item.appendChild(exp);
    }

    dom.reviewList.appendChild(item);
  });
}

/* ════════════════════════════════════════════════════════════
   14.  WHATSAPP SHARING
════════════════════════════════════════════════════════════ */

function sendWhatsApp() {
  // Collect result values
  const correct    = state.questions.filter((q, i) => state.userAnswers[i] === q.correct).length;
  const total      = state.questions.length;
  const incorrect  = state.questions.filter((q, i) => state.userAnswers[i] !== null && state.userAnswers[i] !== q.correct).length;
  const unattempted = state.questions.filter((q, i) => state.userAnswers[i] === null).length;
  const pct        = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed     = pct >= 40;
  const timeTaken  = formatTime(state.timeTakenSec);

  // Build a nicely-formatted message for Professor (+91 9568326772)
  const message = [
    '🎓 *CrazyCoding MCQ Quiz Portal — Student Result Submission*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━',
    `🆔 *Quiz ID (QUID):* ${state.studentQuid}`,
    `👤 *Student Name:* ${state.studentName}`,
    `🏷️ *Section:* ${state.studentSection}`,
    `📱 *Student WhatsApp:* ${state.studentPhone}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━',
    `📚 *Subject:* Front-End Web Development`,
    `📖 *Unit/Topic:* ${state.unitLabel} / ${state.topicLabel}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━',
    `📊 *Quiz Performance*`,
    `Total Questions: ${total}`,
    `✅ Correct:      ${correct} (${Math.round((correct/total)*100)}%)`,
    `❌ Incorrect:    ${incorrect}`,
    `⬜ Unattempted:  ${unattempted}`,
    `📈 Percentage:   ${pct}%`,
    `🏆 Final Status: ${passed ? 'PASSED 🎉' : 'FAILED ❌'}`,
    `⏱ Time Taken:   ${timeTaken}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━',
    `📅 Submitted At: ${new Date().toLocaleString()}`,
    '',
    '_Result automatically forwarded to Mr. Ankush (+91 9568326772)_',
  ].join('\n');

  // Teacher / Professor WhatsApp number
  const teacherPhone = '919568326772';
  const url = `https://wa.me/${teacherPhone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ════════════════════════════════════════════════════════════
   15.  PRINT RESULT
════════════════════════════════════════════════════════════ */

function printResult() {
  window.print();
}

/* ════════════════════════════════════════════════════════════
   16.  DOWNLOAD RESULT AS TEXT FILE
════════════════════════════════════════════════════════════ */

function downloadResult() {
  const correct    = state.questions.filter((q, i) => state.userAnswers[i] === q.correct).length;
  const total      = state.questions.length;
  const incorrect  = state.questions.filter((q, i) => state.userAnswers[i] !== null && state.userAnswers[i] !== q.correct).length;
  const unattempted= state.questions.filter((q, i) => state.userAnswers[i] === null).length;
  const pct        = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed     = pct >= 40;
  const labels     = ['A', 'B', 'C', 'D'];

  let text = [
    '==============================================',
    '   CRAZYCODING MCQ QUIZ PORTAL — RESULT',
    '==============================================',
    `Quiz ID (QUID) : ${state.studentQuid}`,
    `Student        : ${state.studentName}`,
    `Section        : Section ${state.studentSection}`,
    `Student Phone  : ${state.studentPhone}`,
    `Subject        : Front-End Web Development`,
    `Unit / Topic   : ${state.unitLabel} / ${state.topicLabel}`,
    `Date           : ${new Date().toLocaleString()}`,
    '----------------------------------------------',
    `Total Questions : ${total}`,
    `Correct         : ${correct}`,
    `Incorrect       : ${incorrect}`,
    `Unattempted     : ${unattempted}`,
    `Percentage      : ${pct}%`,
    `Result          : ${passed ? 'PASSED ✓' : 'FAILED ✗'}`,
    `Time Taken      : ${formatTime(state.timeTakenSec)}`,
    '==============================================',
    '            DETAILED ANSWER REVIEW',
    '==============================================',
  ].join('\r\n');

  state.questions.forEach((q, i) => {
    const userAns = state.userAnswers[i];
    text += `\r\n\r\nQ${i + 1}: ${q.q}\r\n`;
    q.options.forEach((opt, oi) => {
      const mark = oi === q.correct ? '[CORRECT]' : (oi === userAns ? '[YOUR ANSWER]' : '');
      text += `  ${labels[oi]}. ${opt}  ${mark}\r\n`;
    });
    text += `Your Answer : ${userAns !== null ? labels[userAns] + '. ' + q.options[userAns] : 'Not Attempted'}\r\n`;
    text += `Explanation : ${q.explanation || 'N/A'}\r\n`;
    text += '- - - - - - - - - - - - - - - - - - - - - - -';
  });

  text += '\r\n\r\n==============================================\r\n';
  text += 'Powered by CrazyCoding MCQ Quiz Portal\r\n';
  text += 'By Mr. Ankush | Assistant Professor, CSE\r\n';
  text += '==============================================\r\n';

  // Create a Blob and trigger download
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `CrazyCoding_Quiz_Result_${state.studentName.replace(/\s+/g, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ════════════════════════════════════════════════════════════
   17.  RETRY QUIZ
════════════════════════════════════════════════════════════ */

function retryQuiz() {
  // Reset SVG donut to 0 so old result arc doesn't bleed into new result
  dom.donutFill.setAttribute('stroke-dasharray', '0 314.16');

  // Reset unit/topic dropdowns
  dom.unitSelect.value  = '';
  dom.topicSelect.value = '';
  dom.topicGroup.style.display   = 'none';
  dom.noQuestionsMsg.style.display = 'none';
  dom.btnStartQuiz.disabled = true;

  // Go back to subject selection with same student details
  dom.subjectGreeting.textContent =
    `Hello again, ${state.studentName}! Choose a different unit/topic or the same one.`;
  showScreen('subject');
}

/* ════════════════════════════════════════════════════════════
   18.  SECURITY HELPER
════════════════════════════════════════════════════════════ */

/** Escape HTML special characters to prevent XSS. */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ════════════════════════════════════════════════════════════
   19.  KEYBOARD NAVIGATION FOR QUIZ
════════════════════════════════════════════════════════════ */

function handleQuizKeydown(e) {
  // Only active on quiz screen
  if (!document.getElementById('screen-quiz').classList.contains('active')) return;

  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      goTo(state.currentIndex - 1);
      break;
    case 'ArrowRight':
      e.preventDefault();
      goTo(state.currentIndex + 1);
      break;
    case '1': case 'a': case 'A':
      selectOption(0); break;
    case '2': case 'b': case 'B':
      selectOption(1); break;
    case '3': case 'c': case 'C':
      selectOption(2); break;
    case '4': case 'd': case 'D':
      selectOption(3); break;
    case 'm': case 'M':
      toggleMark(); break;
  }
}

/* ════════════════════════════════════════════════════════════
   20.  EVENT LISTENERS (wired up on DOMContentLoaded)
════════════════════════════════════════════════════════════ */

function wireEvents() {
  // Theme
  dom.themeToggle.addEventListener('click', toggleTheme);

  // Screen 1 — Details
  dom.detailsForm.addEventListener('submit', handleDetailsSubmit);

  // Radio labels styling (visual feedback)
  document.querySelectorAll('.radio-label').forEach(label => {
    label.querySelector('input').addEventListener('change', () => {
      document.querySelectorAll('.radio-label').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
    });
  });

  // Screen 2 — Subject
  dom.btnBackToDetails.addEventListener('click', () => showScreen('details'));
  dom.unitSelect.addEventListener('change', handleUnitChange);
  dom.topicSelect.addEventListener('change', handleTopicChange);
  dom.btnStartQuiz.addEventListener('click', handleStartQuiz);

  // Screen 3 — Quiz controls
  dom.btnPrev.addEventListener('click', () => goTo(state.currentIndex - 1));
  dom.btnNext.addEventListener('click', () => {
    // FIX: On last question 'Review →' opens submit modal instead of going out of bounds
    if (state.currentIndex === state.questions.length - 1) {
      showSubmitModal();
    } else {
      goTo(state.currentIndex + 1);
    }
  });
  dom.btnMark.addEventListener('click', toggleMark);
  dom.btnSubmit.addEventListener('click', showSubmitModal);

  // Modal
  dom.btnModalCancel.addEventListener('click', hideSubmitModal);
  dom.btnModalConfirm.addEventListener('click', () => submitQuiz(false));
  dom.submitModal.addEventListener('click', e => {
    if (e.target === dom.submitModal) hideSubmitModal();
  });

  // Screen 4 — Result actions
  dom.btnWhatsApp.addEventListener('click', sendWhatsApp);
  dom.btnPrint.addEventListener('click', printResult);
  dom.btnDownload.addEventListener('click', downloadResult);
  dom.btnRetry.addEventListener('click', retryQuiz);

  // Keyboard shortcuts for quiz
  document.addEventListener('keydown', handleQuizKeydown);
}

/* ════════════════════════════════════════════════════════════
   21.  INIT
════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  initTheme();
  wireEvents();

  // FIX: Pre-select "All" radio visually — compatible with all browsers (no :has() dependency)
  const allRadioInput = document.querySelector('input[name="numQuestions"][value="all"]');
  if (allRadioInput && allRadioInput.parentElement) {
    allRadioInput.parentElement.classList.add('selected');
  }

  showScreen('details');
});
