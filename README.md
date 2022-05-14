# prisma-remark-chakra-next

# 🚀 Javascript full-stack 🚀

https://github.com/coding-to-music/prisma-remark-chakra-next

https://prisma-remark-chakra-next.vercel.app

by Muhammad Ahmad https://github.com/MA-Ahmad

https://mahmad.me/

https://github.com/MA-Ahmad/myPortfolio

https://my-projects-dashboard.vercel.app (another project of his)

## ToDo items

- Blog works in dev but not prod
- postgresql not seeded or set up yet
- likes not set up with postgres
- Sentry on all routes
- Logrocket, FP setup
- Check SEO
- retrieve local weather, time, news, map
- CI and GitGuardian, repository deployment, tests

## Environment Values

```java
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID
  const headers = { "api-key": process.env.DEVTO_APIKEY };
    `${DEVTO_API_URL}/articles?username=${process.env.DEVTO_USERNAME}`
        .update(ipAddress + process.env.IP_ADDRESS_HASH, 'utf8')

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/prisma-remark-chakra-next.git
git push -u origin main
vercel --prod --confirm
```

## Site Config

config/site-config.js

used to set the footer icons

```java
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: "Muhammad Ahmad",
    accounts: [
      {
        url: "https://github.com/MA-Ahmad",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/muhammad_ahmaad",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/m_ahmad",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/muhammad-ahmad20",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />
      },
      {
        url: "mailto:muhammad.ahmad8043@gmail.com",
        label: "Mail ahmad",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
```

<div align="center">
  <h1><a href="https://mahmad.me" target="_blank">Mahmad.me</a></h1>
  My personal portfolio website to show my skills, experience, and articles I published
</div>

## Built with

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Highlight Blog Content**: [prismjs](https://prismjs.com/)
- **Markdown Processor**: [remark](https://remark.js.org/)
- **ORM**: [prisma](https://www.prisma.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Api's**:
  - [Dev.to](https://dev.to/api)
  - [Github](https://api.github.com)

## Overview

- `components/*` - Contains all components related to pages (blog, projects, about, etc).
  - `shared/*` - All reusable components like header, footer etc.
  - `layouts/*` - The different page layouts.
  - `theme/*` - Manage theme of site.
- `data/*` - Data that used for blog posts, projects etc.
- `lib/*` - Collection of helpful utilities or code for external services like devto api.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction).
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a Postgresql database.
- `public/*` - Static assets including audios, fonts and images.

## View and copy code of your favourite components

[TemplatesKart website](https://templateskart.com/projects/my-website)

## Running Locally

```sh
git clone https://github.com/MA-Ahmad/myPortfolio
cd myPortfolio && yarn install
yarn dev
```

The above commands will start the application on [http://localhost:3000/](http://localhost:3000)

<!-- ## Screens
### Home
![Home Screen](/public/assets/images/screens/home_page.png)
### Blog
![Skills Screen](/public/assets/images/screens/blog_page.png) -->

## Cloning / Forking

Please review the [LICENSE](LICENSE) and remove all of my personal information (projects, blog posts, images, etc)
