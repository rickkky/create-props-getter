import createPropsGetter from '../src'

const defaultProps = {
  a: 1,
  b: '2',
  c: false,
}

type Props = { d: number } & Partial<typeof defaultProps>

const innerProps = {
  a: 2,
  b: '3',
  c: true,
  d: 4,
} as Props

describe('blah', () => {
  it('with defaultProps', () => {
    const props = createPropsGetter(defaultProps)(innerProps)
    expect(props.d).toBe(innerProps.d)
  })

  it('with type of defaultProps', () => {
    const props = createPropsGetter<typeof defaultProps>()(innerProps)
    expect(props.d).toBe(innerProps.d)
  })
})
