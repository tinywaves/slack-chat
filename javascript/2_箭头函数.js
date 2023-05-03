const request = (callback) => {
  const data = ['aaa', 'bbb', 'ccc'];
  callback(data);
};

const obj = {
  names: [],
  network: function () {
    request((res) => {
      this.names = res;
    });
  }
};

obj.network();
