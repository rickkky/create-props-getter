import createPropsGetter from '../src'

const defaultProps = {
  a: 1,
  b: '2',
  c: false,
}

type Props = Partial<typeof defaultProps>

const innerProps = {
  a: 2,
  b: '3',
  c: true,
} as Props

describe('blah', () => {
  it('with defaultProps', () => {
    const props = createPropsGetter(defaultProps)(innerProps)
    expect(props.a).toBe(innerProps.a)
  })

  it('with type of defaultProps', () => {
    const props = createPropsGetter<typeof defaultProps>()(innerProps)
    expect(props.b).toBe(innerProps.b)
  })
})
