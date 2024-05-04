# Next.js Todo App - Crash Course by Net Ninja

This project is a beginner's introduction to Next.js, a React framework. It was created as part of a crash course offered by Net Ninja. Special thanks to Net Ninja for providing excellent content in the [Next.js 13 Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT).

The purpose of this project is to provide hands-on experience with Next.js and to build a simple Todo application.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [SSR/CSR with Next.js](#ssrcsr-with-nextjs)
    - [Pages & Routes](#pages--routes)
        - [Nested routed](#nested-routes)
        - [Dynamic Routes](#dynamic-routes)
    - [Layout Component](#layout-component)
    - [Link Component](#link-component)
    - [Fonts in Next.js](#fonts-in-nextjs)
    - [Styles](#styles)
    - [Image](#images)
    - [Fetching & validating data](#fetching--valdating-data)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- 

### Screenshot

![](./screenshot.jpg)

### Links


## My process

### Built with

- React.js / Next.js
- Tailwind.css
- Typescript


### What i learnt

#### SSR/CSR with Next.js

Next.js primarily renders components on the server side, which means they are generated before being sent to the client's browser. However, you can selectively opt for client-side rendering (CSR) for specific components, which renders them in the browser after the initial page load.

Benefits of SSR:

- Improved performance: Pre-rendering on the server reduces load times.
- Enhanced SEO: Search engines can better index server-rendered content.

To enable client-side rendering for specific components, you can use the use client directive.

Example:

``
'use client'
``

This directive signals Next.js to render the specified components on the client side, providing flexibility for dynamic or non-static content.

#### Pages & Routes

Next.js simplifies page routing by providing a straightforward approach. Instead of using libraries like react-router, you organize your pages directly within the project structure.

##### Nested Routes

To create a new page:

 - Create a folder with the name of the page.
 - Inside this folder, add a page.jsx file (or page.tsx if using TypeScript).

For example, to create a page at siteName/news/latest, you would create a file at pages/app/news/Latest/page.tsx.

Next.js allows nesting folders to achieve nested routes, making the organization of your project intuitive and scalable.

##### Dynamic Routes

Dynamic routing is also supported in Next.js. You can create dynamic routes by defining paths with parameters. For instance, a route like "/pageName/[id]/page.tsx" enables you to fetch the [id] parameter within your .tsx file, allowing for dynamic content generation.

This approach streamlines the creation of routes and pages, enhancing the developer experience and project maintainability.

#### Layout Component

In Next.js, the Layout component automatically encompasses the page.tsx and its child pages. This functionality enables you to create consistent layouts across multiple pages by encapsulating common elements like headers and footers within the Layout.tsx.

For example, by including a header and footer within the Layout.tsx, these elements will be present on any page that is nested into the layout. This promotes consistency in design and user experience throughout your application.

Using the Layout component simplifies the management of shared elements and facilitates the maintenance of a cohesive design across your website or application.

#### Link Component

Next.js provides Link components that simplify the routing system in React applications.

These components streamline navigation by abstracting away the complexities of routing, making it easier to manage page transitions and URL changes.

Additionally, Next.js preloads the pages that Link components reference, enhancing performance and reducing loading times by fetching resources in advance.

To use the Link component:

 - Import it from 'next/Link'.
 - Place the Link component wherever navigation is needed within your application.


Example usage:

```
import Link from 'next/Link';

<Link href="/">
    Dashboard
</Link>
<Link href="/tickets">
    Tickets
</Link>
```

By utilizing the Link component, you can create intuitive navigation experiences while leveraging Next.js's optimized page preloading capabilities.

#### Fonts in Next.js

Next.js simplifies the process of importing Google Fonts into your project.

```
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

<body className={inter.className}>
    <Navbar/>
    {children}
</body>
```

To use a Google Font:

- Import it using import { FontName } from "next/font/google".
- Instantiate it, specifying any desired options.
- Apply it to your components using the className provided.

The fonts imported through Next.js are self-hosted, meaning they are loaded from your domain rather than being fetched externally. This results in faster loading times for your website, enhancing the user experience.

By leveraging Next.js's font importing capabilities, you can easily incorporate custom typography into your application while optimizing performance.

#### Styles

In Next.js projects, a common practice is to have a global.css file imported into your base layout style. This stylesheet typically affects all pages unless components generate styles outside of this layout.

Additionally, Next.js supports CSS modules, allowing you to scope styles to individual components. This segmentation enables better organization and encapsulation of styles, reducing the risk of conflicts and enhancing maintainability.

For projects utilizing Tailwind CSS, Next.js provides flexibility through the tailwind.config.js file. This configuration file allows for easy customization of global styles, empowering developers to tailor the design system to their specific needs with ease.

By leveraging these styling approaches within Next.js, developers can efficiently manage styles across their applications, ensuring consistency and scalability.

#### Images

Next.js provides an Image component with enhanced features and props for seamless integration.

``
<Image 
    src={Logo}
    alt='Dojo Helpdesk logo'
    width={70}
    quality={100}
    placeholder='blur'
/>`
``

The Image component simplifies the process of displaying images while offering additional functionalities such as setting width, quality, and placeholder options.

For a comprehensive list of available props and their descriptions, refer to the Next.js documentation: https://nextjs.org/docs/app/api-reference/components/image

By leveraging the Image component in Next.js, developers can efficiently manage and optimize images within their applications, enhancing performance and user experience.

#### Fetching & valdating data

In this project, I use a dummy server as a json file (_data/db.json). but the data api fetching logic remains the same.

To keep the code clean, i created a new TicketList.tsx in the same foldrer as the tikets/page.tsx, this will handle the api request

In next js you can directly create async function on components.

```
async function getTickets(): Promise<Ticket[]> {
    const res = await fetch('http://localhost:4000/tickets')

    return res.json()
}

export default async function TicketsList() {
    const tickets: Ticket[] = await getTickets()

  return (
    <div>
      <>
        {tickets.map((ticket) => (
            <div key={ticket.id} className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}</p>
                <div className={`pill ${ticket.priority}`} >
                  {ticket.priority} priority
                </div>
            </div>
        ))}
      </>
    </div>
  )
}
```

If in your app you have 2 component generated with the same request, Next will detect that and will only do the request once for both components.

important note: Next js also caches the requests so that wen you go back on the site later that data will still be present, this behavior mght not be wanted.

to counter this behavior you can specify it using the revalidate prop in your API request:

```
async function getTickets(): Promise<Ticket[]> {
    const res = await fetch('http://localhost:4000/tickets',{
        next: {
        revalidate: 30
      }}
    )

    return res.json()
}
```

### Useful resources

- [Next.js 13 Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT) by Net Ninja

## Author
