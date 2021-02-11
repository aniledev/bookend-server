const uuid = require("uuid").v4;

const USERS = [
  {
    id: uuid(),
    name: "Elina",
    email: "elinamcgill@gmail.com",
    password: "Manifesting2021!",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Tyanna",
    email: "1anna.p@daraart.com",
    password: "JVfn;`3Q",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Aisha",
    email: "pistill.ok@coullion.com",
    password: "Jw_@9%gB",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 26,
          title: "iBATIS in Action",
          isbn: "1932394826",
          pageCount: 384,
          publishedDate: {
            $date: "2007-01-01T00:00:00.000-0800",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
          shortDescription:
            "   Gets new users going and gives experienced users in-depth coverage of advanced features.       Jeff Cunningham, The Weather Channel Interactive",
          longDescription:
            "Unlike some complex and invasive persistence solutions, iBATIS keeps O/RM clean and simple. It is an elegant persistence framework that maps classes to SQL statements and keeps the learning curve flat. The iBATIS approach makes apps easy to code, test, and deploy. You write regular SQL and iBATIS gives you standard objects for persistence and retrieval. There   s no need to change existing database schemas   iBATIS is tolerant of legacy databases (even badly designed ones).    iBATIS in Action is a comprehensive tutorial on the framework and an introduction to the iBATIS philosophy. Clinton Begin and coauthors lead you through the core features, including configuration, statements, and transactions. Because you   ll need more than the basics, it explores sophisticated topics like Dynamic SQL and data layer abstraction. You   ll also learn a useful skill: how to extend iBATIS itself. A complete, detailed example shows you how to put iBATIS to work. Topics are clearly organized and easily accessible for reference.",
          status: "PUBLISH",
          authors: ["Clinton Begin", "Brandon Goodin", "Larry Meadors"],
          categories: ["Web Development"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Joceyln",
    email: "sjmohamed1376@aeronauticalglossary.com",
    password: "zC*@6LM",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Travis",
    email: "6gb.lex.lexp@thesoapmine.com",
    password: "E}sbN+5%",
    list: {
      listId: uuid(),
      books: [
        {
          id: 32,
          title: "Ruby for Rails",
          isbn: "1932394699",
          pageCount: 532,
          publishedDate: {
            $date: "2006-05-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
          shortDescription:
            "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.",
          longDescription:
            "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You   ll gain confidence working with objects and classes and learn how to leverage Ruby   s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.    Newcomers to Ruby will find a Rails-oriented Ruby introduction that   s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.    Ruby for Rails: the Ruby guide for Rails developers!",
          status: "PUBLISH",
          authors: ["David A. Black"],
          categories: ["Web Development"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Alyssa",
    email: "gmed.amin.7798@panterrra.com",
    password: "RHCL5p?-",
    list: {
      listId: uuid(),
      books: [
        {
          id: 32,
          title: "Ruby for Rails",
          isbn: "1932394699",
          pageCount: 532,
          publishedDate: {
            $date: "2006-05-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
          shortDescription:
            "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.",
          longDescription:
            "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You   ll gain confidence working with objects and classes and learn how to leverage Ruby   s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.    Newcomers to Ruby will find a Rails-oriented Ruby introduction that   s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.    Ruby for Rails: the Ruby guide for Rails developers!",
          status: "PUBLISH",
          authors: ["David A. Black"],
          categories: ["Web Development"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 33,
          title: "The Well-Grounded Rubyist",
          isbn: "1933988657",
          pageCount: 520,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg",
          shortDescription:
            "What would appear to be the most complex topic of the book is in fact surprisingly easy to assimilate, and one realizes that the efforts of the author to gradually lead us to a sufficient knowledge of Ruby in order to tackle without pain the most difficult subjects, bears its fruit.       Eric Grimois, Developpez.com",
          longDescription:
            "Interest in Ruby has exploded. Developers discovering this elegant, dynamic language quickly learn that Ruby is a powerful alternative to traditional static languages like Java or C++. It runs in most operating environments and can handle virtually any programming task you throw at it. Ruby code is clean and elegant. Best of all, Ruby is dynamic, which means that it's designed to react at runtime to changes in an application's environment or requirements.    The Well-Grounded Rubyist takes you from interested novice to proficient practitioner. It's a beautifully written tutorial that begins with the basic steps to get your first Ruby program up and running and goes on to explore sophisticated topics like callable objects, reflection, and threading The book concentrates on the language, preparing you for any way you may choose to use Ruby. Whether the topic is simple or tough, the book's easy-to-follow examples and explanations give you immediate confidence as you build your Ruby programming skills.    The Well-Grounded Rubyist is a thoroughly revised and updated edition of the best-selling Ruby for Rails. In this new book, expert author David A. Black moves beyond Rails and presents a broader view of Ruby. It covers Ruby 1.9, and keeps the same sharp focus and clear writing that made Ruby for Rails stand out.    It's no wonder one reader commented: \"The technical depth is just right to not distract beginners, yet detailed enough for more advanced readers.\"",
          status: "PUBLISH",
          authors: ["David A. Black"],
          categories: ["Programming"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Sarai",
    email: "ywaf@thethirdbear.net",
    password: "Ge$7FR!c",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Teranna",
    email: "zmuntderiraqi5@cent23.com",
    password: "SY$$tL4M",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
  {
    id: uuid(),
    name: "Felix",
    email: "nmayturellu@ceroa.com",
    password: "!8EvhPxV",
    list: {
      listId: uuid(),
      books: [
        {
          id: 1,
          title: "Unlocking Android",
          isbn: "1933988673",
          pageCount: 416,
          publishedDate: {
            $date: "2009-04-01T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
          shortDescription:
            "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
          longDescription:
            "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
          status: "PUBLISH",
          authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
          categories: ["Open Source", "Mobile"],
        },
        {
          id: 3,
          title: "Specification by Example",
          isbn: "1617290084",
          pageCount: 0,
          publishedDate: {
            $date: "2011-06-03T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
          status: "PUBLISH",
          authors: ["Gojko Adzic"],
          categories: ["Software Engineering"],
        },
        {
          id: 8,
          title: "Flex on Java",
          isbn: "1933988797",
          pageCount: 265,
          publishedDate: {
            $date: "2010-10-15T00:00:00.000-0700",
          },
          thumbnailUrl:
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
          shortDescription:
            "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
          longDescription:
            "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
          status: "PUBLISH",
          authors: ["Bernerd Allmon", "Jeremy Anderson"],
          categories: ["Internet"],
        },
      ],
    },
  },
];

module.exports = USERS;
