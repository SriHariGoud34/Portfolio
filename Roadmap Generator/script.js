function generateContent() {
    const careerPathSelect = document.getElementById('career-path');
    const selectedCareerPath = careerPathSelect.value;

    const roadmapContent = generateRoadmapContent(selectedCareerPath);
    const htmlCode = generateCode(selectedCareerPath, 'HTML');
    const cssCode = generateCode(selectedCareerPath, 'CSS');
    const jsCode = generateCode(selectedCareerPath, 'JavaScript');

    document.getElementById('roadmap-content').innerHTML =  roadmapContent;
    document.getElementById('html-code').innerText = htmlCode;
    document.getElementById('css-code').innerText = cssCode;
    document.getElementById('js-code').innerText = jsCode;
}

function generateCode(careerPath, language) {
    const codeGenerators = {
        'HTML': generateHTMLCode,
        'CSS': generateCSSCode,
        'JavaScript': generateJSCode
    };

    return codeGenerators[language](careerPath);
}

function generateRoadmapContent(careerPath) {
    switch (careerPath) {
        case 'select-career-path':
            return '<p>NA</p>';
        case 'web-development':
            return '<p>Learn HTML, CSS, and JavaScript basics</p>' +
                '<p>Explore front-end frameworks like React, Vue.js, or Angular</p>' +
                '<p>Understand version control with Git</p>' +
                '<p>Learn about responsive web design and cross-browser compatibility</p>' +
                '<p>Explore back-end development with Node.js, Express, and databases</p>';
        case 'full-stack':
            return '<p>Start with HTML, CSS, and JavaScript basics</p>' +
                '<p>Learn a front-end framework like React, Vue.js, or Angular</p>' +
                '<p>Understand back-end development with Node.js, Express, and databases</p>' +
                '<p>Explore serverless architecture with platforms like AWS Lambda</p>' +
                '<p>Learn about deployment and scaling</p>';
        case 'frontend':
            return '<p>Master HTML, CSS, and JavaScript</p>' +
                '<p>Explore front-end frameworks like React, Vue.js, or Angular</p>' +
                '<p>Understand responsive web design and cross-browser compatibility</p>' +
                '<p>Learn about web performance optimization</p>' +
                '<p>Stay updated on the latest trends and best practices</p>';
        case 'data-analyst':
            return '<p>Develop proficiency in data analysis tools like Python, R, or SQL</p>' +
                '<p>Learn statistical analysis and data visualization techniques</p>' +
                '<p>Explore machine learning basics for predictive analytics</p>' +
                '<p>Understand data cleaning, preprocessing, and exploratory data analysis</p>';
        case 'data-scientist':
            return '<p>Master data analysis and machine learning tools like Python, R, and TensorFlow</p>' +
                '<p>Learn advanced statistical analysis and modeling techniques</p>' +
                '<p>Understand data mining, feature engineering, and model evaluation</p>' +
                '<p>Explore big data technologies like Hadoop and Spark</p>';
        case 'machine-learning':
            return '<p>Understand machine learning algorithms and techniques</p>' +
                '<p>Develop proficiency in programming languages like Python</p>' +
                '<p>Explore machine learning libraries such as TensorFlow or scikit-learn</p>' +
                '<p>Learn about model training, evaluation, and deployment</p>';
        case 'backend-developer':
            return '<p>Master server-side programming languages like Node.js, Python, or Java</p>' +
                '<p>Explore databases and data modeling</p>' +
                '<p>Understand RESTful API design and implementation</p>' +
                '<p>Learn about server deployment and scaling</p>';
        case 'ai':
            return '<p>Explore the fundamentals of artificial intelligence</p>' +
                '<p>Learn about machine learning, natural language processing, and computer vision</p>' +
                '<p>Understand the ethical considerations of AI development</p>' +
                '<p>Explore AI frameworks and libraries like TensorFlow or PyTorch</p>';
        case 'ux-ui-design':
            return '<p>Understand user experience (UX) principles and design thinking</p>' +
                '<p>Explore user interface (UI) design techniques and tools like Figma or Sketch</p>' +
                '<p>Learn about usability testing and user research</p>' +
                '<p>Stay updated on design trends and best practices</p>';
        default:
            return '';
    }
}

function generateHTMLCode(careerPath) {
    switch (careerPath) {
        case 'web-development':
            return '<!DOCTYPE html>\n<html>\n<head>\n    <title>Web Development</title>\n</head>\n<body>\n    <!-- Your content here -->\n</body>\n</html>';
        default:
            return '';
    }
}

function generateCSSCode(careerPath) {
    switch (careerPath) {
        case 'web-development':
            return 'body {\n    /* Your CSS styles here */\n}';
        default:
            return '';
    }
}

function generateJSCode(careerPath) {
    switch (careerPath) {
        case 'web-development':
        return '// Your JavaScript code here';
        default:
            return '';
    }
}

           
