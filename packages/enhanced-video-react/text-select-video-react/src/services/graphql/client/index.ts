import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';



const apolloClient = (uri: string) => {
    const client = new ApolloClient({
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                    );
                if (networkError) console.log(`[Network error]: ${networkError}`);
            }),
            new HttpLink({
                uri,
            })
        ]),
        cache: new InMemoryCache(),
    });

    return client;
};


export default apolloClient;
