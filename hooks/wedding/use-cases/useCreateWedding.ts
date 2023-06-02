import * as Apollo from "@apollo/client";
import { Wedding } from "@/domain/wedding/entities/Wedding";
import {
  useCreateWeddingMutation,
  CreateWeddingMutation,
  CreateWeddingMutationVariables,
} from "@/infrastructure/graphql/apollo";

export function useCreateWedding(
  options?: Apollo.MutationHookOptions<
    CreateWeddingMutation,
    CreateWeddingMutationVariables
  >
): [
  (wedding: Wedding) => Promise<Wedding | undefined>,
  ReturnType<typeof useCreateWeddingMutation>[1]
] {
  const [createWedding, mutation] = useCreateWeddingMutation(options);
  return [
    async (wedding) => {
      const { data } = await createWedding({
        variables: {
          objects: [
            {
              name: wedding.name,
              datetime: wedding.datetime,
            },
          ],
        },
      });
      const createdWedding = data?.insertIntoweddingCollection?.records?.[0];
      if (createdWedding) {
        return Wedding.create(createdWedding);
      }
    },
    mutation,
  ];
}
