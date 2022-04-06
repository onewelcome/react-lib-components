import * as H from 'history';

export interface LinkProps<S = H.LocationState>
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: React.ComponentType<any> | undefined;
  to: H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>);
  replace?: boolean | undefined;
  innerRef?: React.Ref<HTMLAnchorElement> | undefined;
}
