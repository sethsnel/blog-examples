Building a full stack single page application with Hasura. Part - 1

# Introduction

The landscape of web application development has undergone significant transformations in recent years. With the emergence of GraphQL and JAMstack appealing alternatives to traditional full-stack solutions like MVC have been provided. While solutions like ASP.NET MVC have proven effective for building web applications, they require a multidisciplinary team to build and maintain. Additionally, every new feature requires changes in both the front end and back end.

This is precisely where this series steps in – focus on empowering frontend development with a configurable back end. Through this series, we'll explore how to leverage Hasura to build comprehensive full-stack applications, offering a holistic solution to the evolving demands of modern web development. Continue reading for a deep dive into building applications with real-time capabilities while maintaining the flexibility of the JAMstack.

# What is Hasura

Hasura serves as a GraphQL engine designed for building diverse applications. By leveraging your existing database schema, Hasura seamlessly translates it into a GraphQL interface. GraphQL is a language agnostic query language. GraphQL, being a language-agnostic query language, offers the flexibility of utilizing various programming languages to interact with a GraphQL endpoint.

Understanding GraphQL operations is key:
- Queries: Retrieve data from the GraphQL endpoint.
- Mutations: Write data to the GraphQL endpoint.
- Subscriptions: Subscribe to real-time updates, ensuring any database changes are promptly pushed to subscribed clients.
More details about GraphQL can be explored [here](https://graphql.org/).

In addition to the GraphQL interface, Hasura provides fine-grained access control over the data in your application. This means you can precisely define which users have access to specific data. These controls operate at both column and row levels. Row level checks can be used to restrict records' retrievability or editability to the record owner. Column level checks, on the other hand, typically define permissions based on user groups or roles. For instance, contributors might have permission to update a movie's publication status, while regular users do not.

Hasura offers two deployment options: managed platform and self-hosted. In this context, we'll be using Hasura Cloud. This approach allows us to focus on building our application without worrying about the underlying infrastructure. In another article we'll cover	self-hosting Hasura using the public Docker image. That approach allows Hasura to run on any platform supporting Docker. We'll be looking at running Hasura on Azure Container Instances.

To delve deeper into Hasura, explore their offerings on the [Hasura website](https://hasura.io/) or refer to their [documentation](https://hasura.io/docs/latest/index/).

# What will we build

In this series, we'll guide you through the process of creating a comprehensive full-stack application. We'll utilize technologies like React, Apollo, Hasura, and Azure B2C identity provider to build a engaging movie database platform.

Key Features:
- Movie Search: Users can easily search for movies.
- Movie Details: Access detailed information about each movie.
- Rating System: Users can rate movies based on their experience.
- User Authentication: Secure login and signup functionality will be implemented.

[[insert solution design picture]]

# Solution components
In constructing our movie database, we'll leverage the following components:

- NextJS web application
- Hasura server
- PostgreSQL database
- Identity Provider

We'll initially focus on local development while utilizing free managed cloud hosting services as needed. In a subsequent blog article, I'll delve into the details of fully hosting this solution on Azure's infrastructure. Stay tuned for an in-depth guide on integrating these components into a cloud-powered movie database.

# Prerequisites
In order to start constructing the fullstack application you going to need the following tools and basic understanding of:
- VSCode
- NodeJS
- Git
- SQL
- React
- GraphQL

# Parts

- [Part 1: Introduction](/introduction)
- [Part 2: Hasura Cloud and data structure](/setting-up-hasura)
- [Part 3: Setting up the IDP](/setting-up-the-authentication)
- [Part 4: Configuring the frontend](/setting-up-the-frontend)
- [Part 5: Coding the frontend](/setting-up-the-backend)