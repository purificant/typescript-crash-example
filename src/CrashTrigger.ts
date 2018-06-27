import Empty from './Empty';
import Mixin from './Mixin';
import Concrete from './Concrete';

export default class CrashTrigger extends Mixin(Empty) {

  public trigger(): void {
    new Concrete();
  }
}
