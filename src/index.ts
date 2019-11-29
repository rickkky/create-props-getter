export function createDefaultProps<T extends object>(defaultProps: T) {
  return Object.freeze(defaultProps)
}

export type Diff<T, K> = Pick<T, Exclude<keyof T, keyof K>>

export type WithDefault<
  P extends object,
  DP extends Partial<P> = Partial<P>
> = DP & Diff<P, DP>

export function createPropsGetter<DP extends Readonly<object>>(
  _defaultProps?: DP,
) {
  return function<P extends Partial<DP>>(props: P): WithDefault<P, DP> {
    return props as any
  }
}

export default createPropsGetter
