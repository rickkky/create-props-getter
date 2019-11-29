# create-props-getter

[![npm version](https://badge.fury.io/js/create-props-getter.svg)](https://badge.fury.io/js/create-props-getter)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provide `createPropsGetter()` function used for resolving `defaultProps` within component implementation. It's just an identity function with proper props type resolution.

## Install

```
npm i -S create-props-getter
```

## Usage

```typescript
import React, { Component } from 'react'
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
```
