import { ISelectItem } from './../interfaces/ISelectItem';
const LANGUAGES = [
    {
        "label": "C++",
        "value": "c++"
    },
    {
        "label": "HTML",
        "value": "html"
    },
    {
        "label": "Java",
        "value": "java"
    },
    {
        "label": "JavaScript",
        "value": "javascript"
    },
    {
        "label": "PHP",
        "value": "php"
    },
    {
        "label": "Python",
        "value": "python"
    },
    {
        "label": "Ruby",
        "value": "ruby"
    },
    {
        "label": "Unknown languages",
        "value": "unknown"
    },
    {
        "label": "1C Enterprise",
        "value": "1c-enterprise"
    },
    {
        "label": "4D",
        "value": "4d"
    },
    {
        "label": "ABAP",
        "value": "abap"
    },
    {
        "label": "ABAP CDS",
        "value": "abap-cds"
    },
    {
        "label": "ABNF",
        "value": "abnf"
    },
    {
        "label": "ActionScript",
        "value": "actionscript"
    },
    {
        "label": "Ada",
        "value": "ada"
    },
    {
        "label": "Adobe Font Metrics",
        "value": "adobe-font-metrics"
    },
    {
        "label": "Agda",
        "value": "agda"
    },
    {
        "label": "AGS Script",
        "value": "ags-script"
    },
    {
        "label": "AIDL",
        "value": "aidl"
    },
    {
        "label": "AL",
        "value": "al"
    },
    {
        "label": "Alloy",
        "value": "alloy"
    },
    {
        "label": "Alpine Abuild",
        "value": "alpine-abuild"
    },
    {
        "label": "Altium Designer",
        "value": "altium-designer"
    },
    {
        "label": "AMPL",
        "value": "ampl"
    },
    {
        "label": "AngelScript",
        "value": "angelscript"
    },
    {
        "label": "Ant Build System",
        "value": "ant-build-system"
    },
    {
        "label": "ANTLR",
        "value": "antlr"
    },
    {
        "label": "ApacheConf",
        "value": "apacheconf"
    },
    {
        "label": "Apex",
        "value": "apex"
    },
    {
        "label": "API Blueprint",
        "value": "api-blueprint"
    },
    {
        "label": "APL",
        "value": "apl"
    },
    {
        "label": "Apollo Guidance Computer",
        "value": "apollo-guidance-computer"
    },
    {
        "label": "AppleScript",
        "value": "applescript"
    },
    {
        "label": "Arc",
        "value": "arc"
    },
    {
        "label": "AsciiDoc",
        "value": "asciidoc"
    },
    {
        "label": "ASL",
        "value": "asl"
    },
    {
        "label": "ASN.1",
        "value": "asn.1"
    },
    {
        "label": "Classic ASP",
        "value": "classic-asp"
    },
    {
        "label": "ASP.NET",
        "value": "asp.net"
    },
    {
        "label": "AspectJ",
        "value": "aspectj"
    },
    {
        "label": "Assembly",
        "value": "assembly"
    },
    {
        "label": "Astro",
        "value": "astro"
    },
    {
        "label": "Asymptote",
        "value": "asymptote"
    },
    {
        "label": "ATS",
        "value": "ats"
    },
    {
        "label": "Augeas",
        "value": "augeas"
    },
    {
        "label": "AutoHotkey",
        "value": "autohotkey"
    },
    {
        "label": "AutoIt",
        "value": "autoit"
    },
    {
        "label": "Avro IDL",
        "value": "avro-idl"
    },
    {
        "label": "Awk",
        "value": "awk"
    },
    {
        "label": "Ballerina",
        "value": "ballerina"
    },
    {
        "label": "BASIC",
        "value": "basic"
    },
    {
        "label": "Batchfile",
        "value": "batchfile"
    },
    {
        "label": "Beef",
        "value": "beef"
    },
    {
        "label": "Befunge",
        "value": "befunge"
    },
    {
        "label": "BibTeX",
        "value": "bibtex"
    },
    {
        "label": "Bicep",
        "value": "bicep"
    },
    {
        "label": "Bison",
        "value": "bison"
    },
    {
        "label": "BitBake",
        "value": "bitbake"
    },
    {
        "label": "Blade",
        "value": "blade"
    },
    {
        "label": "BlitzBasic",
        "value": "blitzbasic"
    },
    {
        "label": "BlitzMax",
        "value": "blitzmax"
    },
    {
        "label": "Bluespec",
        "value": "bluespec"
    },
    {
        "label": "Boo",
        "value": "boo"
    },
    {
        "label": "Boogie",
        "value": "boogie"
    },
    {
        "label": "Brainfuck",
        "value": "brainfuck"
    },
    {
        "label": "Brightscript",
        "value": "brightscript"
    },
    {
        "label": "Zeek",
        "value": "zeek"
    },
    {
        "label": "Browserslist",
        "value": "browserslist"
    },
    {
        "label": "C",
        "value": "c"
    },
    {
        "label": "C#",
        "value": "c%23"
    },
    {
        "label": "C-ObjDump",
        "value": "c-objdump"
    },
    {
        "label": "C2hs Haskell",
        "value": "c2hs-haskell"
    },
    {
        "label": "Cabal Config",
        "value": "cabal-config"
    },
    {
        "label": "Cap'n Proto",
        "value": "cap'n-proto"
    },
    {
        "label": "CartoCSS",
        "value": "cartocss"
    },
    {
        "label": "Ceylon",
        "value": "ceylon"
    },
    {
        "label": "Chapel",
        "value": "chapel"
    },
    {
        "label": "Charity",
        "value": "charity"
    },
    {
        "label": "ChucK",
        "value": "chuck"
    },
    {
        "label": "CIL",
        "value": "cil"
    },
    {
        "label": "Cirru",
        "value": "cirru"
    },
    {
        "label": "Clarion",
        "value": "clarion"
    },
    {
        "label": "Clean",
        "value": "clean"
    },
    {
        "label": "Click",
        "value": "click"
    },
    {
        "label": "CLIPS",
        "value": "clips"
    },
    {
        "label": "Clojure",
        "value": "clojure"
    },
    {
        "label": "Closure Templates",
        "value": "closure-templates"
    },
    {
        "label": "Cloud Firestore Security Rules",
        "value": "cloud-firestore-security-rules"
    },
    {
        "label": "CMake",
        "value": "cmake"
    },
    {
        "label": "COBOL",
        "value": "cobol"
    },
    {
        "label": "CODEOWNERS",
        "value": "codeowners"
    },
    {
        "label": "CodeQL",
        "value": "codeql"
    },
    {
        "label": "CoffeeScript",
        "value": "coffeescript"
    },
    {
        "label": "ColdFusion",
        "value": "coldfusion"
    },
    {
        "label": "ColdFusion CFC",
        "value": "coldfusion-cfc"
    },
    {
        "label": "COLLADA",
        "value": "collada"
    },
    {
        "label": "Common Lisp",
        "value": "common-lisp"
    },
    {
        "label": "Common Workflow Language",
        "value": "common-workflow-language"
    },
    {
        "label": "Component Pascal",
        "value": "component-pascal"
    },
    {
        "label": "CoNLL-U",
        "value": "conll-u"
    },
    {
        "label": "Cool",
        "value": "cool"
    },
    {
        "label": "Coq",
        "value": "coq"
    },
    {
        "label": "Cpp-ObjDump",
        "value": "cpp-objdump"
    },
    {
        "label": "Creole",
        "value": "creole"
    },
    {
        "label": "Crystal",
        "value": "crystal"
    },
    {
        "label": "CSON",
        "value": "cson"
    },
    {
        "label": "Csound",
        "value": "csound"
    },
    {
        "label": "Csound Document",
        "value": "csound-document"
    },
    {
        "label": "Csound Score",
        "value": "csound-score"
    },
    {
        "label": "CSS",
        "value": "css"
    },
    {
        "label": "CSV",
        "value": "csv"
    },
    {
        "label": "Cuda",
        "value": "cuda"
    },
    {
        "label": "CUE",
        "value": "cue"
    },
    {
        "label": "cURL Config",
        "value": "curl-config"
    },
    {
        "label": "CWeb",
        "value": "cweb"
    },
    {
        "label": "Cycript",
        "value": "cycript"
    },
    {
        "label": "Cython",
        "value": "cython"
    },
    {
        "label": "D",
        "value": "d"
    },
    {
        "label": "D-ObjDump",
        "value": "d-objdump"
    },
    {
        "label": "Dafny",
        "value": "dafny"
    },
    {
        "label": "Darcs Patch",
        "value": "darcs-patch"
    },
    {
        "label": "Dart",
        "value": "dart"
    },
    {
        "label": "DataWeave",
        "value": "dataweave"
    },
    {
        "label": "desktop",
        "value": "desktop"
    },
    {
        "label": "Dhall",
        "value": "dhall"
    },
    {
        "label": "Diff",
        "value": "diff"
    },
    {
        "label": "DIGITAL Command Language",
        "value": "digital-command-language"
    },
    {
        "label": "dircolors",
        "value": "dircolors"
    },
    {
        "label": "DirectX 3D File",
        "value": "directx-3d-file"
    },
    {
        "label": "DM",
        "value": "dm"
    },
    {
        "label": "DNS Zone",
        "value": "dns-zone"
    },
    {
        "label": "Dockerfile",
        "value": "dockerfile"
    },
    {
        "label": "Dogescript",
        "value": "dogescript"
    },
    {
        "label": "DTrace",
        "value": "dtrace"
    },
    {
        "label": "Dylan",
        "value": "dylan"
    },
    {
        "label": "E",
        "value": "e"
    },
    {
        "label": "E-mail",
        "value": "e-mail"
    },
    {
        "label": "Eagle",
        "value": "eagle"
    },
    {
        "label": "Easybuild",
        "value": "easybuild"
    },
    {
        "label": "EBNF",
        "value": "ebnf"
    },
    {
        "label": "eC",
        "value": "ec"
    },
    {
        "label": "Ecere Projects",
        "value": "ecere-projects"
    },
    {
        "label": "ECL",
        "value": "ecl"
    },
    {
        "label": "ECLiPSe",
        "value": "eclipse"
    },
    {
        "label": "EditorConfig",
        "value": "editorconfig"
    },
    {
        "label": "Edje Data Collection",
        "value": "edje-data-collection"
    },
    {
        "label": "edn",
        "value": "edn"
    },
    {
        "label": "Eiffel",
        "value": "eiffel"
    },
    {
        "label": "EJS",
        "value": "ejs"
    },
    {
        "label": "Elixir",
        "value": "elixir"
    },
    {
        "label": "Elm",
        "value": "elm"
    },
    {
        "label": "Emacs Lisp",
        "value": "emacs-lisp"
    },
    {
        "label": "EmberScript",
        "value": "emberscript"
    },
    {
        "label": "EQ",
        "value": "eq"
    },
    {
        "label": "Erlang",
        "value": "erlang"
    },
    {
        "label": "F#",
        "value": "f%23"
    },
    {
        "label": "F*",
        "value": "f*"
    },
    {
        "label": "Factor",
        "value": "factor"
    },
    {
        "label": "Fancy",
        "value": "fancy"
    },
    {
        "label": "Fantom",
        "value": "fantom"
    },
    {
        "label": "Faust",
        "value": "faust"
    },
    {
        "label": "Fennel",
        "value": "fennel"
    },
    {
        "label": "FIGlet Font",
        "value": "figlet-font"
    },
    {
        "label": "Filebench WML",
        "value": "filebench-wml"
    },
    {
        "label": "Filterscript",
        "value": "filterscript"
    },
    {
        "label": "fish",
        "value": "fish"
    },
    {
        "label": "Fluent",
        "value": "fluent"
    },
    {
        "label": "FLUX",
        "value": "flux"
    },
    {
        "label": "Formatted",
        "value": "formatted"
    },
    {
        "label": "Forth",
        "value": "forth"
    },
    {
        "label": "Fortran",
        "value": "fortran"
    },
    {
        "label": "Fortran Free Form",
        "value": "fortran-free-form"
    },
    {
        "label": "FreeBasic",
        "value": "freebasic"
    },
    {
        "label": "FreeMarker",
        "value": "freemarker"
    },
    {
        "label": "Frege",
        "value": "frege"
    },
    {
        "label": "Futhark",
        "value": "futhark"
    },
    {
        "label": "G-code",
        "value": "g-code"
    },
    {
        "label": "Game Maker Language",
        "value": "game-maker-language"
    },
    {
        "label": "GAML",
        "value": "gaml"
    },
    {
        "label": "GAMS",
        "value": "gams"
    },
    {
        "label": "GAP",
        "value": "gap"
    },
    {
        "label": "GCC Machine Description",
        "value": "gcc-machine-description"
    },
    {
        "label": "GDB",
        "value": "gdb"
    },
    {
        "label": "GDScript",
        "value": "gdscript"
    },
    {
        "label": "GEDCOM",
        "value": "gedcom"
    },
    {
        "label": "Gemfile.lock",
        "value": "gemfile.lock"
    },
    {
        "label": "Genie",
        "value": "genie"
    },
    {
        "label": "Genshi",
        "value": "genshi"
    },
    {
        "label": "Gentoo Ebuild",
        "value": "gentoo-ebuild"
    },
    {
        "label": "Gentoo Eclass",
        "value": "gentoo-eclass"
    },
    {
        "label": "Gerber Image",
        "value": "gerber-image"
    },
    {
        "label": "Gettext Catalog",
        "value": "gettext-catalog"
    },
    {
        "label": "Gherkin",
        "value": "gherkin"
    },
    {
        "label": "Git Attributes",
        "value": "git-attributes"
    },
    {
        "label": "Git Config",
        "value": "git-config"
    },
    {
        "label": "GLSL",
        "value": "glsl"
    },
    {
        "label": "Glyph",
        "value": "glyph"
    },
    {
        "label": "Glyph Bitmap Distribution Format",
        "value": "glyph-bitmap-distribution-format"
    },
    {
        "label": "GN",
        "value": "gn"
    },
    {
        "label": "Gnuplot",
        "value": "gnuplot"
    },
    {
        "label": "Go",
        "value": "go"
    },
    {
        "label": "Golo",
        "value": "golo"
    },
    {
        "label": "Gosu",
        "value": "gosu"
    },
    {
        "label": "Grace",
        "value": "grace"
    },
    {
        "label": "Gradle",
        "value": "gradle"
    },
    {
        "label": "Grammatical Framework",
        "value": "grammatical-framework"
    },
    {
        "label": "Graph Modeling Language",
        "value": "graph-modeling-language"
    },
    {
        "label": "GraphQL",
        "value": "graphql"
    },
    {
        "label": "Graphviz (DOT)",
        "value": "graphviz-(dot)"
    },
    {
        "label": "Groovy",
        "value": "groovy"
    },
    {
        "label": "Groovy Server Pages",
        "value": "groovy-server-pages"
    },
    {
        "label": "Hack",
        "value": "hack"
    },
    {
        "label": "Haml",
        "value": "haml"
    },
    {
        "label": "Handlebars",
        "value": "handlebars"
    },
    {
        "label": "HAProxy",
        "value": "haproxy"
    },
    {
        "label": "Harbour",
        "value": "harbour"
    },
    {
        "label": "Haskell",
        "value": "haskell"
    },
    {
        "label": "Haxe",
        "value": "haxe"
    },
    {
        "label": "HCL",
        "value": "hcl"
    },
    {
        "label": "HiveQL",
        "value": "hiveql"
    },
    {
        "label": "HLSL",
        "value": "hlsl"
    },
    {
        "label": "HolyC",
        "value": "holyc"
    },
    {
        "label": "Jinja",
        "value": "jinja"
    },
    {
        "label": "HTML+ECR",
        "value": "html+ecr"
    },
    {
        "label": "HTML+EEX",
        "value": "html+eex"
    },
    {
        "label": "HTML+ERB",
        "value": "html+erb"
    },
    {
        "label": "HTML+PHP",
        "value": "html+php"
    },
    {
        "label": "HTML+Razor",
        "value": "html+razor"
    },
    {
        "label": "HTTP",
        "value": "http"
    },
    {
        "label": "HXML",
        "value": "hxml"
    },
    {
        "label": "Hy",
        "value": "hy"
    },
    {
        "label": "HyPhy",
        "value": "hyphy"
    },
    {
        "label": "IDL",
        "value": "idl"
    },
    {
        "label": "Idris",
        "value": "idris"
    },
    {
        "label": "Ignore List",
        "value": "ignore-list"
    },
    {
        "label": "IGOR Pro",
        "value": "igor-pro"
    },
    {
        "label": "ImageJ Macro",
        "value": "imagej-macro"
    },
    {
        "label": "Inform 7",
        "value": "inform-7"
    },
    {
        "label": "INI",
        "value": "ini"
    },
    {
        "label": "Inno Setup",
        "value": "inno-setup"
    },
    {
        "label": "Io",
        "value": "io"
    },
    {
        "label": "Ioke",
        "value": "ioke"
    },
    {
        "label": "IRC log",
        "value": "irc-log"
    },
    {
        "label": "Isabelle",
        "value": "isabelle"
    },
    {
        "label": "Isabelle ROOT",
        "value": "isabelle-root"
    },
    {
        "label": "J",
        "value": "j"
    },
    {
        "label": "Jasmin",
        "value": "jasmin"
    },
    {
        "label": "Java Properties",
        "value": "java-properties"
    },
    {
        "label": "Java Server Pages",
        "value": "java-server-pages"
    },
    {
        "label": "JavaScript+ERB",
        "value": "javascript+erb"
    },
    {
        "label": "JFlex",
        "value": "jflex"
    },
    {
        "label": "Jison",
        "value": "jison"
    },
    {
        "label": "Jison Lex",
        "value": "jison-lex"
    },
    {
        "label": "Jolie",
        "value": "jolie"
    },
    {
        "label": "jq",
        "value": "jq"
    },
    {
        "label": "JSON",
        "value": "json"
    },
    {
        "label": "JSON with Comments",
        "value": "json-with-comments"
    },
    {
        "label": "JSON5",
        "value": "json5"
    },
    {
        "label": "JSONiq",
        "value": "jsoniq"
    },
    {
        "label": "JSONLD",
        "value": "jsonld"
    },
    {
        "label": "Jsonnet",
        "value": "jsonnet"
    },
    {
        "label": "Julia",
        "value": "julia"
    },
    {
        "label": "Jupyter Notebook",
        "value": "jupyter-notebook"
    },
    {
        "label": "Kaitai Struct",
        "value": "kaitai-struct"
    },
    {
        "label": "KakouneScript",
        "value": "kakounescript"
    },
    {
        "label": "KiCad Layout",
        "value": "kicad-layout"
    },
    {
        "label": "KiCad Legacy Layout",
        "value": "kicad-legacy-layout"
    },
    {
        "label": "KiCad Schematic",
        "value": "kicad-schematic"
    },
    {
        "label": "Kit",
        "value": "kit"
    },
    {
        "label": "Kotlin",
        "value": "kotlin"
    },
    {
        "label": "KRL",
        "value": "krl"
    },
    {
        "label": "Kusto",
        "value": "kusto"
    },
    {
        "label": "LabVIEW",
        "value": "labview"
    },
    {
        "label": "Lark",
        "value": "lark"
    },
    {
        "label": "Lasso",
        "value": "lasso"
    },
    {
        "label": "Latte",
        "value": "latte"
    },
    {
        "label": "Lean",
        "value": "lean"
    },
    {
        "label": "Less",
        "value": "less"
    },
    {
        "label": "Lex",
        "value": "lex"
    },
    {
        "label": "LFE",
        "value": "lfe"
    },
    {
        "label": "LilyPond",
        "value": "lilypond"
    },
    {
        "label": "Limbo",
        "value": "limbo"
    },
    {
        "label": "Linker Script",
        "value": "linker-script"
    },
    {
        "label": "Linux Kernel Module",
        "value": "linux-kernel-module"
    },
    {
        "label": "Liquid",
        "value": "liquid"
    },
    {
        "label": "Literate Agda",
        "value": "literate-agda"
    },
    {
        "label": "Literate CoffeeScript",
        "value": "literate-coffeescript"
    },
    {
        "label": "Literate Haskell",
        "value": "literate-haskell"
    },
    {
        "label": "LiveScript",
        "value": "livescript"
    },
    {
        "label": "LLVM",
        "value": "llvm"
    },
    {
        "label": "Logos",
        "value": "logos"
    },
    {
        "label": "Logtalk",
        "value": "logtalk"
    },
    {
        "label": "LOLCODE",
        "value": "lolcode"
    },
    {
        "label": "LookML",
        "value": "lookml"
    },
    {
        "label": "LoomScript",
        "value": "loomscript"
    },
    {
        "label": "LSL",
        "value": "lsl"
    },
    {
        "label": "LTspice Symbol",
        "value": "ltspice-symbol"
    },
    {
        "label": "Lua",
        "value": "lua"
    },
    {
        "label": "M",
        "value": "m"
    },
    {
        "label": "M4",
        "value": "m4"
    },
    {
        "label": "M4Sugar",
        "value": "m4sugar"
    },
    {
        "label": "Macaulay2",
        "value": "macaulay2"
    },
    {
        "label": "Makefile",
        "value": "makefile"
    },
    {
        "label": "Mako",
        "value": "mako"
    },
    {
        "label": "Markdown",
        "value": "markdown"
    },
    {
        "label": "Marko",
        "value": "marko"
    },
    {
        "label": "Mask",
        "value": "mask"
    },
    {
        "label": "Mathematica",
        "value": "mathematica"
    },
    {
        "label": "MATLAB",
        "value": "matlab"
    },
    {
        "label": "Maven POM",
        "value": "maven-pom"
    },
    {
        "label": "Max",
        "value": "max"
    },
    {
        "label": "MAXScript",
        "value": "maxscript"
    },
    {
        "label": "mcfunction",
        "value": "mcfunction"
    },
    {
        "label": "Wikitext",
        "value": "wikitext"
    },
    {
        "label": "Mercury",
        "value": "mercury"
    },
    {
        "label": "Meson",
        "value": "meson"
    },
    {
        "label": "Metal",
        "value": "metal"
    },
    {
        "label": "Microsoft Developer Studio Project",
        "value": "microsoft-developer-studio-project"
    },
    {
        "label": "Microsoft Visual Studio Solution",
        "value": "microsoft-visual-studio-solution"
    },
    {
        "label": "MiniD",
        "value": "minid"
    },
    {
        "label": "Mirah",
        "value": "mirah"
    },
    {
        "label": "mIRC Script",
        "value": "mirc-script"
    },
    {
        "label": "MLIR",
        "value": "mlir"
    },
    {
        "label": "Modelica",
        "value": "modelica"
    },
    {
        "label": "Modula-2",
        "value": "modula-2"
    },
    {
        "label": "Modula-3",
        "value": "modula-3"
    },
    {
        "label": "Module Management System",
        "value": "module-management-system"
    },
    {
        "label": "Monkey",
        "value": "monkey"
    },
    {
        "label": "Moocode",
        "value": "moocode"
    },
    {
        "label": "MoonScript",
        "value": "moonscript"
    },
    {
        "label": "Motorola 68K Assembly",
        "value": "motorola-68k-assembly"
    },
    {
        "label": "MQL4",
        "value": "mql4"
    },
    {
        "label": "MQL5",
        "value": "mql5"
    },
    {
        "label": "MTML",
        "value": "mtml"
    },
    {
        "label": "MUF",
        "value": "muf"
    },
    {
        "label": "mupad",
        "value": "mupad"
    },
    {
        "label": "Muse",
        "value": "muse"
    },
    {
        "label": "Mustache",
        "value": "mustache"
    },
    {
        "label": "Myghty",
        "value": "myghty"
    },
    {
        "label": "nanorc",
        "value": "nanorc"
    },
    {
        "label": "NASL",
        "value": "nasl"
    },
    {
        "label": "NCL",
        "value": "ncl"
    },
    {
        "label": "Nearley",
        "value": "nearley"
    },
    {
        "label": "Nemerle",
        "value": "nemerle"
    },
    {
        "label": "NEON",
        "value": "neon"
    },
    {
        "label": "nesC",
        "value": "nesc"
    },
    {
        "label": "NetLinx",
        "value": "netlinx"
    },
    {
        "label": "NetLinx+ERB",
        "value": "netlinx+erb"
    },
    {
        "label": "NetLogo",
        "value": "netlogo"
    },
    {
        "label": "NewLisp",
        "value": "newlisp"
    },
    {
        "label": "Nextflow",
        "value": "nextflow"
    },
    {
        "label": "Nginx",
        "value": "nginx"
    },
    {
        "label": "Nim",
        "value": "nim"
    },
    {
        "label": "Ninja",
        "value": "ninja"
    },
    {
        "label": "Nit",
        "value": "nit"
    },
    {
        "label": "Nix",
        "value": "nix"
    },
    {
        "label": "NL",
        "value": "nl"
    },
    {
        "label": "NPM Config",
        "value": "npm-config"
    },
    {
        "label": "NSIS",
        "value": "nsis"
    },
    {
        "label": "Nu",
        "value": "nu"
    },
    {
        "label": "NumPy",
        "value": "numpy"
    },
    {
        "label": "Nunjucks",
        "value": "nunjucks"
    },
    {
        "label": "NWScript",
        "value": "nwscript"
    },
    {
        "label": "ObjDump",
        "value": "objdump"
    },
    {
        "label": "Object Data Instance Notation",
        "value": "object-data-instance-notation"
    },
    {
        "label": "Objective-C",
        "value": "objective-c"
    },
    {
        "label": "Objective-C++",
        "value": "objective-c++"
    },
    {
        "label": "Objective-J",
        "value": "objective-j"
    },
    {
        "label": "ObjectScript",
        "value": "objectscript"
    },
    {
        "label": "OCaml",
        "value": "ocaml"
    },
    {
        "label": "Odin",
        "value": "odin"
    },
    {
        "label": "Omgrofl",
        "value": "omgrofl"
    },
    {
        "label": "ooc",
        "value": "ooc"
    },
    {
        "label": "Opa",
        "value": "opa"
    },
    {
        "label": "Opal",
        "value": "opal"
    },
    {
        "label": "Open Policy Agent",
        "value": "open-policy-agent"
    },
    {
        "label": "OpenCL",
        "value": "opencl"
    },
    {
        "label": "OpenEdge ABL",
        "value": "openedge-abl"
    },
    {
        "label": "OpenQASM",
        "value": "openqasm"
    },
    {
        "label": "OpenRC runscript",
        "value": "openrc-runscript"
    },
    {
        "label": "OpenSCAD",
        "value": "openscad"
    },
    {
        "label": "OpenStep Property List",
        "value": "openstep-property-list"
    },
    {
        "label": "OpenType Feature File",
        "value": "opentype-feature-file"
    },
    {
        "label": "Org",
        "value": "org"
    },
    {
        "label": "Ox",
        "value": "ox"
    },
    {
        "label": "Oxygene",
        "value": "oxygene"
    },
    {
        "label": "Oz",
        "value": "oz"
    },
    {
        "label": "P4",
        "value": "p4"
    },
    {
        "label": "Pan",
        "value": "pan"
    },
    {
        "label": "Papyrus",
        "value": "papyrus"
    },
    {
        "label": "Parrot",
        "value": "parrot"
    },
    {
        "label": "Parrot Assembly",
        "value": "parrot-assembly"
    },
    {
        "label": "Parrot Internal Representation",
        "value": "parrot-internal-representation"
    },
    {
        "label": "Pascal",
        "value": "pascal"
    },
    {
        "label": "Pawn",
        "value": "pawn"
    },
    {
        "label": "PEG.js",
        "value": "peg.js"
    },
    {
        "label": "Pep8",
        "value": "pep8"
    },
    {
        "label": "Perl",
        "value": "perl"
    },
    {
        "label": "Pic",
        "value": "pic"
    },
    {
        "label": "Pickle",
        "value": "pickle"
    },
    {
        "label": "PicoLisp",
        "value": "picolisp"
    },
    {
        "label": "PigLatin",
        "value": "piglatin"
    },
    {
        "label": "Pike",
        "value": "pike"
    },
    {
        "label": "PlantUML",
        "value": "plantuml"
    },
    {
        "label": "PLpgSQL",
        "value": "plpgsql"
    },
    {
        "label": "PLSQL",
        "value": "plsql"
    },
    {
        "label": "Pod",
        "value": "pod"
    },
    {
        "label": "Pod 6",
        "value": "pod-6"
    },
    {
        "label": "PogoScript",
        "value": "pogoscript"
    },
    {
        "label": "Pony",
        "value": "pony"
    },
    {
        "label": "PostCSS",
        "value": "postcss"
    },
    {
        "label": "PostScript",
        "value": "postscript"
    },
    {
        "label": "POV-Ray SDL",
        "value": "pov-ray-sdl"
    },
    {
        "label": "PowerBuilder",
        "value": "powerbuilder"
    },
    {
        "label": "PowerShell",
        "value": "powershell"
    },
    {
        "label": "Prisma",
        "value": "prisma"
    },
    {
        "label": "Processing",
        "value": "processing"
    },
    {
        "label": "Proguard",
        "value": "proguard"
    },
    {
        "label": "Prolog",
        "value": "prolog"
    },
    {
        "label": "Propeller Spin",
        "value": "propeller-spin"
    },
    {
        "label": "Protocol Buffer",
        "value": "protocol-buffer"
    },
    {
        "label": "Public Key",
        "value": "public-key"
    },
    {
        "label": "Pug",
        "value": "pug"
    },
    {
        "label": "Puppet",
        "value": "puppet"
    },
    {
        "label": "Pure Data",
        "value": "pure-data"
    },
    {
        "label": "PureBasic",
        "value": "purebasic"
    },
    {
        "label": "PureScript",
        "value": "purescript"
    },
    {
        "label": "Python console",
        "value": "python-console"
    },
    {
        "label": "Python traceback",
        "value": "python-traceback"
    },
    {
        "label": "q",
        "value": "q"
    },
    {
        "label": "Q#",
        "value": "q%23"
    },
    {
        "label": "QMake",
        "value": "qmake"
    },
    {
        "label": "QML",
        "value": "qml"
    },
    {
        "label": "Qt Script",
        "value": "qt-script"
    },
    {
        "label": "Quake",
        "value": "quake"
    },
    {
        "label": "R",
        "value": "r"
    },
    {
        "label": "Racket",
        "value": "racket"
    },
    {
        "label": "Ragel",
        "value": "ragel"
    },
    {
        "label": "Raku",
        "value": "raku"
    },
    {
        "label": "RAML",
        "value": "raml"
    },
    {
        "label": "Rascal",
        "value": "rascal"
    },
    {
        "label": "Raw token data",
        "value": "raw-token-data"
    },
    {
        "label": "RDoc",
        "value": "rdoc"
    },
    {
        "label": "Readline Config",
        "value": "readline-config"
    },
    {
        "label": "REALbasic",
        "value": "realbasic"
    },
    {
        "label": "Reason",
        "value": "reason"
    },
    {
        "label": "Rebol",
        "value": "rebol"
    },
    {
        "label": "Red",
        "value": "red"
    },
    {
        "label": "Redcode",
        "value": "redcode"
    },
    {
        "label": "Regular Expression",
        "value": "regular-expression"
    },
    {
        "label": "Ren'Py",
        "value": "ren'py"
    },
    {
        "label": "RenderScript",
        "value": "renderscript"
    },
    {
        "label": "ReScript",
        "value": "rescript"
    },
    {
        "label": "reStructuredText",
        "value": "restructuredtext"
    },
    {
        "label": "REXX",
        "value": "rexx"
    },
    {
        "label": "Rich Text Format",
        "value": "rich-text-format"
    },
    {
        "label": "Ring",
        "value": "ring"
    },
    {
        "label": "Riot",
        "value": "riot"
    },
    {
        "label": "RMarkdown",
        "value": "rmarkdown"
    },
    {
        "label": "RobotFramework",
        "value": "robotframework"
    },
    {
        "label": "robots.txt",
        "value": "robots.txt"
    },
    {
        "label": "Roff",
        "value": "roff"
    },
    {
        "label": "Roff Manpage",
        "value": "roff-manpage"
    },
    {
        "label": "Rouge",
        "value": "rouge"
    },
    {
        "label": "RPC",
        "value": "rpc"
    },
    {
        "label": "RPM Spec",
        "value": "rpm-spec"
    },
    {
        "label": "RUNOFF",
        "value": "runoff"
    },
    {
        "label": "Rust",
        "value": "rust"
    },
    {
        "label": "Sage",
        "value": "sage"
    },
    {
        "label": "SaltStack",
        "value": "saltstack"
    },
    {
        "label": "SAS",
        "value": "sas"
    },
    {
        "label": "Sass",
        "value": "sass"
    },
    {
        "label": "Scala",
        "value": "scala"
    },
    {
        "label": "Scaml",
        "value": "scaml"
    },
    {
        "label": "Scheme",
        "value": "scheme"
    },
    {
        "label": "Scilab",
        "value": "scilab"
    },
    {
        "label": "SCSS",
        "value": "scss"
    },
    {
        "label": "sed",
        "value": "sed"
    },
    {
        "label": "Self",
        "value": "self"
    },
    {
        "label": "ShaderLab",
        "value": "shaderlab"
    },
    {
        "label": "Shell",
        "value": "shell"
    },
    {
        "label": "ShellSession",
        "value": "shellsession"
    },
    {
        "label": "Shen",
        "value": "shen"
    },
    {
        "label": "Sieve",
        "value": "sieve"
    },
    {
        "label": "Singularity",
        "value": "singularity"
    },
    {
        "label": "Slash",
        "value": "slash"
    },
    {
        "label": "Slice",
        "value": "slice"
    },
    {
        "label": "Slim",
        "value": "slim"
    },
    {
        "label": "Smali",
        "value": "smali"
    },
    {
        "label": "Smalltalk",
        "value": "smalltalk"
    },
    {
        "label": "Smarty",
        "value": "smarty"
    },
    {
        "label": "SmPL",
        "value": "smpl"
    },
    {
        "label": "SMT",
        "value": "smt"
    },
    {
        "label": "Solidity",
        "value": "solidity"
    },
    {
        "label": "SourcePawn",
        "value": "sourcepawn"
    },
    {
        "label": "SPARQL",
        "value": "sparql"
    },
    {
        "label": "Spline Font Database",
        "value": "spline-font-database"
    },
    {
        "label": "SQF",
        "value": "sqf"
    },
    {
        "label": "SQL",
        "value": "sql"
    },
    {
        "label": "SQLPL",
        "value": "sqlpl"
    },
    {
        "label": "Squirrel",
        "value": "squirrel"
    },
    {
        "label": "SRecode Template",
        "value": "srecode-template"
    },
    {
        "label": "SSH Config",
        "value": "ssh-config"
    },
    {
        "label": "Stan",
        "value": "stan"
    },
    {
        "label": "Standard ML",
        "value": "standard-ml"
    },
    {
        "label": "Starlark",
        "value": "starlark"
    },
    {
        "label": "Stata",
        "value": "stata"
    },
    {
        "label": "STON",
        "value": "ston"
    },
    {
        "label": "StringTemplate",
        "value": "stringtemplate"
    },
    {
        "label": "Stylus",
        "value": "stylus"
    },
    {
        "label": "SubRip Text",
        "value": "subrip-text"
    },
    {
        "label": "SugarSS",
        "value": "sugarss"
    },
    {
        "label": "SuperCollider",
        "value": "supercollider"
    },
    {
        "label": "Svelte",
        "value": "svelte"
    },
    {
        "label": "SVG",
        "value": "svg"
    },
    {
        "label": "Swift",
        "value": "swift"
    },
    {
        "label": "SWIG",
        "value": "swig"
    },
    {
        "label": "SystemVerilog",
        "value": "systemverilog"
    },
    {
        "label": "Tcl",
        "value": "tcl"
    },
    {
        "label": "Tcsh",
        "value": "tcsh"
    },
    {
        "label": "Tea",
        "value": "tea"
    },
    {
        "label": "Terra",
        "value": "terra"
    },
    {
        "label": "TeX",
        "value": "tex"
    },
    {
        "label": "Texinfo",
        "value": "texinfo"
    },
    {
        "label": "Text",
        "value": "text"
    },
    {
        "label": "Textile",
        "value": "textile"
    },
    {
        "label": "Thrift",
        "value": "thrift"
    },
    {
        "label": "TI Program",
        "value": "ti-program"
    },
    {
        "label": "TLA",
        "value": "tla"
    },
    {
        "label": "TOML",
        "value": "toml"
    },
    {
        "label": "TSQL",
        "value": "tsql"
    },
    {
        "label": "TSV",
        "value": "tsv"
    },
    {
        "label": "TSX",
        "value": "tsx"
    },
    {
        "label": "Turing",
        "value": "turing"
    },
    {
        "label": "Turtle",
        "value": "turtle"
    },
    {
        "label": "Twig",
        "value": "twig"
    },
    {
        "label": "TXL",
        "value": "txl"
    },
    {
        "label": "Type Language",
        "value": "type-language"
    },
    {
        "label": "TypeScript",
        "value": "typescript"
    },
    {
        "label": "Unified Parallel C",
        "value": "unified-parallel-c"
    },
    {
        "label": "Unity3D Asset",
        "value": "unity3d-asset"
    },
    {
        "label": "Unix Assembly",
        "value": "unix-assembly"
    },
    {
        "label": "Uno",
        "value": "uno"
    },
    {
        "label": "UnrealScript",
        "value": "unrealscript"
    },
    {
        "label": "UrWeb",
        "value": "urweb"
    },
    {
        "label": "V",
        "value": "v"
    },
    {
        "label": "Vala",
        "value": "vala"
    },
    {
        "label": "Valve Data Format",
        "value": "valve-data-format"
    },
    {
        "label": "VBA",
        "value": "vba"
    },
    {
        "label": "VBScript",
        "value": "vbscript"
    },
    {
        "label": "VCL",
        "value": "vcl"
    },
    {
        "label": "Verilog",
        "value": "verilog"
    },
    {
        "label": "VHDL",
        "value": "vhdl"
    },
    {
        "label": "Vim Help File",
        "value": "vim-help-file"
    },
    {
        "label": "Vim script",
        "value": "vim-script"
    },
    {
        "label": "Vim Snippet",
        "value": "vim-snippet"
    },
    {
        "label": "Visual Basic .NET",
        "value": "visual-basic-.net"
    },
    {
        "label": "Volt",
        "value": "volt"
    },
    {
        "label": "Vue",
        "value": "vue"
    },
    {
        "label": "Wavefront Material",
        "value": "wavefront-material"
    },
    {
        "label": "Wavefront Object",
        "value": "wavefront-object"
    },
    {
        "label": "wdl",
        "value": "wdl"
    },
    {
        "label": "Web Ontology Language",
        "value": "web-ontology-language"
    },
    {
        "label": "WebAssembly",
        "value": "webassembly"
    },
    {
        "label": "WebIDL",
        "value": "webidl"
    },
    {
        "label": "WebVTT",
        "value": "webvtt"
    },
    {
        "label": "Wget Config",
        "value": "wget-config"
    },
    {
        "label": "Windows Registry Entries",
        "value": "windows-registry-entries"
    },
    {
        "label": "wisp",
        "value": "wisp"
    },
    {
        "label": "Wollok",
        "value": "wollok"
    },
    {
        "label": "World of Warcraft Addon Data",
        "value": "world-of-warcraft-addon-data"
    },
    {
        "label": "X BitMap",
        "value": "x-bitmap"
    },
    {
        "label": "X Font Directory Index",
        "value": "x-font-directory-index"
    },
    {
        "label": "X PixMap",
        "value": "x-pixmap"
    },
    {
        "label": "X10",
        "value": "x10"
    },
    {
        "label": "xBase",
        "value": "xbase"
    },
    {
        "label": "XC",
        "value": "xc"
    },
    {
        "label": "XCompose",
        "value": "xcompose"
    },
    {
        "label": "XML",
        "value": "xml"
    },
    {
        "label": "XML Property List",
        "value": "xml-property-list"
    },
    {
        "label": "Xojo",
        "value": "xojo"
    },
    {
        "label": "Xonsh",
        "value": "xonsh"
    },
    {
        "label": "XPages",
        "value": "xpages"
    },
    {
        "label": "XProc",
        "value": "xproc"
    },
    {
        "label": "XQuery",
        "value": "xquery"
    },
    {
        "label": "XS",
        "value": "xs"
    },
    {
        "label": "XSLT",
        "value": "xslt"
    },
    {
        "label": "Xtend",
        "value": "xtend"
    },
    {
        "label": "Yacc",
        "value": "yacc"
    },
    {
        "label": "YAML",
        "value": "yaml"
    },
    {
        "label": "YANG",
        "value": "yang"
    },
    {
        "label": "YARA",
        "value": "yara"
    },
    {
        "label": "YASnippet",
        "value": "yasnippet"
    },
    {
        "label": "ZAP",
        "value": "zap"
    },
    {
        "label": "ZenScript",
        "value": "zenscript"
    },
    {
        "label": "Zephir",
        "value": "zephir"
    },
    {
        "label": "Zig",
        "value": "zig"
    },
    {
        "label": "ZIL",
        "value": "zil"
    },
    {
        "label": "Zimpl",
        "value": "zimpl"
    }
]

