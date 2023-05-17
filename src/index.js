import Resolver from '@forge/resolver';
import { storage } from '@forge/api';

const resolver = new Resolver();

const storageKey = 'user-votes-';

const defaultVotes = {
    good: 0,
    bad: 0,
    idk: 0,
};

resolver.define('getData', async (request) => {
    const issueKey = request.context.extension.issue.key;

    const votes = await storage.get(storageKey + issueKey);

    return votes ?? defaultVotes;
});

resolver.define('setData', async (request) => {
    const issueKey = request.context.extension.issue.key;

    await storage.set(storageKey + issueKey, request.payload.data);
});

export const handler = resolver.getDefinitions();
