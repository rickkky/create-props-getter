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
import createPropsGetter from 'create-props-getter'

const defaultProps = {
  a: true,
  b: 2,
  c: '3' as '1' | '2' | '3',
}

type Props = {
  d: number
} & Partial<typeof defaultProps>

const getProps = createPropsGetter(defaultProps)

class App extends Component<Props> {
  static defaultProps = defautProps

  constructor(receivedProps: Props) {
    super(receivedProps)

    const props = getProps(this.props)

    // ...
  }

  render() {
    const props = getProps(this.props)

    // ...
  }
}
```
