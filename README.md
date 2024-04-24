# What i learnt

## SSR/CSR with Next.js

Next.js primarily renders components on the server side, which means they are generated before being sent to the client's browser. However, you can selectively opt for client-side rendering (CSR) for specific components, which renders them in the browser after the initial page load.

Benefits of SSR:

- Improved performance: Pre-rendering on the server reduces load times.
- Enhanced SEO: Search engines can better index server-rendered content.

To enable client-side rendering for specific components, you can use the use client directive.

Example:

``
'use client'`
``

This directive signals Next.js to render the specified components on the client side, providing flexibility for dynamic or non-static content.

## Pages & Routes in Next.js

Next.js simplifies page routing by providing a straightforward approach. Instead of using libraries like react-router, you organize your pages directly within the project structure.

### Nested Routes

To create a new page:

1 - Create a folder with the name of the page.
2 - Inside this folder, add a page.jsx file (or page.tsx if using TypeScript).

For example, to create a page at siteName/news/latest, you would create a file at pages/app/news/Latest/page.tsx.

Next.js allows nesting folders to achieve nested routes, making the organization of your project intuitive and scalable.

### Dynamic Routes

Dynamic routing is also supported in Next.js. You can create dynamic routes by defining paths with parameters. For instance, a route like /pageName/[id]/page.tsx enables you to fetch the [id] parameter within your .tsx file, allowing for dynamic content generation.

This approach streamlines the creation of routes and pages, enhancing the developer experience and project maintainability.


Here's a refined version of your text:

## Layout Component

In Next.js, the Layout component automatically encompasses the page.tsx and its child pages. This functionality enables you to create consistent layouts across multiple pages by encapsulating common elements like headers and footers within the Layout.tsx.

For example, by including a header and footer within the Layout.tsx, these elements will be present on any page that is nested into the layout. This promotes consistency in design and user experience throughout your application.

Using the Layout component simplifies the management of shared elements and facilitates the maintenance of a cohesive design across your website or application.

## Link Component

Next.js provides Link components that simplify the routing system in React applications.

These components streamline navigation by abstracting away the complexities of routing, making it easier to manage page transitions and URL changes.

Additionally, Next.js preloads the pages that Link components reference, enhancing performance and reducing loading times by fetching resources in advance.

To use the Link component:

 - Import it from 'next/Link'.
 - Place the Link component wherever navigation is needed within your application.


Example usage:

``
import Link from 'next/Link';

<Link href="/">
    Dashboard
</Link>
<Link href="/tickets">
    Tickets
</Link>
``

By utilizing the Link component, you can create intuitive navigation experiences while leveraging Next.js's optimized page preloading capabilities.

## Fonts in Next.js

Next.js simplifies the process of importing Google Fonts into your project.

``
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

<body className={inter.className}>
    <Navbar/>
    {children}
</body>
`` 

To use a Google Font:

- Import it using import { FontName } from "next/font/google".
- Instantiate it, specifying any desired options.
- Apply it to your components using the className provided.

The fonts imported through Next.js are self-hosted, meaning they are loaded from your domain rather than being fetched externally. This results in faster loading times for your website, enhancing the user experience.

By leveraging Next.js's font importing capabilities, you can easily incorporate custom typography into your application while optimizing performance.


Here's a refined version of your text:

## Styles

In Next.js projects, a common practice is to have a global.css file imported into your base layout style. This stylesheet typically affects all pages unless components generate styles outside of this layout.

Additionally, Next.js supports CSS modules, allowing you to scope styles to individual components. This segmentation enables better organization and encapsulation of styles, reducing the risk of conflicts and enhancing maintainability.

For projects utilizing Tailwind CSS, Next.js provides flexibility through the tailwind.config.js file. This configuration file allows for easy customization of global styles, empowering developers to tailor the design system to their specific needs with ease.

By leveraging these styling approaches within Next.js, developers can efficiently manage styles across their applications, ensuring consistency and scalability.

## Images

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

## Fetching & valdating data

In this project, I use a dummy server as a json file (_data/db.json). but the data api fetching logic reminds the same.

To keep the code clean, i created a new TicketList.tsx in the same foldrer as the tikets/page.tsx, this will handle the api request

In next js you can directly create async function on components



/// FR version

#  Ce que j'ai appris

## Rendu côté serveur (SSR) / Rendu côté client (CSR) avec Next.js

Next.js rend principalement les composants côté serveur, ce qui signifie qu'ils sont générés avant d'être envoyés au navigateur du client. Cependant, vous pouvez choisir sélectivement le rendu côté client (CSR) pour des composants spécifiques, ce qui les rend dans le navigateur après le chargement initial de la page.

Avantages du SSR :

Performances améliorées : Le pré-rendu côté serveur réduit les temps de chargement.
SEO amélioré : Les moteurs de recherche peuvent mieux indexer le contenu rendu côté serveur.
Pour activer le rendu côté client pour des composants spécifiques, vous pouvez utiliser la directive use client.

Exemple :

``
'use client'
``

Cette directive signale à Next.js de rendre les composants spécifiés côté client, offrant ainsi une flexibilité pour le contenu dynamique ou non statique.

## Pages et routes

Next.js simplifie le routage des pages en fournissant une approche simple. Au lieu d'utiliser des bibliothèques comme react-router, vous organisez vos pages directement dans la structure du projet.

### Routes imbriquées

Pour créer une nouvelle page :

- Créez un dossier avec le nom de la page.
- À l'intérieur de ce dossier, ajoutez un fichier page.jsx (ou page.tsx si vous utilisez TypeScript).

Par exemple, pour créer une page à siteName/news/latest, vous créeriez un fichier à pages/app/news/Latest/page.tsx.

Next.js permet d'imbriquer des dossiers pour obtenir des routes imbriquées, rendant l'organisation de votre projet intuitive et évolutive.

### Routes dynamiques

Le routage dynamique est également pris en charge dans Next.js. Vous pouvez créer des routes dynamiques en définissant des chemins avec des paramètres. Par exemple, une route comme /pageName/[id]/page.tsx vous permet de récupérer le paramètre [id] dans votre fichier .tsx, permettant la génération de contenu dynamique.

Cette approche simplifie la création de routes et de pages, améliorant l'expérience de développement et la maintenabilité du projet.

## Composant de mise en page "Layout"

Dans Next.js, le composant Layout englobe automatiquement le fichier page.tsx et ses pages enfants. Cette fonctionnalité vous permet de créer des mises en page cohérentes sur plusieurs pages en encapsulant des éléments communs tels que les en-têtes et les pieds de page dans le fichier Layout.tsx.

Par exemple, en incluant un en-tête et un pied de page dans Layout.tsx, ces éléments seront présents sur toutes les pages qui sont imbriquées dans la mise en page. Cela favorise la cohérence dans la conception et l'expérience utilisateur dans toute votre application.

L'utilisation du composant Layout simplifie la gestion des éléments partagés et facilite la maintenance d'une conception cohérente sur votre site Web ou application.

## Composant de lien

Next.js fournit des composants de lien qui simplifient le système de routage dans les applications React.

Ces composants simplifient la navigation en abstrayant les complexités du routage, ce qui facilite la gestion des transitions de page et des changements d'URL.

De plus, Next.js précharge les pages auxquelles les composants de lien font référence, améliorant les performances et réduisant les temps de chargement en récupérant les ressources à l'avance.

Pour utiliser le composant de lien :

- Importez-le depuis next/Link.
- Placez le composant de lien où la navigation est nécessaire dans votre application.

Exemple d'utilisation :

``
import Link from 'next/Link';

<Link href="/">
    Tableau de bord
</Link>
<Link href="/tickets">
    Tickets
</Link>``

En utilisant le composant de lien, vous pouvez créer des expériences de navigation intuitives tout en tirant parti des capacités de préchargement de page optimisées de Next.js.

## les Polices

Next.js simplifie le processus d'importation des polices Google dans votre projet.

``
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

<body className={inter.className}>
    <Navbar/>
    {children}
</body>``

Pour utiliser une police Google :

- Importez-la en utilisant import { FontName } from "next/font/google".
- Instanciez-la, en spécifiant les options souhaitées.
- Appliquez-la à vos composants en utilisant la classe fournie.

Les polices importées via Next.js sont auto-hébergées, ce qui signifie qu'elles sont chargées à partir de votre domaine plutôt que d'être récupérées de manière externe. Cela se traduit par des temps de chargement plus rapides pour votre site Web, améliorant l'expérience utilisateur.

En tirant parti des capacités d'importation de polices de Next.js, vous pouvez facilement incorporer une typographie personnalisée dans votre application tout en optimisant les performances.

## Styles

Dans les projets Next.js, une pratique courante est d'avoir un fichier global.css importé dans votre style de mise en page de base. Cette feuille de style affecte généralement toutes les pages à moins que des composants génèrent des styles en dehors de cette mise en page.

De plus, Next.js prend en charge les modules CSS, ce qui vous permet de délimiter les styles pour chaque composant individuel. Cette segmentation permet une meilleure organisation et encapsulation des styles, réduisant ainsi le risque de conflits et améliorant la maintenabilité.

Pour les projets utilisant Tailwind CSS, Next.js offre une flexibilité grâce au fichier tailwind.config.js. Ce fichier de configuration permet de personnaliser facilement les styles globaux, permettant aux développeurs d'adapter le système de conception à leurs besoins spécifiques avec facilité.

En tirant parti de ces approches de stylisme dans Next.js, les développeurs peuvent gérer efficacement les styles dans leurs applications, assurant la cohérence et la scalabilité.

## Images

Next.js fournit un composant Image avec des fonctionnalités et des props améliorés pour une intégration transparente.

``
<Image 
    src={Logo}
    alt='Logo Dojo Helpdesk'
    width={70}
    quality={100}
    placeholder='blur'
/>``

Le composant Image simplifie le processus d'affichage des images tout en offrant des fonctionnalités supplémentaires telles que la définition de la largeur, de la qualité et des options de placeholder.

Pour une liste complète des props disponibles et leurs descriptions, consultez la documentation Next.js : https://nextjs.org/docs/app/api-reference/components/image

En utilisant le composant Image dans Next.js, les développeurs peuvent gérer et optimiser efficacement les images dans leurs applications, améliorant ainsi les performances et l'expérience utilisateur.