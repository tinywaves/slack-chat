import { expectType } from 'tsd';

// error
// expectType<string>(10);
// ok
expectType<string>('test');
