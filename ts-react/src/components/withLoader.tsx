import React from 'react';
import axios from 'axios';

interface ILoaderState {
  data: any;
  isLoading: boolean;
}

interface ILoaderProps {
  data: any;
}

const withLoader = <T extends ILoaderState>(
  WrappedComponent: React.ComponentType<T>,
  url: string
) => {
  return class LoaderComponent extends React.Component<
    Partial<ILoaderProps>,
    ILoaderState
  > {
    constructor(props: any) {
      super(props);
      this.state = {
        data: null,
        isLoading: false
      };
    }

    componentDidMount(): void {
      this.setState({
        isLoading: true
      });
      axios.get(url).then(result => {
        this.setState({
          data: result.data,
          isLoading: false
        });
      });
    }

    render(): React.ReactNode {
      const { data, isLoading } = this.state;

      return (
        <>
          {isLoading || !data ? (
            <p>data is loading···</p>
          ) : (
            <WrappedComponent {...(this.props as T)} data={data} />
          )}
        </>
      );
    }
  };
};

export default withLoader;