const SPOKENLANGUAGES: ISelectItem[] = [
    {
        "label": "Abkhazian",
        "value": "ab"
    },
    {
        "label": "Afar",
        "value": "aa"
    },
    {
        "label": "Afrikaans",
        "value": "af"
    },
    {
        "label": "Akan",
        "value": "ak"
    },
    {
        "label": "Albanian",
        "value": "sq"
    },
    {
        "label": "Amharic",
        "value": "am"
    },
    {
        "label": "Arabic",
        "value": "ar"
    },
    {
        "label": "Aragonese",
        "value": "an"
    },
    {
        "label": "Armenian",
        "value": "hy"
    },
    {
        "label": "Assamese",
        "value": "as"
    },
    {
        "label": "Avaric",
        "value": "av"
    },
    {
        "label": "Avestan",
        "value": "ae"
    },
    {
        "label": "Aymara",
        "value": "ay"
    },
    {
        "label": "Azerbaijani",
        "value": "az"
    },
    {
        "label": "Bambara",
        "value": "bm"
    },
    {
        "label": "Bashkir",
        "value": "ba"
    },
    {
        "label": "Basque",
        "value": "eu"
    },
    {
        "label": "Belarusian",
        "value": "be"
    },
    {
        "label": "Bengali",
        "value": "bn"
    },
    {
        "label": "Bihari languages",
        "value": "bh"
    },
    {
        "label": "Bislama",
        "value": "bi"
    },
    {
        "label": "Bosnian",
        "value": "bs"
    },
    {
        "label": "Breton",
        "value": "br"
    },
    {
        "label": "Bulgarian",
        "value": "bg"
    },
    {
        "label": "Burmese",
        "value": "my"
    },
    {
        "label": "Catalan, Valencian",
        "value": "ca"
    },
    {
        "label": "Chamorro",
        "value": "ch"
    },
    {
        "label": "Chechen",
        "value": "ce"
    },
    {
        "label": "Chichewa, Chewa, Nyanja",
        "value": "ny"
    },
    {
        "label": "Chinese",
        "value": "zh"
    },
    {
        "label": "Chuvash",
        "value": "cv"
    },
    {
        "label": "Cornish",
        "value": "kw"
    },
    {
        "label": "Corsican",
        "value": "co"
    },
    {
        "label": "Cree",
        "value": "cr"
    },
    {
        "label": "Croatian",
        "value": "hr"
    },
    {
        "label": "Czech",
        "value": "cs"
    },
    {
        "label": "Danish",
        "value": "da"
    },
    {
        "label": "Divehi, Dhivehi, Maldivian",
        "value": "dv"
    },
    {
        "label": "Dutch, Flemish",
        "value": "nl"
    },
    {
        "label": "Dzongkha",
        "value": "dz"
    },
    {
        "label": "English",
        "value": "en"
    },
    {
        "label": "Esperanto",
        "value": "eo"
    },
    {
        "label": "Estonian",
        "value": "et"
    },
    {
        "label": "Ewe",
        "value": "ee"
    },
    {
        "label": "Faroese",
        "value": "fo"
    },
    {
        "label": "Fijian",
        "value": "fj"
    },
    {
        "label": "Finnish",
        "value": "fi"
    },
    {
        "label": "French",
        "value": "fr"
    },
    {
        "label": "Fulah",
        "value": "ff"
    },
    {
        "label": "Galician",
        "value": "gl"
    },
    {
        "label": "Georgian",
        "value": "ka"
    },
    {
        "label": "German",
        "value": "de"
    },
    {
        "label": "Greek, Modern",
        "value": "el"
    },
    {
        "label": "Guarani",
        "value": "gn"
    },
    {
        "label": "Gujarati",
        "value": "gu"
    },
    {
        "label": "Haitian, Haitian Creole",
        "value": "ht"
    },
    {
        "label": "Hausa",
        "value": "ha"
    },
    {
        "label": "Hebrew",
        "value": "he"
    },
    {
        "label": "Herero",
        "value": "hz"
    },
    {
        "label": "Hindi",
        "value": "hi"
    },
    {
        "label": "Hiri Motu",
        "value": "ho"
    },
    {
        "label": "Hungarian",
        "value": "hu"
    },
    {
        "label": "Interlingua (International Auxil...",
        "value": "ia"
    },
    {
        "label": "Indonesian",
        "value": "id"
    },
    {
        "label": "Interlingue, Occidental",
        "value": "ie"
    },
    {
        "label": "Irish",
        "value": "ga"
    },
    {
        "label": "Igbo",
        "value": "ig"
    },
    {
        "label": "Inupiaq",
        "value": "ik"
    },
    {
        "label": "Ido",
        "value": "io"
    },
    {
        "label": "Icelandic",
        "value": "is"
    },
    {
        "label": "Italian",
        "value": "it"
    },
    {
        "label": "Inuktitut",
        "value": "iu"
    },
    {
        "label": "Japanese",
        "value": "ja"
    },
    {
        "label": "Javanese",
        "value": "jv"
    },
    {
        "label": "Kalaallisut, Greenlandic",
        "value": "kl"
    },
    {
        "label": "Kannada",
        "value": "kn"
    },
    {
        "label": "Kanuri",
        "value": "kr"
    },
    {
        "label": "Kashmiri",
        "value": "ks"
    },
    {
        "label": "Kazakh",
        "value": "kk"
    },
    {
        "label": "Central Khmer",
        "value": "km"
    },
    {
        "label": "Kikuyu, Gikuyu",
        "value": "ki"
    },
    {
        "label": "Kinyarwanda",
        "value": "rw"
    },
    {
        "label": "Kirghiz, Kyrgyz",
        "value": "ky"
    },
    {
        "label": "Komi",
        "value": "kv"
    },
    {
        "label": "Kongo",
        "value": "kg"
    },
    {
        "label": "Korean",
        "value": "ko"
    },
    {
        "label": "Kurdish",
        "value": "ku"
    },
    {
        "label": "Kuanyama, Kwanyama",
        "value": "kj"
    },
    {
        "label": "Latin",
        "value": "la"
    },
    {
        "label": "Luxembourgish, Letzeburgesch",
        "value": "lb"
    },
    {
        "label": "Ganda",
        "value": "lg"
    },
    {
        "label": "Limburgan, Limburger, Limburgish",
        "value": "li"
    },
    {
        "label": "Lingala",
        "value": "ln"
    },
    {
        "label": "Lao",
        "value": "lo"
    },
    {
        "label": "Lithuanian",
        "value": "lt"
    },
    {
        "label": "Luba-Katanga",
        "value": "lu"
    },
    {
        "label": "Latvian",
        "value": "lv"
    },
    {
        "label": "Manx",
        "value": "gv"
    },
    {
        "label": "Macedonian",
        "value": "mk"
    },
    {
        "label": "Malagasy",
        "value": "mg"
    },
    {
        "label": "Malay",
        "value": "ms"
    },
    {
        "label": "Malayalam",
        "value": "ml"
    },
    {
        "label": "Maltese",
        "value": "mt"
    },
    {
        "label": "Maori",
        "value": "mi"
    },
    {
        "label": "Marathi",
        "value": "mr"
    },
    {
        "label": "Marshallese",
        "value": "mh"
    },
    {
        "label": "Mongolian",
        "value": "mn"
    },
    {
        "label": "Nauru",
        "value": "na"
    },
    {
        "label": "Navajo, Navaho",
        "value": "nv"
    },
    {
        "label": "North Ndebele",
        "value": "nd"
    },
    {
        "label": "Nepali",
        "value": "ne"
    },
    {
        "label": "Ndonga",
        "value": "ng"
    },
    {
        "label": "Norwegian Bokmål",
        "value": "nb"
    },
    {
        "label": "Norwegian Nynorsk",
        "value": "nn"
    },
    {
        "label": "Norwegian",
        "value": "no"
    },
    {
        "label": "Sichuan Yi, Nuosu",
        "value": "ii"
    },
    {
        "label": "South Ndebele",
        "value": "nr"
    },
    {
        "label": "Occitan",
        "value": "oc"
    },
    {
        "label": "Ojibwa",
        "value": "oj"
    },
    {
        "label": "Church Slavic, Old Slavonic, Chu...",
        "value": "cu"
    },
    {
        "label": "Oromo",
        "value": "om"
    },
    {
        "label": "Oriya",
        "value": "or"
    },
    {
        "label": "Ossetian, Ossetic",
        "value": "os"
    },
    {
        "label": "Punjabi, Panjabi",
        "value": "pa"
    },
    {
        "label": "Pali",
        "value": "pi"
    },
    {
        "label": "Persian",
        "value": "fa"
    },
    {
        "label": "Polish",
        "value": "pl"
    },
    {
        "label": "Pashto, Pushto",
        "value": "ps"
    },
    {
        "label": "Portuguese",
        "value": "pt"
    },
    {
        "label": "Quechua",
        "value": "qu"
    },
    {
        "label": "Romansh",
        "value": "rm"
    },
    {
        "label": "Rundi",
        "value": "rn"
    },
    {
        "label": "Romanian, Moldavian, Moldovan",
        "value": "ro"
    },
    {
        "label": "Russian",
        "value": "ru"
    },
    {
        "label": "Sanskrit",
        "value": "sa"
    },
    {
        "label": "Sardinian",
        "value": "sc"
    },
    {
        "label": "Sindhi",
        "value": "sd"
    },
    {
        "label": "Northern Sami",
        "value": "se"
    },
    {
        "label": "Samoan",
        "value": "sm"
    },
    {
        "label": "Sango",
        "value": "sg"
    },
    {
        "label": "Serbian",
        "value": "sr"
    },
    {
        "label": "Gaelic, Scottish Gaelic",
        "value": "gd"
    },
    {
        "label": "Shona",
        "value": "sn"
    },
    {
        "label": "Sinhala, Sinhalese",
        "value": "si"
    },
    {
        "label": "Slovak",
        "value": "sk"
    },
    {
        "label": "Slovenian",
        "value": "sl"
    },
    {
        "label": "Somali",
        "value": "so"
    },
    {
        "label": "Southern Sotho",
        "value": "st"
    },
    {
        "label": "Spanish, Castilian",
        "value": "es"
    },
    {
        "label": "Sundanese",
        "value": "su"
    },
    {
        "label": "Swahili",
        "value": "sw"
    },
    {
        "label": "Swati",
        "value": "ss"
    },
    {
        "label": "Swedish",
        "value": "sv"
    },
    {
        "label": "Tamil",
        "value": "ta"
    },
    {
        "label": "Telugu",
        "value": "te"
    },
    {
        "label": "Tajik",
        "value": "tg"
    },
    {
        "label": "Thai",
        "value": "th"
    },
    {
        "label": "Tigrinya",
        "value": "ti"
    },
    {
        "label": "Tibetan",
        "value": "bo"
    },
    {
        "label": "Turkmen",
        "value": "tk"
    },
    {
        "label": "Tagalog",
        "value": "tl"
    },
    {
        "label": "Tswana",
        "value": "tn"
    },
    {
        "label": "Tonga (Tonga Islands)",
        "value": "to"
    },
    {
        "label": "Turkish",
        "value": "tr"
    },
    {
        "label": "Tsonga",
        "value": "ts"
    },
    {
        "label": "Tatar",
        "value": "tt"
    },
    {
        "label": "Twi",
        "value": "tw"
    },
    {
        "label": "Tahitian",
        "value": "ty"
    },
    {
        "label": "Uighur, Uyghur",
        "value": "ug"
    },
    {
        "label": "Ukrainian",
        "value": "uk"
    },
    {
        "label": "Urdu",
        "value": "ur"
    },
    {
        "label": "Uzbek",
        "value": "uz"
    },
    {
        "label": "Venda",
        "value": "ve"
    },
    {
        "label": "Vietnamese",
        "value": "vi"
    },
    {
        "label": "Volapük",
        "value": "vo"
    },
    {
        "label": "Walloon",
        "value": "wa"
    },
    {
        "label": "Welsh",
        "value": "cy"
    },
    {
        "label": "Wolof",
        "value": "wo"
    },
    {
        "label": "Western Frisian",
        "value": "fy"
    },
    {
        "label": "Xhosa",
        "value": "xh"
    },
    {
        "label": "Yiddish",
        "value": "yi"
    },
    {
        "label": "Yoruba",
        "value": "yo"
    },
    {
        "label": "Zhuang, Chuang",
        "value": "za"
    },
    {
        "label": "Zulu",
        "value": "zu"
    }
]

const TIMES = [
    { label: 'Today', value: 'daily' },
    { label: 'This week', value: 'weekly' },
    { label: 'This month', value: 'monthly' },
]

const DEVELOPERS_TEXT = 'These are the developers building the hot tools today.';
const PROJECTS_TEXT = 'See what the GitHub community is most excited about today.'

export {
    LANGUAGES,
    SPOKENLANGUAGES,
    TIMES,
    DEVELOPERS_TEXT,
    PROJECTS_TEXT
}