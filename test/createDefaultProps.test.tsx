import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createPropsGetter, createDefaultProps } from '../src'

type Props = {
  onClick: (e: React.MouseEvent) => void
  children: React.ReactNode
} & Partial<typeof defaultProps>

const defaultProps = createDefaultProps({
  color: 'green' as 'red' | 'green' | 'blue',
  type: 'button' as 'button' | 'submit',
})

const getProps = createPropsGetter(defaultProps)

class Button extends Component<Props> {
  static readonly defaultProps = defaultProps

  render() {
    const { color, type, onClick: handleClick, children } = getProps(this.props)

    return (
      <button type={type} className={color} onClick={handleClick}>
        {children}
      </button>
    )
  }
}

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button onClick={() => {}}>Click Me</Button>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
