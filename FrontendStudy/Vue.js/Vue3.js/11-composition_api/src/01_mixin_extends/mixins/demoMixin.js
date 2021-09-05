export const demoMixin = {
  data() {
    return {
      message: 'mixin'
    }
  },
  methods: {
    foo() {
      console.log('foo-mixin');
    },
  },
  created() {
    console.log('foo-mixin created');
  }
}