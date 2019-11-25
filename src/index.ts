type ExcludeDefaults<P, DP> = Pick<P, Exclude<keyof P, keyof DP>>

export type InnerProps<
  P extends object,
  DP extends Partial<P> = Partial<P>
> = DP & ExcludeDefaults<P, DP>

export default function createPropsGetter<DP extends object>(
  _defaultProps?: DP,
) {
  return function<P extends Partial<DP>>(props: P) {
    return (props as any) as InnerProps<P, DP>
  }
}
