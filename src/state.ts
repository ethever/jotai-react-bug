import { atomsWithMutation } from "jotai-tanstack-query";

export const [, TestAtom] = atomsWithMutation<number, number, number, number>(
  () => ({
    mutationKey: ["test-atom"],
    mutationFn: async (a) => {
      await sleep(2000);

      return a;
    },
  })
);

const sleep = (d: number) => new Promise((resolve) => setTimeout(resolve, d));
