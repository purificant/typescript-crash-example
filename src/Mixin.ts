
// mixin pattern inspired by:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
// https://basarat.gitbooks.io/typescript/docs/types/mixins.html

type Constructor<T = {}> = new (...args: any[]) => T;

export default function Mixin<TBase extends Constructor>(Base: TBase) {

  return class extends Base {

  };

}
