interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  address: string;
}

declare let foo: Foo;
declare let bar: Bar;

// Property 'age' is missing in type 'Bar' but required in type 'Foo'.
// foo = bar;
