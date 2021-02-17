import React from 'react';
import { branch, renderComponent, ComponentEnhancer, compose } from 'recompose';

import Spinner from '../Spinner/Spinner';

export type SpinnerProps = {
  spinnerSize?: 'small' | 'medium' | 'large';
};

export type LoadingProps = {
  loading: boolean;
};

const spinnerWhileLoading = <TInner, TOuter extends TInner & LoadingProps>(
  loadingPredicate: (props: LoadingProps) => boolean
) =>
  branch(
    loadingPredicate,
    renderComponent((props: SpinnerProps) => (
      <Spinner size={props.spinnerSize} />
    ))
  ) as ComponentEnhancer<TInner, TOuter>;

const NoDataFallback = () => <div>no data</div>;

const fallbackIfNoData = <TInner, TOuter>(
  noDataPredicate: (props: TOuter) => boolean,
  FallbackComponent: React.FC
) =>
  branch(
    noDataPredicate,
    renderComponent(FallbackComponent)
  ) as ComponentEnhancer<TInner, TOuter>;

const withLoading = <
  TInner,
  TOuter extends TInner & LoadingProps & SpinnerProps = TInner &
    LoadingProps &
    SpinnerProps
>(
  fallbackPredicate: (props: TOuter) => boolean = () => false,
  FallbackComponent: React.FC = NoDataFallback
) => {
  return compose<TInner, TOuter>(
    spinnerWhileLoading<TInner, TOuter>((props) => props.loading),
    fallbackIfNoData<TInner, TOuter>(fallbackPredicate, FallbackComponent)
  );
};

export default withLoading;
