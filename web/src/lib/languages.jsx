const React = require('react')
const { SiPython } = require('react-icons/si');
const { SiRuby } = require('react-icons/si')
const { SiClojure } = require('react-icons/si')
const { SiPhp } = require('react-icons/si')
const { SiJavascript } = require('react-icons/si')
const { SiScala } = require('react-icons/si')
const { SiGo } = require('react-icons/si')
const { SiCplusplus } = require('react-icons/si')
const { SiJava } = require('react-icons/si')
// no visual basic
const { SiCsharp } = require('react-icons/si')
const { BsFillTerminalFill } = require('react-icons/bs')
// no obj c
// no SQL
const { SiPerl } = require('react-icons/si')
const { SiRust } = require('react-icons/si')

const LANGUAGES = {
    PYTHON: { id: 0, prettyName: 'Python', version: '3', codemirrorId: 'text/x-python' },
    RUBY: { id: 1, prettyName: 'Ruby', version: '', codemirrorId: 'text/x-ruby' },
    CLOJURE: { id: 2, prettyName: 'Clojure', version: '', codemirrorId: 'text/x-clojure' },
    PHP: { id: 3, prettyName: 'PHP', version: '', codemirrorId: 'text/x-php' },
    JAVASCRIPT: { id: 4, prettyName: 'JavaScript', version: '', codemirrorId: 'text/javascript' },
    SCALA: { id: 5, prettyName: 'Scala', version: '', codemirrorId: 'text/x-scala' },
    GO: { id: 6, prettyName: 'Go', version: '', codemirrorId: "text/x-go" },
    CCPP: { id: 7, prettyName: 'C++', version: '', codemirrorId: "text/x-c++src" },
    JAVA: { id: 8, prettyName: 'Java', version: '', codemirrorId: "text/x-java" },
    // VBNET: { id: 9, codemirrorId: "text/x-vb" },
    CS: { id: 10, prettyName: 'C#', version: '', codemirrorId: "text/x-csharp" },
    BASH: { id: 11, prettyName: 'Bash', version: '', codemirrorId: "text/x-sh" },
    // OBJECTIVEC: { id: 12, codemirrorId: "text/x-objectivec" },
    // MYSQL: { id: 13, codemirrorId: "text/x-mysql" },
    PERL: { id: 14, prettyName: 'Perl', version: '', codemirrorId: "text/x-perl" },
    RUST: { id: 15, prettyName: 'Rust', version: '', codemirrorId: "text/rust" }
}

const icons = {
    0: <SiPython /> ,
    1: <SiRuby />,
    2: <SiClojure />,
    3: <SiPhp />,
    4: <SiJavascript />,
    5: <SiScala />,
    6: <SiGo />,
    7: <SiCplusplus />,
    8: <SiJava />,
    10: <SiCsharp /> ,
    11: <BsFillTerminalFill />,
    14: <SiPerl />,
    15: <SiRust />,
}

module.exports = {
    LANGUAGES: LANGUAGES,
    icons: icons
}