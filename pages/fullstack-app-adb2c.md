Setting up the IDP. Part - 3

This article is part of a series on building a full stack application.
- [Part 1: Introduction](/introduction)
- [Part 2: Hasura Cloud and data structure](/setting-up-hasura)
- [Part 3: Setting up the IDP](/setting-up-the-authentication)
- [Part 4: Configuring the frontend](/setting-up-the-frontend)
- [Part 5: Coding the frontend](/setting-up-the-backend)

# Overview
We will focus on setting up the identity provider for the application. Before we get started let's hassle out the meaning of some key terms. Authentication is the act of identifying an entity. As a result of authentication you should be able to answer who someone or something is. Authorization is the act of granting access to a resource. With authorization the application can determine what the user is allowed to do. 

Authentication is hard to get right. It's a complex topic and there are many pitfalls. It's therefore recommended to use a third party identity provider. This will allow us to focus on building the application and not worry about the security aspects of authentication.

We will be using Microsoft Entra ID as the identity provider. Microsoft Entra ID offers cloud identity management solutions for consumer-facing web and mobile applications. It's a highly available global service that scales to hundreds of millions of identities. Authentication is taken care of by Entra ID. Authorization is handled by Hasura.

Today we'll cover:
- Setting up prerequisites.
- Create Entra tenant.
- Register web application.
- Create signup/login policies.
- Configure Hasura to accept access tokens.

# Setting up prerequisites
- Register Azure account:
Start by registering for an Azure account (https://azure.microsoft.com/en-us/free/). You can login with your personal microsoft account or create a new one. Azure will require you to fill in some mandatory details include a credit card number. You will not be charged for the services we will be using in this article. Because we will only be using free services.

# Create Entra tenant
Before we can register users and applications we need a destination to store them. This can be done in a tenant. A tenant represents your organization. Whether that may be personal, small business or enterprise. Microsoft has excellent documentation on how to create a tenant (https://learn.microsoft.com/en-us/entra/fundamentals/create-new-tenant). Some advies during the tenant creation process:
- Reuse the unique tenant name you've determined before.
- Opt for tenant type Azure AD B2C.

# Register web application
Head over to Entra admin center (https://entra.microsoft.com/). Navigate to the applications -> App registrations. Click on the "New registration" button.

Provide a name for the application, for example MovieDBApp. Select the third option for supported account types (account in any identity provider or organizational directory). Select SPA for Redirect URI. Enter http://localhost:3000 as redirect url value.  This is the URI where the user will be redirected to after authentication. Click on the "Register" button to complete the application registration.

You'll be redirect to the app registration overview page. Take note of the Application (client) ID. You don't need to store it right away as you can always come back to this page to retrieve it. But we'll be needing it later on.

# Create signup/login policies
In Entra admin center navigate to the Policies -> User flows. Click on the "New user flow" button. Select flow type "Sign up and sign in". Select the recommended version. Click create. Now provide a name, for example 'signupsignin'. In step 2. Identity prodivers, select Local accounts -> Email signup. Don't enforce any MFA. For step 5. Attributes select the following attributes: Given name, Surname, Email Address, Display Name and User's Object ID You might need to click on 'Show more'). For all attributes select 'Collect attribute' aswell as 'Return claim'. Press 'Create'.

We've now configured a signup and signin policy. This configures how end users of the web application will be able to login and register. We've also configured which attributes will be returned to the application. Later on, these attributes will be used to create a user profile in the database.

# Configure Hasura to accept access tokens
Later, in our application, when the user logins (that is authenticates via Entra ID), the web application is allowed to retrieve an access token on behalf of the user. The access token is a JWT token (https://jwt.io/). It contains information about the user. We need to configure Hasura to accept tokens issued by our Entra ID tenant. Otherwise the user will not be able to access any (private) resources in the application.

Head over to your Hasura cloud project (https://cloud.hasura.io). On the projects page click the cog wheel to open the settings page. Navigate to Env vars. Click on the "New env var" button. Provide the following values.
Key: HASURA_GRAPHQL_JWT_SECRET.
Value:
{
    "claims_map": {
        "x-hasura-allowed-roles": [
            "user",
            "admin"
        ],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": {
            "path": "$.oid"
        }
    },
    "jwk_url": "https://{domain}.b2clogin.com/{domain}.onmicrosoft.com/discovery/v2.0/keys?p={user-flow-name}"
}

Replace {domain} with the primary domain of your tenant. Replace {user-flow-name} with the name of your user flow. Click on the "Add" button to save the environment variable. For more background information on how Hasura secures API access with JWT access tokens, you can read the documentation on Hasura (https://hasura.io/docs/latest/auth/authentication/jwt/).

# Conclusion

We've now successfully set up our identity provider to provide authentication the application. We've configured Hasura to accept tokens issued by our identity provider. In the next article we'll configure the frontend application to allow our users to login and fetch data from Hasura.
a Hasura Cloud project and configured the data structure for our movie application. In the next article, we'll set up the authentication provider and configure it to work with Hasura Cloud.

# Parts

- [Part 1: Introduction](/introduction)
- [Part 2: Hasura Cloud and data structure](/setting-up-hasura)
- [Part 3: Setting up the IDP](/setting-up-the-authentication)
- [Part 4: Configuring the frontend](/setting-up-the-frontend)
- [Part 5: Coding the frontend](/setting-up-the-backend)
