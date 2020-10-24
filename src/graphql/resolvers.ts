import { IResolvers } from 'apollo-server-express';
import { characters, Character, Droid } from '../characters';

export const resolvers: IResolvers = {
  Query: {
    characters: (): Array<Character | Droid> => characters
  },
  Mutation: {
    deleteCharacter: (_root: undefined, { id }: { id: string }): Character | Droid => {
      const indexToDelete = characters.findIndex(c => c.id === Number(id));
      if (indexToDelete !== -1) {
        return characters.splice(indexToDelete, 1)[0];
      }

      throw new Error('Failed to delete Star Wars character!');
    }
  }
}
